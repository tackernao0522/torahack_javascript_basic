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
