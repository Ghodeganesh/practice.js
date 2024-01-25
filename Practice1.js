// let user={
//     name:"ganesh",
//     age:21,
//     city:"ulhasnagar",
//     degree:"computer_science",
//     greeting:function hello(){
//          console.log(`welcome user ${this.name} to ${this.city}`)
//     }
// }
// console.log(user)
// console.log(user.greeting())
// function template(username,age,city,education){
//     this.username=username
//     this.age=age
//     this.city-city
//     this.education=education
//     // return this

// }
// let oneUser=new template("ganesh",21,"ulhasnagar","computer")
// console.log(oneUser)
// let userTwo=new template("mihir",21,"kalyan","computer")
// console.log(userTwo)
// console.log(userTwo instanceof template)
// let url="https://api.github.com/users/9156877570"

// async function info(){
//    let mass= await fetch(url);
//    let print=await mass.json()
//    console.log(print)
//    console.log(print.id)
//    console.log(print.name)
// }
// info()


function info(username,age,degree){
     this.username=username
     this.age=age
     this.degree=degree
}
info.prototype.printMe=function(){
    console.log(`my name is ${this.username} and My age is ${this.age}`)
}
let one=new info("ganesh",20,"computer")
console.log(one)
console.log(one.printMe())
