## 01 var と letのスコープの違い

+ `var` <br>

関数内はどこからでも参照可<br>

+ `let`<br>

ブロック内{}のみ参照可<br>

```
const testScope = (scope) => {
  if (scope === 'function') {
    var message = '関数スコープ'
  }
  console.log(message);
}
testScope('function');
```

```
const testScope = (scope) => {
  if (scope === 'block') {
    let message = 'ブロックスコープ'
  }
  console.log(message) // エラー
}
testScope('block')
```

## mutable と immutable

+ `mutable`<br>
宣言後に変更可能<br>

+ `immutable`<br>
宣言後に変更不可能<br>

```
let mutableText = 'let変更前';
mutableText = 'let変更後'; // 変更可能

const immutableText = 'const変更前';
immutableText = 'const変更後'; // 変更不可

const mutableArray = [1, 2, 3];
mutableArray.push(4); // 変更可能
```

`配列やオブジェクトは定数宣言してもmutable`<br>

## アロー関数

```
function funcName(argumants) {
  // 何かしらの処理
}

const funcName = (arguments) => {
  // 何かしらの処理
}

const funcName = (arguments) => // 1行で終わる処理
```

## 配列の代表メソッド

### map() | 新しい配列を作る

+ 配列をイテレートする<br>
+ 要素１つずつに処理<br>
+ 新しい配列を生成<br>

```
const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2);
console.log(resultArray);
// Array [2, 4, 8, 16]

const obj = {
  "hoge": {
    text: "fuga"
    },
  "foo": {
    text: "bar"
    },
  "fiz": {
    text: "buzz"
    }
};
// object.keys()でkeyの配列を作る
const objectArray = Object.keys(obj).map(key => {
  const value = obj[key]
  value['id'] = key
  return value;
});
```

## filter() | 条件に合う要素を抽出

```
const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" },
];

const result = objectArray.filter(object => {
  return object.id === 'hoge'; // 条件式
});

console.log(result);
// Array [{ id: "hoge", text: "fuga" }]  配列
```

## findIndex() | 要素の何番目か知る

+ 配列をイテレートする<br>
+ 条件がtrueの要素が「何番目なのか」を返す<br>

```
const objectArray = [
  { id: "hoge", text: "fuga"},
  { id: "foo", text: "bar"},
  { id: "fiz", text: "buzz"},
];

const index = objectArray.findIndex(object => {
  return object.id === 'hoge'; // 条件式
});

console.log(index, objectArray[index]);
// 0, Array {id: "hoge", text: "fuga" } 要素
```

## test() | マッチする文字列か判定

+ 正規表現を使う<br>
+ マッチする->trueを返す<br>
+ マッチしない->falseを返す<br>

```
const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

constol.log(regex.test(torahack)) // true
console.log(regex.test(charahack)) // false

console.log(/chara*/.test(charahack)) // true 正規表現を直接記述

<正規表現>.test(<テスト対象>)
```

## 共通箇所

1. 1000万個の連番配列を生成<br>
2. 合計値を入れるsum変数を宣言<br>
3. 配列の長さをlen変数に宣言<br>
4. 加算関数を定義<br>

```
const arr = new Array(10000000).fill(0).map((v, i) => i);

let sum = 0;

const lent = arr.length | 0;

function addSum(v) {
  sum += v;
}
```

## 基本のfor文

```
// #1 for
for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time('for');
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  console.timeEnd('for');
  console.log(sum);
}

// #2 for of
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('for of');
  for {const v of arr} {
    sum += v;
  }
  console.timeEnd('for of');
  console.log(sum);
}
```

## forEach()

```
// #3-1 forEach(arrow)
for (let i = 0; i< 5; i++) {
  sum = 0;
  console.time('forEach(arrow)');
  console.log(sum);
}

// #3-2 forEach(pre-definde function)
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('forEach(function)');
  arr.forEach(addSum);
  console.timeEnd('forEach(function)');
  console.log(sum);
}
```

## map()

```
// #4-1 map(arrow)
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('map(arrow)');
  arr.map(v => sum += v);
  console.timeEnd('map(arrow)');
  console.log(sum);
}

// #4-2 map(pre-defined function)
for (let i = 0; i < 5; i++) {
  sum = 0;
  console.time('map(function)');
  arr.map(addSum);
  console.timeEnd('map(function)');
  console.log(sum);
}
```

## Typed (型を定義したfor)

|0 -> 数値型であることを定義<br>

```
// #5-1 Typed for
for (let j = 0; j < 5; j++) {
  sum = 0;
  console.time('Typed for');
  for (let i = 0; i <len; i=(i+1) | 0) {
    sum += arr[i];
  }
  console.timeEnd('Type for');
  console.log(sum);
}
```

## 結果

|(ms)|Chrome|Safari|Firefox|
|----|------|------|-------|
|for|160.87|101.99|36|
|for of|150.16|609.30|60|
|forEach(arrow)|336.60|226.22|37|
|forEach(function)|296.44|226.35|36|
|map(arrow)|1028.36|273.64|132|
|map(function)|339.36|300.01|174|
|Typed for|123.68|145.15|35|

## DOMとは

+ Document Object Modelの略<br>
+ JavaScriptからHTMLにアクセスする窓口<br>
+ HTML要素の値を取得したり変更する
これらがDOM操作<br>

## なぜDOM操作が必要?

+ JavaScriptはWebページの「振る舞い」を決める<br>
  ->振る舞いを変えるためにHTMLを変更する<br>

+ ユーザーの望む操作を行うには...<br>
  1. 入力したデータを取得する<br>
  2. 新しいデータを表示する<br>
  3. データを送信する<br>
  ...etc<br>

## id指定で取得

`HTML`<br>
```
<div id="hoge">
  hogeっていうidが指定されているよ！
</div>
```

`JavaScript`<br>
```
const element = document.getElementById('hoge')
console.log(element.innerText)
```

## class指定で取得

`HTML`<br>
```
<div class="foo">fooっていうクラスが指定されたdiv要素1</div>
<div class="foo">fooっていうクラスが指定されたdiv要素2</div>
<div class="bar">barっていうクラスが指定されたdiv要素</div>
```

`JavaScript`<br>
```
const classes = document.getElementsByClassName('foo')
for (const classNode of classes) {
  console.log(classNode.innerText)
}
```

## form要素を取得

`HTML`
```
<form name="demoForm>
  <div>
    <label for="title-id">タイトル</label>
    <input id="title-id" name="title" type="text" />
  </div>
</form>
```

`JavaScript`
```
const forms = document.forms.demoForm

// 値を取得したいinput要素のnameを指定
const title = forms.title.value
console.log(title)
```

## DOMを書き換える時とはどういう時か？

+ アップロードされた画像のプレビュー<br>
+ ユーザーの投稿をタイムラインに表示<br>
+ 送信されたコメントを表示<br>
...etc<br>

## DOM要素を変更する操作の種類

 1. innerText<br>
 2. innerHTML/outerHTML<br>
 3. setAttribute()<br>
 4. insertAdjacentHTML()<br>

## innerText

<h3>DOM要素内のテキストを取得・設定できる</h3>

`HTML`<br>

```
<div id="hoge">
  hogeっていうidが指定されているよ！
</div>
```

`JavaScript`<br>

```
const element = document.getElementById('hoge');
console.log(element.innerText);
// hogeっていうidが指定されているよ！

element.innderText = "fugaに書き換えられたよ！";
console.log(element.innerText);
// fugaにかきかえられたよ！
```

## innnerHTML

<h3>DOM要素内のHTMLを取得・設定できる</h3>

`HTML`<br>

```
<div id="parent">
  <div id="child">#parantの子要素だよ</div>
</div>
```

`JavaScript`<br>

```
const element = document.getElementById('parent')
console.log(element.innerHTML)
// output: <div id="child">#parantの子要素だよ</div>

const literal = '書き換えられたよ！'
element.innerHTML = `<p id="child">HTMLごと${literal}</p>`
console.log(element.innerHTML)
// output: <p id="child">HTMLごと書き換えられたよ！</p>
```

## setAttribute()

<h3>DOM要素の属性を設定できる</h3>

`HTML`<br>

```
<div>
  <img id="image" src="assets/before.jpeg" width="320" height="180">
</div>
```

`JavaScript`<br>

```
const element = document.getElementById(image)
element.setAttribute('src', 'assets/after.jpeg') // 第一引数 : 変更対象の属性名 第二引数 : 変更する値
```

## insertAdjacentHTML()

<h3>指定したDOM要素の相対的な位置にHTMLを挿入する</h3>

<h5>指定できる4つのポジション</h5>

 1. beforebegin : 自身の直前<br>
 2. afterbegin : 子要素の先頭<br>
 3. beforeend : 子要素の末尾<br>
 4. afterend : 自身の直後<br>

## insertAdjacentHTML('beforeend', ~)

<h3>リストの子要素をどんどん追加していく</h3>

`HTML`<br>

```
<div id="list></div>
```

`JavaScript`

```
let counter = 1;

const element = document.getElementById(list)
element.insetAdjacentHTML(
  'beforeend',
  `<div>${counter}つ目の子要素だよ</div>`
)
counter++
```

## Promise & async/await

### 非同期処理とは

+ 通信が発生する処理で起きる<br>
  -Web APIを叩く<br>
  -データベースへクエリを投げる<br>

+ 実行完了を待たない<br>
+ 並行して次の処理を実行<br>
  ->時間がかかるから<br>

## 非同期処理は一長一短

<h4>ユーザーを待たせない</h4>
  重い処理や時間のかかる通信中にユーザーに別の操作を許可する<br>
<h4>制御が難しい</h4>
  実行完了までデータが存在しない<br>
<h4>どう対処すべきか</h4>
  ->非同期処理の実行完了を制御する<br>

## Promiseで完了を待つ方法

<h5>Promisの状態</h5>

`pending:` 初期状態<br>
`fulfilled:` 処理が成功して完了した状態<br>
`rejected:` 処理が失敗して完了した状態<br>

<h5>コンストラクタ</h5>

```
const promise = new Promise()
```

## Promiseを関数内で使う

```
const promiseFunc = () => {
  return new Promise ((resolve, reject) => {
    someAsynchronousFunc(() => {
      // 何かしらの処理
    }).then(() => {
      // 非同期処理が成功した場合
      return resolve('成功！')
    }).catch(() => {
      // 非同期処理が失敗した場合
      return reject('失敗！')
    })
  })
}
```

##  node-fetchのインストール

`$ npm install --save node-fetch` <br>

+ 実行コマンド<br>
`$ node --experimental-modules filename.js`<br>

## async/awaitで完了を待つ方法

<h4>Promiseよりasync/awaitがおすすめ</h4>

  + 記述がシンプルになる<br>
  + 直感的でわかりやすい<br>

<h4>どうやって使うか？</h4>

  + 非同期処理を伴う関数定義にasyncをつける<br>
  + 非同期処理を伴う関数実行時にawaitをつける<br>
  + awaitはasync付き関数内でしか使えない<br>

## 即時関数

<h4>保守性をどのようにして高めるか?</h4>
<h4>ファイル分割 -> 半分正解</h4>

 ↓<br>

`カプセル化する`<br>

## 名前空間の汚染 (グローバルに同じ変数が定義されてしまっている。カプセル化されていない。エラーが出る)

`header.js`<br>

```
const selectMenu = () => {
  console.log("ヘッダーのメニューが選択されました！")
}
```

`footer.js`<br>

```
const selectMenu = () => {
  console.log("フッターのメニューが選択されました！")
}
```

### どうやってカプセル化する？

1. 機能ごとにファイルを分割<br>
2. ファイル内のコードを即時関数でラップ<br>
3. 即時関数内で以下を記述<br>
  1. 初期化<br>
  2. メソッド<br>

### なぜカプセル化？メリットは？

  1. スコープを限定できる<br>
  2. 擬似的なオブジェクト指向開発<br>
    1. 再利用できる<br>
    2. 必要なときに呼び出せる<br>

## JavaScriptのスコープって？

### ・同じ名前をつけて良い範囲・空間
  家族内 X <br>
  町内  ◯ <br>

### ・JavaScriptのスコープは2種類

1. グローバルスコープ<br>
2. 関数スコープ<br>

## 即時関数によるカプセル化

```
const headerModule = (() => {
  let counter = 0; // 初期化

  return {
    countUp: () => {
      counter += 1;
      console.log("現在のカウントは", counter);
    },
    selectMenu: () => {
      console.log("ヘッダーメニュー"); // メソッド化
    }
  }
})();
```

## 即時関数でasyncを使う

```
(async() => {
  const url = 'https://api.github.com/users/tackernao0522';

  const json = await fetch(url)
    .then(res => {
      return res.json()
    }).catch(error => {
      return null
    });

    console.log(json.login);
})();
```

## EventListener (画像をアップロード&プレビュー)

### JavaScriptイベントとは？

+ ユーザー操作によって引き起こされる<br>
+ 関数が実行される<br>
+ 結果として「振る舞い」が変わる<br>

`■（click!) => ●`<br>

### イベントを設定する方法

1. HTML要素に対応したイベント属性<br>

```
<button onclick="setInnerText('hoge')">
  テキストを書き換えるよ
</button>
```

2. JavaScriptでイベントリスナーを設定<br>

```
const hoge = document.getElementById('hoge')
hoge.addEventListener("click", event => {
  // 処理内容
})
```

### イベントリスナーの使い方

```
<input id="image" type="file" />

const inputElement = document.getElementById('image')
inputElement.addEventListener("change", event => { // 第一引数はイベントの種類 第二引数はコールバック関数
  const file = event.target.files[0]; // targetプロパティに値が存在する value, text, files...etc
})
```

### 予期せぬ挙動を防ぐ方法

1. preventDefault()<br>
  要素のデフォルトのイベントを無効化<br>

2. stopPropagation()<br>
  子要素のイベントが親要素にも伝播（でんぱ）することを防ぐ<br>

```
element.addEventListener("change", event => {
  event.preventDefault();
  event.stopPropagation();
})
```

## 正規表現とは？

+ 文字の組み合わせを照合(マッチ)するためのパターン<br>
+ JavaScriptではRegExpオブジェクトとして扱う<br>

### 正規表現を使う場面

+ 入力値が正しいフォーマットかチェック<br>
+ 統一のフォーマットに変換する<br>
+ URLに応じて表示する情報を切り替える<br>
...etc<br>

### 正規表現オブジェクトの作り方

1. コンストラクタ記法<br>

```
const regex = new RegExp('[^0-9]', 'g') // 第一引数はパターン 第二引数はオプション
```

2. リテラル記法<br>

```
const regex = /[^0-9]/g // /パターン/オプション
```

## 正規表現パターンの基礎知識①

<h5>特殊文字が何にマッチするか</h5>

|特殊文字|意味|
|---|---|
|^|入力の先頭|
|.|改行文字以外の1文字|
|$|入力の末尾|
|(x)|()内に指定した文字列|
|*|直前の0回以上の繰り返し|
|x|y|指定した文字列のどちらか|
|+|直前の1回以上の繰り返し|
|{n}|直前のn回の繰り返し|
|?|直前の0回か1回|
|{n,}|直前の少なくともn回の繰り返し|

## 正規表現パターンの基礎知識②

<h5>文字集合パターン</h5>

|集合パターン|意味|
|---|---|
|/[0-9]/|数値（0から9のいずれか）|
|/[a-z]/|英子文字（aからzのいずれか）|
|/[A-Z]/|英大文字（AからZのいずれか）|
|/[a-z0-9A-Z]/|英数大文字|
|/[^0-9]/|数値以外（0から9ではない）|

## 特殊文字のエスケープ

<h5>パターン内でバックスラッシュ \ を使う</h5>

```
const pattern = /\/posts\/*/ // /posts/*

const pattern = /^[a-zA-Z0-9]*@gmail\.com/ //@gmail.com
```

## String.prototype.replace()

<h5>正規表現でマッチする文字列を置換する</h5>

```
const telWithHyphen = '080-1234-5678'
const tel = telWithHyphen.replace(/[^0-9]/g, '')  // [^0-9]はパターン gはオプション ''は置換後の文字列

console.log(tel)
// output: 08012345678
```

## String.prototype.match()

<h5>正規表現でマッチする文字列を抽出する</h5>

```
const pattern = /[0-9]{5}/
const str = "0123456789"
const result = str.match(pattern) // resultの返り値は配列

console.log(result[0])
// output: 01234
```

## RegExp.prototype.test()

+ マッチする文字列か判定<br>
+ マッチする->trueを返す<br>
+ マッチしない->falseを返す<br>

```
const torahack = 'torahack'
const charahack = 'charahack'
const regex = new RegExp('tora*')

console.log(regex.test(torahack)) // true
console.log(regex.test(charahack)) // false

console.log(/chara*/.test(charahack)) // true /chara*/の部分は正規表現を直接記述している
```

<正規表現>.test(<文字列>)<br>

## 実務で使える文字列操作5選

<h5>String.prototype.split()</h5>

`文字列を指定した区切り文字列で分割する`<br>

```
const url = "https://torahack.web.app?uid=abcde12345"
const array = url.split('?uid=')
// const array = 戻り値は配列  ('?uid')は区切り文字

console.log(array)
// ['https://torahack.web.app', 'abcde12345']
```

<h5>String.prototype.slice()</h5>

`指定した数値に応じて、文字列の一部分を取り出す`<br>

```
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(4, 19)); 先頭の5文字目〜20文字目 (0からカウントされる)
// expected output: "quick brown fox"

console.log(str.slice(-4)); // 末尾の4文字目〜
// expected output: "dog."
```

<h5>String.length</h5>

`文字列の長さ（=文字数）を表す`<br>

```
const str = 'torahack';

console.log(str.length);
// expected output: 8
```

<h5>Number.prototype.toLocaleString()</h5>

`数値を言語依存の文字列に変換する`<br>

```
const price = 19800
const localePrice = price.toLocaleString()

console.log(localePrice)
// expected output 19,800
```

<h5>String.prototype.replace()</h5>

`パターンにマッチした文字列を置換する`<br>

```
const str = "たぬきのかたたたき"
const result = str.replace(/た/g, "");

console.log(result)
// expected output ぬきのかき
```
