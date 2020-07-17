//VARIABLE
//There are two types of variables in javascript : Local and global.

//Here is the lcoal variables inside the javascript function.
function functionName(){
    var localVariable = 10; //this is local variable.
    console.log(localVariable);
}
functionName();



//Here is the global variables inside the javascript function.Global veriables can be declared outside the function.
var globalvar = "Hello JavaScript";
function globalvariableName(){
    console.log(globalvar);
}
globalvariableName();



//The same name local and global variables in javascript.
var globalVariables = "same name for the local and global variable (Global)";
function myTwoVariable (){
    var localVariables = "same name for the local and global variable (Local)";
    console.log(localVariables);
}
console.log(globalVariables);
myTwoVariable();



//Both global and local variables are available inside the function as we can console.log them.
var myglobalVariable = "Golbal var console.log in funtion";
function bothVariable (){
    console.log(myglobalVariable);
    var myLocalVariable = "Local var console.log in function";
    console.log(myLocalVariable);
}
bothVariable();

//We can create variable using of these keyword: var, let and const.
var myvar = "Hello Var";
let mylet = "Hello Let";
const myconst = "Hello Const";
console.log(myvar,mylet, myconst);

/**SUMMARY
There are two types of variables in JavaScript: local and global. They can be represented and manipulated in a programming language. Local variables are declared inside function or block. Global variables are accessible from any function.

We can declare variables by using the var, let, or const keywords.

Let is a modern variable declaration.
var is an old variable declaration.
const is similar to let, but the value of the variable can’t be changed.
It’s important to name variables in a way that allows us to easily understand what’s inside them.*/