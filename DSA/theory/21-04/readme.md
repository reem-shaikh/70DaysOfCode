1. Q. What are the run time environments for JS?
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

2. Q. what is an alternative to Node.js 
Deno.js created by the person who created Node.js
Deno.js supports typescipt, node.js doesnt support. 
Deno.js is better than Node.js 

3. Q. How to take inputs in console in JS 
readline allows us to get user input from console, the same way cin is used for cpp and int(input) is used in python. 

### An intro to readline module 
1. run `npm install` in the directory your going to be using this, since it needs the `package.json` file to execute
2. add this snippet to your JS file 
> test.js 
```bash 
# import readline 
const readline = require('readline')

# create instance of readline interface 
const rl = readline.createInterface({input : process.stdin, 
                          output: process.stdout})
# process - global object 
rl.question('enter your name', name => {
  console.log(`Hello ${name}`)
  rl.close()
})
```
3. Type `node test.js` in the root of the directory your testing this for
![](1.PNG)

### Spiral matrix traversal 
```bash 
# input 
matrix = [[1,2,3,4,5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
```
> Q. Print a spiral matrix of size n x n 
```bash 
# n x m matrix
# clockwise 
1  2   3   4   5
16 17  18  19  6
15 24  25  20  7
14 23  22   21 8
13  12  11  10 9
```
Lets discuss what approach we can solve this with
> 1. first approach: Algorithm 
```bash 
# taking 4 pointers 
top = 0 
down = n-1 
left = 0
right = n-1

# 0 means we move from lhs -> rhs 
# 1 means we move from top -> bottom
# 2 means we move from rhs -> lhs 
# 3 means we move from bottom -> top 

# if we want to move from left to right 
if(dir == 0) {
    for(let i=left; i<right; i++) {
        (a[top][i])
    }
    # now top will point to row 1
    top= top + 1
} 
# when we move from top -> bottom
else if(dir==1) {
    for(let i=top; i<down; i++){
        (a[i][right])
    }
    # move right pointer to left 
    right = right - 1
}
else if(dir==2){
    for(let i=right; i<left; i++){
        (a[down][i])
    }
    # move down pointer to up 
    down = down - 1
}
else if(dir==3){
    for(let i=down; i<top; i++){
        print(a[i][left])
    }
    left = left + 1
}

dir = (dir+1) % 4
# intiially value of dir = 0 
# at every iteration it increases
# when dir+1=4 then 4%4=0 then it moves back to the first position  

# the problem with this approach is the direction pointer 
# a problem with logic 
# time complexity is very high 
```
> 2. Second approach - no need to keep a count of the dir pointer because were anyways denoting the direction the pointer has to move in through `top / bottom / left / right`
```bash 
   <script>
  # at all 4 corners we'll take 4 pointers 
  # top pointer will change the row wise in a positive direction
  # right pointer will change row wise in a negative direction 
  # down pointer will change column wise in negative direction 
  # left pointer will change column wise in a psoitive direction
const matrix = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
  ];

const spiralOrder = matrix => {
    const result = [];
  
    # these are the count of row and column 
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    let top = 0;
    let bottom = rowCount - 1;
    let left = 0;
    let right = columnCount - 1;
  
    # for top and bottom were taking a different loop variable 
    # for left and right were taking a different loop variable 
    while (left<=right && top<=bottom) {
       # lhs -> rhs 
      for (let column = left; column <= right; column++) {
        # top is constant 
        # column is dyanamic 
        result.push(matrix[top][column]);
      }
    #increement top because we want it to point to the next row 
      top++;
  
      # top -> bottom
      for (let row = top; row <= bottom; row++) {
        # right is constant 
        # row is dyanamic 
        result.push(matrix[row][right]);
      }
    #move right pointer to the lhs 
      right--;
  
      # right -> left
      if (bottom >= top) {
        for (let column = right; column >= left; column--) {
        # bottom is constant 
        # column is dyanamic 
          result.push(matrix[bottom][column]);
        }
      }
    #move bottom pointer upwords which means we reduce it by 1 
      bottom--;
  
      # bottom -> top 
      if (right >= left) {
        for (let row = bottom; row >= top; row--) {
        # left is constant 
        # row is dyanamic 
          result.push(matrix[row][left]);
        }
      }
    #move left pointer to the rhs 
      left++;
    }
  
    return result;
  };

  console.log(spiralOrder(matrix))
</script>
```
> classcode 
```bash 
const DIRECTION_TOP    = 1;
const DIRECTION_LEFT   = 2;
const DIRECTION_BOTTOM = 3;
const DIRECTION_RIGHT  = 4;

# enter size of one row 
const n = prompt("Enter the size");
const n = 7;
console.log(n);

let direction = DIRECTION_TOP;
let row    = 0;
let column = 0;
let arr = [];

# another way to initalize the aray 
# let arr    = (new Array(n)).fill((new Array(n)).fill(undefined));

# iniitalizing the array 
for(let i = 0; i<n; i++) {
	arr[i] = [];
  for(let j=0; j < n; j++) {
    arr[i][j] = [];
  }
}
# console.log(arr);

for(let i = 1; i <= n*n; i++) {
  arr[row][column] = i;
  
  switch(direction) {
    # bottom to top 
  	case DIRECTION_TOP: #row--
    	if((row - 1) < 0 || arr[row - 1][column] != undefined) {
      	direction = DIRECTION_RIGHT;
        # after traversing to top when we reach the first row switch direction to right 
        # when we traverse bottom to top - row value decreases, column stays constant 
      }
      break;

    # rhs -> lhs 
    case DIRECTION_LEFT: #column--
    	if((column - 1 < 0) || arr[row][column - 1] != undefined) {
      	direction = DIRECTION_TOP;
      # after traversing to lhs when we reach the first column switch direction to top 
      # when we traverse from rhs -> lhs column value decreases, row remains constant 
      }
      break;

    # top to bottom
    # print bottom to top by traversing over the 1st column 
    case DIRECTION_BOTTOM: #row++
    	if((row + 1) >= n || arr[row + 1][column] != undefined) {
      	direction = DIRECTION_LEFT;
        # after traversing bottom when we reach the last row switch direction to lhs 
        # when we traversefrom top -> bottom, row value increases, column is constant 
      }
      break;

    # lhs -> rhs 
    case DIRECTION_RIGHT: #column++
    # print lhs to rhs by traversing over the first row 
    	if((column + 1) >= n || arr[row][column + 1] != undefined) {
        direction = DIRECTION_BOTTOM;
        # after traversing to rhs when we reach the last index switch direction to bottom
        # when we traverse from lhs -> rhs, column values increases, row is constant 
      }
      break;
    default:
    	break;
  }
  
  # changing direction 
  switch(direction) {
    # bottom to top 
  	case DIRECTION_TOP:
    	row--;
      break;

    # rhs to lhs 
    case DIRECTION_LEFT:
    	column--;
      break;

    # top to bottom
    case DIRECTION_BOTTOM:
    	row++;
      break;

    # lhs -> rhs
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
```
```bash 
1  2  3  4  5  6  7
24 25 26 27 28 29 8
23 40 41 42 43 30 9
22 39 48 49 44 31 10
21 38 47 46 45 32 11
20 37 36 35 34 33 12
19 18 17 16 15 14 13
```
#### Inverse Spiral 
```bash 
17  18  19  20  21 
16  5   6   7   22
15  4   1   8   23
14  3   2   9   24 
13  12  11  10  25
```















