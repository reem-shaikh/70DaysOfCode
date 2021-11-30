✅Js is dyanamically typed language
   it doesnt care what datatype is in the array
         
> dont start array with number 
         var arr = ["string", 10, false, 15.4333];
         console.log(arr);

# Arrays 

## Creating a new array 

```bash
const arr = new Array(23,11,21,'orange');
```

## Displaying items in array 

```bash
console.log(arr); // 23 11 21 orange
console.log(arr[1]); //11
```

## Accessing an Array item 
1. how to access array item 
- index of an array- starts from 0

- length: 5 (n)
- index: 4 (n-1)

   ```bash
   console.log(arr[0]);
   ```

# Update an array index 
2. How to Update 
        ```bash
        arr[1] = 20;
        console.log(arr);
        ```

        ```bash
        arr[0]= 'harry';
        console.log(arr);

        ```

# Length of the array 
> length of the array - length function
        ```bash
        var l = arr.length;
        console.log(l);
        ```

# Append to an array 
3. append to an array - push function
        ```bash
        arr.push("new element", "new element 2");
        console.log(arr);
        ```

# Display elements in the array 
4. Display elements in array using for loop 
        ```bash
        for(var i=0; i<arr.length; i++)
        {
            console.log(arr[i]);
        }
        ```
# Boolean array or not 

```bash
console.log(Array.isArray(arr)); //true 
console.log(Array.issArray('dsfs')); //false
```

# which index in the array, is the element located?
const marks = [12, 23, 23, 34, 56];

```bash
let value = marks.indexOf(12);
console.log(value); //index0
```

# Deleting elements from the array 

1. pop 
   remove element from end
```bash
marks.pop();
console.log(marks);
```
// (6) [100, 12, 23, 23, 34, 56]

2. shift 
   remove element from start 
```bash
marks.shift();
console.log(marks);
```

// (5) [12, 23, 23, 34, 56]

3. splice 
   remove element from position 
   - start index, remove these number of elements 

syntax#.
splice(start, end)

```bash
marks.splice(1, 2);
console.log(marks);
```
// (3) [12, 34, 56]

4. Slice 
   remove elements from existing array and place it in a new array.

syntax#.
slice(start, end) 

var newarr = ["sanjay", "aman", "rehman", "rahul", "karan"];

   1. between two elements
      ```bash
      var nb = newarr.slice(1,4);         //between 1 and 4
      document.write(nb, "<br>");
      ```
      //aman,rehman,rahul

   2. starting from one element
      ```bash
      var nb = newarr.slice(1);              //between 1 and 4
      document.write(nb);
      ```
     //aman,rehman,rahul,karan


# Reversing array 
```bash
marks.reverse();
console.log(marks);
```

// (3) [12, 34, 56]

# Concatenation
  2nd array concatenated to first array
let marks1 = [10,20,30];
let marks2 = [1,2,3,4];

```bash
marks1 = marks1.concat(marks2);
console.log(marks1);
```
// (7) [10, 20, 30, 1, 2, 3, 4]

# map function
  works like the for loop 

var a = [1, 3, 5, 8];
console.log(a); // 1 3 5 8
//used to create a new array multiply all by 10 

```bash
function test(x)
{
    return x * 10;
}

var b = a.map(test);
console.log(b);
```
// (4) [10, 30, 50, 80]


# Inputs and outputs:

✅Parameter & Arguments 
    function sum(a, b)
    **FORMAL parameters**
   **written inside function defination**
        {
            var sum = a+b;
            console.log("sum done");

            //return- the output of function
            return sum;
            console.log("after return");

            //anything written after return will never be executed

        }

        var num1 = prompt("enter num1");
        var num2 = prompt
        ("enter num2");
 

        var a = parseInt(num1);
        var b = parseInt(num2);

    var fin = sum(a, b);
   **ACTUAL PARAMETERS**
   **called during function invokation**

        console.log(fin);


parseInt- string to int conversion

Different ways of using parseInt:

1. 
var num2 = prompt("enter num")
var b = parseInt(num2);

2. 
parseInt("10")

❌ parseInt("abcd")
- console returns Nan
- Not a number

3. we can pass prompt inside parseInt
var a = parseInt(prompt("enter number"))

1. Functions
   peice of code which performs a specific functionality 

   - cannot start with number
   - can be alphanumeric

   syntax:
   function functionname()

2. Arrays: Collection of elements
   Different approach as compared to Java
>> Array is a container memory location which holds similar data type
   in other languages but,

 In JS.
 Array holds different data types- you can combine diff data types
 - **it is mutable (you can modify/change it)**
