'use strict';

function namedFunc(message) {
  console.log(message);
}


const arrowFunc = (message) => {
  console.log(message);
}

const oneLineArrowFunc = message => console.log(message);

const users = {
  hoge: 'torahack'
}
const getUsername = userId => users[userId];

namedFunc('これは名前付き関数です');
arrowFunc('これはアロー関数です');
oneLineArrowFunc('これは1行で書いたアロー関数です');
const username = getUsername('hoge');
console.log(username);
