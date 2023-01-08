                                                       /* DATA TYPES*/



// There are total 8 data types in javascript.
let message = 'Hello'
message= 20
// It can be as name and number it can't be change.

// Number
let num = 10
console.log(num)

let num2 = 20.2345
console.log(num2)

// let num = 10
console.log(num*2)

// Numbers data types also includes special numeric values.
// In Infinity,-Infinity,NaN

// let num = 10
console.log(1/0)

// let num = 10
console.log('Hello'/0)

console.log(2*2)  // (4) Multipy 
console.log(2**3) // (8) Squae to square the number
console.log(NaN**0) // (1) is output

                                        /*(BigInt) in Java Script => means (Big Integer)*/

/*If the range of an integer is +-(2 power 53-1) */

const bigInt = 6345867
console.log(bigInt)  // (6345867) is output

                                                     /*Strings in Java Script */

let string = 'Hello'
console.log(string) // (Hello)

let str = 'Hello'
let str1 = 'Hi'
let str2 = " & now"
let str3 = 'bye'
console.log(str,str1,str2,str3) // Hello Hi & now bye

// Double and single quotes those are same.
// Back ticks are special quotes for entendef functionality.

let name = 'John'
console.log("hello " + name)  // hello Johns
console.log(`hello  ${name}`) // hello John


                      /*Boolean */

let isAdmin = true
console.log(isAdmin) // true
console.log(2<3) // true
// It is a boolean


                                                     /*Null data types */

let age = null
console.log(age) // null
// It represents nothing an empty value or unknown values.

age = 12
console.log(12)  // (12) output

                                                   /* Undefined */

// Note=> The meaning of undefined is not assigned.

// let age ;
Console.log(age)  // Undefined

age = 10
Console.log(age)  // Undefined

                                                   /* Objects and symbols */

/* Premetive and unpremetive */                                                   
/* All the other types are called as premetive because they can hold only one value  */
/* Object can contain any type of data base */ 

                                                   /* Objects and symbols */
 
// let name = 'John'
console.log(typeof name) // (String)
                                                                      
console.log(typeof 2n)   // (bigInt)                             

console.log(typeof 2<5) // (False)

console.log(typeof false)  
console.log(typeof true)
// Both are boolean values.

                                                // String Conversion

/* Type Conversion*/
  
let value = true
console.log(typeof value)  // boolean

value = String(value)
console.log(typeof value)  // string

                                                /* Number conversion */

// let str = "1234"
console.log(typeof str)   // string

// let num = Number(str)
console.log(typeof num)    // number


// let age = Number('This is a string')
console.log(age)            // NaN
console.log(typeof age)    // number


