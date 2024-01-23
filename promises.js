// let promiseOne=new Promise(function(resolved,reject){
//    setTimeout(function(){
//     console.log("Hello Learning Promises ")
//     resolved()
//    },2000)
// })
// promiseOne.then(function(){
//     console.log("promise one executed")
// })

// new Promise(function(resolved,reject){
//     setTimeout(function(){
//         console.log("Hello World")
//         resolved()
//     },1000)
// }).then(function(){
//     console.log("promise Two Resolved")
// })


// let promiseThree=new Promise(function(resolved,reject){
//    setTimeout(function(){
 
//     resolved({username:"ganesh",email:"ganeshghode",age:"20"})
//    },1000)
// })
// promiseThree.then(function(user){
//         console.log(user)
//         return user.username
// })

let promiseFive = new Promise(function(resolved,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolved({username:"ganesh",city:"ulhasnagar"})
        }else{
            reject("Error Occured!")
        }
    },2000)
})
promiseFive.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log("the username is : ",username)
}).catch(function(){
    console.log("erro occured")
})