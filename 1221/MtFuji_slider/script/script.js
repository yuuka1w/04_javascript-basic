//初期化
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");
//グローバル変数　スライド画像

console.log(images[images.length - 1]); //4番目の画像を取りたい
console.log(images); //初期値

//div="slide"の中の最後の画像[images.length-1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前に入れる
slide.insertBefore(images[images.length - 1], images[0]);

//button 左
const leftBtn = document.querySelector(".leftBtn");
const leftSlider = function () {
  const slideImages = document.querySelectorAll(".slide img");
  console.log(slideImages); //現在クリックをした時点でのHTML
  //左側の余分な画像を、最後に移動
  slide.appendChild(slideImages[0]);
  //入っているstyle属性を削除
  slideImages[1].removeAttribute("style");
};

leftBtn.addEventListener("click", leftSlider);
//グローバルに作りたい場合はfunctionの外に書く

// leftBtn.addEventListener("click", function () {
//   //ローカル変数の特徴　このブロックの中にしか有効ではない　スコープ
//   const slideImages = document.querySelectorAll(".slide img");
//   console.log(slideImages); //現在クリックをした時点でのHTML
//   //左側の余分な画像を、最後に移動
//   slide.appendChild(slideImages[0]);
//   //入っているstyle属性を削除
//   slideImages[1].removeAttribute("style");
// });

//button 右
const rightBtn = document.querySelector(".rightBtn");

const rightSlider = function () {
  //ローカル変数の特徴　このブロックの中にしか有効ではない　スコープ
  const slideImages = document.querySelectorAll(".slide img");
  console.log(slideImages);
  slideImages[1].removeAttribute("style");

  slideImages[0].style.marginLeft = "0";
  slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
};

rightBtn.addEventListener("click", rightSlider);

// rightBtn.addEventListener("click", function () {
//   //ローカル変数の特徴　このブロックの中にしか有効ではない　スコープ
//   const slideImages = document.querySelectorAll(".slide img");
//   console.log(slideImages);
//   slideImages[1].removeAttribute("style");

//   slideImages[0].style.marginLeft = "0";
//   slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
// });

window.setInterval(leftSlider, 2000); //2000ミリ秒
