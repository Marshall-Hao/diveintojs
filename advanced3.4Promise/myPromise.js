/*
TODO: 
TODO:Promise rules
TODO:fullfilled
TODO:Test
*/
const statusMap = {
  PENDING: "pending",
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
};
function fullfilledPromise(promise, value) {
  // * only switch if the current state is pending
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  promise.status = statusMap.FULLFILLED;
  promise.value = value;
  runCallbacks(promise.fullfilledCallbacks, value);
}

function rejectedPromise(promise, reason) {
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  promise.status = statusMap.REJECTED;
  promise.reason = reason;
  runCallbacks(promise.rejectedCallbacks, value);
}

function isFunction(fn) {
  return (
    Object.prototype.toString.call(fn).toLocalLowerCase() ===
    "[object function]"
  );
}

function isPromise(promise) {
  return promise instanceof Promise;
}

function isObject(obj) {
  Object.prototype.toString.call(obj).toLocalLowerCase() === "[object object]";
}

function runCallbacks(cbs, value) {
  cbs.forEach((cb) => {
    cb(value);
  });
}

function resolvePromise(promise, x) {
  // TODO
  if (promise === x) {
    rejectedPromise(promise, new TypeError("cant be the same"));
    return;
  }
  if (isPromise(x)) {
    if (x.status === statusMap.FULLFILLED) {
      fullfilledPromise(promise, x.value);
      return;
    }
    if (x.status === statusMap.REJECTED) {
      rejectedPromise(promise, x.reason);
      return;
    }
    if (x.status === statusMap.PENDING) {
      x.then(
        () => {
          fullfilledPromise(promise, x.value);
        },
        () => {
          rejectedPromise(promise, x.reason);
        }
      );
      return;
    }
    return;
  }
  if (isObject(x) || isFunction(x)) {
    let then;
    let called = false;
    try {
      then = x.then;
    } catch (error) {
      rejectedPromise(promise, error);
      reason;
    }
    if (isFunction(then)) {
      try {
        then.call(
          x,
          (y) => {
            if (called) {
              return;
            }
            called = true;
            resolvePromise(promise, y);
          },
          (r) => {
            if (called) {
              return;
            }
            called = true;
            rejectedPromise(promise, r);
          }
        );
      } catch (error) {
        if (called) {
          return;
        }
        called = true;
        rejectedPromise(promise, error);
      }
      return;
    } else {
      fullfilledPromise(promise, x);
    }
  } else {
    fullfilledPromise(promise, x);
  }
}
class Promise {
  constructor(fn) {
    this.status = statusMap.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fullfilledCallbacks = []; //* then fullfilled callbacks
    this.rejectedCallbacks = []; // * then rejected callbacks
    fn(
      (value) => {
        // fullfilledPromise(this, value);
        resolvePromise(this, value);
      },
      (reason) => {
        rejectedPromise(this, reason);
      }
    );
  }

  // *  two parameter
  then(onFullfilled, onRejected) {
    const promise1 = this;
    const promise2 = new Promise(() => {});
    if (promise1.status === statusMap.FULLFILLED) {
      if (!isFunction(onFullfilled)) {
        return promise1;
      }
      // * 模拟Asychronous
      setTimeout(() => {
        try {
          const x = onFullfilled(promise1.value);
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0);
    }
    if (promise1.status === statusMap.REJECTED) {
      if (!isFunction(onRejected)) {
        return promise1;
      }
      // * 模拟Asychronous
      setTimeout(() => {
        try {
          const x = onRejected(promise1.value);
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0);
    }
    if (promise1.status === statusMap.PENDING) {
      onFullfilled = isFunction(onFullfilled)
        ? onFullfilled
        : (value) => {
            return value;
          };
      onRejected = isFunction(onRejected)
        ? onRejected
        : (err) => {
            throw err;
          };
      promise1.fullfilledCallbacks.push(() => {
        () => {
          setTimeout(() => {
            try {
              const x = onFullfilled(promise1.value);
              resolvePromise(promise2, x);
            } catch (error) {
              rejectedPromise(promise2, error);
            }
          }, 0);
        };
      });
      promise1.rejectedCallbacks.push(() => {
        () => {
          setTimeout(() => {
            try {
              const x = onRejected(promise1.reason);
              resolvePromise(promise2, x);
            } catch (error) {
              rejectedPromise(promise2, error);
            }
          }, 0);
        };
      });
    }
    return promise2;
  }
}
