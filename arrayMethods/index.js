'use strict';

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
  console.log(value);
  // {text: 'fuga'}
  // {text: 'bar'}
  // {text: 'buzz'}

  value['id'] = key; // {text: 'fuga'}などのオブジェクトにkey idを追加 keyはhoge, foo, fiz
  return value;
});

console.log(objectArray);
// 0: {text: 'fuga', id: 'hoge'}
// 1: {text: 'bar', id: 'foo'}
// 2: {text: 'buzz', id: 'fiz'}

const result = objectArray.filter(obj => {
  return obj.id === 'hoge'; // 条件式
});

console.log(result);
// 0: {text: 'fuga', id: 'hoge'}
console.log(result[0].text);
// fuga

const index = objectArray.findIndex(obj => {
  return obj.id === 'hoge';
});

console.log(index, objectArray[index]);
// 0, Array { id: "hoge", text: "fuga" } 配列ではなく要素が返ってくることになる
console.log(index, objectArray[index].text);
// 'fuga'

const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

console.log("Is tora~ ?", regex.test(torahack)); // Is tora~ ? true
console.log("Is tora~ ?", regex.test(charahack)); // Is tora~ ? false
console.log("Is chara~ ?", /chara*/.test(charahack)); // Is chara~ ? true

const isTora = regex.test(torahack)

if(isTora) {
  console.log("私はトラハックです。");
} else {
  console.log("私はトラハックではありません。");
}

// 私はトラハックです。
