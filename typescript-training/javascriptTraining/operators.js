let a=10
let b=20
console.log(a++)
console.log(a--)
console.log(++a)
console.log(--a)
console.log(b++)
console.log(b--)
console.log(++b)
console.log(--b)
//Assignment Operators:Characters to assign value to the variables for ex: =,+=,-=,*=,/=,%=
i=10
console.log("Initial value for i is ",i)
i+=10
console.log("Now assignment operator += value for i is",i)
//Comparison Operator : used to compare 2 values and return boolean results, ==,===,>=,<=,>,<,!=
//== (loose comparison)
//=== (Strict comparison)(it compares against same data type only)
x=10
y=10
z="10"
console.log(x==z)//true
console.log(x==y)//true
console.log(x===y)//true
console.log(x===z)//false

//Logical operators:used to combine 2 or more conditions together and return boolean as a resule(&&,||,!)
//true && true = true
//true && false = false
//true || true = true
//true || false = true
//!true=false

//Ternary Operator:special character to write condition in one line//shorthand of if else
//ex: let result = condition?value if true:else if value is this if false ;

let age=19
result=( age>18)?"eligible":"Not Eligible";
console.log(result)
