// * MouseEvent
/*
 * click
 * dbclick
 * mousedown
 * mouseup
 * mousemove
 * mouseout
 * mouseover
 * mouseenter
 * mouseleave
 */
var elem = document.getElementById("div1"),
  clientX,
  clientY,
  moving;
clientX = 5;
console.log(elem);
console.log(clientX);
function name() {
  a = 1;
  return a;
}

function test() {
  b = 3 - a;
  return b;
}

function all(fn) {
  return fn;
}
console.log(all(name()));
console.log(all(test()));

// * FocusEvent

/*
 * blur
 * focus
 *  fousin
 *  focusout
 */

//* relatedTarget

// *KeyboardEvent

/*
 *keyup
 *keydown
 */

// * CompositionEvent (多次输入)

/*
 *compositionstart
 *compositionupdate
 *compositionend
 */

// * Event (window,iframe)

/*
 *load
 *unload
 *error (rescure)
 *select
 *abort
 */

// *UIevent

/*
 *resize
 *scroll
 */
