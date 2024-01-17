// practice for Javascript 

//****** Strings ****** */
// console.log("Hello World")
// let name="ganesh"
// console.log(name)
// console.log(name.length)
// console.log(name.toUpperCase())
// let newname="     ganesh ghode    "
// console.log(newname)
// console.log(newname.trim())
// console.log(name.charAt(3))
// console.log(name.indexOf(g))

//***** Arrays***** 
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr)
// let arr1=[1,2,3,[4,5,6,7],8]
// console.log(arr1)
// // console.log(arr.push(99))
// // console.log(arr)
// // let arr2=[...arr,...arr1]
// // console.log(arr2)
// // console.log(arr.indexOf(4))
// // console.log(arr1.includes(9))
// console.log(arr1.flat(Infinity))


//****** Objects *******
// let details={
//     age:21,
//     name:"mihir",
//     degree:"computer_Science"
// }
// // console.log(details)
// details.city="ulhasnagar-2"
// // console.log(details)
// let details2={
//     age:20,
//     name:"ganesh",
//     degree:"computer_Science"
// }
// let total={...details, ...details2}
// console.log(total)
// let sym=Symbol("Ganesh")

// let details2={
//      age:20,
//      [sym]:"Ganesh",
//      name:"ganesh",
//      degree:"computer_Science"
// }
// console.log( details2)
// console.log(details2["age"])

// function print(){
//     console.log("hello")
// }
// print()
// let newfun=function(){
//     console.log("hiiii")

// }
// newfun()

// let af =(p,d)=>{
//     console.log("hello00000")
//     return p+d
// }
// let result=af(5,66)
// console.log("the result is : ",result)

// let info = (obj) => {
//     console.log(`my name is ${obj.name} and age is ${obj.age} and city ${obj.city}`)

// }
// info(
//     {
//         name: "ganesh",
//         age: 20,
//         city: "ulhasnagar"
//     }
// )
// let marks = [33, 45, 66, 98, 23, 77]
// console.log(marks)
// let arrHandle = (arr) => {
//     console.log(arr[4])
// }
// arrHandle(marks)

// let marks = [33, 45, 66, 98, 23, 77]
// // marks.forEach((items,index,rot)=>{
// // console.log(items,index,rot)
// // })
// // console.log(marks.filter((items)=>{
// //     return items>=50
// // }))
// var cur=0
// let result=marks.reduce((acc,cur)=>{
//     return acc+cur

// })
// console.log(result)

let arr=[1,2,3,4,5,6,7,8,9]
var cur=0
let res=arr.reduce((acc,cur)=>{
    return acc+cur
})
console.log("the result is : ",res)