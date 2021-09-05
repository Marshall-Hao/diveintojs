//! promise is a very good alternative way for callback
const promise = new Promise((resolve, reject) => {
  //! resolve is the parameter when succesfully complete the project
  //! reject vic versa
  const sum = 1 + 1;

  asdasd;
  if (sum === 3) {
    resolve("Success"); // ! inside () is the message
  } else {
    reject("Error");
  }
});

promise
  .then((message) => {
    //! then is the resolve
    console.log(message);
  })
  .catch((message) => {
    //! catch is the reject
    console.error(message);
  })
  .finally(() => {
    //! no matter what always execute
    console.log("finally");
  });

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//     }, 250);
//   }, 250);
// }, 250);

// setTimeoutPromise(250)
//   .then(() => {
//     console.log(1);
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log(2);
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log(3);
//   });

// function setTimeoutPromise(duration) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }

Promise.all([
  //! only then if all promises resolve
  Promise.resolve("1"),
  Promise.resolve("2"),
  Promise.resolve("3"),
  Promise.reject("4"),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.any([
  //! return the first resolved promise
  Promise.resolve("1"),
  Promise.resolve("2"),
  Promise.resolve("3"),
  Promise.reject("4"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([
  //! return the first one actually failed or succeed
  Promise.reject("1"),
  Promise.resolve("2"),
  Promise.resolve("3"),
  Promise.reject("4"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([
  //! only then if all promises resolve
  Promise.resolve("1"),
  Promise.resolve("2"),
  Promise.resolve("3"),
  Promise.reject("4"),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.error(error);
  });
