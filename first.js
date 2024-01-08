// ****console.log("hello world");****
const id = 22332;
console.log(id)


/* id=3232;  (Error Occurs beacause constant cant be Changed)
console.log(id)
*/

//**** let variable ****/

let name = "ganesh "
console.log(name)

/*name="hitesh" (let variable can be override because it is blocked scoped variable)

console.log(name)*/


//*** var keayword ****/

var name2 = "harish"
console.log(name2)

/*
(var is a Global Scope Variable it is old variable
    for best practice dont use Var keyword )
    */

for (var i = 0; i < 6; i++) {
    if (i == 3) {
        name2 = "ganesh"
        break;
    }
}
console.log(name2)