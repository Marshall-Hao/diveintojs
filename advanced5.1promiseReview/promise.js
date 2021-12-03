/*
 * @params{function} fn
 * @params{*} value
 * @params{string} reason
 * @params{*} onFullfilled, onRejected
 * @parans{Promise} promise
 * @params{*} x
 */

// * execute promise based on the value of x
function resolvePromise(promise, x) {
  // TODO
  if (promise === x) {
    rejectPromise(promise, new TypeError("cannot be the same"));
    return;
  }
  if (isMyPromise(x)) {
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
  // * x is thenable
  if (isObject(x) || isFunction(x)) {
    let then;
    let called = false;
    try {
      then = x.then;
    } catch (error) {
      rejectPromise(promise, error);
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
            rejectPromise(promise, r);
          }
        );
      } catch (error) {
        if (called) {
          return;
        }
        called = true;
        rejectPromise(promise, error);
      }
    } else {
      fullfilledPromise(promise, x);
      return;
    }
  } else {
    fullfilledPromise(promise, x);
    return;
  }
}

function rejectPromise(promise, reason) {
  // TODO
}

function fullfilledPromise(promise, value) {
  //TODO
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  promise.status = statusMap.FULLFILLED;
  promise.value = value;
  runCbs(promise.fullfilledCbs, value);
}

function rejectedPromise(promise, reason) {
  // TODO
  if (promise.status !== statusMap.PENDING) {
    return;
  }
  promise.status = statusMap.REJECTED;
  promise.reason = reason;
  runCbs(promise.rejectedCbs, reason);
}
function runCbs(cbs, value) {
  // TODO
  cbs.forEach((cb) => {
    cb(value);
  });
}

const statusMap = {
  PENDING: "pending",
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
};
class MyPromise {
  constructor(fn) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.fullfilledCbs = [];
    this.rejectedCbs = [];
    fn(
      (value) => {
        resolvePromise(this, value);
      },
      (reason) => {
        rejectPromise(this, reason);
      }
    );
  }
  then(onFullfilled, onRejected) {
    const promise1 = this;
    const promise2 = new MyPromise(() => {});
    if (promise1.status === statusMap.FULLFILLED) {
      // * check if the onFullfilled is not a function
      if (!isFunction(onFullfilled)) {
        return promise1;
      }
      setTimeout(() => {
        try {
          const x = onFullfilled(promise1.value);
          resolvePromise(promise2, x);
        } catch (error) {
          rejectPromise(promise2, error);
        }
      }, 0);
    }

    if (promise1.status === statusMap.REJECTED) {
      // * check if the onFullfilled is not a function
      if (!isFunction(onRejected)) {
        return promise1;
      }
      setTimeout(() => {
        try {
          const x = onRejected(promise1.reason);
          rejectPromise(promise2, x);
        } catch (error) {
          rejectPromise(promise2, error);
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
        : (error) => {
            throw error;
          };
      // * fullfilledCbs 的 execution follow the
      // * status of promise1
      promise1.fullfilledCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onFullfilled(promise1.value);
            resolvePromise(promise2, x);
          } catch (error) {
            rejectPromise(promise2, erro);
          }
        }, 0);
      });
      promise1.rejectedCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(promise1.reason);
            rejectPromise(promise2, x);
          } catch (error) {
            rejectPromise(promise2, error);
          }
        }, 0);
      });
    }

    return promise2;
  }
}

function isFunction(fn) {
  // TODO
  return (
    Object.prototype.toString.call(fn).toLowerCase() === "[object function]"
  );
}

function isObject(obj) {
  return (
    Object.prototype.toString.call(obj).toLowerCase() === "[object object]"
  );
}
function isMyPromise(promise) {
  // TODO
  return promise instanceof MyPromise;
}
