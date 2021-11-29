console.log("we are in tuts 7");

const marks = [12, 23, 23, 34, 56];
const fruits = ['orange', 'apple', 'pineapple'];
const mixed = ['str', 89, [1,2]];

//creating new array 
const arr = new Array(23,11,21,'orange');
//displaying values 
console.log(arr);
console.log(arr[1]); //11

//length of array
console.log(marks.length); //5

//is it an array or not 
// returns true or false
console.log(Array.isArray(arr)); //true 
// console.log(Array.issArray('dsfs')); 
//false

//updating values 
// console.log(arr);
arr[0]= 'harry';
console.log(arr);

//another method 
let arrelement = arr[0];
console.log(arrelement);
console.log(arr);

//on which index is the element located 
let value = marks.indexOf(12);
console.log(value); //index0

//mutating/modifying- changing arrays
//adding elements to array 
marks.push(34);
console.log(marks);
// (6) [12, 23, 23, 34, 56, 34]

//push elements to the start 
//unshift 
marks.unshift(100);
console.log(marks);
// (7) [100, 12, 23, 23, 34, 56, 34]

//remove element from end
//1. pop 
marks.pop();
console.log(marks);
// (6) [100, 12, 23, 23, 34, 56]

//2. shift 
//remove element from start 
marks.shift();
console.log(marks);
// (5) [12, 23, 23, 34, 56]

//3. splice 
//remove element from position 
//start index, remove these number of elements 
//splice(start, end)
marks.splice(1, 2);
console.log(marks);
// (3) [12, 34, 56]

//4. Slice 
//remove elements from existing array and place it in a new array
//slice(start, end) 
var newarr = ["sanjay", "aman", "rehman", "rahul", "karan"];

//1. between two elements
var nb = newarr.slice(1,4);
//between 1 and 4
document.write(nb, "<br>");
//aman,rehman,rahul

//2. starting from one element
var nb = newarr.slice(1);
//between 1 and 4
document.write(nb);
//aman,rehman,rahul,karan



//reverse array 
marks.reverse();
console.log(marks);
// (3) [12, 34, 56]

//concat- 2nd array concatenated to first array
let marks1 = [10,20,30];
let marks2 = [1,2,3,4];

marks1 = marks1.concat(marks2);
console.log(marks1);
// (7) [10, 20, 30, 1, 2, 3, 4]

//map 
//works like the loop for 
var a = [1, 3, 5, 8];
console.log(a);
//used to create a new array multiply all by 10 
var b = a.map(test);
console.log(b);

function test(x){
    return x * 10;
}
// (4) [10, 30, 50, 80]
