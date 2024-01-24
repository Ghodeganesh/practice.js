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
function template(username,age,city,education){
    this.username=username
    this.age=age
    this.city-city
    this.education=education
    // return this

}
let oneUser=new template("ganesh",21,"ulhasnagar","computer")
console.log(oneUser)
let userTwo=new template("mihir",21,"kalyan","computer")
console.log(userTwo)
console.log(userTwo instanceof template)