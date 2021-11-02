// * blob - binary large object
const aFileParts = ['<a id="a">heyyy</a>'];
const aBlob = new Blob(aFileParts, { type: "text/html" }); // * array ,exact format

const newBlob = aBlob.slice(0, 5, "text/html"); // ! slice big file into small pieces easy for uploading
console.log(aBlob);
console.log(newBlob);

// !------------URL--------------

const fileInput = document.getElementById("file");
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  console.log(files);
  if (files.length > 3) {
    alert("max 3 items please");
    fileInput.value = "";
    return;
  }
  const exceedSizeFiles = [].slice.call(files).filter((file) => {
    // ! [].slice works for array,but files are FileList prototype ,use call() to convert it, same as [...files] spread operator
    return file.size > 10 * 1024;
  });
  if (exceedSizeFiles.length) {
    alert("max size exceed");
  }
  //   readFile(e.target.files[0]);
  showImage(e.target.files[0]);
  showImageSecond(e.target.files[0]);
});

// * 在网页显示文件
function readFile(file) {
  const fr = new FileReader();
  fr.readAsText(file);
  fr.onload = (e) => {
    // * onload 触发事件 也可使用 load eventlistner， ‘click’ 和 onclick 区别
    console.log(e);
    document.querySelector("#text").innerHTML = e.target.result;
  };
}

// * 下载
let textFile = null;
const makeTextFileUrl = function (text) {
  const data = new Blob([text], { type: "text/plain" });
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile); // !清楚url缓存
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
};

const create = document.querySelector("#create");
const textbox = document.querySelector("#textbox");
create.addEventListener(
  "click",
  () => {
    const fileUrl = makeTextFileUrl(textbox.value);
    const link = document.querySelector("#downloadlink");
    link.href = fileUrl;
    link.click();
  },
  false
);

// * 浏览图片
let imgUrl = null;
const makeImgAsUrl = (img) => {
  if (imgUrl !== null) {
    window.URL.revokeObjectURL(img);
  }
  imgUrl = window.URL.createObjectURL(img);
  return imgUrl;
};

function showImageSecond(image) {
  const img = new Image();
  img.src = makeImgAsUrl(image);
  document.body.appendChild(img);
}
function showImage(image) {
  const fr = new FileReader();
  fr.readAsDataURL(image); // * 得到base64字符串
  fr.addEventListener("load", (e) => {
    console.log(e.target.result);
    const img = new Image();
    img.src = e.target.result;
    console.log(img);
    document.body.appendChild(img);
  });
}
