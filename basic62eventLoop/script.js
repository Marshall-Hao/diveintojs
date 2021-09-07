const test = () => {
  //! js always running main tasks first
  console.log("hi 1");
  console.log("hi 2");
  setTimeout(() => console.log("hi 4"), 0); //! then run the seperated task
  new Promise((resolve, reject) => {
    //! promise can be inserted into main thread, get queued up immedaiately
    resolve("Hi promise");
  }).then((msg) => {
    console.log(msg);
  });
  setTimeout(() => console.log("hi 3"), 10); //! seperated thread
  console.log("hi 5");
};

test();
console.log("hi 6");
