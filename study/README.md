# 2023 年後期「JavaScript 基礎」授業課題

```js

```

# 1102

# 1026

# 1019

ー document オブジェクトと DOM
ーコレクション
ー条件分岐・繰り返し処理

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

３分待って出来上がりを追加する

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

# 1012

ーリテラルと演算子

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
