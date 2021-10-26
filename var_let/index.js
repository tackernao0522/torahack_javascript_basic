'use strict';
const testScope = scope => {
  if (scope === 'function') {
    var functionScope = '関数スコープ内ならどこからでも参照できます';
  } else if (scope === 'block') {
    let blockScope = 'ブロックスコープ内でしか参照できません';
    console.log(blockScope) // 参照可
  }
  console.log(functionScope)
  // console.log(blockScope) // 参照不可
}

testScope('function');
testScope('block');