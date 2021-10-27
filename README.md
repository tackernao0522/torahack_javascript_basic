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
