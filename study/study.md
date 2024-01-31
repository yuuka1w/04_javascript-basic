```js

```

# document オブジェクトとループ(for 文)

・documemt オブジェクトと DOM

・繰り返し処理

・その他の要素内への代入メソッド

```js
//トライデントのWebサイトのコンソールに打ち込む
console.log(window.document.title);
//学校法人 河合塾学園　トライデントコンピュータ専門学校 | ゲーム,CG ,Web,CAD,IT,情報,セキュリティ分野で活躍できる人材を育成する名古屋の専門学校 と表示される
```

```js
//トライデントのWebサイトコンソールに打ち込む
document.querySelector("h1");
//h1の要素が取得される
```

```js
document.querySelectorAll("p");
//p要素が全て取得される
```

```html
<h1>果物の種類</h1>
<ul id="fruitslist" class="listbox__list">
  <li>りんご</li>
  <li>みかん</li>
  <li>バナナ</li>
</ul>
```

```js
const element = document.querySelector("ul");
// 要素の取得
const lilast = document.createElement("li");
// 新しいオブジェクトの追加
lilast.textContent = "メロン";
element.appendChild(lilast);
// 子要素を挿入
```

```html
<dl class="recipe">
  <dt>カップヌードルの作り方</dt>
  <dd>フタを途中まで開ける</dd>
  <dd>お湯を線まで入れてフタをする</dd>
</dl>
```

```js
const cup = document.querySelector("dl");
const ddLast = document.createElement("dd");
ddLast.textContent = "3分待って出来上がり";
cup.appendChild(ddLast);
```

---

---

# JavaScript の基本

\*演算子

\*変数 let

\*定数 const

```js
・定数を宣言する
const PI = 3.14;
console.log(PI);
```

```js
・複合代入演算
let n = 5;
n = n + 2;
console.log(n); //7
```

```js
・インクリメントとデクリメント
let a = 5;
a++; //++;はn=n+1;と同じ意味　変数に1を足すという意味
console.log(a);
```

```js
・文字列と演算子の優先順位
・文字列＋数値
console.log("円周率は" + 3.14 + "です"); //「円周率は3.14です」と表示される
```

```js
・文字列+数値の計算
console.log("計算結果" + 123 + 456); //「計算結果123456」と表示される
//文字列が前にあった場合後ろにある数字は文字列として扱われる
```

```js
・数値の計算+文字列
console.log(124 + 456 + "となりました");
//数字は先に計算され、文字列があとから付け足される
```

```js
・文字列+(数値の計算)
console.log("計算結果" + (123 + 456));
//数学と同じように括弧が先に計算される
```

```js
//変数の宣言と代入
let b = 10;
console.log(b);

c = "Hello";
console.log(c);
```

## 確認問題

```js
const b = "プログラミング";
console.log(b.length); //lengthは文字列の長さや配列の要素数を取得することができる
```
