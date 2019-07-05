/* 
I'm sure you have heard of java
    Javascript has nothing to do with java

    A few things
        it is a programming language
        it is a scripting language
        it is interpreted
            the browser will run js line by line
        It is loosely typed
        it is dynamic
*/

/* 
    js is loosely typed because variables can hold 
        and have transferred any datatype
    In js:
        x="fitty"
    in java:
        String x="fitty"
    in js:
        x=6;
    in java:
        NO X=6
*/

// x="sum sum"
/* 
    datatypes in js
        string, boolean, number, object, symbol, undefined, null
    different types of dattypes
        primitive
            number, string, boolean, null, undefined, symbol
        referenced
            object, function, array
*/
////////////////////// what is a variable
// variables are placeholders that we can place our values in

////////////////// how do we declare a variable
// var, let, const, no_keyword
// var y=1;
// let z=2;
// const c=4;
// a=2;

///////////////operators
//  3 types of operators:
//      unary, binary, ternary
//  unary works with one operand
//  binary works with two operand
//  ternary works with three operand
/* 
unary
    -   flips the sign
    +   converts to number data type
    isNaN   returns a boolean whether or not the operand is not a number
    typeOf  returns a string displaying the datatype of the operand
    !   returns the opposite boolean value
    ++x pre increment
    x++ post increment
    --x pre decrement
    x-- post decrement
    .   dot operator will access properties of an object
binary
    +   addition
    -   subtraction
    *   multiplication
    /   division
    **  exponent
    %   modulus
    <   less than
    >   greater than
    <=  less than or equal to
    >=  greater than or equal to
    =   assignment
    ==  comparison operator with type coersion
    === strict comparison operator
    x+=2  addition assignment
    -=  subtraction assignment
    *=  multiplication assignment
    /=  division assignment
    &&  logical "and" operator
    ||  logical "or" operator
    ^   returns true if one operand is true but not if both are
    js follows mathematical order of operations
    ,   separates assignments
    +   will concatenate string if one or both of the operands are a string

ternary operators
    '?', ':'    checks a condition and returns one of two values
        [condition]?[if true]:[if false]

    falsey values in js
        undefined
        NaN
        0
        false
        null
        ""

    truthy values
        anything that is not falsey
*/

// control flow
// or flow control
// its used interchangeably?????

//  if statement
// let userInput = "h";
// if (!userInput) {
//   alert("bad input");
// }

//if else statement
// if (!userInput) {
//     alert("bad input");
//   }else{
//       alert(userInput)
//   }

//if else if else statement
// if (!userInput) {
//     alert("bad input");
//   }else if(userInput.length>5){
//     alert("whoah thats a big string")
//   } else if(userInput.length<2){
//       alert("that a tiny string")
//   } else{
//       alert(userInput)
//   }

//switch statement
// let x=1;
// switch(userInput){
//     case "charlie":
//         console.log(1);
//     default:
//         console.log(99);
//     case "susan":
//         console.log(2);
//         break;
//     case "hank":
//         console.log(3);
// }

//  Loops
//  A loop will perform operations during each iteration
/* 
for([declare variable][semicolon][check value (give stopping point)]
[semicolon][change the value]){[logic]}
*/

//careful about infinite loops
// a for loop will run an operation a certain amount of times
// for(var x =0; x<100;x++){
//     console.log(x);
// }

//I dont how many times i want to run an operation
// let x=0
// while(x){
//     console.log(x);
//     x++;
// }

// what if i have the same standards as a while loop
//  but I want it to run at least once
// let x=-1;
// do{
//     console.log(x++);
// }while(x>10)

// another keyword for you to know
//  function
function myFunc2() {
  return 2;
}
function myFunc3(num) {
  // num2=2;
  return num;
}
// let x=myFunc3(3);
//let var const and no keyword
//  JS has Scopes
//      3 scopes
//          global scope
//          function scope
//          local scope ie block or loop
/* 
        var=global, function scopes
        let=global, function, local scopes
        const=global, function, local scopes
        no keyword= global scope
*/

// var thisVar=3;      //global scope
// thisVar=3               //global scope
// let thisVar=3              //global scope
const thisVar = 3; //global scope

function newFunc(num) {
  //num scope?    function scope

  // itHappens=true;            //global scope
  //const itHappens=true;   //function scope
  // let itHappens=true          //function scope
  var itHappens = true; //function scope
  if (itHappens) {
    // panic='yes'             //global scope
    // let panic= "yes"        //local scope
    // const panic='yes'       //local scope
    var panic = "yes"; //function scope
  }
  console.log(panic);
}
//  this is how you call a function (invoking a function) (function invocation)
// newFunc(4);

function myFunc4() {
  for (let i = 0; i < 5; i++) {}
  for (var k = 0; k < 5; k++) {
    var a = 2;
  }
  console.log(l);
  var l = 20;
}
// let a; a is undeclared
// console.log(a);
myFunc4();

let thisvar = 2; //global

function scopes(parameter) {
  //parameter is function scope
  if (true) {
    let anothervar = 2; //local scope
    console.log(parameter); ///can I access this: yes i can
    console.log(thisVar); //can I access this: yes i can
  }
  console.log(thisVar); //can I access this: yes I can
  console.log(parameter); //yes i can
  console.log(anothervar); //can I access? no it is local scope
}

function makeLoop(num) {
  if (num > 0) {
    for (let k = 0; k <= num; k++) {
      // return k;
      console.log(k);
    }
  }
}

//  what is an array
//      a data structure of a collection of elements (values or variables),
//      each identified by an index
//      arrays are indexed at 0
//      you can grab elements by the syntax array[index_number]

//  data structures give a way to store and retrieve data

//gibbly gobbly goop
///step 1
///step 2
/// step n

/* function goop(){
    step 1
    step2
    stepn
    return [4,5];
    console.log('hello');
} */

//gibbly gobbly goop()
let newArr = [1, 2, 3, 3, 2, 5, 4, 6, 5, "w"];

// for(let a=0; a<newArr.length; a++){
//     console.log(newArr[a]);
// }

//this is known as a for of loop
//  a for of loop will grab wach
//  each element of an array
function loopthrubetter(arr) {
  for (let a of arr) {
    console.log(a);
  }
}

//this is a for in loop
//  a for in loop will get the
//  index of each element
function loopthrubetter2(arr) {
  for (let a in arr) {
    console.log(a);
  }
}

//tern=(myArr[1]=="my")?1:0
/* 
if(myArr[1]=='my'){
    tern=1;
}else{
    tern=0;
}

if(myArr[2]=='my'){
    tern=1;
}else{
    tern=0;
}
*/

///////////////////Objects
//An object is a set states and behaviors
//The syntax for objects in js is:

//This is known as JSON
//JavaScript Object Notation
//(ie foreshadowing)
let boat = {
  name: "SS Java...script",
  color: "blue",
  length: 30,
  float: true,
  numOfHoles: 0,
  drive: function() {
      //template literal
    return `we have \n \t ${this.numOfHoles} holes in this boat and 
    are thinking of drilling more`;
  },
  drillHole: function() {
    this.float = false;
    this.numOfHoles++;
  },
  patchHole: function() {
    if (this.numOfHoles > 0) this.numOfHoles--;
    if (this.numOfHoles == 0) {
      this.float = true;
    }
  }
};

//we can access the properties of our
//boat using the dot operator "."
//we can also use subscript notation "['']"


//we can use string cancatenation to bring the string
//to the next line
let myString ="this is a super long "+
"string. it is so long that I have to take "+
"it to the next lines with string concatenation";

//we can use backticks to bring the string
//to other lines without concatenation
let myString2=`this is also a super long string,
 but this time i do not have to 
use string concatenation to bring it to
the next line.`