let name: string ="Puja";
console.log(`the employee name is ${name} `);

//undefined: variable that is declared nbut we havent declared any value
let rollNo :undefined;

//null represents a varibale that is declared with empty value intentionally

let exercise: null=null;
console.log(exercise)

//Union: allow multiple datatype for a single variable
let EmpAddress: string|number
EmpAddress="Kolkata"
console.log(EmpAddress)
EmpAddress=2143214
console.log(EmpAddress)


//Any: allow any data type for the variable

//--------------------------NON PRIMITIVE------------------------
interface personalInfo{
    name:string;
    age:number;
    gender:string;
    address: {
        city:string;
        pincode:string;
    }
}

//now we can use the above created interface like a data type

let employee:personalInfo={
    "name":"Puja",
    "age":5,
    "gender":"F",
    address:{
        city:"kolkata",
        pincode:"32"
    }

}
console.log(employee)


//Array:list of values
let students :(String|number|boolean)[]=["puja",32255321213,true]
//here if we change equence of puja or number then no error also we can add more data in array after true

//Tuple:ordered array which shows list in an order
let student :[String,number,boolean]=["puja",32255321213,true]
//here if we change equence of puja or number then get error but we cannot add more data in tuple without first declaring its type


//Rules in Typescript
/*Rules in TypeScript:
• Parameter types must be defined.
• Return type must be specified.
• TypeScript enforces return type correctness.*/

function launchTheApplication(browserName: string , url:string):void {
console.log("Launch the browser: " + browserName);
console.log("Navigate to URL: " + url);
console.log("Application launched successfully!");
}
function sumOfNumbers(num1: number, num2: number): number {
let num3:number = num1 + num2;
return num3;
}

//Maps are key-value pairs
 let employeeMap:Map<string,string> = new Map();
employeeMap.set("empId", "101");
employeeMap.set("empName", "John Doe");
employeeMap.set("havingVisa", "true");
employeeMap.set("empName", "Bharath");
employeeMap.delete("havingVisa"); //deleting key havingVisa


//Symbol() - are unique hiddwn identrifier in an object
