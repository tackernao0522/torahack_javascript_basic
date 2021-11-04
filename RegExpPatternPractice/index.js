const pattern = /[0-9]{5,}/
const str = "0123456789"
// const pattern = /fo+/
// const str = "f"
const result = str.match(pattern)

// console.log(result) // ['0123456789', index: 0, input: '0123456789', groups: undefined]
// console.log(result) // ['foo', index: 0, input: 'foo', groups: undefined]
console.log(result[0])
