let mousemoveTimer;
document.body.addEventListener("mousemove", (evt) => {
  clearTimeout(mousemoveTimer);
  mousemoveTimer = setTimeout(() => {
    getPointedWord(evt);
  }, 300);
});

function getPointedWord(evt) {
  let range = document.caretRangeFromPoint(evt.clientX, evt.clientY);
  if (!range) {
    return true;
  }
  let so = range.startOffset,
    eo = range.endOffset,
    phrase = "";
  if (range.startContainer.data) {
    while (so >= 1) {
      range.setStart(range.startContainer, --so);
      phrase = range.toString();
      if (!isAlpha(phrase.charAt(0))) {
        range.setStart(range.startContainer, so + 1);
        break;
      }
    }
  }
  if (range.endContainer.data) {
    while (eo < range.endContainer.data.length) {
      range.setEnd(range.endContainer, ++eo);
      phrase = range.toString();
      if (!isAlpha(phrase.charAt(phrase.length - 1))) {
        range.setEnd(range.endContainer, eo - 1);
        break;
      }
    }
  }
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function isAlpha(str) {
  str = str.toLowerCase().replace(/ (- |')/g, "");
  return /^[a-z]*$/g.test(str);
}
