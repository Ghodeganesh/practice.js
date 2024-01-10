let myArr1=[1,2,3,4,5,6,7,8]
// console.log(myArr1)

let myArr2=[9,10,11,[12,13,[14,15]],16]
// console.log(myArr2)
// let name="ganesh"
// console.log(Array.from(name))
let soom=Array.of(myArr1,myArr2)
console.log(soom)
// let som=myArr2.flat(Infinity)
// console.log(som)

// console.log(myArr1.concat(myArr2))

// console.log(myArr1.includes(8))

// console.log(myArr2.push(9))

// console.log(myArr2.push(10))
// console.log(myArr2)

// console.log(myArr1.pop())
// console.log(myArr1)

// console.log(myArr1.unshift(99))
// console.log(myArr1)

// console.log(myArr1.shift())
// console.log(myArr1)
let newarray=[...myArr1,...myArr2]
// console.log(newarray)