// var x = undefined
// var y = null
// var z = true
// var a = false

// console.log(x,y, z, a);


// console.log("hello world");
// console.log('hi my name is javascript...')

// let a = "Zainab"
// a = "sana"

// console.log(a)

// const b = "Zainab"
// // b = "safa" cant be reinitialised, cuz this is constant. 
// console.log(b)
// typeof b

//understaning object type. 
let name = {
    student : "safa",
    age : 2
}

console.log(name)
 
//to print any specific key in the object
console.log(name["age"])
console.log(name.student)

//to change any value of a particular key inside the object 
name["student"] = "sana"
console.log(name.student)
console.log(name)

name["age"] = name["age"] + 1
console.log(name)
console.log(typeof name)