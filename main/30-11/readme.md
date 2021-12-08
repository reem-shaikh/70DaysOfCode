## ✅what can JS do?
JS is universal language.

give functionality in webpage. both:
- frontend (client side)
- backend (server side)

### use cases:
- filter results on fipkart 
- change language on web page 
- automatically load google autocomplete

can create 
- mobile apps
- web apps
- iot 


## Why are we linking script in the body tag of the html file?
standard practice: mention script tag at the bottom of the body 

- html is rendered/ parsed line by line, we want to improve the loading time

- CSS is loaded before any content is loaded on the page

- JS gives functionality, if we place js on the top, then the content inside the body will be loaded late. 

- So we trade off appearance over performance, and lets the page load with its proper UI, Js might take say a couple seconds more, but until the user interacts with the js functionality the JS will already be loaded.  

## ECMA International
standardizing company: makes standards  for some programming language like Js

releases scripting standards:ECMAScripts
Latest release: jAVASCRIPT ES12 release 

***Most important release(2015): ES6***
> Js follows ECMA standards.

#### What were the features introduced in ES6?
1. let 
2. arrow functions 
3. Destructuring 
4. spread operators 
5. promises


## 🔳interview questions.
### Difference between java and js

✅Java
```bash
- OOP programming language
- requires jvm, run on vrtual machine 

- compiler language
  COMPILED INTO SINGLE FILE 
  AND THEN EXECUTED 
```


✅Js
```bash
- OOP scripting language 
- runs on browser only 
- intrepreted language- 
  EXECUTED LINE BY LINE 
```

HLL -UNDESTANDABLE BY HUMANS 
- JAVA, C, CPP, PYTHON etc 

LLL -UNDESTANDABLE BY MACHINES
- assembly code

process of compiling converts HLL -> LLL

## Q. Intrepreted vs Compile code.

Programming language= 
  scripting language 
+ compiler language


## ✅Scripting Language
Intrepreted 
line by line conversion HLL -> LLL 
- its slower because it has to execute with every line of code everytime a the code is revamped 

eg: CSS, JS, RUBY, PYTHON, PHP, VBA, ES, TYPESCRIPT

## ✅Compiler Language
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

## ✅loosely typed programming language/ dyanamically typed
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


#### Dates in JS
```bash
let myDate = new Date();
console.log(myDate);
```
Wed Dec 01 2021 12:50:39 GMT+0530 (India Standard Time)

>> Date Methods
```bash
console.log(myDate.getTime());
```
1638343239484

```bash
console.log(myDate.getFullYear());
```
2021

```bash
console.log(myDate.getDay());
```
3

```bash
sunday:    0
monday:    1
tuesday:   2
wednesday: 3
thurday:   4
friday:    5
saturday:  6
```

```bash
console.log(myDate.getMinutes());
```
50

```bash
console.log(myDate.getHours());
```
12


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

## Undefined vs Null 
1. Undefined: declared variable, but not defined yet 
```bash
   var a;
   console.log("a",a);
```

2. Null: you have defined variable to null. declaring, defining a variable to nothing
```bash
    var b = null;
    console.log("b",b);
```
null is a primitive datatype.
> technically, null is also an object 

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


## Hoisting
Variable Declaration will be moved at the top (of its function).

- works only with var 
- happens in the background of variables 
- applicable for functions and classes

1. Variable Declaration 
2. Variable Defination 

```bash 
var a;              //declaration 
a = 10;             //defination 
var abcd = 10; 
console.log(abcd);
```

- if you have declared, not defined variable
```bash
var a;
console.log(a);
```

### Why is it undefined? why haven't it crashed, why no error? 
you should not have access to variable before its defined.

bad practice:
```bash
    console.log(a);   //undefined
    var a = 10; 
    console.log(a);   //10
```
since were writing var a after console.log, hosting happens here 
and it moves declaration to the top, that's why there is no error 
shown.

> However, if there was no **var a = 10**
> then hoisting will not happen and hence it will show error.

```bash
    console.log(a);   //error
```
since its a bad practice, let is not allowed for hoisting.

# Keywords 
## This keyword 
### this keyword : Context keyword 
  this keyword: refers to the object it belongs to.
> this keyword is the reference to the current/parent object 

#### In a method it refers to the owner object 
#### Alone it refers to the global object 


It has differet values depending on where it is used:
#### 1. when this keyword used alone it represents the global object i.e the window object 
```bash
console.log(this);

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
***it will refer to the windows object (which is global object of the browser)***

#### 2. In Regular function, this refers to the global object (windows object)
#### This is also called Default Binding 
```bash
<script>
       function sum()
        {
            var add = 2+2;
            console.log("sum" +add);
            console.log(this);
        }
    sum();
</script>

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

#### 3. In a method, this refers to the owner object 
```bash
const thapa = 
        {
            name: "vinod thapa",
            qualif: "mcs",
            sum: function()
            //sum is called method 
            {
                var add = 2+2;
                console.log("add" +add);
                console.log(this); //this refers to the owner object 

                console.log("name", this.name);
                //this is called implicit binding 
                //the object that is standing after the dot is what the keyword 
                //will be bound to 
            }
        }

        thapa.sum();

console:
add4

thiskeyword.html:43 
{name: 'vinod thapa', qualif: 'mcs', sum: ƒ}
name: "vinod thapa"
qualif: "mcs"
sum: ƒ ()
[[Prototype]]: Object

name vinod thapa
```

### In web browsers, the window object is also the global object:
```bash
console.log(this === window); // true
```

#### This keyword wont work without an object 
```bash
function fn()
{
    console.log(this);
}

fn();

console:
window object 
```

### over here, were refering to the method function with the help of the object from outside 
```bash
 var calculator = {
            //calculator objects

            'num1': 0,
            'num2': 0,
            'mul' : function ()
            {
            //refer with help of object name from outside 
            let product = calculator.num1 * calculator.num2;
                        
            return product;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3; 

        var product = calculator.mul();
        console.log(product);
```

### better way to write this code, is using the this keyword 
```bash
    var calculator = {
            //calculator objects

            'num1': 0,
            'num2': 0,
            'mul' : function ()
            {
            let product = this.num1 * this.num2;
                        
            return product;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3; 

        var product = calculator.mul();
        console.log(product);

```
use this keyword because in case we change the object name from calculator 
to something else, then we'll have to manually change the inside objects

> Another example of this keyword 
```bash
<script>
        var obj1 = {
            'key1' : 19,
            'fun'  : function() 
            {
                console.log(this);
            }
        };

        obj1.fun();

        var obj2 = {
            'key2' : 1000,
            'fun'  : function() 
            {
                console.log(this);
            }
        };

        obj2.fun();
</script>

console: //prints the object for both the methods 
Objectfun: ƒ ()arguments: nullcaller: nulllength: 0name: "fun"prototype: {constructor: ƒ}[[FunctionLocation]]: this.html:13[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]key1: 19[[Prototype]]: Object
this.html:25 Objectfun: ƒ ()key2: 1000[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

```

#### 4. In a function, in strict mode, this keyword is undefined 
Js strict mode does not allow default binding 
```bash
"use strict"

        function sum()
        {
        var add = 2+2;
        console.log("sum" +add);
        console.log(this);
        }

        sum();
    
console:
sum4
thiskeyword.html:57 undefined
```

### ways to implement this keyword:
1. Default binding 
2. Implicit Binding  


## 1. Default Binding
when default binding applies, it refers to the window. 

we cannot use the this keyword without defining it inside an object, 
because this will give the windows object 
```bash
function fn()
{
    console.log(this);
}

fn();

console:
window object 
```
#### we can call a variable/ function through "this" keyword which has no object
However, we can call a variable through this keyword 
```bash

function fn()
{
    console.log(this.a);
}

var a = 5; 
fn();

console:
5
```

we can also call a function through this keyword 
```bash
function fn() {
console.log('ABCD');
}

this.fn();
```

## 2. Implicit Binding 
Implicit Binding is applied when you invoke a
function in an Object using the dot notation
```bash
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 
```

> In a constructor 
```bash
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```

#### This keyword refers to the context of execution 
```bash 
var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John
```

Drawback of this keyword:
sometimes IT BINDS TO WINDOWS OBJECT, SOMETIMES IT BINDS TO THE FUNCtION itself.
In arrow Keyword nothing in binded. but you cannot use them in method

## Default behavior 
when function is in an object 
```bash
        var obj =
        {
            'fn' : function() {
                console.log(this);
            }
        };

        obj.fn();
```

### Referring to the window object 
behavior when function is not in an object 
```bash
        function fn1()
        {
            console.log(this);
        }
        fn1();
```
this refers to owner, but we want a custom object 
**give custom value to the this keyword **
Functions that help us give cutom vale 
### call, apply, bind 
        
## call
call allows us to change code depending on context of execution
you are going to call a function and pass a context manually.
```bash
       function fn1()
        {
            console.log(this);
        }
        var obj = {
            'key1' : "value something",
            'key2' : "value of another",
        }

        fn1.call();
console:
windows object
```

#### call used to specify what custom property do you want to execute 
```bash
        function sum()
        {
            let total = this.num1 + this.num2;
            console.log(total);
        }

        // context 1
        var set1 = {
            'num1' : 10,
            'num2' : 40,
        }

        // context 2
        var set2 = {
            'num1' : 15,
            'num2' : 20,
        }

        // call wrt context 1
        sum.call(set1);

        // call wrt context 2
        sum.call(set2);

        //call used to specify what custom property do you want to execute 
        //over here this keyword points to parent object 

        sum();
        //this keyword points to window

console:
50
this.html:140 35
this.html:140 NaN
```
#### call is pointing to the object we mention 
```bash
        var obj = {
            'fn': function()
            {
                console.log(this);
                //this points to obj/ owner 
            },
            'key1': 'something',
        }

        obj.fn();
        // this has default behavior which points to the owner object 

console:
{key1: 'something', fn: ƒ}
fn: ƒ ()
key1: "something"
[[Prototype]]: Object


        // custom object 
        var obj2 = {
            'key2': 2000,
            'key1': 1000,
        }

        obj.fn.call(obj2);
        // this keyword (from top) points to custom object 
        // call is pointing to the object we mention

console:
{key2: 2000, key1: 1000}
key1: 1000
key2: 2000
[[Prototype]]: Object

        obj.fn();

console:
fn: ƒ ()
key1: "something"
[[Prototype]]: Object
```

### Calling with parameters
```bash
function fn(a, b, c)
{
    console.log(a);
    console.log(b);

    console.log(this);
}

let obj = {
    'key1' : 'something',
    'key2' : 'something',
}

fn.call(obj, 10, 'str');
// obj is the context object 
// all args after obj will be mapped to the parameters in function fn(a, b, c)

console: // 10 and str is stored in a and b 
10
this.html:129 str
this.html:130 Object>
```

JS Functions can be called through
- via call and apply
- as a constructor 
- as a method, defined in the object 

in call you individually mention each parameter
function.call(obj, a, b, c ...)
to improve readibility of code we have apply function

1:14 lec.

### apply 
```bash
// you can pass any number of elements using array 
// however to pass n number of parameters
// apply makes the process dyanamic 

function fn(a, b, c)
{
    console.log(a);
    console.log(b);
    console.log(this);
}

let obj = {
    'key1' : 'something',
    'key2' : 'something',
}

fn.call(obj, 10, 'strr');

let array_of_params = [20, 'str2'];
fn.apply(obj, array_of_params);

console:
10
this.html:129 strr
this.html:130 {key1: 'something', key2: 'something'}

this.html:128 20
this.html:129 str2
this.html:130 {key1: 'something', key2: 'something'}
```


### Bind 
1. Binding object 
2. Executing it with the variable you saved it 

Bind/ attach function context to execution 
create copy and pointing to variable "new_fn" where were saving it 

in call and apply function is executed,in case of bind function is not executed, 
its binded 

> Binds object and returns a new function context reference and returns the pointer 
> Only creates function copy and refers the context object 
> bind will return the newly created function reference, 
> that you will call manually later 

1. Binding object 
```bash 
function fn(a, b, c)
{
    console.log(a);
    console.log(b);
    console.log(this);
}

let obj = {
    'key1' : 'something',
    'key2' : 'something',
}

let new_fn = fn.bind(obj);  //doesnt display anything on console 
// doesnt execute function
// it only binds, it does not call

2. Executing it with the variable you saved it 
console.log(typeof new_fn); //function

console: 
function
```

## callback function
When your passing function as an argument into your main function, it becomes 
a callback.

  <!--attributes like src in script tag should only written in opening tag-->
```bash
    <script>
    // function can be written in variable 
    let fn = function()
        {
            console.log("this is a function");
        }
        
        fn(); // console: this is a function 

        // we can pass a function as a parameter or a return its called a call back 

    function another_func(parameter)
        {
            console.log(typeof parameter); 
            //console: function

            console.log("this is anothr fun");
            //console: this is another fun 

            parameter();   
            //console: this is a function
            //calling callback with round bracket

            //we can have mutiple callbacks 
        }

        // let a = 'string';
        // another_func(a);

        another_func(fn);
        // first fn function is executed 
        // second another_func is executed 

console:
this is a function
callback.html:23 function
callback.html:24 this is anothr fun
callback.html:24 this is a function
```

> another example of callback 
```bash
  let arr = ["string1", "element2"];

    let cb = function(element)
    {
        console.log("callback function");
        console.log(element);
    }
    arr.forEach(cb);

console:
callback function
callback.html:32 string1
callback.html:31 callback function
callback.html:32 element2
```

//instead of using for loop like this we can use forEach
```bash
for( i=0; i<arr.length; i++)
{
    element = arr[i];
}
```

> another example
```bash
 function cooking(what_todo_next)
        {
            console.log('cooking started');
            //take time 
            console.log('cooking finished');

           what_todo_next();
        }

        // we can have multiple callbacks 
        let callback_fn = function()
        {
            console.log("bringing food");
        }

        cooking(callback_fn);

console:
cooking started
callback.html:18 cooking finished
callback.html:26 bringing food
```

## Closure
( writing function inside a function)
> combination of many functions combined in another function 
> like nesting of functions 

```bash
function a()
{  
   console.log("a is called");
   function b()
   {
     console.log("b is called");
   }

   function c()
   {
     console.log("c is called");
   }

}

a(); 
// function invokation only for a, that why output for a 
// there is no function invokation for b and c 

console: 
a is called 
```

#### Why do we need closure ?
it helps in keeping functions secure. Because function b has its limited scope 
within curly braces 

if you call b() or c() below a it will give Uncaught reference error 
because were trying to invoke it outside its scope 


```bash
function a()
{  
   console.log("a is called");
   function b()
   {
     console.log("b is called");
   }

   function c()
   {
     console.log("c is called");
   }

   // b();
   // c(); if you want to invoke here 
}

b();  //error 
 
console: 
Uncaught reference error: b is not defined 
```



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
```bash
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
```

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

### DOM manipulation (Document Object Model)
document is used to access HTML page elements to add dyanamic properties to it.

#### How does JS interact with HTML document?
- Document Object Model 
When html document is loaded in the browser corresponding to that document 
there is a new document ina  different format created for JS called DOM,
JS can easily intrepret DOM format. since it can only operate on objects and 
cannot access html tags.

> each tag in html is represented as objects in DOM.
> There is also a herierchy in DOM. It contains 3 primary nodes.
1. element node:   <head>, <body>
2. attribute node:  id/ class 
3. text node:       content inside element 

> we either get or set values 
- set: to change properties of element 
- get: to fetch value of elements


#### We can target DOM object through the following:
1. Id: document.getElementById
2. Class Name: document.getElementsByClassName
3. Tag Name: document.getElementsByTagName

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    
</head>
<body>
    <div id="wrapper">
        <div id="header">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</html>
```

#### This command converts html code to DOM 
```bash
 <script>
        var element;
        element = document; 
        console.log(element);
    </script>
```

#### Creating an array and returning all html tags mapped with numbers
```bash
<script>
        var element;
        element = document.all; 
        console.log(element);
</script>

HTMLAllCollection(23) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]0: html1: head2: meta3: meta4: meta5: title6: body7: div#wrapper8: div#header9: h110: div#menu11: ul#list12: li13: a14: li15: a16: li17: a18: div#content19: h220: img21: p22: script23: script24: stylecontent: div#contentheader: div#headerlist: ul#listmenu: div#menuviewport: metawrapper: div#wrapperlength: 25[[Prototype]]: HTMLAllCollection
```

```bash
document.all[2];

meta
```


### targetting an element node 
```bash
<script>
        var element;
        element = document.head; 
        console.log(element);
</script>
```
#### Diplays the title name "DOM" specified in the title tag
```bash
<script>
        var element;
        element = document.title;  //DOM
        console.log(element);
</script>
```

#### Displays everything in the body section of the document format conversion of html document 
```bash
 <script>
        var element;
        element = document.body; 
        console.log(element);
</script>
```

#### Displays all the collection of anchor tags in the document 
```bash
    <script>
        var element;
        element = document.links; 
        console.log(element);
    </script>

HTMLCollection(3) [a, a, a]0: a1: a2: alength: 3[[Prototype]]: HTMLCollection
```
#### Targetting a  specific anchor tag: say at 0'th index; i.e the first anchor tag 
```bash
   <script>
        var element;
        element = document.links[0]; 
        console.log(element);
    </script>
```

#### Displaying all the images in the document  
```bash
   <script>
        var element;
        element = document.images; 
        console.log(element);
    </script>

HTMLCollection(2) [img, img]0: img1: imglength: 2[[Prototype]]: HTMLCollection
```

#### Targetting a specific image (1st image) in the document 
```bash 
   <script>
        var element;
        element = document.images[0]; 
        console.log(element);
    </script>
```

#### Displaying doctype
```bash
   <script>
        var element;
        element = document.doctype; 
        console.log(element);
    </script>

<!DOCTYPE html>
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: true
lastChild: null
name: "html"
nextSibling: html
nodeName: "html"
nodeType: 10
nodeValue: null
ownerDocument: document
parentElement: null
parentNode: document
previousSibling: null
publicId: ""
systemId: ""
textContent: null
[[Prototype]]: DocumentType
```

#### Displays the URL of the website 
```bash
    <script>
        var element;
        element = document.URL; 
        console.log(element);
    </script>

http://127.0.0.1:5500/main/30-11/js1.html

//to display URL we can also use 
    <script>
        var element;
        element = document.baseURI; 
        console.log(element);
    </script>
```

### Targetting the attribute node 
There are certain DOM methods to display HTML dyanamically

#### 1. document.getElementById("id name")
   used to target element by its id. 
```bash 
 <script>
        var element;
        element = document.getElementById("header"); 
        console.log(element);
</script>

div#header...
```

#### 2. document.getElementsByClassName("class name")
```bash
   <script>
        var element;
        element = document.getElementsByClassName("para"); 
        console.log(element);
    </script>

HTMLCollection(2) [p.para, p.para]
0: p.para
1: p.para
length: 2
[[Prototype]]: HTMLCollection
```

```bash
//targetting the first paragraph
   <script>
        var element;
        element = document.getElementsByClassName("para")[0]; 
        console.log(element);
    </script>

p.para
```
#### 3. document.getElementsByTagName("tag name")
```bash
    <script>
        var element;
        element = document.getElementsByTagName("ul"); 
        console.log(element);
    </script>
```

```bash
//targetting the first ul
    <script>
        var element;
        element = document.getElementsByTagName("ul")[0]; 
        console.log(element);
    </script>

ul#list
```


## We either get or set values 
- set: to change properties of element 
- get: to fetch value of elements

What can we get and set with DOM?
1. HTML
2. text
3. attribute

### DOM Get Methods:
1. innerText- returns the text inside the element specified 
2. innerHTML
3. getAttribute
4. getAttributeNode 
5. Attributes

### DOM Set Methods:
1. innerText
2. innerHTML
3. setAttribute
4. Attribute
5. removeAttribute

# DOM Get Methods
### 1. innerText 
extracts the text from a given id and returns it

```bash 
<script>
        var element;
        element = document.getElementById("header").innerText; 
        console.log(element);
</script>

heading
```

### 2. innerHTML
displays all the html inside the tag 

```bash 
<script>
        var element;
        element = document.getElementById("content").innerHTML; 
        console.log(element);
</script>

 <h2>sub heading</h2>
    <img src="" alt="">
    <img src="" alt="">
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

```

### 3. getAttribute
returns the value of class/ id

```bash 
//we make following changes in the code 

<body>
    <div id="wrapper">
        <div id="header" class="abc" style="border: 1px solid red;" > //added 
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
    <!--all the commands in dom.md -->

    <script>
        var element;
        element = document.getElementById("content").getAttribute("para"); 
        console.log(element);
    </script>


</body>
```

#### returns the classname 
```bash 
 <script>
        var element;
        element = document.getElementById("header").getAttribute("class"); 
        console.log(element);
</script>

abc 
```

#### returns the id name 
```bash 
<script>
    var element;
    element = document.getElementById("header").getAttribute("id"); 
    console.log(element);
</script>

header
```

### 4. getAttributeNode
returns the property name and value 

```bash
 <script>
        var element;
        element = document.getElementById("header").getAttributeNode("style"); 
        console.log(element);
</script>


style
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "style"
name: "style"
namespaceURI: null
nextSibling: null
nodeName: "style"
nodeType: 2
nodeValue: "border: 1px solid red;"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "border: 1px solid red;"
value: "border: 1px solid red;"
[[Prototype]]: Attr
```


```bash
<script>
        var element;
        element = document.getElementById("header").getAttributeNode("style").value; 
        console.log(element);
</script>

border: 1px solid red;
```

### 5. Attributes 
returns an object 

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes;
        console.log(element);
    </script>

NamedNodeMap {0: id, 1: class, 2: style, id: id, class: class, style: style, length: 3}
0: id
1: class
2: style
class: class
id: id
style: style
length: 3
[[Prototype]]: NamedNodeMap
```

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1];
        console.log(element);
    </script>

class
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "class"
name: "class"
namespaceURI: null
nextSibling: null
nodeName: "class"
nodeType: 2
nodeValue: "abc"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "abc"
value: "abc"
[[Prototype]]: Attr
```

#### returned the value of attribute 1 
```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1].value;
        console.log(element);
    </script>

abc 
```

# DOM Set Methods
### 1. innerText
This doesn't print in the h1 tag format on the viewport 

```bash
<script>
    var element
    element = document.getElementById('header').innerText = "wow";
    console.log(element)
</script>
```
> to print in h1 tag format we need to use innerHTML
### 2. innerHTML

```bash
 <script>
    var element;
    document.getElementById('header').innerHTML = "<h1>wow</h1>";
    element = document.getElementById("header").innerHTML;
    console.log(element)
</script>
```

### 3. setAttribute
changes attribute (class/id) name.
> no need to remember index number 

```bash
//were renaming class="abc" to class="xyz"
<script>
    var element;
    document.getElementById('header').setAttribute("class", "xyz");
    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>

xyz
```

### 4. Attribute 
we can change value using index numbers 

```bash
<script>
    var element;
    document.getElementById('header').attributes[1].value = "sdf"; 
    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)

</script>

sdf 
```

### 5. removeAttribute
removes a specific property from an attribute.

```bash 
<script>
    var element;
    document.getElementById('header').removeAttribute("style"); 
    // over here were removing border: 1px solid red on the header class

    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>
```


# Javascript Basic Events 
when we call an event function will be run 

### Button events 
1. Click 
2. Double Click 
3. Right Click 

### Mouse Events 
4. Mouse Hover 
5. Mouse Out 
6. Mouse Down 
7. Mouse Up 

### Keyboard Events 
8. Key Press
9. Key Up 

### windows Events 
10. Load 
11. Unload 
12. Resize 
13. Scroll 


## 1. click
**onclick* 
> On clicking on the button, the function will be loaded 

```bash
<script>
<head>
    function hello()
        {
            document.write("hello everyone");
        }

    </script>
</head>
<body>
    <button onclick="hello()">click me</button>
</body>
```
## 2. Double click 
*ondblclick**
> when clicking on the button twice the function will be loaded 

```bash 
 <button ondblclick="hello()">click me</button>
```

## 3. Right Click 
*oncontextmenu**
> when right clicking on the button once the function will be loaded 

```bash 
<button oncontextmenu="hello()">click me</button>
```

## 4. Mouse Hover 
*onmouseenter**
> when hovering over the button the function will be loaded 

```bash
<button onmouseenter="hello()">click me</button>
```

## 5. Mouse Out 
*onmouseout**
> as long as you hover on the button nothing will be shown, but when you hover out 
the function will be loaded AKA Event will be called 

```bash
 <button onmouseout="hello()">click me</button>
```

## 6. Mouse Down 
*onmousedown**
same as onclick.

```bash 
<button onmousedown="hello()">click me</button>
```

## 7. Mouse Up 
*onmouseup**
as you click on the button, nothing happens, as you release event will be called.

```bash 
<button onmouseup="hello()">click me</button>
```

## 8. Key Press
*onkeypress**
as soon as you press a keyword key, the function will be executed 
- works only in forms/ body tag

```bash
<body onkeypress="hello()">
 //press any key on the page and event will be called 
</body>
```

## 9. Key Up 
*onkeyup**
as you press a keyword key, and release it, the function will be executed 
```bash
<body onkeyup="hello()">
</body>
```

## 10. Load 
*onload**
on refreshing the page, event will be triggered 

```bash
<body onload="hello()">
</body>
```

## 11. Unload 
*onunload**
before you close the page, event will be triggered 

## 12. Resize 
*onresize**
whenever we resize the page, the event will be called 
```bash
<body onresize="hello()">

</body>
```
## 13. Scroll 
*onscroll**
whenver we scroll the event will be called 
```bash
<body onscroll="hello()">

</body>
```
## Drawback of Basic JS Events 
A drawback from the Basic JS events was that for adding html event attributes 
you would have to manually use it on every element in the html file, 
so in order to make our JS events completely in the js file, we can follow 
either of these two methods:





