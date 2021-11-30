✅what can JS do?
JS is universal language.

give functionality in webpage. both:
- frontend (client side)
- backend (server side)

use cases:
- filter results on fipkart 
- change language on web page 
- automatically load google autocomplete

can create 
- mobile apps
- web apps
- iot 

🔳interview questions.

✅Java
- OOP programming language
- requires jvm, run on vrtual machine 

- compiler language
  COMPILED INTO SINGLE FILE 
  AND THEN EXECUTED 


✅Js
- OOP scripting language 
- runs on browser only 
- intrepreted language- 
  EXECUTED LINE BY LINE 

HLL -UNDESTANDABLE BY HUMANS 
- JAVA, C, CPP, PYTHON etc 

LLL -UNDESTANDABLE BY MACHINES
- assembly code

process of compiling converts HLL -> LLL

Q. Intrepreted vs Compile code.

Programming language= 
  scripting language 
+ compiler language


✅Scripting Language
Intrepreted 
line by line conversion HLL -> LLL 
- its slower because it has to execute with every line of code everytime a the code is revamped 

eg: CSS, JS, RUBY, PYTHON, PHP, VBA, ES, TYPESCRIPT

✅Compiler Language
Compiled
completely source code compiled from HLL -> LLL
- compiled is faster because its executed once when file is saved and run 

eg: SCSS, SASS, JAVA, KOTLIN


✅Strongly typed programming language
first time assignment, we have to give data type, it cannot be changed in future.

eg: java code
int another = 10;
another = false;
❌throws error, because were assigning a boolean value to int code 

✅loosely typed programming language/ dyanamically typed
**type of data being stored in a variable can changed at any point of time** 

JS is loosely typed. it doesnt care what datatype your storing in variable

       var another= 10;
       console.log(another);

       another= "string"; //updating with datatype string
       console.log(another);

       another= false; //updating with datatype string
       console.log(another);

       number1 = "sting"
       console.log(number1)

       number1= false;
       console.log(number1)


## JavaScript: 
used both in frontend and backend 

***Runs in the Client-side***
   can implement logic in the client-side without the need to reach the server 
***Runs in the server-side***
   Using Node Js (server side Run time environment)

- JS helps in creating dyanamic web applications and websites  
> ***allows us to add dyanamic behavior to webpage***

## Request- Response flow 
working of websites 
 
1. Client requests for website 
web server   <------------------------------ client

2. Web server does processing using a dyanamic language (PHP/ Python/ Node Js) and returns the response to client in the form of html, css and JS.

3. CSS & Js will be embedded in HTML and this bundle will be send to your browser at client-side.
web server ------------------------------> client


#### Basic Requirments to biuld a website:
- HTML: must                (skeleton)
Markup language used for giving skeleton to web applications/ websites 

- CSS: designing            (features)
Markup langauge used to handle presentation of html webpage 

- JS: Client-side scripting  (brain)
  High level dyanamic intrepreted programming language 

### 1. Scripts can be executed on the browser itself.
> JS can be run on chrome developer tools -> console

## Js Console API 
ways to print on console:

### Alert command 
Get a pop up box 

```bash
   alert('hello world');
```

### Console.log command
 prints on the console 

```bash
  console.log("hello world");
```
VM476:1 hello world

### Document.write 
 prints on the webpage 

```bash
document.write("this is doc write");
```

### Console.error 
displays error on the console 

```bash
console.error("this is an error");
```
VM842:1 this is an error

### Console.warn 
displays a warning message 

```bash
console.warn("this is a warning");
```
VM916:1 this is a warning

### console.clear 
to clear the console 

```bash
console.clear();
```

### console.assert 
if both values are not equal then show an error 

```bash
console.assert(4==6);
```
VM1031:1 Assertion failed: console.assert

> if both values are equal, then dont show error 
```bash
console.assert(4==4);
```
undefined

### 2. Js can be executed on browser, as well as the server 
> Js can be used in the backend using Node Js 
In order for the server to process the client-side request, it needs to use a dyanamic language, if you want to use Js on the backend you need to use Node Js.

#### What is Node Js?
Node Js is a JS runtime environment which uses v8 Js engine.

Initially Js was only a client side language

Initially JS was used only for frontend 
> Js is a programming language that can be run on the console
> search engines has an inbiult JS Engine which converts Js code to machine level code 
- chrome uses V8 Js Engine (Js Engine helps in running JS)

v8 was used to create a runtime environment that could be run on the machine 
this runtime environment is called Node Js 

Node Js can be used as a server side component.

### Frontend frameworks in Js
***Angular, React***

### Server frameworks in Js
***Express Js***

### 3. There are languages that get transpiled to JS
Languages that are biult on top of JS.
> but in order to use them, they must be transpiled/ converted to Js
***CoffeeScript, Typescript***

# JS Variables 
container to store data values 

```bash
var number1 = 34;
var number2 = 36;
console.log(number1 + number2);
```
### Data Types in JS 
At a High level there are broadly two datatypes.

#### 1. Primitive Datatype 
datatypes that are singular element

- undefined 
- null 
- number 
- string 
- boolean 
- symbol

#### 2. Referenced Datatypes
datatypes that have multiple elements 

- Arrays 
- Objects 

1. number
```bash
var num1 = 10;
var num2 = 12.55;
```

2. string
```bash 
var str1 = "this is a string";
```

## String methods in Javascript 
let mystr = "hi, I am a string";

```bash
console.log(mystr.length)
17

console.log(mystr.slice(1,5)) 
i, I

console.log(mystr.indexOf("am"))
VM5443:1 6
// count starts from 0, spaces are also counted 

let mystr1 = "hi, I am a string am";
console.log(mystr1.lastIndexOf("am"))
18

d = mystr1.replace("hi","bye");
console.log(d);
//bye, I am a string am 

```

3. Object
```bash
var marks = 
{   
   ravi: 34, 
   shubham: 78,
   harry: 99.987
}
```

4. Boolean
```bash
var a = true;
console.log(a);
```

5. Undefined 
created a variable and didnt mention what variable to return.
```bash
var und;
console.log(und);
```
undefined

6. null 
nothing in placed inside this variable 
```bash
var n = null; 
console.log(n);
```

7. Arrays 
collection of elements/ strings/ booleans.
in JS, array is a collection of multiple datatypes of elements.
```bash
var arr = [1,"reem",3,4,5.55];
console.log(arr);
```
# Array methods 

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

## Sort an array 
```bash 
arr.sort();
```

## Convert array to string 
```bash 
arr.toString();
```

## Update an array index 
        ```bash
        arr[1] = 20;
        console.log(arr);
        ```

        ```bash
        arr[0]= 'harry';
        console.log(arr);

        ```

## Length of the array 
        ```bash
        var l = arr.length;
        console.log(l);
        ```

## Append to an array 
        ```bash
        arr.push("new element", "new element 2");
        console.log(arr);
        ```

## Display elements in the array 
        ```bash
        for(var i=0; i<arr.length; i++)
        {
            console.log(arr[i]);
        }
        ```
## Boolean array or not 
```bash
console.log(Array.isArray(arr)); //true 
console.log(Array.issArray('dsfs')); //false
```

## which index in the array, is the element located?
const marks = [12, 23, 23, 34, 56];

```bash
let value = marks.indexOf(12);
console.log(value); //index0
```

## Deleting elements from the array 

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
      var nb = newarr.slice(1,4);            //between 1 and 4
      document.write(nb, "<br>");
      ```
      //aman,rehman,rahul

   2. starting from one element
      ```bash
      var nb = newarr.slice(1);              //between 1 and 4
      document.write(nb);
      ```
     //aman,rehman,rahul,karan


## Reversing array 
```bash
marks.reverse();
console.log(marks);
```

// (3) [12, 34, 56]

## Concatenation
  2nd array concatenated to first array
let marks1 = [10,20,30];
let marks2 = [1,2,3,4];

```bash
marks1 = marks1.concat(marks2);
console.log(marks1);
```
// (7) [10, 20, 30, 1, 2, 3, 4]


## Concatenating 
### 1. two strings
```bash
var str1 = prompt('enter str 1') //ab
var str2 = prompt('enter str 2') //cd
var con = str1 + str2
alert(con) //abcd
```

## 2. adding two numbers
```bash
var str1 = 10
var str2 = 20
var con = str1 + str2
console.log(con) //30
```

## 3. adding number + string 
```bash
var str1 = 'string'
var str2 = 20
var con = str1 + str2
console.log(con) //string20
```

## convert string to num
```bash
var a = prompt('enter a')     //5
var b = prompt('enter b')    //4
var num1 = parseInt(a)      //converts to int
var num2 = parseInt(b)
var con = num1 + num2     //9
alert(con)
```


## map function
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


# Operators in Js 
### 1. Arithmetic operators 
```bash
var a = 34;
var b = 56;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
```

### 2. Assignment operator (=)
```bash
var c = b;
console.log(c); 
```

### 3. Comparison Operator
```bash
var x = 34;
var y == 56;
console.log(x == y);    //false 
console.log(x >= y);    //false
console.log(x <= y);    //true
console.log(x < y);     //true
console.log(x > y);     //false
```

### 4. Logical Operators 
#### Logical And (x)
```bash
console.log(true && true);    //true 
console.log(true && false);   //false
console.log(false && false);  //false
```

#### Logical Or (+)
```bash
console.log(true || true);    //true 
console.log(true || false);   //true
console.log(false|| false);   //false
```

### Logical not 
```bash
console.log(!false);          //true
console.log(!true);           //false
```

### Difference btw =, ==, ===
## Strict equality Operator (===)
> Checks DATATYPE and VALUE 
```bash
    if ('10' === 10) //comparing string and number 
    {
    console.log('same datatype')
    } else 
    {
    console.log('different datatype') //displays this
    }
```
```bash
    if (10 === 10) 
    {
    console.log('same datatype') //displays this
    } else 
    {
    console.log('different datatype')
    }
```

## Equality/ Abstract comparison Operator (==)
> checks only for VALUE, doesn't care about DATATYPE
```bash
    if ('10' == 10)
    {
        console.log('same datatype')  //displays this
    } else 
    {
        console.log('different datatype')
    }
```

## Assignment Operator (=)
> used for assignment


# JS Functions 
DRY: Do not repeat yourself 

```bash
function avg(a, b)
{
return (a + b)/2;
}

c1 = avg(4,6);
console.log(c1);
```

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


# Conditionals in Js 
1. If Statement 
```bash
var age = 34;
if (age > 8)
{
console.log("you are not a kid");
}
```

2. If- else Statement
```bash
if()
{
console.log();
}
else
{
console.log();
}
```

3. If - Else Ladder
```bash 
var age = 34;
if ()
{
console.log();
}
else if ()
{
console.log();
}
else
{
console.log();
}
```

# Loops in JS 
### 1. For loop
```bash 
var arr = [1,2,3,4,5];
console.log(arr);
for(var i=0; i<arr.length; i++>)
{
console.log(arr[i]);
}
```

### 2. forEach loop
```bash 
var arr = [1,2,3,4,5];
console.log(arr);
arr.forEach(function(element)
{
console.log(element)
})
```
```bash
Array(5)
js1.html:16 1
js1.html:16 2
js1.html:16 3
js1.html:16 4
js1.html:16 5
```

### 3. While loop 
```bash 
let j = 1;
while(j < arr.length)
{
   console.log(arr[j]);
   j++;
}

js1.html:24 2
js1.html:24 3
js1.html:24 4
js1.html:24 5
```

### 4. Do-While loop 
prints the wrong last value, which does not to be included atleast once 

```bash
let k =1;
do
{
   console.log(arr[k]);
   k++;
}
while(k < arr.length);

js1.html:24 2
js1.html:24 3
js1.html:24 4
js1.html:24 5
```

```bash 
let i= 10;
do
{
    i++;
    console.log(i);
}
while(i<20);

js1.html:41 11
js1.html:41 12
js1.html:41 13
js1.html:41 14
js1.html:41 15
js1.html:41 16
js1.html:41 17
js1.html:41 18
js1.html:41 19
js1.html:41 20
```


