//1.primitive datatype

/*
number
string
null //means variable has been given null value
undefined//it means a variable that has been declared but no value assigned yet 
boolean
symbol
*/

//String
empname="Pooja"
office="simform"
console.log("the employee name is "+empname+" and office is "+office )
console.log(`the employee name is ${empname} and office is ${office}`)




//2.Non-Primitive
/* object :Object datatype represents it is A collection of key value pairs withi the curly braces
*/
let person={
    name:"puja",
    age:27,
    living:true,
    address:{
        city:"bengal",
        area:"kestopur"
    }
}
console.log(person.name)
console.log(person.address.city)
console.log(person["name"])
console.log(person["address"])
console.log(person["address"]["area"])



//Arrays Data Type: alist of values simply unlike java no fixed length

//function Data type:list of code to get some job done''

//Set :it is collection of unique values in a Data Type
let empid=new Set()
empid.add(1234)
empid.add(4567)
empid.add(1234)
console.log(empid)

//Maps: collection of key value pairs just like objects
//key can be of any data type similarly value can be of any data type
//however key has to be unique and value can be duplicate
let keyempid=new Map()
keyempid.set(1234,"puja")
keyempid.set(1235,"dubey")
keyempid.set(1234,"Puja Dubey")
keyempid.set(1236,"dubey")
console.log(keyempid)