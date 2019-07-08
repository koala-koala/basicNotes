// import "../less/main.less";

const loadImage = path => {
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject("图片加载失败");
    };
    image.src = path;
  }).finally(() => {
    console.log("finally...");
  });
};
loadImage("img/route.png")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("err", err);
  });

const getAllImages = () => {
  return new Promise((resolve, reject) => {
    const images = document.querySelectorAll("img");
    const imagesData = [];
    images.forEach(item => {
      imagesData.push(item);
    });
  });
};

// Promise.prototype.finally = callback => {};
