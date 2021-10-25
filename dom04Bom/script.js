//* Bom - browser Object Model

// * window
/*
 * screenLeft screenRight
 * moveTo moveBy
 * outerWidth outerHeight innerWidth innerHeight
 * resizeTo resizeBy
 * open close
 */

window.open(
  "http://study.163.com",
  "testWindow",
  "height=500,width=500,top=50,left=50"
);

//* setTimeout
setTimeout(function () {
  console.log("asd");
}, 5000);
clearTimeout();
//* setInterval(function) clearInterval

// * onload onresize

// * window.top window.parent

// !-------------frame------------in the head

// * navigator
console.log(/win/i.test(navigator.platform));
console.log(/mac/i.test(navigator.platform));
console.log(/webkit/i.test(navigator.userAgent));
console.log(navigator.platform);
console.log(navigator.appVersion);
console.log(navigator.appName);
console.log(navigator.userAgent);

// * location
// * protocol(http://), host(google.com) ,port(:80) pathname(/fuck) , search(id=...), hash(/info)
// *                        origin
// *              href
location.assign("https://www.google.com.hk/"); // * will record this visit
location.replace("https://www.google.com.hk/"); // * wont record the visit
// location.reload(); //* true or false (from cache)

// * history

// * screen
console.log(screen.availHeight);
