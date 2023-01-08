                                                      /* CONDITIONALS */
 
// Note=> It is a core part of java script.

/* Conditionals in JS */

/* They are used when you want of perform different action based on different conditions. 
 Eg=> if,else,else if etc */

// Syntax=>

/* if(condition){
    code for condition
} */

// let hour = 10
if (hour < 12){
    console.log('Good morning')   // Good Morning
}

let hour = 13
if (hour < 12){
    console.log('Good morning')   // It ignores it because condition is wrong.
}

// let hour = 13
if (hour < 12){
    console.log('Good morning')
}
else{
    console.log('Good Afternoon')  // Good Afternoon
}

/* hour >= 12 */
// When ever the condition expect the condition that is included in the if part else take all condition.
// Note=> For all hour is greater equal to 12 is the else condition will run.

// let hour = 12
if(hour<12){
    console.log('Good Morning')
}else if(hour<20){
    console.log('Good Day')       // Good Day
}else{
    console.log('Good Evening')
}

// let hour = 22
if(hour<12){
    console.log('Good Morning')
}else if(hour<20){
    console.log('Good Day')
}else{
    console.log('Good Evening')   // Good Evening
}

// let currentyear = 2023
if(currentyear == 2023){
    console.log('You are so smart')   // You are so smart
}

// let currentyear = 2022
if(currentyear == 2023){
    console.log('You are so smart')   // No output because condition is false.
}

// Note=> Else condition is optional not mandatory.

let currentyear = 2024
if(currentyear == 2023){
    console.log('You are so smart')
}else{
    console.log('You are not so smart')  // You are not so samart
}

/* Small letters used only for if and else case so when those are used in capital letters they give it as incaught error */

// let accessAllowed;
let age = 16
if(age>18){
    accessAllowed = true
}else{
    accessAllowed = false
}
console.log(accessAllowed)  // false

let accessAllowed;
// let age = 19
if(age>18){
    accessAllowed = true
}else{
    accessAllowed = false
}
console.log(accessAllowed)  // true

/* Conditionals operators? */

/* You can write conditionals in a simpler and shorter way */
/* This is also called as a turnary operators */
/* SYNTAX=>      let result = condition ? value1:value2     */

//Single line code doing here.

// let age = 19
//let accessAllowed = (age>18) ? true:false
console.log(accessAllowed)                   // true









