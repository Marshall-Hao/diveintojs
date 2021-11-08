// * debounce
const inputdom = document.getElementById("input_id");
const btn = document.getElementById("sendAxios");
inputdom.oninput = debounce(function (e) {
  console.log(e.target.value);
}, 500);
btn.onclick = throttle(function (e) {
  console.log(e.target);
}, 500);
function debounce(fn, delay) {
  let _timer = null;
  return function () {
    clearTimeout(_timer);
    _timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

// * Throttle
function throttle(fn, delay) {
  let _valid = true;
  return function () {
    if (_valid) {
      setTimeout(() => {
        fn.apply(this, arguments);
        _valid = true;
      }, delay);
      _valid = false;
    } else {
      return false;
    }
  };
}
