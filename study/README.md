# 2023 年後期「JavaScript 基礎」授業課題

```js

```

### [1005] はじめの一歩

### [1005] GitHub リポジトリ作成

### [1012] 文字列の連結、変数、定数、複合代入演算子

### [1019] document オブジェクトと DOM

### [1026] その他の document の取得と挿入、イベント

### [1102] classList、イベント

### [1109] if 文で条件分岐、左右

### [1116] クリックイベント

### [1130]

### [1207]スライドショウ

### [1214] コールバック関数、アロー関数

### [1221]　富士山スライドショー

### [0111]フォームとオブジェクト

### [0118]オブジェクトの配列

### [0125]json

### [0201]

# 0201

```js
const content = document.querySelector(".contents");

for (let i = 0; i < chiikawas.length; i++) {
  // console.log(chiikawas[i]);

  const dlElm = document.createElement("dl");

  // for (let key in chiikawas[i]) {
  const dtElm = `<dt><span>第${chiikawas[i]["story"]}話</span>${chiikawas[i]["title"]}</dt> `;

  //テンプレートリテラル
  dlElm.innerHTML = dtElm;
  content.appendChild(dlElm);
  const ddElm = document.createElement("dd");
  const a = document.createElement("a");
  for (let key in chiikawas[i]) {
    console.log(chiikawas[i]["id"]);
    a.setAttribute(
      "href",
      "https://www.youtube.com/watch?v=" + chiikawas[i]["id"]
    );
    a.innerHTML = `<img src="./images/${chiikawas[i]["image"]}">`;

    ddElm.appendChild(a);
    dlElm.appendChild(ddElm);
  }
}
```

# 0125

```js
const npb2023 = [
  { Team: "阪神タイガース", Wins: 85, Loss: 53, Ties: 5, Rate: 0.616 },
  { Team: "広島東洋カープ", Wins: 74, Loss: 65, Ties: 4, Rate: 0.532 },
  {
    Team: "横浜DeNAベイスターズ",
    Wins: 74,
    Loss: 66,
    Ties: 3,
    Rate: 0.529,
  },
  { Team: "読売ジャイアンツ", Wins: 71, Loss: 70, Ties: 2, Rate: 0.504 },
  {
    Team: "東京ヤクルトスワローズ",
    Wins: 57,
    Loss: 83,
    Ties: 3,
    Rate: 0.407,
  },
  { Team: "中日ドラゴンズ", Wins: 56, Loss: 82, Ties: 5, Rate: 0.406 },
];

//下記の JSON const npb を for…of 文、for…in 文を使って、すべての要素を console に表示させてください。
//配列を処理

//[]配列リテラル、{}オブジェクトリテラル、""文字列リテラル、``テンプレートリテラル
for (let team of npb2023) {
  console.log(team); //要素=各チームの成績
  for (let key in team) {
    console.log(team[key]);
  }
}
```

# 0118

```js
const tableElm = document.querySelector(".table_gafam");

for (let co of corporation) {
  const trElm = document.createElement("tr");
  console.log(co);
  tableElm.appendChild(trElm);
  for (let key in co) {
    console.log(key);
    console.log(co[key]);
    const tdElm = document.createElement("td");
    //危険：オブジェクトは順番を担保しない
    tdElm.innerHTML = co[key];
    trElm.appendChild(tdElm);
  }
  tableElm.appendChild(trElm);
}

//   for (let i = 0; i < corporation.length; i++) {}

//   練習4-1 p183
const array = [];
array.push(1);
array.push(2);
array.push(3);
for (let num of array) {
  console.log(num);
}
```

# 0111

## フォーム

```js
const Btn = document.querySelector("#btn");
Btn.addEventListener("click", function () {
  const namedata = document.querySelector("#name").value;
  if (namedata === "") {
    alert("名前を入力してください");
  } else {
    alert("あなたのお名前:" + namedata);
  }
});
```

## オブジェクト

```js
const person = {
  name: "",
  age: 0,
  information: function () {
    return "名前:" + this.name + "\n 年齢:" + this.age;
  },
};

person.name = "山田太郎";
person.age = 18;

//element.textContent=なになに

//console.log(person.name, person.age);

console.log(person.information());

const myCar_list = {}; //空のオブジェクトを作成
myCar_list.make = "Ford";
myCar_list.model = "Mustang";
myCar_list.year = 1969;
console.log(myCar_list);
//{make: 'Ford', model: 'Mustang', year: 1969}

//modelを取得
console.log(myCar_list.model);

//yearを取得
console.log(myCar_list.year);

myCar_list["2021"] = "51年"; //ブランケット認定

console.log(myCar_list);
//オブジェクトは順番を担保しない
console.log(myCar_list["2021"]);

const dict = {
  apple: "りんご",
  banana: "ばなな",
  orange: "オレンジ",
};

//新規登録
dict.grape = "ぶどう";

//削除
delete dict.orange;
console.log(dict);
//{apple:'林檎',banana:'バナナ',grape:'ぶどう'}

//再代入
dict.apple = "りんご";
console.log(dict);
//{apple:'りんご',banana:'バナナ',grape:'ぶどう'}
```

# 1221

### 富士山スライドショー

```js
//初期化
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");
//グローバル変数　スライド画像

console.log(images[images.length - 1]); //4 番目の画像を取りたい
console.log(images); //初期値

//div="slide"の中の最後の画像[images.length-1]を最初の画像[0]の前
//insertBefore は appendChild の逆、前に入れる
slide.insertBefore(images[images.length - 1], images[0]);

//button 左
const leftBtn = document.querySelector(".leftBtn");
const leftSlider = function () {
  const slideImages = document.querySelectorAll(".slide img");
  console.log(slideImages); //現在クリックをした時点での HTML
  //左側の余分な画像を、最後に移動
  slide.appendChild(slideImages[0]);
  //入っている style 属性を削除
  slideImages[1].removeAttribute("style");
};

leftBtn.addEventListener("click", leftSlider);
//グローバルに作りたい場合は function の外に書く

// leftBtn.addEventListener("click", function () {
// //ローカル変数の特徴　このブロックの中にしか有効ではない　スコープ
// const slideImages = document.querySelectorAll(".slide img");
// console.log(slideImages); //現在クリックをした時点での HTML
// //左側の余分な画像を、最後に移動
// slide.appendChild(slideImages[0]);
// //入っている style 属性を削除
// slideImages[1].removeAttribute("style");
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
// //ローカル変数の特徴　このブロックの中にしか有効ではない　スコープ
// const slideImages = document.querySelectorAll(".slide img");
// console.log(slideImages);
// slideImages[1].removeAttribute("style");

// slideImages[0].style.marginLeft = "0";
// slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
// });

window.setInterval(leftSlider, 2000); //2000 ミリ秒
```

# 1214

```js
const dog = function () {
  return "わんわん";
};
//関数の定義
function dog2() {
  return "バウワウ";
}

//関数dogを実行=()があるから
console.log(dog()); //わんわん
console.log(dog2()); //バウワウ

//アロー関数の関数式　※アロー関数は関数式で使う
const cat = () => {
  return "にゃーにゃー";
};

//鳴き方を決めたい　アロー関数+引数
const animal = (voice) => {
  return voice;
};

//関数animalの実行
console.log(animal("みゃあみゃあ"));

//関数catの実行=()があるから
console.log(cat());

//thisは予約語なので変数名・関数名に使えない
const thisElm = document.querySelector("p");
console.log(thisElm);

thisElm.addEventListener("click", (e) => {
  console.log("クリック");
  // console.log(this.textContent);
  console.log(e.target.innerText);
});
```

```js
const concatenateSpace = function (lastName, firstName) {
  return lastName + " " + firstName;
};

//関数式2
const useConcatenate = function (name, func) {
  let concatName = func(name[0], name[1]);
  console.log("結合結果：" + concatName);
};

let nameParam = ["岩本", "悠花"]; //配列

//関数式2の実行(引数1=配列,引数2=関数の名前)
useConcatenate(nameParam, concatenateSpace);

//結合結果：中田 雄二

//コールバック関数基本
//関数式1
const testFunc = function (func) {
  //funcには関数式2
  //関数の実行後すぐに表示
  console.log("testFuncが実行されました");
  //2秒後
  setTimeout(function () {
    func();
  }, 2000);
};

//関数式2
const callback = function () {
  console.log("callbackが実行されました");
  //コンソールにメッセージを表示する関数
};

//関数式1を実行
//callbackは関数式2の関数名
testFunc(callback);
```

# 1207

```js
//引数1と引数2を足す関数の定義
const addition = function (a, b) {
  const c = a + b;
  console.log(c); //出力を関数が決める
  //addition という名前の関数を定義
  //引数 a と b を受け取り、それらを足し算してその結果をコンソールに出力
};

//関数の実行
addition(10, 11);
//addition 関数を引数 10 と 11 で呼び出す
//コンソールに21と表示される
addition(30, "6");
//JavaScriptでは型変換が行われ、文字列 "6" が数値 6 に変換されてから足し算が行われる
//結果306と表示される

//戻り値のある関数の定義
const addition2 = function (a, b) {
  const c = a * b;
  return c; //戻り値

  //addition2 という名前の関数を定義
  //引数 a と b を受け取り、それらを掛け算してその結果を戻り値として返す
};

//関数の実行
const result = addition2(5, 5);
//addition2 関数を引数 5 と 5 で呼び出し、その戻り値を変数 result に代入
//5 * 5 の結果の25が表示
console.log(result); //コンソールに25と表示される
```

```js
const cake = 450;

const takeOutBtn = document.querySelector(".takeOut");
//HTML内でクラスが "takeOut" である要素を取得し、takeOutBtn に格納
console.log(takeOutBtn);
const eatIn = document.querySelector(".eatIn");
console.log(eatIn);
//HTML内でクラスが "eatIn" である要素を取得し、eatIn に格納
const result = document.querySelector(".taxIn");
//HTML内でクラスが "taxIn" である要素を取得し、result に格納
console.log(result);

//関数の定義
const calculation = function (cake, tax) {
  const result = cake + cake * tax; //商品＋消費税
  return result; //戻り値

  //calculation という名前の関数を定義
  //引数として商品の価格 cake と消費税率 tax を受け取り、商品価格に対する消費税を計算して結果を戻り値として返す
  //クリックされると calculation 関数が呼び出され、ケーキの価格にテイクアウトの消費税率（ここでは 0.08）をかけた結果が result 要素に表示
};

takeOutBtn.addEventListener("click", function () {
  //関数の実行
  const price = calculation(cake, 0.08);
  result.innerHTML = price;
});

eatIn.addEventListener("click", function () {
  //関数の実行
  const price = calculation(cake, 0.1);
  result.innerHTML = price;

  //クリックされると calculation 関数が呼び出される
  //ケーキの価格に店内飲食の消費税率（ここでは 0.1）をかけた結果が result 要素に表示
});
```

# 1130

```js
const dogBtn = document.querySelector("li");
//HTML内の最初の <li> 要素を取得して、変数 dogBtn に格納
const catBtn = document.querySelector("li:nth-child(2)");
//HTML内の2番目の <li> 要素（:nth-child(2)は2番目の子要素を指定）を取得して、変数 catBtn に格納
const resultArea = document.querySelector("result");
//HTML内の <result> 要素を取得して、変数 resultArea に格納
console.log(dogBtn, catBtn);

//関数式

console.log("あなたは、◯派です。");
const animalCheck = function (animal) {
  resultArea.textContent = "あなたは" + animal + "派です";
  //animalCheck という名前の関数式を定義します。この関数は引数 animal を受け取り、resultArea のテキストコンテンツを設定
};

dogBtn.addEventListener("click", function () {
  console.dir(this);
  animalCheck(this.textContent);
  //犬のボタン (dogBtn) がクリックされたときのイベントリスナーを設定
  //ボタンがクリックされると、this.textContent が animalCheck 関数に渡され、resultArea の内容が更新
});

catBtn.addEventListener("click", function () {
  console.dir(this);
  animalCheck(this.textContent);
});
```

# 1116

```js
const word = ["Java", "JavaScript", "Ruby", "Go", "PHP"];

//buttonを変数resultBtnに、p class="result"を変数resultAreaに読み込みます。
const resultBtn = document.querySelector("button");
//HTML内の <button> 要素を取得して変数 resultBtn に格納
const resultArea = document.querySelector("p.result");
//HTML内の <p> 要素でクラスが "result" の要素を取得して変数 resultArea に格納

resultBtn.addEventListener("click", function () {
  //resultBtnにクリックイベントを設定し、const numを移動します。
  const num = Math.round(Math.random() * 4);
  console.log(word[num]);

  if (num === 1) {
    resultArea.innerText = "JavaScript";
  } else {
    resultArea.innerText = "違う言語です";
  }
  //ランダムに選ばれた言語が "JavaScript" なら、resultArea のテキストを "JavaScript" に設定。それ以外の場合は "違う言語です" に設定
});
```

# 1109

### ー if 文による条件分岐

### ー比較演算子と bool 型

### ー switch 文による条件分岐

## invaders

### 各モンスターをクリックすると消えるプログラム

```html
<section>
  <div class="enemy">
    <img src="images/enemy001.png" alt="チョコソフトの妖精" />
  </div>
  <div class="enemy">
    <img src="images/enemy002.png" alt="Tさん 魔人態" />
  </div>
  <div class="enemy">
    <img
      src="images/enemy003.png"
      alt="謎の美女を率いられて故郷の村を焼きにきた謎の集団"
    />
  </div>
  <div class="enemy">
    <img
      src="images/enemy004.png"
      alt="謎の集団を率いて故郷の村を焼きにきた謎の美女"
    />
  </div>
  <div class="satan">
    <img src="images/enemy005.png" alt="ロクテンマオウ" />
  </div>
</section>
```

```html
<div class="buttons">
  <button class="enemyBtn">チョコソフトの妖精</button>
  <button class="enemyBtn">Tさん 魔人熊</button>
  <button class="enemyBtn">謎の軍団</button>
  <button class="enemyBtn">謎の美女</button>
  <button class="satansBtn">ロクテンマオウ</button>
</div>
```

```js
const satan = document.querySelector(".satan img");
//HTML文書内でクラスが "satan" に設定された img 要素を取得
console.log(satan);

const satanBtn = document.querySelector(".satansBtn");
//HTML文書内でクラスが "satansBtn" に設定されたボタン要素を取得
console.log(satanBtn);

satanBtn.addEventListener("click", function () {
  satan.classList.toggle("hide");
});
//satansBtn" ボタンがクリックされたときに実行される関数を設定
//satan に対してクラス "hide" をトグルすることで、画像の表示/非表示を切り替え

// B.その他の4体にfor文1つで、イベント登録を完成させる

const enemyImg = document.querySelectorAll(".enemy img");
//HTML文書内でクラスが "enemy" に設定された img 要素を全て取得し、NodeListとして格納
console.log(enemyImg);

const attackBtn = document.querySelectorAll(".enemyBtn");
//HTML文書内でクラスが "enemyBtn" に設定されたボタン要素を全て取得し、NodeListとして格納
console.log(attackBtn);

for (let i = 0; i < attackBtn.length; i++) {
  //for文を使用して、attackBtn の各要素に対してクリックイベントを設定
  attackBtn[i].addEventListener("click", function () {
    enemyImg[i].classList.toggle("hide");
  });
  //各ボタンがクリックされたときに実行される関数を設定
  //変数iを使用して対応する enemyImg の画像に対してクラス "hide" をトグルすることで、画像の表示/非表示を切り替え
}
```

## MtFuji

```html
<div class="buttons">
  <button type="button" class="image-fuji">富士山１</button>
  <button type="button" class="image-fuji">富士山2</button>
  <button type="button" class="image-fuji">富士山3</button>
  <button type="button" class="pre">前</button>
  <button type="button" class="next">次</button>
</div>
```

```js
const imageArea = document.querySelector("#mt-fuji");
//imageArea: #mt-fuji というIDを持つ画像要素を取得
const btns = document.querySelectorAll(".image-fuji");
//btns: .image-fuji というクラスを持つボタン要素全体を取得
const preBtn = document.querySelector(".pre");
//preBtn: .pre というクラスを持つ前のボタン要素を取得
const nextBtn = document.querySelector(".next");
//nextBtn: .next というクラスを持つ次のボタン要素を取得

let count = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    imageArea.setAttribute("src", `images/${fujiImg_list[i]}`);
    count = i;
  });
}

//次の画像を表示
nextBtn.addEventListener("click", function () {
  count++;
  imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
});

//前の画像を表示
preBtn.addEventListener("click", function () {
  count--;
  imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
});
```

# 1102

## lesson2

### 「赤くなる」ボタンと「大きくなる」ボタンをクリックすると classList.toggle を使って適切な class が反映されるようにし、一度だけ button の文字を「もとに戻す」にする

```js
//element.setAttribute("class","??")
const text = document.querySelector("p span");
//HTML文書内で最初に見つかる <p> 要素内の <span> 要素を取得 これに対してクラスがトグルされる

//赤くなるイベント
const redBtn = document.querySelector(".redder");
//HTML文書内でクラスが "redder" に設定されたボタン要素を取得
redBtn.addEventListener("click", function () {
  //"redder" ボタンがクリックされたときに実行される関数を設定

  text.classList.toggle("redText");
  //text 要素のクラスリストから "redText" クラスをトグルする
  //クラスが存在する場合は削除し、存在しない場合は追加

  redBtn.textContent = "もとに戻す";
  // redBtn.innerText = "もとに戻す";
  //redder" ボタンのテキストを "もとに戻す" に変更
});

//大きくなるイベント
const bigBtn = document.querySelector(".bigger");
//HTML文書内でクラスが "bigger" に設定されたボタン要素を取得

bigBtn.addEventListener("click", function () {
  //bigger" ボタンがクリックされたときに実行される関数を設定

  text.classList.toggle("bigText");
  //text 要素のクラスリストから "bigText" クラスをトグル

  bigBtn.textContent = "もとに戻す";
  // bigBtn.innerText = "もとに戻す";
  //"bigger" ボタンのテキストを "もとに戻す" に変更

  //if文でもとに戻すから大きくなるに戻す
  if (text.classList.contains("bigText")) {
    bigBtn.innerText = "もとに戻す";
  } else {
    bigBtn.innerText = "大きくなる";
  }
  //もし text 要素が "bigText" クラスを持っていれば、"もとに戻す" を表示し、そうでなければ "大きくなる" を表示
});
```

# 1026

### ー addEventListener

### ー要素の属性値を取得・設定(getAttribute, setAttribute)

### ー className プロパティ

### ー classList プロパティ

## lesson

### 赤色のボタンを押すと文字が赤色に変更されるようにする

```html
<p class="text"><span>色の名前</span>色です。</p>

<button class="red">赤色</button>
```

```js
const redBtn = document.querySelector(".red");
//HTML文書内でクラスが "red" に設定されたボタン要素を取得

const text = document.querySelector(".text");
const textSpan = document.querySelector(".text span");
//HTML文書内で "text" クラス内にある span 要素を取得しています。

redBtn.addEventListener("click", function () {
  //ボタンがクリックされたときに実行される関数を設定
  console.dir(textSpan);
  text.style.color = "red";
  //text 要素の文字の色を赤に変更

  textSpan.innerText = "赤";
  //textSpan 要素のテキスト内容を "赤" に変更
});
```

## lesson2

### 「赤くなる」ボタンを押すと赤くなり、「大きくなる」ボタンを押すと大きくなるボタン

```html
<p>
  <span>JavaScript</span
  >（ジャバスクリプト）とは、プログラミング言語のひとつである。
</p>
<button class="redder">赤くなる</button>
<button class="bigger">大きくなる</button>
```

```js
//element.setAttribute("class","??")
const text = document.querySelector("p span");
//HTML文書内で最初に見つかる <p> 要素内の <span> 要素を取得

//赤くなるイベント
const redBtn = document.querySelector(".redder");
//HTML文書内でクラスが "redder" に設定されたボタン要素を取得

redBtn.addEventListener("click", function () {
  //redder" ボタンがクリックされたときに実行される関数を設定

  text.setAttribute("class", "redText");
  //text 要素の class 属性を "redText" に設定し、text 要素に "redText" というクラスが追加される
});
//大きくなるイベント
const bigBtn = document.querySelector(".bigger");
bigBtn.addEventListener("click", function () {
  text.setAttribute("class", "bigText");
});
```

## lesson

### カウンター変数を使って背景色が color_array の要素に反映し、5 色が順番に変わるようにする

```js
const body_element = document.querySelector("body");
//文書内で最初に見つかるbody要素を取得

console.log(body_element);
let counter = 0;
//クリック関数をカウントするための変数counterを初期化

const color_array = ["pink", "blue", "orange", "green", "tomato"];
//背景色として使用する色の配列 color_array を宣言

body_element.addEventListener("click", function () {
  //body_element に対してクリックイベントが発生した場合に実行される関数を設定
  // counter = counter + 1;
  // counter += 1; //複合代入演算子
  counter++;
  //クリックごとに counter をインクリメント
  console.log(counter);
  body_element.style.backgroundColor = color_array[counter - 1];
  //color_array 配列から選択された色を body_element の背景色として設定
  //counter の値を使用して配列から対応する色を選択します。配列は0から始まるため、counter - 1 で正しいインデックスにアクセス
});
```

インクリメントとは今の数字に 1 を足すこと

# 1019

### ー document オブジェクトと DOM

### ーコレクション

### ー条件分岐・繰り返し処理

## window オブジェクトを表示

### window オブジェクトを表示する

トライデントコンピュータ専門学校の Web サイトを開き、Devtools の console に

```js
console.log(window); //ブラウザのコンソールにwindowというオブジェクトを出力するためのコード
//console.log()は括弧内の値をコンソールに表示するJavaScriptのメソッド
```

と入力する

```js
console.log(window.document.title); //window.document内のtitleプロパティを取得できる
```

## 要素を取得する

```js
document.querySelector("h1"); //h1の要素が取得される
```

```js
document.querySelectorAll("p"); //ページ内のp要素全てが選択される
```

querySelector は条件に当てはまった一番最初の要素が返される
querySelectorAll は一致する全ての要素が返される

## sample7-7

```html
<ul id="fruitslist" class="listbox_list">
  <li>りんご</li>
  <li>みかん</li>
  <li>バナナ</li>
</ul>
```

```js
//メロンを加えるためul要素を取得する
const element = document.querySelector("ul");
console.log(element);

//selectorはCSSのセレクターだから
const element2 = document.querySelector("#fruitslist"); //document.querySelectorメソッドを使用してHTML文書内で特定の要素を選択する
//#fruitslistはCSSセレクターでid属性がfruitslistである要素を選択する
//選択した要素は変数element2に格納される
console.log(element2);
//変数element2に格納された要素をコンソールに出力する

//classもいける？
const element3 = document.querySelector(".listbox_list");
console.log(element3);

//新しい要素を作る
const lilast = document.createElement("li"); //新しい<li>要素を作成し、その要素をlilastへ格納
console.dir(lilast); //dirに変更。オブジェクトの中身が見れる
lilast.textContent = "メロン";
console.dir(lilast);
//console.dirメソッドは指定されたJavaScriptオブジェクトのプロパティをすべて表示させることができる

//リストの最後に追加する。
//上で作った変数lilastの<li>メロン</li>を変数element内の<ul></ul>に追加する
element.appendChild(lilast);

//いちごを追加したい
const lilast2 = document.createElement("li");
lilast2.textContent = "いちご";
element.appendChild(lilast2);
```

## lesson.html

## ３分待って出来上がりを追加する

```html
<dl class="recipe">
  <dt>カップヌードルの作り方</dt>
  <dd>フタを途中まで開ける</dd>
  <dd>お湯を線まで入れてフタをする</dd>
</dl>
```

```js
const element = document.querySelector(".recipe");
//querySelectorは指定されたCSSセレクタに一致する最初の要素を検索するメソッド
console.log(element);
//dl要素を取得する
//constは変数を宣言する
//const 変数名＝変数に入れる値;

const ddlast = document.createElement("dd");
//createElementは指定された要素名を持つ新しいHTML要素を作成する

ddlast.innerText = "3分待ってできあがり";
//dd要素にテキストを入れる

element.appendChild(ddlast);
//ddの最後に挿入する
```

## i の動きを使って配列の要素を取得する

```js
const name_list = ["大橋", "田中", "渡辺", "山本", "本田"];
//namelistを作成している
console.log(name_list);

console.log(name_list[3]);
//配列の三番目の要素”山本”をconsoleに出力
for (let i = 0; i < name_list.length; i++) {
  //ループの開始　変数iを0からはじめ、name_list 配列の要素数より小さい場合までループする
  console.log(i);
  console.log(name_list[i]);
}
```

# 1012

### ーリテラルと演算子

## 文字列の計算

```js
//文字列の連結
console.log("ABC" + "DEF"); //文字列＋文字列
console.log("円周率は" + 3.14 + "です");
console.log("計算結果：" + 123 + 456); //文字列+数値の計算
console.log(123 + 456 + "となりました。"); //数値の計算+文字列
console.log("計算結果：" + (123 + 456));
console.log("2" - 1); //文字列ー数値
console.log("2" * 3); //文字列×数値
console.log("2" / 4); //文字列÷数値
```

## 変数の宣言

```js
//変数の宣言・代入
let a; //変数の宣言　//ES6=2015
a = 10; //値の代入(数値型)
console.log(a);

a = "Hello"; //値の再代入(文字列型)
console.log(a);

//let a = "World"; //変数の宣言と代入を同時に行う。さらに再宣言なので、エラーとなる。
```

```js
//定数の宣言・代入
const PI = 3.14;
console.log(PI);

//再代入
//PI = 3.1415926535;
//const PI;
```

## 複合代入演算子

```js
//複合代入演算子
let n = 5;
n = n + 2;
console.log(n); //7

let n2 = 5;
n2 += 2; //複合代入演算子 n2 = n2 + 2 と同じ
console.log(n2);

//インクリメント
let n3 = 5;
n3++; //インクリメント　 1 足す // ++n;でも OK と書かれているが基本は n++;で書く
console.log(n3); //6
```

## ドキュメントオブジェクト

```js
//メロンを加えたい。
//ul 要素を取り入れる
const element = document.querySelector("ul");
console.log(element);

//selectorってCSSのセレクターなので
const element2 = document.querySelector("#fruitslist");
console.log(element2);

//classもいける？
const element3 = document.querySelector(".listbox_list");
console.log(element3);

//新しい要素を作る
const lilast = document.createElement("li");
console.dir(lilast); //dirに変更。オブジェクトの中身が見れる
lilast.textContent = "メロン";
console.log(lilast);
```

# 1005

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
2. 外部 JS ファイルの中
3. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>演習</title>
  </head>
  <body>
    <script></script>
  </body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
