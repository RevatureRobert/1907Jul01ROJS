// console.log("here we are")

function func() {
  alert("this was another button push");
}
//document refers to the DOM
//  Document Object  Model
//  This is a virtual representation of the html

//window is the global object when it comes to dom manipulation
window.onload = function() {
  //   document.getElementById("button").addEventListener("click", func);
  document.getElementById("button").onclick = func;
};

//we can grab the document and access functions associated with it
// document.getElementById("button").addEventListener("click", func);

//well get to dom in a moment, but first here's a word
//for your events:
/* 
other events: mousedown, mouseup, onload, keydown, dblclick, 
    click, mouseenter, moueseleave, mouseout, mousemove, submit, 
    keyup, keypress, and lots and lots more
*/

// let headers=document.getElementsByClassName("headers");
// let this2=headers[0].innerHTML;

// console.log(document)
// console.log(document.URL)
// console.log(document.title)
// document.write("<h1>hey yall</h1>")

/*
    Three special things that you with dom manipulation
        Find Elements
            document.getElementById(id)
            document.getElementsByClassName(className)
            document.getElementsByTagName(tagName)
        Change Elements
            element.innerHTML = new html content
            element.attribute= new value
            element.setAttribute(attribute, value)
            element.style.property=new value
        Add or remove elements
            document.createElement(element)
            element.appendChild(element)
            element.removeChild(element)
            element.replaceChild(element)
            document.write

*/

//  get element by id
let para1 = document.getElementById("para1");

//we can inject html elements with innerHTML
para1.innerHTML = "i'm not gonna be <b>late to</b> this party!!!";
// para1.style.color="red";
// para1.setAttribute("style","color:red")
para1.style = "color:red";

let image = document.getElementById("image");
image.src =
  "https://image.shutterstock.com/image-photo/group-bored-pupils-classroom-during-260nw-567724489.jpg";

image.addEventListener("mouseenter", changeImg);

let imageArray = [
  "https://image.shutterstock.com/image-photo/group-bored-pupils-classroom-during-260nw-567724489.jpg",
  "https://i.imgflip.com/15mxyv.jpg"
];
function addToImg(url) {
  imageArray.push(url);
}
let x = 0;
function changeImg() {
  x++;
  image.setAttribute("src", imageArray[x % imageArray.length]);
}
let list1 = document.getElementById("list1");

let myarr = [
  "lets",
  "all",
  "just",
  "get",
  "along",
  "and",
  "not",
  "get",
  "excited"
];

for (let x = 0; x < myarr.length; x++) {
  let li = document.createElement("li");
  list1.appendChild(li);
  li.innerHTML = `this is a js item: ${myarr[x]}`;
}

let body = document.querySelector("body");
body.addEventListener("keyup", bodyFunc);

function bodyFunc(Cooper) {
  console.log(Cooper);
  body.style.backgroundColor = `rgb(${Cooper.offsetX},${Cooper.offsetY},40)`;
}

let li2 = document.getElementsByTagName("li");
for (let a of li2) {
  a.style.color = "red";
}

let colorArray = ["red", "blue", "yellow", "green", "black", "purple"];

let colorNum = 0;

let but2 = document.getElementById("button2");
but2.addEventListener("click", changeColor);

let para2 = document.getElementById("para2");

function changeColor() {
  para2.style.color = colorArray[colorNum % colorArray.length];
  colorNum++;
}

//bubbling
/* 
    When an event happens on an hmtl element, it first runs
        the handlers on it, then on its parent, then
        all the way up to its ancestors

        event.stopPropagation() will stop bubbling

        The opposite of this is called capturing. This is 
        where, when an event happens on an html element,
        it runs the handlers on its ancestors and goes down
        the line until it reaches the original element

        for more information:
 *          https://javascript.info/bubbling-and-capturing
*/
let divs = document.getElementsByTagName("div");
for (let a of divs) {
  a.addEventListener("dblclick", clickemall);
}
function clickemall(event) {
  alert(`target: ${event.target.id} ---~this: ${this.id}`);
  console.log(event);
  console.log(this);
  // document.getElementById("three").onclick=event.stopPropagation()
}
document.body.ondblclick = clickemall;


but2.addEventListener("mouseenter",changeOrange);
but2.addEventListener("mouseleave",changeBack);

function changeOrange(){
    but2.style.backgroundColor="orange";
}
function changeBack(){
    but2.style.backgroundColor="white";
}