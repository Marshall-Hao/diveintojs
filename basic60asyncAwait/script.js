const getValueWithDelay = (value, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const getValueWithDelayError = (value, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value);
    }, delay);
  });
};

const getValue = async () => {
  try {
    const msg1 = await getValueWithDelay(11, 250);
    console.log(msg1);
    const msg2 = await getValueWithDelay(12, 250);
    console.log(msg2);
    const msg3 = await getValueWithDelayError(13, 250);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finally");
  }
};

getValue();
// const doStuff = async () => {
//   try {
//     const msg = await setTimeoutPromise(250);
//     console.log(msg);
//     const msg2 = await setTimeoutPromise(250);
//     console.log(msg2);
//   } catch (error) {
//     console.error(error);
//   }
// };

// doStuff();
for (let i = 0; i < 10; i++) {
  //! inside a loop better use then, cuz all iteration will be parallel
  getValueWithDelay(i, 250).then((value) => {
    console.log(value);
  });
}
