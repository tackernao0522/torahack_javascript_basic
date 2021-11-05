const datetime = new Date()
console.log("Before:", datetime.toString())
// Before: Fri Nov 05 2021 16:23:53 GMT+0900 (日本標準時)

const formattedDate = datetime.getFullYear() + '-'
  + ('00' + (datetime.getMonth() + 1)).slice(-2) + '-' // 0011 -> 11 getMonthの場合は-1された月が表示されてしまうので+1する
  + ('00' + datetime.getDate()).slice(-2) // 0005 -> 05

console.log("After:", formattedDate)
// After: 2021-11-05
