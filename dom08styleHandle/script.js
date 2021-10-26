// * elem.style, elem.style.cssText .setAttribute

// * window.getComputedStyle (可以得到复合的数据，包括class里的，但不能赋值)

// * class

/*
 * .className
 * 动态替换头部样式表 加style与link tag
 */

function insertCss(css) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  //   style.appendChild(document.createTextNode(css));
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}

insertCss("body {background:grey}");

function linkCss(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
}

linkCss("style.css");
