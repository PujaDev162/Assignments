console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10);
console.log("Executing Line 4");
console.log("Executing Line 5");
console.log("Executing Line 6");



function sumOfNumbers(a,b){
    c=a-b;
    console.log(c);
}

//Debugging the program into javascript step by step
//1. Add the breakpoint(Add the red dots to the line number from where u want to stop execution)
//2. Run the program in debug mode(ctrl+shift+D)
//3. use the debug mode to identify and fix error

//continue (F5): continues the program until next breakpoint
//restart (ctrl+shift+f5) to restart the porgram from beginning
//stop(shift+f5):stop the execution and terminate the flow

//step over:Execute current line and move to next line
//step into: go inside the step and understand the loginc in it
//step out:come out of the background flow and go into the main flow