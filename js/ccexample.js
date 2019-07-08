let x=1;

function makeArr(arr, arr2, arr3) {
  let newArr = [];
  newArr.push(arr);
  newArr.push(arr2);
  newArr.push(arr3);
  return newArr;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let thisarr = makeArr(arr1, arr2, arr3);

for (let e of thisarr) {
  console.log("array " + x);
  for (let i of e) {
    console.log(i);
  }
  x++;
}
