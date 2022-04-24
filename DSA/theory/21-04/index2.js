const DIRECTION_TOP    = 1;
const DIRECTION_LEFT   = 2;
const DIRECTION_BOTTOM = 3;
const DIRECTION_RIGHT  = 4;


// const readline = require('readline')

// const n = readline.createInterface({input : process.stdin, 
//                           output: process.stdout})
// n.question('enter the number', num => {
// console.log(`${num}`)
//   n.close()
// })

// const n = prompt("Enter the size");
const n = 7;
// console.log(n);

var row    = 0;
var column = 0;
var arr = [];
for(var i = 0; i<num; i++) {
    arr[i] = [];
  for(var j=0; j < num; j++) {
    arr[i][j] = undefined;
  }
}
// console.log(arr);

for(var i = 1; i <= num*num; i++) {
  arr[row][column] = i;

var row    = 0;
var column = 0;
var arr = [];
for(var i = 0; i<n; i++) {
    arr[i] = [];
  for(var j=0; j < n; j++) {
    arr[i][j] = undefined;
  }
}

for(var i = 1; i <= n*n; i++) {
  arr[row][column] = i;

let direction = DIRECTION_TOP;
  
  switch(direction) {
  	case DIRECTION_TOP:
    	if((row - 1) < 0 || arr[row - 1][column] != undefined) {
      	direction = DIRECTION_RIGHT;
      }
      break;
    case DIRECTION_LEFT:
    	if((column - 1 < 0) || arr[row][column - 1] != undefined) {
      	direction = DIRECTION_TOP;
      }
      break;
    case DIRECTION_BOTTOM:
    	if((row + 1) >= n || arr[row + 1][column] != undefined) {
      	direction = DIRECTION_LEFT;
      }
      break;
    case DIRECTION_RIGHT:
    	if((column + 1) >= n || arr[row][column + 1] != undefined) {
        direction = DIRECTION_BOTTOM;
      }
      break;
    default:
    	break;
  }
  
  switch(direction) {
  	case DIRECTION_TOP:
    	row--;
      break;
    case DIRECTION_LEFT:
    	column--;
      break;
    case DIRECTION_BOTTOM:
    	row++;
      break;
    case DIRECTION_RIGHT:
    	column++;
      break;
    default:
    	break;
  }
}

let output = "";
for(let i = 0; i < arr.length; i++) {
  const row = arr[i];
  if(i == 0) {
    output = output + row.join("  ");
  } else {
    output = output + row.join(" ");
  }
  output = output + "\n";
}
console.log(output);