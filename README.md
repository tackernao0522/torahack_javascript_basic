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
