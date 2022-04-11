// //  calculate using arrow functions

// const main=(operator,num1,num2)=>{
//     if(operator === "+"){
//         const value=add(num1,num2);
//         console.log(value);
//     }
//     if(operator=="-"){
//         subtract();
//     }
//     if(operator=="/"){
//         divide();
//     }

//     if(operator=="*"){
//         mutiply();
//     }

// }


// const add=(num1,num2)=>{

//     return num1+num2;

// }

// const subtract=(num1,num2)=>{
//     return num1-num2;
// }

// const divide=(num1,num2)=>{
//     return num1/num2;
// }

// const mutiply=(num1,num2)=>{
//     return num1*num2;
// }

// main("+",6,6);

// JS objects

let person = {
age:50, 
eyeColor:"blue",
fav:["mango","apple"],
name:{
    firstName:"John",
    lastName:"Doe",
    },

};

console.log(person.age);
console.log(person["age"]);
console.log(person.name);
console.log(person.name.firstName);

// setting new values

person.name.firstName="raymond";
console.log(person.name.firstName);
