console.log("connected");
let arr = [1, 2, 5, 3, 7, 3, 7, 94, 33, 12, 2, 43, 56, 3];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//This is known as a bubble sort

function clock() {
  for (let h = 1; h <= 12; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        console.log(
          `The hour is: ${h}, the minute is ${m} and the second is: ${s}`
        );
      }
    }
  }
}

/**
Selection Sort	Ω(n^2)	     θ(n^2)	        O(n^2)
Bubble Sort	    Ω(n)	       θ(n^2)     	  O(n^2)
Insertion Sort	Ω(n)	       θ(n^2)	        O(n^2)
Heap Sort	      Ω(n log(n))	 θ(n log(n))	  O(n log(n))
Quick Sort	    Ω(n log(n))	 θ(n log(n))	  O(n^2)
Merge Sort	    Ω(n log(n))	 θ(n log(n))    O(n log(n))
Bucket Sort	    Ω(n+k)	     θ(n+k)	        O(n^2)
Radix Sort	    Ω(nk)	       θ(nk)	        O(nk)
 */

/* 
    JS is an OOP Language
        four pillars of oop?
            Inheritance
            Polymorphism
            Encapsulation
            Abstraction
 */

//This is an anonymous function
//  function (){
//     return "me"}
//These functions have no name

//IIFE
//  Immediately Invokable Function Expression
(function(x) {
  return x ** 2;
})(5);
//These functions are ran at declaration

(function me4() {
  return me4.name;
})();

//Welcome to closure
let me5 = (function() {
  let x = 0;
  console.log("the parent");
  return function() {
    console.log("child");
    return ++x;
  };
})();

let driveCar = (function() {
  let miles = 0;
  console.log("we have purchased the car");
  return function() {
    console.log("we are driving our car");
    return ++miles;
  };
})();


let driveCar4=(function (){
    let miles=0;
    console.log('we have purchased the car');return function(driven){
        console.log('we are driving our car');
        return miles+=driven;
    }
})();


//hoisting
//we can call a function
run()
//before it is declared
function run(){
    return "gogogo"
}

//continue will break out of current iteration and move to the next
//break will break out of entire loop
for(let i=0; i<5; i++){
    if(i%2==0){
        continue;
    }
        console.log(i)
}

//default values
let x = 0||"vegetable"||driveCar()
//->x="vegetable"

//guard operator
let y = 0 && "vegetable"
//x->0
