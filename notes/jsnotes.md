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


### How JS works?
1. JS is an intrepreted language, it parses code line by line 
2. JS is a client side, scripting language 

```bash
Every browser has a specific JS engine, on which code is run on, which returns the output 

Browser        JS engine
Google chrome  V8 Engine
IE             chakra
Mozilla        spider Monkey 
Safari         safari
```

```bash 
.JS file  --> run on browser (contains JS Engine) 
              Parser -> AST -> machine code -> code runs

✅Parser- its inside the JS engine, which parses the JS file line by line 
✅AST- when parser succesfully parses the JS file, it produces AST (abstract syntax tree), which helps in converting to machine code
```

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

### History Of JS
1. Netscape created JS in 1996 and submitted the code to ECMA
2. Release one: EcmaScript 1 (1997)
ECMA (European Computer Manufacturers Association)
3. Release two: EcmaScript 2 (1998)
4. Release three: EcmaScript 3 (1999)
5. Release five: Ecmascript 5(2009)
   five versions:
   - Ecmascript 5.1 (2011)
#### 6. Release 6: Ecmascript 2015 (ES6): major update 
- new methods 
- OOPS Concepts 

7. Ecmascript 2016 (ES7)
8. Ecmascript 2017 (ES8)
9. Ecmascript 2018 (ES9)


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

console:
VM476:1 hello world
```
### Document.write 
 prints on the webpage 

```bash
document.write("this is doc write");
```

### Console.error 
displays error on the console 

```bash
console.error("this is an error");

VM842:1 this is an error
```
### Console.warn 
displays a warning message 

```bash
console.warn("this is a warning");

console:
VM916:1 this is a warning
```
### console.clear 
to clear the console 

```bash
console.clear();
```

### console.assert 
if both values are not equal then show an error 

```bash
console.assert(4==6);

console:
VM1031:1 Assertion failed: console.assert
```
> if both values are equal, then dont show error 
```bash
console.assert(4==4);

console:
undefined
```
### console.dir 
its a console command used to see all the list of properties of a JS object 

```bash
    <script>
        const arr = [1,2,3,4]
        console.dir(arr)
        ✅console.dir makes a copy of the reference before logging
        //prints object properties in a JSON like tree

        console.log(arr)
        ✅console.log takes direct reference of the object while logging
        //prints object like a tree 
    </script>
```

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

### 3. There are languages that get transpiled (taking source code written in one language and converting them to another language) to JS
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
- number (-9007199254740991 to 9007199254740991)
- bigInt (1.7976931348623157e+308)
- string 
- boolean 
- Nan

> Safe range- int range 
```bash 
Number.MAX_SAFE_INTEGER;

console:
9007199254740991
```
> Bigger than this number, is BigInt datatype 
```bash 
Number.MAX_VALUE;

console:
1.7976931348623157e+308
```
#### 2. Referenced Datatypes
datatypes that have multiple elements 

- Arrays 
- Objects 

## difference between == , = and ===
- == checks for data values 
- === chcecks for value + datatype 
- = assignment operator 

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
##  REGEX
pattern matching/ string matching 

> used for 
1. email validation 
2. password validation 

```bash 
pattern       character includes 
  [abc]           a / b / c 
  [^abc]          any ch except a/b/c  
  [a-z]           a - z 
  [A-Z]           A - Z  
  [a-z A-Z]       a-z, A-Z
  [0-9]           0-9
   
```

Quantifiers: signify repetetion
```bash 
pattern            meaning
[ ]                occurs 1 time 
[ ]?               occurs 0 or 1 times 
[ ]+               occurs 1 or more times 
[ ]*               occurs 0 or more times 
[ ]{n}             occurs n times 
[ ]{n, }           occurs n or more times 
[ ]{y,z}           occurs atleast y times, but less than z times 

```

REGEX Meta characters: short form 
> /  treats character as search character 

```bash 
instead of writing this           you can write this 
[0-9]                             \d 
[^0-9]                            \D
[a-zA-Z_0-9]                      \w
[^ a-zA-Z_0-9]                    \W
```

#### Examples
1. mobile number 
start with 8 or 9, total digit 10 
#### [8 9][0 - 9]{9}

2. first character uppercase, contains lowercase alphabet, only one digtit allowed in between
#### [A-Z][a-z]* [0-9] [a-z]*

3. email ID 
hi.123 @ gmail . com 
#### [a-zA-Z0-9_ \- \. ]+ [@] [a-z]+ [\.][a-z]{2,3}

> - has predifined meaning attached to it, thats why we use it like \-
> . has predifined meaning attached to it, thats why we use it like \.

------

### Math methods in JS 
```bash 
1. ceil(x)
2. floor(x)
3. round(x)
4. trunc(x)
5. max(x,y,z... n)
6. min(x,y,z... n)
7. sqrt(x)
8. cbrt(x)
9. pow(x, y)
10. random()
11. abs(x)
12. PI 
```
```bash 
    <script>
        1. ceil(x)
        //works for float values
        //returns upper value of nearest integer 
        var a = Math.ceil(5.2)
        document.write("ceil 5.2: " + a + "<br>")
✅ceil 5.2: 6

        var a = Math.ceil(-5.2)
        document.write("ceil -5.2:  " + a + "<br>")
✅ceil -5.2: -5

        2. floor(x)
        //returns lower value of nearest integer 
        var a = Math.floor(5.2)
        document.write("floor 5.2: " + a + "<br>")
✅floor 5.2: 5

        var a = Math.floor(-5.2)
        document.write("floor -5.2:  " + a + "<br>")
✅floor -5.2: -6

        3. round(x)
        //if more than 0.5 value returns upper value 
        //if less than 0.5 value returns lower value 
        var a = Math.round(5.2)
        document.write("round 5.2: " + a + "<br>")
✅round 5.2: 5

        var a = Math.round(5.6)
        document.write("round 5.6: " + a + "<br>")
✅round 5.6: 6

        var a = Math.round(-5.2)
        document.write("round -5.2:  " + a + "<br>")
✅round -5.2: -5

        4. trunc(x)
        //returns the integer value, it skips the value after the . 
        var a = Math.trunc(5.2)
        document.write("trunc 5.2: " + a + "<br>")
✅trunc 5.2: 5

        var a = Math.trunc(-5.2)
        document.write("trunc -5.2:  " + a + "<br>")
✅trunc -5.2: -5

        5. max 
        //returns the max value 
        var a = Math.max(8, 10, 2, 50, 25)
        document.write("max: " + a + "<br>")
✅max: 50

        6. min
        //returns the min value 
        var a = Math.min(8, 10, 2, 50, 25)
        document.write("min: " + a + "<br>")
✅min: 2

        7. sqrt  
        //returns the sqrt
        var a = Math.sqrt(4)
        document.write("sqrt of 4: " + a + "<br>")
✅sqrt of 4: 2

        8. cbrt 
        //returns the cubic root 
        var a = Math.cbrt(125)
        document.write("cbrt of 125: " + a + "<br>")
✅cbrt of 125: 5

        9. pow(x, y)
        //x ^y
        var a = Math.pow(4, 2)
        document.write("pow 4^2: " + a + "<br>")
✅pow 4^2: 16

        10. random()
        //returns random value between 0 and 1 
        var a = Math.random()
        document.write("random value: " + a + "<br>")
✅random value: 0.1082973418709936

        11. abs(x)
        //returns absolute value (positive value)
        var a = Math.abs(5.25)
        document.write("absolute value of 5.25: " + a + "<br>")
✅absolute value of 5.25: 5.25

        var a = Math.abs(-5.25)
        document.write("absolute value of -5.25: " + a + "<br>")
✅absolute value of -5.25: 5.25

        12. PI 
        var a = Math.PI;
        document.write("PI: " + a + "<br>")
✅PI: 3.141592653589793

    </script>
```

#### Date method in JS 
> To create a date object you need to equate your variable to new Date()
```bash
let myDate = new Date();
console.log(myDate);

console:
Tue Dec 21 2021 21:26:31 GMT+0530 (India Standard Time)
```
- myDate is now a date object 
### Javascript Math method:
```bash 
1. toDatString
2. getDate 
3. getFullYear 
4. getMonth 
5. getDay 
6. getHours 
7. getMinutes 
8. getSeconds 
9. getMilliseconds 
10. setDate 
11. setFullYear 
12. setHours 
13. setMilliseconds 
14. setMinutes 
15. setMonth 
16. setSeconds 
```
```bash
    <script>
        //fetches data from the system, not the server 
        var myDate = new Date()
        document.write(myDate + "<br>")
✅Tue Dec 21 2021 21:26:31 GMT+0530 (India Standard Time)

        1. toDateString
        //day month year 
        document.write("toDateString: " + myDate.toDateString() + "<br>")
✅toDateString: Tue Dec 21 2021

        2. getDate
        //todays date 
        document.write("getDate: " + myDate.getDate() + "<br>")
✅getDate: 21

        3. getFullYear
        //current year 
        document.write("getFullYear: " + myDate.getFullYear() + "<br>")
✅getFullYear: 2021

        4. getMonth
        //current month 
        document.write("getMonth: " + myDate.getMonth() + "<br>")
✅getMonth: 11

        5. getDay
        //what day it is? 
        document.write("getDay: " + myDate.getDay() + "<br>")
        //prints 1 for sunday 
✅getDay: 2

        6. getHours
        //returns the current hour 
        document.write("getHours: "+ myDate.getHours() + "<br>")
✅getHours: 21

        7. getMinutes
        //returns the current min in the current time 
        document.write("getMinutes: "+ myDate.getMinutes() + "<br>")
✅getMinutes: 28

        8. getSeconds
        //returns the current second in the current time 
        document.write("getSeconds: "+ myDate.getSeconds() + "<br>")
✅getSeconds: 9

        9. getMilliSeconds
        //returns the current millisecond in the current time 
        document.write("getmilliseconds: " + myDate.getMilliseconds() + "<br>")
✅getmilliseconds: 79

        10. setDate 
        //it prints the details on this day 
        myDate.setDate(4)
        document.write("setDate: " + myDate + "<br>")
✅setDate: Sat Dec 04 2021 21:29:44 GMT+0530 (India Standard Time)

        11. setFull
        //it prints exactly what was the time stat of this day at 2020
        myDate.setFullYear(2020)
        document.write("setFull: " + myDate + "<br>")
✅setFull: Fri Dec 04 2020 21:30:05 GMT+0530 (India Standard Time)

        12. setMonth 
        //it prints the month with the date we specified with setDate 
        myDate.setMonth(6)
        document.write("setMonth: " + myDate + "<br>")
✅setMonth: Sat Jul 04 2020 21:31:19 GMT+0530 (India Standard Time)

        13. setHours 
        //sets the specified hour on the last date object reference 
        myDate.setHours(14)
        document.write("setHours: " + myDate + "<br>")
✅setHours: Sat Jul 04 2020 14:31:32 GMT+0530 (India Standard Time)

        14. setMinutes
        //sets the specified minute on the last date object reference 
        myDate.setMinutes(14)
        document.write("setHours: " + myDate + "<br>")
✅setMinutes: Sat Jul 04 2020 14:14:02 GMT+0530 (India Standard Time)

        15. setSeconds 
        //sets the specified second on the last date object reference 
        myDate.setSeconds(14)
        document.write("setHours: " + myDate + "<br>")
✅setSeconds: Sat Jul 04 2020 14:14:14 GMT+0530 (India Standard Time)

    </script>
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
## objects 
(Key-value pairs)

### 1. Creating object without new keyword 
Advanced version of arrays 
```bash 
 <script>
            var a = {
               //key: value 
              //property: value
                fname : 'reem',
                lname : 'shaikh',
                age : 20,
                email: 'rtrreem.rchc@gmail.com',

                //array inside object 
                favMovies : ['abcd', 'efgh', 'lkjh'],

                //adding object inside object 
                living :
                {
                   city : 'mumbai',
                   country : 'india'
                },

                salary :  function()   //method
                {
                    return 1000000;
                },

                fullname : function()   //method 
                {
                    return this.fname + " " + this.lname;
                }
            }

            console.log(a.fname);
            console.log(a)
            
            //calling array inside objects 
            console.log(a.favMovies);
            console.log(a.favMovies[0]);  //abcd

            console.log(a.salary());

            console.log(a.fullname());
            //reem shaikh

            //calling object inside object 
            console.log(a.living.city);
</script>

console:
reem
object >

(3) ['abcd', 'efgh', 'lkjh']
0: "abcd"
1: "efgh"
2: "lkjh"
length: 3
[[Prototype]]: Array(0)

abcd
dom.html:25 1000000
reem shaikh
mumbai 
```

### 2. Creating an object and assigning value using new keyword 
```bash
 <script>
          var person = new Object();
          person.firstName = 'reem';
          person.lastName = 'shaikh';
          person.age = 20;

          console.log(person.firstName);
          //can also write it like this 
          //console.log(person['firstName']);
</script>

console:
reem
```

4. Boolean
```bash
var a = true;
console.log(a);
```

5. Undefined 
created a variable and didnt assign a value 
```bash
var und;
console.log(und);
```
undefined

6. null 
created a variable and assigned nothing as the value 
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

2. Null: you have defined variable to null. defining a variable to nothing
```bash
    var b = null;
    console.log("b",b);
```
null is a primitive datatype.
> technically, null is also an object 

3. NaN: This property indicates that a value is not a legal number.
> js has given datatype a number, but value could not be decided 
> parseInt() - function which takes a string and returns a number equavalent
```bash 
let n = "abcd";
//declared    //defined 

console:
undefined 

console.log(parseInt(n))

console:
VM430:1 NaN
```

## 7. Arrays 
in JS, array is a collection of multiple datatypes of elements.
> collection of elements/ strings/ booleans.
```bash
var arr = [1,"reem",3,4,5.55];
console.log(arr);
```

> Array is a container/ special variable which can hold more than one datatype
Values are stored in indices.
```bash 
 <script>
      var arr = ['reem', 'shaikh', 20, "india"];

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
        //0
        //1
        //2
        //3
      }
 </script>

viewport:
reem
shaikh
20
india
```
### Creating Array without new keyword 
```bash 
<script>
      var arr = [ 10, 30, 20, 40];
      var sum = 0;

      for (var a = 0; a <= 3; a++) {
        sum = sum + arr[a]
      }
      
      document.write(sum);
</script>

viewport:
100
```
### Another way to create array using new keyword 
```bash
      var arr = new Array('reem', 'shaikh', 20, 'india')

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
      }
```
### Using static value in new keyword:
```bash 
<script>
    //we can add unlimited values in this 
      var arr = new Array();
      arr[0] = 10;
      arr[1] = "reem";
      arr[2] = true;

      for (var a = 0; a <= 2; a++) {
        document.write(arr[a] + '<br>')
      }
</script>
```

### Adding dyanamic values through new keyword 
```bash
<script> 
    var arr = new Array(3);

    for (var a = 0; a < 3; a++) {
        arr[a] = prompt("enter the value");
      }

    for (var g = 0; g < 3; g++) {
        document.write(arr[g] + "<br>");
      } 

</script>

viewport:
reem
100
true
```

## Multidimensional Arrays 
> Array inside array 
```bash 
    <script> 
    var arr = [
        // 0     1      3
        ["reem", 20, "female"], //0
        ["reem", 20, "female"], //1
        ["reem", 20, "female"], //2
        ["reem", 20, "female"]  //3
    ];

    //outer loop (rows)
    for(var a=0; a<4; a++)
    {
        //inner loop (columns)
        for(var b=0; b<4; b++)
        {
            document.write(arr[a][b] + " ");
        }
        document.write("<br>");
    }
    </script>

viewport:
reem 20 female 
reem 20 female 
reem 20 female 
reem 20 female 
```

Presenting it in a table 
```bash 
   <script> 
    var arr = [
        // 0     1      2
        ["reem", 20, "female"], //0
        ["reem", 20, "female"], //1
        ["reem", 20, "female"], //2
        ["reem", 20, "female"]  //3
    ];

document.write("<table border= '1px'>");
    //outer loop (row)
    for(var a=0; a<4; a++)
    {
        document.write("<tr>");
        //inner loop (column)
        for(var b=0; b<3; b++)
        {
            document.write("<td>" + arr[a][b] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    </script>

viewport: //table border is not visible in readme, run this on vscode 

reem	20	female
reem	20	female
reem	20	female
reem	20	female
```

## Array of objects 
> objects inside array

```bash 
 <script>
          var student = [
              {name :'reem', age :20},
              {name :'abcd', age :20},
              {name :'efgh', age :20},
          ];
          console.log(student);
</script>

console:
(3) [{…}, {…}, {…}]0: {name: 'reem', age: 20}1: {name: 'abcd', age: 20}2: {name: 'efgh', age: 20}length: 3[[Prototype]]: Array(0)
```
Printing using for loop 
```bash
 <script>
          var student = [
              {name :'reem', age :20},
              {name :'abcd', age :20},
              {name :'efgh', age :20},
          ];
          console.log(student);

          //printing in a loop
          for(var a=0; a < student.length; a++ )
          {
              document.write(student[a].name + " " + student[a].age + " " + "<br>");
          }
</script>

viewport:
reem 20
abcd 20
efgh 20
```
### Objects inside objects 
JSON 

### Array inside objects 

-----

## All string methods 
```bash
1. length 
2. toLowerCase 
3. toUpperCase
4. includes
5. startsWith
6. endsWith 
7. search 
8. match 
9. indexOf 
10. lastindexOf 
11. replace
12. trim 
13. charAt 
14. charCodeAt 
15. fromCharCode 
16. concat 
17. split 
18. repeat 
19. slice 
20. substr 
21. substring 
22. toString 
23. valueOf 
```
var str = "hi, i am a string";

1. length
```bash 
  var a = str.length;
  document.write("string is" + str + "<br>")
  document.write("length of string " + a + "<br>")

document:
string is hi, i am a string
length of string 17
```

2. toLowerCase()
```bash
    var b = str.toLowerCase();
    document.write("lowercase string " + b + "<br>")

document:
lowercase string hi, i am a string

```
3. toUpperCase()
```bash 
    var b = str.toUpperCase();
    document.write("uppercase string " + b + "<br>")

document:
uppercase string HI, I AM A STRING
```
4. includes()
```bash
  //true - if returns
  var b = str.includes("am");
  document.write("includes am?" + b + "<br>")

  var b = str.includes("the");
  document.write("includes the?" + b + "<br>")

  //case sensitive function 
  var b = str.includes("Am");
  document.write("includes Am?" + b + "<br>")

document:
includes am?true
includes the?false
includes Am?false
```
5. startsWith()
```bash
  var b = str.startsWith("Am");
  document.write("startswith Am? " + b + "<br>")

  var b = str.startsWith("hi");
  document.write("startswith hi? " + b + "<br>")

  // case sensitive 
  var b = str.startsWith("Hi");
  document.write("startswith Hi? " + b + "<br>")

document:
startswith Am? false
startswith hi? true
startswith Hi? false
```
6. endsWidth()
```bash
  var b = str.endsWith("string");
  document.write("endswith string? " + b + "<br>")

document:
endswith string? true
```
7. search - returns start index of the element we enetered if its found 
```bash
  var b = str.search("string");
  document.write("search " + b + "<br>")

  var b = str.search("str");
  document.write("str " + b + "<br>")

  //if it doesnt find the elemnt it returns -1 
  var b = str.search("ty");
  document.write("search " + b + "<br>")

document:
search 11
str 11
search -1
```
8. match - create an array of the matching string 
```bash
    str1 = "hi string, i am a string "
    var b = str1.match(/string/g);
    document.write("match " + b + "<br>")

document:
match string,string
```
9. indexOf()
```bash
    var b = str1.indexOf("string");
    document.write("indexof " + b + "<br>")

document:
indexof 3
```
10. lastIndexOf()
 ```bash
    var b = str1.lastIndexOf("string");
    document.write("lastindexof " + b + "<br>")

document:
lastindexof 18
```
11. replace()
```bash
    //replaces the first
    var b = str1.replace("string", "str");
    document.write("replaced " + b + "<br>")
       
    //using REGEX to replace all
    var b = str1.replace(/string/g, "str");
    document.write("replaced all" + b + "<br>")

document:
replaced hi str, i am a string
replaced allhi str, i am a str
```
12. trim()
```bash
    var str2 = "     javascript   "
    console.log(str2)
    //spaces displayed only on console, not on document 

    var a = str2.trim();
    console.log("trimmed", a)
```
11.1 trimLeft()
```bash
    var a = str2.trimLeft();
    console.log("trim left", a)
```
11.2 trimRight()
```bash
    var a = str2.trimRight();
    console.log("trim Right", a)
```
13. charAt()
```bash
    // return character at 3rd position
    document.write(str1 + "<br>")
    var b = str1.charAt(3);
    document.write("charAt " + b + "<br>")

document:
hi string, i am a string
charAt s
```
> every character on keyboard has a unique character code called ASCII code

14. charCodeAt()
```bash
    // returns ASCII code of ch
    document.write(str1 + "<br>")
    var b = str1.charCodeAt(1);
    document.write("charcode of i " + b + "<br>")

document:
hi string, i am a string
charcode of i 105
```
15. fromCharCode()
```bash
    // returns ch of the given ASCII code 

    //string is an inbiult object 
    var b = String.fromCharCode(65);
    document.write("ch code of 65 " + b + "<br>")

document:
ch code of 65 A
```
16. concat()
```bash
    // to merge two strings 
    str3 = "hi yo"
    str4 = "wassup"
    var a = str3.concat(str4);
    document.write("concat 2 strings " + a + "<br>")

    document.write("str1 "+ str1 + "<br>")
    document.write("str3 "+ str3 + "<br>")
    document.write("str4 "+ str4 + "<br>")

    var a = str2.concat(str3, str4)
    document.write("merging 3 strings " + a + "<br>")

document:
concat 2 strings hi yowassup
str1 hi string, i am a string
str3 hi yo
str4 wassup
merging 3 strings javascript hi yowassup
```
17. split()
```bash
    //convert every string to an array 
    var a = str.split(" ");
    document.write("split based on spaces " + a + "<br>")
    console.log(a)

     // 0 1 2 3 4 5 6 7 8 9 10 11 12
     // h i ,   i   a m   a     s  t 

document:
split based on spaces hi,i,am,a,string

console:
(5) ['hi,', 'i', 'am', 'a', 'string']
0: "hi,"
1: "i"
2: "am"
3: "a"
4: "string"
length: 5
[[Prototype]]: Array(0)
```
18. repeat()
```bash
    // repeats string the number of times you mentioned 

    //repeats string 2 times 
    var a = str.repeat(2);
    document.write("repeat " + a + "<br>")

document:
repeat hi, i am a stringhi, i am a string
```
19. slice()
```bash
    document.write("str " + str + "<br>")
    //returns character between 6 - 12 (doesnt include the 12th index)
        
        // 0 1 2 3 4 5 6 7 8 9 10 11 12
        // h i ,   i   a m   a     s  t 

    var a = str.slice(6, 12);
    document.write("slice " + a + "<br>")
        // am a s

document:
str hi, i am a string
slice am a s
```
20. substr()
```bash
    //returns string after 4 till (5 words)
    var a = str.substr(4, 5);
    document.write("substr " + a + "<br>")

    var a = str.substr(4);
    document.write("substr " + a + "<br>")

document:
substr i am
```
20. substring()
```bash
    //slice is preferrably, used for arrays 
    //substring is preferrably, used for strings  

    var a = str.substring(6, 12);
    document.write("substring " + a + "<br>")

document:
substring am a s
```
21. toString()
why are we converting string to string? 
```bash
    //convert to string 
    var a = str.toString();
    document.write("tostring " + a + "<br>")

document:
tostring hi, i am a string
```
22. valueOf()
```bash
    //print string as it is 
    //same as document.write
    var a = str.valueOf();
    document.write("Valueof " + a + "<br>")

document:
Valueof hi, i am a string
```
### array methods 
```bash
1. modify 
2. delete 
3. sort 
4. reverse 
5. pop 
6. push 
7. shift 
8. unshift 
9. concat 
10. join 
11. slice 
12. splice 
13. isArray 
14. indexOf
15. lastindexOf 
16. includes 
17. some 
18. every 
19. find 
20. findindex 
21. filter 
22. tostring
23. valueof 
24. map 
25. fill 
26. findindexOf 

```
1. modify 
```bash 
var a = ["reem", 20, "it"];
a[1] = 19;
document.write("modified: " + a + "<br>")

document:
modified: reem,19,it
```
2. delete 
```bash 
delete a[1]
document.write("deleted: " + a + "<br>")

document:
deleted: reem,,it
```

3. sort
```bash 
var arr = ["sanjay", "aman", "rehman", "karan"]
document.write("arr before sorting: " + arr + "<br>")
arr.sort()
document.write("arr after sorting: " + arr + "<br>")

document:
arr before sorting: sanjay,aman,rehman,karan
arr after sorting: aman,karan,rehman,sanjay
```

4. reverse 
```bash 
document.write("arr before reverse: " + arr + "<br>")
arr.reverse()
document.write("arr after reverse: " + arr + "<br>")

document:
arr before reverse: aman,karan,rehman,sanjay
arr after reverse: sanjay,rehman,karan,aman
```

5. pop 
```bash 
document.write("arr before pop: " + arr + "<br>")
arr.pop()
document.write("arr after pop: " + arr + "<br>")

document:
arr before pop: sanjay,rehman,karan,aman
arr after pop: sanjay,rehman,karan
```
6. push 
```bash 
        document.write("arr before push: " + arr + "<br>")
        arr.push("ronald")
        document.write("arr after push: " + arr + "<br>")

document:
arr before push: sanjay,rehman,karan
arr after push: sanjay,rehman,karan,ronald
```
7. shift 
```bash 
       //opposite of pop 
       //delete the first index 
        document.write("arr before shift: " + arr + "<br>")
        arr.shift()
        document.write("arr after shift: " + arr + "<br>")

document:
arr before shift: sanjay,rehman,karan,ronald
arr after shift: rehman,karan,ronald
```
8. unshift 
```bash 
        //unshift - opposite of push 
        //adding to first index 
        document.write("arr before unshift: " + arr + "<br>")
        arr.unshift("loki")
        document.write("arr after unshift: " + arr + "<br>")

document:
arr before unshift: rehman,karan,ronald
arr after unshift: loki,rehman,karan,ronald
```
9. concat 
```bash 
        var arr1 = ["rahul", "saloni"]
        document.write("arr value " + arr + "<br>")
        document.write("arr1 value " + arr1 + "<br>")
        var c = arr.concat(arr1);
        document.write("arr after concat: " + c + "<br>")

document:
arr value loki,rehman,karan,ronald
arr1 value rahul,saloni
arr after concat: loki,rehman,karan,ronald,rahul,saloni
```
10. join 
```bash 
        var d = c.join(" ")
        document.write("join: " + d + "<br>")

document:
join: loki rehman karan ronald rahul saloni
```
11. slice 
```bash 
        //slice - makes changes in a new created array
        document.write("arr before slice: " + arr + "<br>")
        var s = arr.slice(1, 4)
        document.write("arr after slice: " + s + "<br>")

document:
arr before slice: loki,rehman,karan,ronald
arr after slice: rehman,karan,ronald
```
12. splice 
```bash 
        //splice - makes changes in existing array
        document.write("arr before splice: " + arr + "<br>")
        // loki,rehman,karan,ronald
        //  0      1     2     3

        arr.splice(2, 0, "neha", "smriti")
        //these values added at 2nd position 
        //0 indicates we dont want to delete the elemnent at 2nd position 
        document.write("arr after splice: " + arr + "<br>")

        //another example 
        document.write("arr before splice: " + arr + "<br>")
        // loki,rehman,neha,smriti,neha,smriti,karan,ronald
        //  0      1     2     3     4    5     6      7

        arr.splice(2, 1, "kartik")
        //these values added at 2nd position 
        //1 indicates that were deleting the elemnent at 2nd position 
        document.write("arr after splice: " + arr + "<br>")

document:
arr before splice: loki,rehman,karan,ronald
arr after splice: loki,rehman,neha,smriti,karan,ronald

arr before splice: loki,rehman,neha,smriti,karan,ronald
arr after splice: loki,rehman,kartik,smriti,karan,ronald
```
13. isArray 
```bash 
        //isArray
        var I = Array.isArray(arr)
        document.write("Is arr an array: " + I + "<br>")

        var g = 10
        document.write("g: " + g + "<br>")
        var ii = Array.isArray(g)
        document.write("Is g an array: " + ii + "<br>")

document:
Is arr an array: true
g: 10
Is g an array: false
```
14. indexOf
```bash 
        //indexOf (search item, start)
        //search from starting 
        var b = arr.indexOf("kartik")
        document.write("index of kartik: " + b + "<br>")

document:
index of kartik: 2
```
15. lastindexOf 
```bash 
        //lastindexof - returns last index of the matching element 
        var j = arr.lastIndexOf("rehman", 1)
        document.write("lastindex of rehman: " + j + "<br>")

document:
lastindex of rehman: 1
```
16. includes 
```bash 
        //includes - is it included or not?
        var h = arr.includes("kartik")
        document.write("lis kartik included: " + h + "<br>")

document:
lis kartik included: true
```
17. some() 
```bash 
//returns true if even one element satisfies the condition
var ages = [10, 13, 18, 20]
var adultAge = 18 

var k = ages.some(checkAdult)
document.write("some: ", k, "<br>")

function checkAdult(age)
{
   return age >= 18
}

document:
some: true
```

18. every()
```bash 
//returns true if every element satisfies the condition
var ages = [10, 13, 18, 20]
var adultAge = 18 

var l = ages.every(checkAdult)
document.write("every: ", l)

function checkAdult(age)
 {
   return age >= 18
 }

document:
every: false
```
19. find() 
```bash 
//returns first value which passes the test

        var oo = ages.find(checkAdult)
        document.write("find method:", oo, "<br>")
        function checkAdult(age)
        {
            return age >= 18
        }

document:
find method:18
```
20. findindex 
```bash 
        //returns first value which satisfies the condition 
        var ages = [10, 23, 19, 20]
        document.write("ages: " + ages + "<br>")

        var kk = ages.findIndex(checkAdult)
        document.write("findindex: " + kk + "<br>")

        function checkAdult(age)
        {
            return age>=18
        }

document:
findindex: 1
```

21. filter
```bash 
//traverses through entire array and return the value which satisfies the condition 

        var o = ages.filter(checkAdult)
        document.write("filter method:", o, "<br>")
        function checkAdult(age)
        {
            return age >= 18
        }

document:
filter method:18,20
```
22. tostring
```bash 
        //tostring 
        var p = arr.toString()
        document.write("converted to string: " + typeof p + "<br>")

document:
converted to string: string
```
23. valueof
```bash 
        document.write("value of: " + arr.valueOf() + "<br>")

document:
value of: loki,rehman,kartik,smriti,karan,ronald
```

24. map()
```bash
        var a = [1, 3, 5, 8]
        //1. map 
        //apply same opration on all the values 
        let b = a.map(function(x){
            return x*10
        });

        document.write("map: ", b, "<br>")

        //Array of objects 
        var arr = [
            {fname : "reem",
             lname : "shaikh"},
            {fname : "reem",
             lname : "shaikh"},
        ];

        let c = arr.map(function(x){
            return x.fname + " " + x.lname
        });

        //extract objects and create an array 
        document.write("array of objects: ", c, "<br>")

document:
map: 10,30,50,80
array of objects: reem shaikh,reem shaikh
```

25. fill()
```bash 
var arr2 = ['reem', 'rum']
arr2.fill('reemie')
document.write("fill method:", arr2)

document:
fill method:reemie,reemie
```

26. findIndexOf() 
```bash 
 //returns first value index which passes the test
 
        var ooo = ages.findIndex(checkAdult)
        document.write("findindex method:", ooo)
        function checkAdult(age)
        {
            return age >= 18
        }

document:
findindex method:2
```

### Difference between slice and substring 
> slice is an array method 
> substring defined for string functions. more robust

## Loops 
 1. forEach 
 ```bash 
    ages.forEach(function(value, index){
            document.write(index + " : " + value + "<br>")
    });

document:
0 : 10
1 : 20
2 : 30
```
2. for In loop - used for printing objects 
```bash 
    var obj = {
            // key   : value 
            firstName: "reem",
            age: 20, 
            country: "india"
    }; 

        //instead of printing this individually like this 
        //console.log(a.firstName)
        //console.log(a.age)
        //console.log(a.country)

        for(var key in obj)
        {
            document.write(obj[key] + "<br>")

        }

document:
reem
20
india
 ```

### Difference between forEach and map 
foreach - used for loop and accessing values 
map - used for loop and update 

-----
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

# JS feature introduced in JS ES6
## OOPS (coding methodology)
introduced in ES6 
- its a coding style which makes code 
1. more reusable and modular 
2. well organised code 
3. easier to debug 
4. used in js frameworks
5. best for medium to large website projects 

### JS is an object oriented programming language 
OOPS features:
1. objects
2. classes
3. encapsulation
4. Inheritance 

## 1. Objects and classes 

## Objects (key-value pairs)
(object is an instance of a class)
##### Using class we can create many objects, and they objects have values which either have methods and properties/key 

Object is a unique entity with property: value/ method 
### 1.1 Object Literal 
comma seperated list of name-value pairs inside of curly braces 
    1. name: value 
    or
    2. name: method 

```bash
<script>
        
        let car = {
            name: 'Maruti 800',
            topSpeed: 89,
            run: function()
            {
                console.log("car is running")
            }
        }
        console.log(car);
        car.run();
        car.name;
</script>

console:
{name: 'Maruti 800', topSpeed: 89, run: ƒ}
car is running
```
#### We can create objects in 2 ways:
1. Through console.log only
```bash
var person = {
    name: "reem",
    age: 20
    }

console.log(person.name)
 
console:
reem 
```

2. Using new keyword,
```bash
var person = {
    name: "reem",
    age: 20
    }

var person = new Object()
person.name = "reem"
console.log(person.name)
 
console:
reem 
```

## Class
EcmaScriptES6 provides the keyword class, making it very easy to create class
Using a class, we can create many objects, and each one of those objects share 
the same blueprint/ the same methods and properties that is encapsulated in that 
class

Class contains
1. properties  (declared inside the class)
2. Methods     (function inside the class/ object)

```bash
<script>
    class hello{
        //can create properties and methods inside class 
        message()               ✅method
        {
            console.log("method")
            //you need to create an object to call it 
        }
    }

    ✅we can call the methods, by creating an object of the class
    let a = new hello();
    //variable 'a' is an object 

    a.message();
</script>

console:
method 
```
We can call multiple methods of the same class using the same defined object 
```bash
 <script>
    class hello{
        ✅we can create properties and methods inside class 
        message() //method
        {
            console.log("method")
            //you need to create an object to call it 
        }

        sorry() //method
        {
            console.log("sorry")
        }
    }

    let a = new hello();
    //variable 'a' is an object 

    a.message();   
    a.sorry();
</script>

console:
method
sorry
```

### Types of methods in JS 
#### 1. Constructor 
Whenever we create a class object, constructor is called automatically

```bash
 <script>
    class student{
        constructor()
        {
            console.log("constructor")
        }
    }

    ✅we created a class object 
    let a = new student()
    </script>

console:
constructor
```

2. Prototype 
> its not called automatically, you need to create an object of the class to invoke it 
> Its used to calculate variables that are defined inside the constructor 

```bash 
<script>
    class student{
        constructor() //constructor 
        { 
            let name;  ✅variable declared in constructor 
            console.log("constructor")
        }

        hello()  //prototype method 
        {
            console.log("hello " + this.name)  
            ✅variable is defined inside the constructor      
        }
    }

    let a = new student()
    You have to create an object, before invoking a prototype

    Until you don't invoke the prototype, it wont be called
    //prototype method call
    a.name = "reem shaikh"
    a.hello()
</script>

console:
constructor
hello reem shaikh
```
> another way to call a prototype 
```bash
 <script>
    class student
    {
        constructor(✅name) //constructor  
        { 
            ✅this.studentname = name;  //property defined 
            console.log("constructor")
        }

        hello()            //prototype method 
        {
            console.log("hello " + this.studentname)  
            ✅variable is defined inside the constructor      
        }
    }

    //the prototype method call is happening inside the object call, because in the constructor we passed the parameter name, instead of simply defining it, in the constructor function

    let a = new student("reem shaikh")
  
    // a.name = "reem shaikh"
    a.hello()
 </script>

console:
 constructor
 hello reem shaikh
```

```bash
<script>
    class student{
        constructor(name)                 //constructor 
        { 
            //we add this property and call it in hello function
            ✅this.sname = name; 

            console.log("constructor")
        }

        hello()                       //prototype method 
        {
            ✅console.log("hello " + this.sname)  
            //variable is defined inside the constructor      
        }
    }

    let a = new student("reem");
  
    // a.name = "reem shaikh"
    a.hello();
</script>

console:
constructor
hello reem
```

> Adding more than 2 parameters 
```bash
<script>
    class student{
        constructor(✅name, age) //constructor 
        { 
            this.sname = name; 
            ✅this.sage = age
            //property defined 
            console.log("constructor")
        }

        hello()         //prototype method 
        {
            ✅console.log("hello " + this.sname + this.sage)  
            //variable is defined inside the constructor      
        }
    }
    
    let a = new student();
  
    a.sname = "reem shaikh"
    ✅a.sage = 20
    
    a.hello();
</script>

console:
 constructor
 hello reem shaikh20
```

We can create many objects with one class 
```bash
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }
    }

    let a = new student("reem", 20);
    a.hello();

    ✅we can create many objects with one class
    let b = new student("d", 1);
    b.hello();
</script>

console:
constructor
hello reem20
constructor
hello d1
```

3. Static 
> you cannot call a static method by creating an object of the class 
> static method can be called through the class name 

> you cannot call staticmethod() through an object
```bash
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }

        static staticMethod()
        {
            console.log("static function")
        }
        //❌we cannot create an object and call it, through the object name,
        it throws an error 
    }

    let a = new student("reem", 20)
    a.staticMethod()
</script>

console:
constructor
Uncaught TypeError: a.staticMethod is not a functionat object.html:36
```
> However, you can call static method, through the class function 
```bash 
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }

        static staticMethod()
        {
            console.log("static function")
        }
    }

    let a = new student("reem", 20)
    ✅student.staticMethod()
 </script>

console:
constructor
static function
```

#### Inheritance 
child class inherits from parent class which contains certain methods and properties 
> child wants to inherit from parent class 
> Class vegetables wants to inherit properties/methods from class fruits 

```bash
 <script>
        class fruits                  ✅base class 
        {
            //properties & methods
        }
        class vegetables extends fruits                         ✅derived class 
        {
            //properties & methods
        }
        let f = new fruits(); 
        ✅can access only fruits properties and methods 

        let v = new vegetables();
        ✅can access both vegetables and fruits class and properties 
 </script>
```
> example of inheritance 
```bash
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }

       class manager extends employee
       {

       }

       //let e = new employee("reem");
       //constructor automatically called 
       
       //creating an object, to call the function
       let m = new manager("reem");
       ✅manager function is inheriting the base class properties and methods 

 </script>

 console:
 constructor reem
```
> However if you try to call a constructor in derived class, it will throw an error 
```bash
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }
        class manager extends employee
       {   constructor()
           {
           console.log("manager")
           }
       }

       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

   </script>

console:
manager 

inheritance.html:22 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new manager (inheritance.html:22)
    at inheritance.html:27
manager @ inheritance.html:22
(anonymous) @ inheritance.html:27
```
### Super() class
to call both the constructors, we'll use super() class
```bash 
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
     }

       class manager extends employee
       {   constructor()
           {
           ✅super()
           console.log("manager" + name)
           }
       }
       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

</script>

console:
constructor undefined
manager
```
> The variable will be displayed in the console, if its defined in the derived class 
constructor 
```bash
<script>
       class employee{
           ✅since we didnt declare the variable in the constructor, its not mapping the value, we stored in the object 
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }

       class manager extends employee
       {   constructor(name) ✅
           {
           super()
           console.log("manager" + name)
           }
       }

       let m = new manager("reem");
       //derived class is inheriting the base class properties and methods 

</script>

console:
constructor undefined
dom.html:22 managerreem
``` 
### Inheriting prototype method from derived class object 
```bash
  <script>
       class employee{                     ✅base class 
           constructor(name)
           {
              this.empname = name 
              console.log("constructor " + name) 
           }

           info()                       //prototype method 
           {
             console.log("info constructor" + this.empname)
           }
       }

       class manager extends employee       ✅derived class
       {   
       }

       let m = new manager("reem");
  
       //to call prototype 
       m.info()

 </script>

console:
constructor reem
info constructorreem
```
### Calling prototype method in the base class from the prototype method in the derived class
##### Using Super keyword 

```bash 
 <script>
       class employee{
           constructor(name)
           {
              ✅1. called first 
              this.empname = name 
              console.log("constructor " + name) 
           }

           info() //prototype method 
           {
             console.log("info constructor" + this.empname)
           }
       }

       class manager extends employee
       {   
           info() //prototype method 
           {
             super.info() ✅2. called second 
             console.log("manager info constructor" + this.empname)     ✅3. called third 
           }
       }
       let m = new manager("reem");
  
       //to call prototype 
       m.info()
 </script>

console:
constructor reem
info constructorreem
manager info constructorreem
```
> Passing multiple parameters in the constructor 
```bash 
<script>
       class employee{
           constructor(name, age, salary)
           {
              this.empname = name 
              this.empage = age
              this.empsalary = salary

              document.write("constructor " + name + age + salary)  
           }

           info() //prototype method 
           {
             document.write(`
             <h3>info constructor </h3>
             ${this.empname} <br>
             ${this.empage}  <br>
             ${this.empsalary}`)
           }
       }

       class manager extends employee
       {   
           
       }

       ✅maps these values to manager class(derived class)
       ✅when it doesnt find parameter there 
       ✅pointer goes to class employee
       ✅constructor along with these values printed 
       let m = new manager("reem", 20, 1000000);
  
       //to call prototype 
       m.info()
       ✅values mapped to prototype and printed 
</script>

document:
constructor reem201000000
info constructor
reem
20
1000000
```
### Prototypal inheritance 
Lets first understand inheritance and prototype 

##### Inheritance 
> Inheritance in JS is a completely different topic 
> Inheritance is JS is one object trying to access properties of another object 

##### Whenever you create an object/ array/ function, JS attaches some hidden properties and functions, via prototype 
```bash 
        let arr = ["akshay", "aditya"]
        let object = {
            name: "akshay",
            city: "dehra dun",
            getintro: function()
            {
                console.log(this.name + " " + this.city)
            }
        }

        function fun()
        {

        }

console:
1. when we type "arr." in console, it shows a list of hidden properties and functions 
2. when we type "object." in console, it shows a list of hidden properties and functions 
3. when we type "fun." in console, it shows a list of hidden properties and functions 
```
> How does this happen?
whenever we create an object; JS attaches an object (prototype) to your original object, that is how you get access to those properties and methods 

### Prototype 
prototype is an object which is attached to each and every method/ object/ array that we define in the code 

> Prototype has these properties, which can be directly accessed by using dot operator .__proto__.

to physically access the prototype (properties and methods) for arrays/ objects/ methods, just add 
.__proto__. towards the end 

1. arrays 
```bash 
arr.__proto__     ✅same as Array.prototype 

console:
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
```
2. objects 
```bash            
object.__proto__   ✅same as arr.__proto__.__proto__
                   ✅Array.protoype proto
                   ✅same as Object.prototype 
console:
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```
```bash 
arr.__proto__.__proto_.__proto__
✅Object.prototype proto

console:
null 
```
3. method 
```bash 
fun.__proto__        ✅same as Function.prototype 

console:
ƒ () { [native code] }
```

### Prototype chaining
This is the protoype chain 
1. arr.__proto is Array.prototype 
2. arr.__proto__.__proto__ is object prototype 
3. arr.__proto__.__proto__.__proto__ is object.prototype's prototype, it returns null 

> Array.prototype same as arr.__proto__
```bash 
Array.prototype 

console:
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
```

> object.__proto__ same as arr.__proto__.__proto__
```bash 
arr.__proto__.__proto__
✅Object.prototype 

console:
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```
> object.__proto__ same as Object.prototype 
```bash 
Object.prototype 

console:
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```
> arr.__proto__.__proto__.__proto__
```bash 
arr.__proto__.__proto__.__proto__
✅Object.prototype proto

console:
null
```
> object.__proto__.__proto__
```bash 
object.__proto__.__proto__
✅Object.prototype proto

console:
null 
```
> fun.__proto__ same as Function.prototype
```bash 
Function.prototype

console:
ƒ () { [native code] }
```
> fun.__proto__.__proto__ same as Object.prototype
```bash 
fun.__proto__.__proto__
✅Functionprototype proto
✅Object.prototype

console:
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```
> fun.__proto__.__proto__.__proto__
```bash 
fun.__proto__.__proto__.__proto__
✅Object.prototype proto

console:
null
```
> The prototype of Object.prototype is null 
```bash 
arr.__proto__                         Array.prototype 
arr.__proto__.__proto__               Object.prototype
arr.__proto__.__proto__.__proto.__    null

object.__proto__                      Object.prototype
object.__proto__.__proto__            null 

fun.__proto__                         Function.prototype 
fun.__proto__.__proto__               Object.prototype
fun.__proto__.__proto__.__proto.__    null
```
**Note: Everything in JS is an object, down the prototype chain**

#### Prototype inheritance 
prototype inheritance will give all the functions we create, access to the prototype method 
```bash 
    <script>
        let arr = ["akshay", "aditya"]
        let object = {
            name: "akshay",
            city: "dehra dun",
            getintro: function()
            {
                console.log(this.name + " " + this.city)
            }
        }

        ✅Each function you create can access mybind method because we have set mybind onto the Function.prototype 

        Function.prototype.mybind = function()
        {
            console.log("abcd")
        }

        function fun()
        {

        }

        function fun2()
        {

        }
 </script>

console:
1. When we type this in console, it returns the mybind method
fun.__proto__.mybind()
dom.html:23 abcd

2. When we type this in console, it returns the mybind method
fun2.__proto__.mybind()
dom.html:23 abcd
```

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
## This keyword 
> reference of the current object 
> object of execution 
> represents the owner object 
> its also the window object in global object 

### depends on context of execution 
This keyword depends on where your using it

> Demonstrating this, by using a simple calculator 
```bash
 <script>
        let cal = {
            'num1' : 10,   ✅type: number
            'num2' : 20,
            'num3' : "30", ✅type: string 

            ✅Number + number 
            'sum' : function()
            {
                let add = this.num1 + this.num2;
                console.log(add);
                        
            },

            ✅Number + string 
            'stringsum' : function()
            {
                let add = this.num1 + this.num3;
                console.log(add);

            },

            'showthis': function()
            {
            console.log(this); ✅pointer to the owner object 
            }
        }

        cal.sum(); //30
        cal.showthis(); ✅refers to the owner object 

        //if one of them was string the output would be a string
        cal.stringsum(); //1030

    </script>

console:
30
this.html:38 {num1: 10, num2: 20, num3: '30', sum: ƒ, stringsum: ƒ, …}num1: 10num2: 20num3: "30"showthis: ƒ ()stringsum: ƒ ()sum: ƒ ()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
this.html:33 1030
```
> Usecase of this in industry 
```bash 
<body>
    <button id="abcd">click em 1</button>
    <button id="abcd1">click em 2</button>
    <script>
        function fn()
        {
            console.log(this);
            ✅addeventlistener and get using this keyword 
            when we dont use eventlistener along with this keyword, it 
            returns windows object 

        alert("button clicked");
        //displays a pop box displaying button clicked 

        }

        ✅ add same event listener to both of our button
        var x = document.getElementById('abcd');
        x.addEventListener('click', fn);


        var x = document.getElementById('abcd1');
        x.addEventListener('click', fn);


    ✅x is the variable which is referencing the button with specific ID, x.
    ✅addEventListener is telling it to what to do when it is clicked
    </script>

console:
1. when we click on button "click em 1"
<button id="abcd">click em 1</button>

2. when we click on button "click em 2"
<button id="abcd1">click em 2</button>
```
## Default behavior of this keyword is to point to its owner object 
This by default points to the owner object 

when we call an event listener with this keyword, under the hood, js will be calling the custom object 

> This keyword pointing to custom object 'btn_obj' when fn1.call(btn_obj); is called 

```bash 
<body>
    <button id="abcd">click em</button>
    <button id="abcd1">click em</button>
    <script>

   function fn1()
   {
       console.log(this);
       ✅this keyword has default behavior:
        pointer to context of execution 

       //this="1234"
       ✅cannot update this value 
   }

   //for each dom element there is an object 
   let btn_obj = {
       'id' : 'abcdss',
       'classes' : 'bcshsj',
   }

   fn1();
   //gives window global object 

   //fn1 as a callback object 
   fn1.call(btn_obj);
   ✅this keyword will be pointing at this object passed in this function
</script>

console:
windows object >
Objectclasses: "bcshsj"id: "abcdss"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
```
## Apply/ bind/ call are used when you want to customize the object 
### When we use call/ apply/ bind 
then whatever value you pass as an argument, this keyword will point to that argument
> This is called customized behavior of this keyword 

1. passing string as an argument 
```bash
  function fn1()
  { 
     console.log(this)
  }

   fn1.call("string")
   ✅context of execution can be changed through call method
   ✅Default value of object can be changed by using call/ apply/ bind
   ✅whatever value we pass in this function, this keyword will point to that 

console:
returns string object 
```
2. passing number as an argument 
```bash
  function fn1()
  { 
     console.log(this)
  }

   fn1.call(1)
   ✅context of execution can be changed through call method
   ✅Default value of object can be changed by using call/ apply/ bind
   ✅whatever value we pass in this function, this keyword will point to that 

console:
returns number object 
```
### Object inside object 
What will this keyword refer to?
```bash 
<script>
        let complex_obj = {
            'key1' : 'value 1',
            'key2' : 'value2',
            'complex_key' : {
                'innerkey1': 'inner value 1',
                'innerkey2': 'inner value 2',
                'inner_fn': function()
                {
                    console.log(this); ✅this keyword will refer to the immediate owner 
                }
            }
            //console.log(this);
            ✅it will target the entire object 
        }

        complex_obj.complex_key.inner_fn();
    </script>

console:
{innerkey1: 'inner value 1', innerkey2: 'inner value 2', inner_fn: ƒ}

inner_fn: ƒ ()
innerkey1: "inner value 1"
innerkey2: "inner value 2"
[[Prototype]]: Object
```
what will this keyword return?
```bash 
 <script>
        let complex_obj = {
            'key1' : 'value 1',
            'key2' : 'value2',
            'complex_key' : {
                'innerkey1': 'inner value 1',
                'innerkey2': 'inner value 2',
                'inner_fn': function()
                {
                    console.log(this);
                }
    
            },
            'out_fn': function()
                {
                    console.log(this);
                    ✅this keyword points the parent object "complex_obj"
                }

        }
        complex_obj.out_fn();
</script>

console:
Object
complex_key: {innerkey1: 'inner value 1', innerkey2: 'inner value 2', inner_fn: ƒ}
key1: "value 1"
key2: "value2"
out_fn: ƒ ()
[[Prototype]]: Object
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

console:
{fn: ƒ}fn: ƒ ()[[Prototype]]: Object
```

### Referring to the window object 
behavior when function is not in an object 
```bash
        function fn1()
        {
            console.log(this);
        }
        fn1();

console:
window object >
```
this refers to owner, but we want a custom object 
**give custom value to the this keyword **
Functions that help us give custom value to this keyword 
### call, apply, bind 
        
## call
call allows us to change code depending on context of execution
> you are going to call a function and pass a context manually.
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
The object positioning depends on where "console.log(this)" is placed 
```bash
 <script>
      function fn(a, b, c) {
        console.log(this);
        console.log(a);
        console.log(b);
   
      }

      let obj = {
    'key1' : 'something',
    'key2' : 'something',
    }

    fn.call(obj, 10, 20);
    
console:
{key1: 'something', key2: 'something'}
practice.html:13 10
practice.html:14 20
```
JS Functions can be called through
- via call and apply
- as a constructor 
- as a method, defined in the object 

in call you individually mention each parameter
function.call(obj, a, b, c ...)
to improve readibility of code we have apply function

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

> Bind/ attach function context to execution 
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

if you call b() or c() below a
> it will give Uncaught reference error 
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

Functions are a set of instructions combined together 
> example of block of code 

- It gives reusability 
- peice of code which performs a specific functionality/ specific task

1. function without parameter 
```bash
function functionname()     //function declaration
{
    document.write("hi")
}

functionname()             //function invokation 

document:
hi
```
2. function with parameter 
```bash 
function functionname(a, b)
{
    document.write(a + b)
}

functionname(20, 30)

document:
50
```
3. functions with return value 
- value will be returned to c1 variable, when function is called 
```bash
function avg(a, b)
{
return (a + b)/2;
}

c1 = avg(4,6);
document.write(c1)

document:
5
```
> example 
```bash 
<script>
        ✅function defination/ declaration
        //its also called function declaration, because were declaring function in it 
        
        function sum(a,b)
        {
            return a+b;
        }

        ✅this is not function invokation 
        let a = sum;      
        console.log(a);
        ✅returns reference of the function, 
        ✅this is pointer to the function, its not executing the code 
        ✅execution means when code is parsed line by line 

        //let a = sum()
        ✅this is function invokation

//function invokation, needs a round bracket 
//round brackets important for execution

✅function invokation 
let b = sum(10, 20);
console.log(b);

</script>

console:
ƒ sum(a,b)
        {
            return a+b;
        }

functions.html:48 30
```
### Nested functions 
function inside functions, to increase security within functions 
```bash 
<script>
        function outer()
        {
            function inner1()
            {
                console.log("inner 1 called");
            }

            function inner2()
            {
                console.log("inner 2 called")
            }
            ✅inner function cannot be called outside
            ✅it should be called from within the scope 
            inner1();
        }

        outer();
</script>

console:
inner 1 called 
```
Secret key cannot be accessed outside its parent scope 
```bash 
 <script>      
    function outer(a)
        {
            var secretkey = "10";
            ✅secretkey cannot be accesed outside outer() function

            console.log("a outer",a);
            //you can access a both inner and outside 

            function inner1()
            {
                console.log("a inner",a);
                 
                ✅you can access secretkey here 
                console.log(secretkey);
                //you can access secretkey only in the inner functions 
            }

            return inner1;
    }

        let x = outer("argument");
        x();

 </script>

 console:
a outer argument
fun3.html:25 a inner argument
fun3.html:27 10
```
This was how we used functions before ES6
1. function Declaration
2. function Expression 

## 1. Function Declaration
```bash 
function hello()
{
  console.log("hello)
}

hello();
```
## 2. Function expression 
> 2.1. anonymous 
> 2.2. named 

### 2.1 Function expression (anonymous)
Function Expression  allows us to create an anonymous function which doesn’t 
have any function name
```bash 
let hello = function()
{
  console.log("hello)
}

hello();
```

### 2.2 Function expression (named)
```bash 
<script>
    var calMul = function Mul(x, y){
        let z = x * y;
        return z;
    }
 
    console.log("Multiplication : " + calMul(7, 4));
</script>
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

### DOM 
Document object model is a Representation of the HTML document in a different format, so JS can easily intrepret it and manipulate its attributes 

### Essential parts of web development 
Client- side website creation includes:
1. html
- markup language 
- adds structure to the web page 
2. CSS 
- add styles to web page
3. JS 
- adds functionality/programming to web page 

#### How does JS interact with HTML document?
how does JS understand the HTML Document?

> HTML document 
```bash 
<html>
<head>
  <title>My title</title> 
</head>
<body>
  <h1>heading</h1>
  <div id="div1">
    <p class="p1"> p tag1 </p>
  </div>
  <div id="div2">
    <p class="p2"> p tag2 </p>
  </div>
</body>
</html>
```
> DOM- JS view 
```bash 
              Document 
                 |
                HTML 
                 |
        -------------------
         |                |
        head             body 
         |                |
        title        ----------------------------
         |           |           |              |
        My title     h1      div id="div1"    div id="div2"
                     |           |              |
                   heading     p class="p1"   p class="p2"
                                 |              |
                                p tag1         p tag2

```

### Document Object Model 

> When html document is loaded in the browser corresponding to that document 
> there is a new representation of that document in a  different format created for JS called DOM,
> each of these tags in html document are converted to its corresponding DOM format, over here, each tag is represented as objects
> JS can easily intrepret DOM format. since it can only operate on objects and cannot access html tags.
> document is used to access HTML page elements to add dyanamic properties to it.
> With the DOM, JavaScript can access and change all the elements of an HTML document.

> each tag in html Document, is represented as objects in DOM.
> The HTML DOM model is constructed as a tree of Objects:
```bash 
              Document 
                 |
                HTML 
                 |
         -------------------
         |                |
        head             body                                 ✅element node 
         |                |
        title        ----------------------------
         |           |           |              |
        My title     h1      div id="div1"    div id="div2"   ✅attribute node 
                     |           |              |
                   heading     p class="p1"   p class="p2"
                                 |              |
                                p tag1         p tag2         ✅text node 

```
> There is a herierchy in DOM. It contains 3 primary nodes.
1. element node:   <head>, <body>
2. attribute node:  id/ class 
3. text node:       content inside element 

### DOM manipulation
DOM manipulations are when we use javascript code perform some activity on the HTML document. JS uses the DOM to access different elements on the website and perform specific tasks like - validations, changes, animations, functions etc.

#### why do we update in JS file not in html file 
google search is updated through JS functionalities, we cant make dyanamic 
changes using html 

### through dom manipulation 
> we can get the reference of object/node using get methods 
by getting reference of the node, by using 
- document.getElementById 
- document.getElementsByClassName
- document.getElementsByTagName

> we can get the reference of the object/node and change the content using set methods 

> we either get or set values 
- set: to change properties of element 
- get: to fetch value of elements

#### We can target DOM object through the following:
1. Id: document.getElementById
2. Class Name: document.getElementsByClassName
3. Tag Name: document.getElementsByTagName

Other DOM targetting methods:
1. document
2. document.all 
3. document.documentElement
4. document.head 
5. document.title 
6. document.body
7. document.images 
8. document.anchors 
9. document.links 
10. document.forms 
11. document.doctype 
12. document.URL 
13. document.baseURI 
14. document.domain 

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
</body>
```

#### This command converts html code to DOM 
1. document 
```bash
 <script>
        var element;
        element = document; 
        console.log(element);
    </script>
```

#### Creating an array and returning all html tags mapped with numbers
2. document.all 
```bash
<script>
        var element;
        element = document.all; 
        console.log(element);
</script>

HTMLAllCollection(23) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]
0: html
1: head
2: meta
3: meta
4: meta
5: title
6: body
7: div#wrapper
8: div#header
9: h1
10: div#menu
11: ul#list
12: li
13: a
14: li
15: a
16: li
17: a
18: div#content
19: h2
20: img
21: p
22: script
23: script
24: stylecontent: div#contentheader: div#headerlist: ul#listmenu: div#menuviewport: metawrapper: div#wrapper

length: 25
[[Prototype]]: HTMLAllCollection
```

```bash
document.all[2];

meta
```
#### returns root element of the document
3. document.documentElement
> in this case, the root is HTML tag. It will therefore return the HTML properties
```bash 
<script>
    var element;
    element = document.documentElement;
    console.log(element);   
</script>
```
> The difference between this property and the document.body property, is that the document.body element returns the <body> element, while the document.documentElement returns the <html> element.

### targetting an element node 
4. document.head 
```bash
<script>
        var element;
        element = document.head; 
        console.log(element);
</script>
```
#### Diplays the title name "DOM" specified in the title tag
5. document.title 
```bash
<script>
        var element;
        element = document.title;  //DOM
        console.log(element);
</script>
```

#### Displays everything in the body section of the document format conversion of html document 
6. document.body 
```bash
 <script>
        var element;
        element = document.body; 
        console.log(element);
</script>
```
#### Displaying all the images in the document  
7. document.images 
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
### Displays all the anchors which has name property attached to it 
8. document.anchors 
```bash 
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
                <li><a name="1" href="">home</a></li>     ✅name property
                <li><a name="2" href="">about us</a></li> ✅name property
                <li><a href="">contact</a></li>
            </ul>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</html>
</body>
<script>
    var element;
    element = document.anchors; 
    console.log(element);   
</script>

console:
HTMLCollection(2) [a, a]
0: a
1: a
2: <unreadable>
length: 2
[[Prototype]]: HTMLCollection
```

#### Displays all the collection of anchor tags in the document 
9. document.links 
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

#### Displaying doctype
11. document.doctype 
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
12. document.URL 
```bash
    <script>
        var element;
        element = document.URL; 
        console.log(element);
    </script>

console:
http://127.0.0.1:5500/main/18-12/domprac.html

//to display URL we can also use baseURI 
```
#### returns baseURI of the HTML document
13. document.baseURI 
```bash 
<script>
    var element;
    element = document.baseURI;
    console.log(element);   
</script>

console:
http://127.0.0.1:5500/main/18-12/domprac.html
```
#### returns domain of the website 
14. document.domain 
```bash 
<script>
    var element;
    element = document.domain;
    console.log(element);   
</script>

console:
127.0.0.1
(in our case its the live server port number, AKA localhost IP adress
(home network of the PC))
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

console:
HTMLCollection(2)
0: ul#list
1: ul
list: ul#list
length: 2
[[Prototype]]: HTMLCollection
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
> Get methods 
- getAttribute
- getAttributeNode 
- Attributes

> set methods 
- setAttribute
- Attribute
- removeAttribute

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

console:
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

console:
<h2>sub heading</h2>
<img src="" alt="">
<img src="" alt="">
<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

<p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
```
> Note that: innerHTML and innerText in get methods are basically the same, however, they are different in set methods.

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


style     ✅property name 
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
✅value: "border: 1px solid red;"
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
✅1: class
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
✅value: "abc"
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
### Event handler Object 
    Event e , contains information about the event that has just occured   

```bash 
<body>
    <button id="btn1">button</button>

    <script>
        let btn = document.getElementById('btn1').addEventListener('click', function(e){
            console.log(e)
            //contains properties about event that has just occured 

            if(e.ctrlKey)
            {
                //when you click on control + click on button 
                //this prints on console 
                console.log("olllllllllllllol")
            }
        });

    </script>
</body>

1. when you click on both cntrl + button this loads on
console:
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}isTrusted: truealtKey: falsealtitudeAngle: 1.5707963267948966azimuthAngle: 0bubbles: truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 42clientY: 14composed: truectrlKey: truecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullheight: 1isPrimary: falselayerX: 42layerY: 14metaKey: falsemovementX: 0movementY: 0offsetX: 32offsetY: 4pageX: 42pageY: 14path: (5) [button#btn1, body, html, document, Window]pointerId: 1pointerType: "mouse"pressure: 0relatedTarget: nullreturnValue: truescreenX: 817screenY: 130shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: button#btn1tangentialPressure: 0target: button#btn1tiltX: 0tiltY: 0timeStamp: 27880.099999999627toElement: nulltwist: 0type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 1width: 1x: 42y: 14[[Prototype]]: PointerEvent
jsevent.html:25 olllllllllllllol
```

## What will happen, when multiple document.getElementById is defined?
If, there are two elements with the same id 
and when we try to fetch it through document.getElementById
it will parse JS, line by line and it will fetch the first element with that id, 
it will return that value
and wont check the other element with the same id 

## String Templating/ Template Literals
variables inside a string 
```bash
let n = 10;
undefined

//this is string Templating
console.log(`${n}`);
VM361:1 10

console.log(n);
VM403:1 10
```

# New DOM Targetting methods:
## 1. querySelector- Targets the first element in css selector
    document.querySelector(CSS Selector)

## 2. querySelectorAll(CSS Selector)- Targets all elements in css selector
    document.querySelectorAll(CSS Selector)

Using this example
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
        <div id="header" class="abc" style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>     
            </ul>

            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 
    document.getElementById("header").innerHTML = "<h1>WoW</h1>";
    //changes heading to wow with the same styling as before, 
    //in innertext we cannot set the styling

    element = document.getElementById("header").getAttribute("class");
    //In the ID:header there is a class, what is its attribute
    console.log(element)  //abc
</script>

console:
abc
```

## 1. Using querySelector
Targets the first target 

doing this problem using query selector 
```bash
<script>
    var element; 
    document.querySelector("#header").innerHTML = "<h1>WoW</h1>";
   //adding # to specify id 

    element = document.querySelector("#header").getAttribute("class");
    
    console.log(element)
</script>

console:
abc
```
## 2. Using querySelectorAll
Targets all the elements in that attribute

> In case of querySelectorAll it returns all the attributes with the same class name

```bash
<script>
    var element; 
    element = document.querySelectorAll(".list");
    console.log(element)

</script>

console:
NodeList(2) [ul.list, p.list]
0: ul.list
1: p.list
length: 2
[[Prototype]]: NodeList
```
#### What is nodeList?
nodeList is an array of elements that is returned by the method document.querySelectorAll().
> In this case the class having the classname list is displayed.
In order to access the list at the 0'th index, we will have to specify its index like this.
``bash
<script>
    var element; 

    element = document.querySelectorAll(".list")[0].innerText;
    //extracting innertext from the 0th index of the list 
    //there is ul and p with the same classname .list 
    //shown in the next example 
    console.log(element)

</script>

console:
Lorem, ipsum dolor.
Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet consectetur.
```
> querySelectorAll VS querySelector 
However, querySelector returns only the first class with the given attribute 
note that its only returning the innertext of the ul.list 
```bash 
<script>
    var element; 

    element = document.querySelector(".list").innerText;
    //query selector targets the first one only 
    
    console.log(element)

</script>

console:
Lorem, ipsum dolor.
Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet consectetur.
```

## DOM CSS Styling Methods 
we can get and set css values with these methods 

### 1. Style 
#### 1.1 Using style to get the element's style 
```bash
<script>
    var element; 
    element = document.querySelector("#header").style.border;
    console.log(element)
</script>

console:
1px solid red
```

#### 1.2 Using style to set the element's style 
```bash 
<body>
    <div id="wrapper">
        <div id="header" class="abc" style="border: 1px solid red; background-color: aquamarine;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 

    // to set the style 
    document.querySelector('#header').style.backgroundColor = "tan";
    ✅in querySelector or querySelectorAll use # or . to signify the attribute 
    ✅to specify style properties with 2 names such as background-color, write it as backgroundColor, using camel casing rule 

    // to get the style on console 
    element = document.querySelector("#header").style.backgroundColor;  
    console.log(element)

</script>

console:
tan 

document:
heading background color is changed to tan
```
#### 2. className
Adds a class to a particular id.

```bash
<style>
        .abc{
            background-color: crimson;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header"  style="border: 1px solid red;>
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 
    document.querySelector('#header').className = "abc"
    //a new class abc is created where the id:header 

    document.querySelector('.abc').style.color = "green"
    //we have set the styling for this new class

    element2 = document.querySelector(".abc").style.color;  
    console.log(element2)

</script>

console:
abc
(output returned in the form of a string)

document:
heading color is changed to green 
```
#### 3. classList 
In case of className console output was returned in form of a string, 
> however, in classList output on console is returned in the form of an array 

```bash 
<script>
    var element; 
    document.querySelector('#header').classList = "abc"

    element = document.querySelector("#header").classList;
   
    console.log(element)

</script>

console:
DOMTokenList ['abc', value: 'abc']
0: "abc"
length: 1
value: "abc"
[[Prototype]]: DOMTokenList
(output returned in form of array)
```

##### 3.1 Methods of classList 
1. add 
2. remove 
3. item 
4. length 
5. contains(class)

###### 1. Add 
adds classes 
```bash 
   <style>
        #header{
            background-color: green;
        }
        .xyz{                ✅we added certain style properties for the class we just added through the add method, to test it out 
            color: plum;     ✅we added .xyz and .abc 
        }
        .abc{
            font-family: cursive;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header"  style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 
    ✅were adding 2 class in the same line #header is defined
    ✅one with classname: xyz and the other with classname: abc

    document.querySelector('#header').classList.add("xyz");
    document.querySelector('#header').classList.add("abc");

    //to add more than 2 classes in the same line 
    //document.querySelector('#header').classList.add("xyz", "efg");

    element = document.querySelector("#header").classList;
    console.log(element)

</script>

console: added 2 classes
DOMTokenList(2) ['xyz', 'abc', value: 'xyz abc']
0: "xyz"
1: "abc"
length: 2
value: "xyz abc"
[[Prototype]]: DOMTokenList

✅hover to console -> elements and notice on the line id="header" is defined, you will notice this additional peice of code added 
<div id="header" style="border: 1px solid red;" class="xyz abc">
```
###### 2. Remove 
removes class 
```bash 
    <style>
        #header{
            background-color: green;
        }
        .xyz{
            color: plum;
        }
        .abc{
            font-family: cursive;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header"  style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
✅adding 2 classes 
document.querySelector('#header').classList.add("xyz");
document.querySelector('#header').classList.add("abc");

document.querySelector('#header').classList.remove("abc");
✅class with classname:abc gave the font-family: cursive property 
✅note that: now the heading is not cursive in the document anymore 

element = document.querySelector("#header").classList;
console.log(element)

</script>

console:
DOMTokenList ['xyz', value: 'xyz']
0: "xyz"
length: 1
value: "xyz"
[[Prototype]]: DOMTokenList

✅hover to console -> elements and notice on the line id="header" is defined, you will notice this additional peice of code 
<div id="header" style="border: 1px solid red;" class="xyz">
✅note that: class:abc is removed. 
```
###### 3. length 
how many classes are there in that specific id
```bash 
<script>
✅2 classes are added 
document.querySelector('#header').classList.add("xyz");
document.querySelector('#header').classList.add("abc");

✅how many classes are defined in this id: header 
element = document.querySelector("#header").classList.length;

console.log(element)
</script>

console:
2
```

###### 4. item(index)
shows attribute based on their index 
```bash 
    <style>
        .abc{
            background-color: crimson;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header" class="abc xyz efg" style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
var element; 

element = document.querySelector('#header').classList.item(1);
//shows the first class 
console.log(element)
</script>

console:
xyz
```
###### 5. contains 
is the class, were checking for existing or not?
> returns true if class exists 
> returns false if class doesnt exist 
```bash
    <style>
        #header{
            background-color: green;
        }
        .xyz{
            color: plum;
        }
        .abc{
            font-family: cursive;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header" class="abc xyz" style="border: 1px solid red;">    ✅note that:we added class="abc xyz" in this line 
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
var element;
document.getElementById("header").addEventListener('click', abc)                 ✅when you click on the header, the function will execute

function abc()
{
    var a = document.getElementById("header").classList.contains("abc")          ✅is class:abc present in the line where id:header 
    console.log(a)
}
</script>

When you click on the header 
console:
true
```
## DOM Create Methods
#### 1. createElement
   to add a tag such as <p>, <div>, <ul> in html using JS

```bash
   In html element technically means 
   <tagname> content </tagname>

   however, in this context, createElement in DOM, technically means, adding <tagname></tagname>,

   If you want to add content in it, there are append methods 
```
#### 2. createTextNode 
   to add a text in html using Js
#### 3. createComment
   to add a comment <!-- --> in html using JS

```bash
<script>
       var newElement = document.createElement("p");
       //p - creates a paragragh tag
       console.log(newElement);

       var newText = document.createTextNode("this is text");
       //no word limit for inserting text
       console.log(newText);

       var newComment = document.createComment("this is a comment");
       console.log(newComment);
</script>

console:
<p></p>
"this is text"
<!--this is a comment -->
```
## DOM Traversal Methods 
these methods are used for targetting objects in HTML DOM 
1. parentNode 
2. parentElement 
3. Children 
4. childNodes 
5. firstChild 
6. firstElementChild 
7. lastChild 
8. lastElementChild 
9. nextElementSibling 
10. nextSibling 
11. previousElementSibling 
12. previousSibling 

```bash
                                                  A                                                              ✅Parent Node 
                                                  |
------------------------------------------------------------------------------------------------------
|                          |                      |                         |                        |
B                          C                      D                         E                        F           ✅All are siblings
                        
Note:
1. B, C, D, E, F are on the same level, hence they are siblings 
2. A is the parent element/ node of the siblings 
3. B is the firstChild and F is the lastChild 
4. C is the previousSibling of D & E is the nextSibling of D 
```
1. parentElement
returns the parent element 
```bash
    <style>
      #outer {
        background-color: plum;
        display: block;
        padding-bottom: 20px;
      }

      #container {
        width: 350px;
        text-align: center;
        margin: 30px;
        background-color: red;
        height:150px;
        padding-top: 40px;
        padding-left: 40px;
        padding-right: 340px;
        justify-content: space-around;
      }

      #left {
        float: left;
        width: 100px;
        height: 100px;
        background: #888;
      }

      #center {
        display: inline-block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        background: #888;
      }

      #right {
        float: right;
        width: 100px;
        height: 100px;
        background: #888;
      }
    </style>
  </head>
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">     ✅parent of container is outer
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div>
      </div>
     
    </div>
  </body>
  <script>
    var a = document.getElementById("container").parentElement;
    ✅what is the parent element of container?
    console.log(a)
  </script>

console:
div#outer  ✅outer is the parent element
```
> we can even change styling by targetting the parent element 
```bash
  <script>
    var a = document.getElementById("container").parentElement.style.background = "green";
    console.log(a)
  </script>

console:
green 

document:
div:outer bg-color is changed to green from plum color 
```
2. parentNode 
the only difference between parentElement and parentNode is that 

> parentElement returns null, if parent is not available 
```bash
  <script>
    var a = document.doctype.parentElement;
    console.log(a)
  </script>

console:
null 
```
> parentNode returns something, even if parent is not available 
```bash
  <script>
    var a = document.doctype.parentNode;
    console.log(a)
  </script>

console 
#document (returns document object)
```
3. Children 
Targets all the children in the parent Node 
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div>
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("outer").children;
    console.log(a)
  </script>

console:
HTMLCollection(2)
[h2, div#container, container: div#container]
0: h2
1: div#container
container: div#container
length: 2
[[Prototype]]: HTMLCollection
```
> another example 
```bash 
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div>
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("container").children;
    console.log(a)
  </script>

console:
HTMLCollection(3) [div#left, div#center, div#right, left: div#left, center: div#center, right: div#right]
0: div#left
✅1: div#center
2: div#right
center: div#center
left: div#left
right: div#right
length: 3
[[Prototype]]: HTMLCollection
```
> fetches the child at 1'st index 
```bash 
  <script>
      //target children through parents 
    var a = document.getElementById("container").children[1];
    console.log(a)
  </script>

console:
div#center
```
> doing manipulations by targetting the specific child from the parent 
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div>
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("container").children[1].style.background = "yellow";
    console.log(a)
  </script>

console:
yellow

document:
the container on 1st index has bg-color: yellow 
```
4. childNodes 
The only difference between children and childNodes 

> children returns only element nodes 
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("container").children;
    console.log(a)
  </script>

console:
HTMLCollection(3) [div#left, div#center, div#right, left: div#left, center: div#center, right: div#right]
0: div#left        ✅these are element nodes 
1: div#center
2: div#right
center: div#center
left: div#left
right: div#right
length: 3
[[Prototype]]: HTMLCollection
```
> childNodes returns text node and element nodes as well
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("container").childNodes;
    console.log(a)
  </script>

console:
NodeList(7) [text, div#left, text, div#center, text, div#right, text]
0: text            ✅these are text nodes
1: div#left        ✅these are element nodes 
2: text
3: div#center
4: text
5: div#right
6: text
length: 7
[[Prototype]]: NodeList
```
> changing style of the targetted childNode 
```bash 
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
      //target children through parents 
    var a = document.getElementById("container").childNodes[1].style.background = "yellow";
    console.log(a)
  </script>

console:
yellow

document:
id:left container bg-color is yellow 
```
5. firstElementChild
first child of the parent
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
    //target children through parents 
    var a = document.getElementById("container").firstElementChild;
    console.log(a)
  </script>

console:
div#left
```
> extract text from the firsstChild 
```bash
  <script>
    //target children through parents 
    var a = document.getElementById("container").firstElementChild.innerText;
    console.log(a)
  </script>

console:
A
```
6. lastElementChild 
```bash
  <script>
    //target children through parents 
    var a = document.getElementById("container").lastElementChild;
    console.log(a)
  </script>

console:
div#right
```

7. firstChild 
Difference between firstChild and firstElementChild is 

> firstElementChild targets only the element nodes
> firstChild targets both element and text nodes 

##### styling cannot be done on the firstChild of container because it returns a textnode which contains a space and styling cannot be done when spaces are mentioned
```bash
  <script>
    //target children through parents 
    var a = document.getElementById("container").firstChild;
    console.log(a)
  </script>

console:
#text
assignedSlot: null
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childNodes: NodeList []
data: "\n        "         ✅contains space
firstChild: null
isConnected: true
lastChild: null
length: 9
nextElementSibling: div#left
nextSibling: div#left
nodeName: "#text"
nodeType: 3
nodeValue: "\n        "
ownerDocument: document
parentElement: div#container
parentNode: div#container
previousElementSibling: null
previousSibling: null
textContent: "\n        "  ✅contains space 
wholeText: "\n        "    ✅contains space 
[[Prototype]]: Text
```
##### However, stying can be done on the firstChild of #left because there are no spaces present, however, ironically #left doesnt have any children
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>   ✅styling can be done on the firstChild of let
        <div id="center">B</div> 
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
    //target children through parents 
    var a = document.getElementById("left").firstChild;
    console.log(a)
  </script>

console:
#text
assignedSlot: null
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childNodes: NodeList []
data: "A"                   ✅doesnt contain space
firstChild: null
isConnected: true
lastChild: null
length: 1
nextElementSibling: null
nextSibling: null
nodeName: "#text"
nodeType: 3
nodeValue: "A"
ownerDocument: document
parentElement: div#left
parentNode: div#left
previousElementSibling: null
previousSibling: null
textContent: "A"            ✅doesnt contain space 
wholeText: "A"              ✅doesnt contain space 
[[Prototype]]: Text
```
8. lastChild 
Difference between lastChild and lastElementChild is 

> lastElementChild targets only the element nodes
> lastChild targets both element and text nodes 

```bash
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A
        </div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
    //target children through parents 
    var a = document.getElementById("container").lastChild;
    console.log(a)
  </script>

console:
#text
assignedSlot: null
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childNodes: NodeList(0)
length: 0
[[Prototype]]: NodeList
data: " \n      "               ✅contains space
firstChild: null                ✅styling cant be done
isConnected: true
lastChild: null
length: 8
nextElementSibling: null
nextSibling: null
nodeName: "#text"
nodeType: 3
nodeValue: " \n      "
ownerDocument: document
parentElement: div#container
parentNode: div#container
previousElementSibling: div#right
previousSibling: div#right
textContent: " \n      "
wholeText: " \n      "
[[Prototype]]: Text
```
> however, in this styling can be done 
```bash
  <script>
    //target children through parents 
    var a = document.getElementById("left").lastChild;
    ✅but #left does not have a child 
    console.log(a)
  </script>

console:
#text
assignedSlot: null
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childNodes: NodeList []
data: "A"                  ✅contains no space
firstChild: null           ✅styling can be done on #left child
isConnected: true
lastChild: null
length: 1
nextElementSibling: null
nextSibling: null
nodeName: "#text"
nodeType: 3
nodeValue: "A"
ownerDocument: document
parentElement: div#left
parentNode: div#left
previousElementSibling: null
previousSibling: null
textContent: "A"
wholeText: "A"
[[Prototype]]: Text
```
#### conclusion: styling cannot be done on firstChild or lastChild

9. nextElementSibling
10. previousElementSibling
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
    var a = document.getElementById("center").nextElementSibling;
    console.log(a)
    var b = document.getElementById("center").previousElementSibling;
    console.log(b)
  </script>

console:
div#right  ✅nextElementSibling
div#left   ✅previousElementSibling
```
> adding styling to the targetted elements 
```bash
  <body>
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>
        <div id="center">B</div>
        <div id="right">C</div> 
      </div>
     
    </div>
  </body>
  <script>
    var a = document.getElementById("center").nextElementSibling.style.background = "yellow";
    console.log(a)
    var b = document.getElementById("center").previousElementSibling.style.background = "green";
    console.log(b)
  </script>

console:
yellow
green 

document:
#right bg-color is now yellow
#left bg-color is now green
```
11. nextSibling 
The only difference between nextSibling and nextElementSibling 

> nextElementSibling returns only element nodes 
> nextSibling returns element + text nodes, since text nodes contains spaces, styling cannot be done over here 

12. previousSibling
```bash
    <div id="outer">
      <h2>Outer</h2>
      <div id="container">
        <div id="left">A</div>    ✅previous sibling
        <div id="center">B</div>
        <div id="right">C</div>   ✅next sibling
      </div>
     
    </div>
  </body>
  <script>
    var a = document.getElementById("center").nextSibling;     ✅#right
    console.log(a)
    var b = document.getElementById("center").previousSibling; ✅#left
    console.log(b)
  </script>

console:
#text
assignedSlot: null
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childNodes: NodeList []
data: "\n        "   ✅contains spaces, styling cannot be done 
firstChild: null
isConnected: true
lastChild: null
length: 9
nextElementSibling: div#right
nextSibling: div#right
nodeName: "#text"
nodeType: 3
nodeValue: "\n        "
ownerDocument: document
parentElement: div#container
parentNode: div#container
previousElementSibling: div#center
previousSibling: div#center
textContent: "\n        "
wholeText: "\n        "
[[Prototype]]: Text

#textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"childNodes: NodeList []data: "\n        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: div#centernextSibling: div#centernodeName: "#text"nodeType: 3nodeValue: "\n        "ownerDocument: documentparentElement: div#containerparentNode: div#containerpreviousElementSibling: div#leftpreviousSibling: div#lefttextContent: "\n        "wholeText: "\n        "[[Prototype]]: Text
```
> previousElementSibling returns only element nodes 
> previousSibling returns element + text nodes, since text nodes contains spaces, styling cannot be done over here 

## DOM Append methods 
#### I. Only Append Methods:
1. appendChild 
appends a child to the last 

2. insertBefore 
inserts a child anywhere in between 

#### II. Create and Append methods 
1. insertAdjacentElement
2. insertAdjacentHTML
3. insertAdjacentText 

### I. Append Methods
#### 1. appendChild 
The appendChild() method appends a node as the last child of a node.
```bash
<body>
  <div id="test"></div>
</body>
<script>
  var newElement = document.createElement("h3") ✅using DOM create methods
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)               ✅appending newText inside newElement

  console.log(newElement)
</script>

console:
h3
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
...
innerHTML: "this is a text"
innerText: "this is a text"
...
outerHTML: "<h3>this is a text</h3>"      ✅text appended inside h3 tags 
outerText: "this is a text"
...
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLHeadingElement
```
> appending text to the div #test tag 
```bash
<body>
  <h1>hola</h1>
  <div id="test"></div>
</body>
<script>
  var newElement = document.createElement("h3") 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)           ✅text appended inside h3 tag   
  document.getElementById('test').appendChild(newElement)
  ✅newElement appended inside #test tag 
  console.log(newElement)
</script>

console:
h3
accessKey: ""
align: ""
...
baseURI: "http://127.0.0.1:5500/main/18-12/domprac.html"
childElementCount: 0
childNodes: NodeList [text]
...
outerHTML: "<h3>this is a text</h3>"
outerText: "this is a text"
ownerDocument: document
parentElement: div#test       ✅parent: div#test
parentNode: div#test
...
tagName: "H3"
textContent: "this is a text"
title: ""
translate: true
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLHeadingElement

document:
hola 
this is a text 
```
> Note that: appendchild only appends at last
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var newElement = document.createElement("h3") 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)              
  document.getElementById('test').appendChild(newElement)
  console.log(newElement)
</script>

document:
hola
Lorem ipsum dolor sit.
this is a text

console -> elements -> body -> div#test
<div id="test">
   <p>Lorem ipsum dolor sit.</p>
  <h3>this is a text</h3>    
  ✅the appended text at last, after the p tags 
</div>
```
> to add elements midway, instead of the last of the list, we use 
#### 2. insertBefore
the insertBefore() method to insert a new child node before a specified, existing, child node.

```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var newElement = document.createElement("h3") 
  var newText = document.createTextNode("this is a text") 
  var newComment = document.createComment("this is just a comment")

  newElement.appendChild(newText)   

  var target = document.getElementById('test')
  document.getElementById('test').insertBefore(newElement, target.childNodes[0] )
  ✅insert newElement before childNode[0] i.e <p> tag

  ✅syntax:
  //insertbefore(what you want to insert, in which id want to insert.before which tag you want to insert)

  console.log(newElement)
</script>

console -> element -> div#test
<div id="test">
    <h3>this is a text</h3>      ✅inserts h3 before <p> tag
    <p>Lorem ipsum dolor sit.</p>
</div>
```
### II. Create & Append Methods
```bash
    Tag                     Tag with text                      Text
  <p></p>                   <p>this is text</p>            this is text
     |                              |                            |
     |                              |                            |
insertAdjacentElement       insertAdjacentHTML           insertAdjacentText    
(to create only tag and     (to append tag with          (create text and append it)
append it )                 text inside it )
```
##### DOM insertAdjacent positions:
- beforebegin - appends before the tag begins
- afterbegin - appends after the tag begins 
- beforeend - appends before the tag ends 
- afterend - appends after the tag ends 

> lets suppose this is div tag which contains the text "this is text"
> we want to append a new tag with text <h1>this is new text</h1>
```bash

    <h1>this is new text</h1>        ✅appends before tag begins
   ---------------------------------
   |<h1>this is new text</h1>      | ✅appends after the tag begins
   |                               |
   | [this is text (div tag)]      |
   |                               |
   |<h1>this is new text</h1>      | ✅appends before the tag ends
   ---------------------------------
    <h1>this is new text</h1>        ✅appends after the tag ends 

```
#### 3. insertAdjacentElement 
1. beforebegin position 
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  //creating element
  var newElement = document.createElement("h2") 

  //creating text node 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)
  //this line adds text node inside tag h2

  //append element inside text node 
  var target = document.getElementById('test')
  target.insertAdjacentElement('beforebegin', newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
  //adding newElement before div#test starts
</script>

console -> elements:
  <h1>hola</h1>
  <h2>this is a text</h2>  ✅added before div#test
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
```
2. afterbegin position
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  //creating element
  var newElement = document.createElement("h2") 

  //creating text node 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)
  //this line adds text node inside tag h2

  //append element inside text node 
  var target = document.getElementById('test')
  target.insertAdjacentElement('afterbegin', newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
  //adding newElement after div#test starts
</script>

console -> elements:
  <h1>hola</h1>
  <div id="test">
    <h2>this is a text</h2>         ✅added after div#test
    <p>Lorem ipsum dolor sit.</p>
  </div>
```
3. beforeend position
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  //creating element
  var newElement = document.createElement("h2") 

  //creating text node 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)
  //this line adds text node inside tag h2

  //append element inside text node 
  var target = document.getElementById('test')
  target.insertAdjacentElement('beforebegin', newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
  //adding newElement after div#test starts
</script>

console -> elements:
  <h1>hola</h1>        
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
    <h2>this is a text</h2>         ✅added before div#test ends
  </div>
```
4. afterend position 
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  //creating element
  var newElement = document.createElement("h2") 

  //creating text node 
  var newText = document.createTextNode("this is a text") 

  newElement.appendChild(newText)
  //this line adds text node inside tag h2

  //append element inside text node 
  var target = document.getElementById('test')
  target.insertAdjacentElement('beforebegin', newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
  //adding newElement after div#test starts
</script>

console -> elements:
  <h1>hola</h1>        
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
  <h2>this is a text</h2>         ✅added after div#test ends
```
### okay let's now see the positioning in all these cases:
```bash
1. beforebegin 
<h1>hola</h1>
  <h2>this is a text</h2>           ✅added before div#test
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
</div>

2. afterbegin 
<h1>hola</h1>
  <div id="test">
    <h2>this is a text</h2>         ✅added after div#test
    <p>Lorem ipsum dolor sit.</p>
</div>

3. beforeend
<h1>hola</h1>        
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
    <h2>this is a text</h2>         ✅added before div#test ends
</div>

4. afterend
<h1>hola</h1>        
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
<h2>this is a text</h2>              ✅added after div#test ends
```
#### 4. insertAdjacentHTML
1. beforebegin position
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  ✅no need to create element and text nodes because insertAdjacentElement provides a way to add both without using createElement or createTextNode method 
  //var newElement = document.createElement("h2") 
  //var newText = document.createTextNode("this is a text") 

  //newElement.appendChild(newText)
  //this line adds text node inside tag h2

  var target = document.getElementById('test')

  //append element inside text node 
  var newElement = "<h2>this is heading</h2>";

  target.insertAdjacentHTML("beforebegin", newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element
  <h1>hola</h1>
  <h2>this is heading</h2>           ✅added before div#test
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
```
2. afterbegin position 
```bash 
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newElement = "<h2>this is heading</h2>";
  target.insertAdjacentHTML("afterbegin", newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
 <h1>hola</h1>
  <div id="test">                    ✅added after div#test
  <h2>this is heading</h2>
    <p>Lorem ipsum dolor sit.</p>
  </div>
```
3. beforeend position 
```bash 
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newElement = "<h2>this is heading</h2>";
  target.insertAdjacentHTML("beforeend", newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
 <h1>hola</h1>
  <div id="test">                    
    <p>Lorem ipsum dolor sit.</p>
      <h2>this is heading</h2>         ✅added before div#test ends
  </div>
```
4. afterend position 
```bash 
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newElement = "<h2>this is heading</h2>";
  target.insertAdjacentHTML("afterend", newElement)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
 <h1>hola</h1>
  <div id="test">                    
    <p>Lorem ipsum dolor sit.</p>
  </div>
  <h2>this is heading</h2>         ✅added after div#test ends
```
#### 5. insertAdjacentText
1. beforebegin 
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newText = "this is heading";
  target.insertAdjacentHTML("beforebegin", newText)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
  <h1>hola</h1>
  ✅this is heading               
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
```
2. afterbegin 
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newText = "this is heading";
  target.insertAdjacentHTML("afterbegin", newText)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
  <h1>hola</h1>              
  <div id="test">
    ✅this is heading 
    <p>Lorem ipsum dolor sit.</p>
  </div>
```

3. beforeend
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newText = "this is heading";
  target.insertAdjacentHTML("beforeend", newText)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
  <h1>hola</h1>              
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
    ✅this is heading 
  </div>
```

4. afterend
```bash
<body>
  <h1>hola</h1>
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
</body>
<script>
  var target = document.getElementById('test')
  var newText = "this is heading";
  target.insertAdjacentHTML("afterend", newText)
  //insertAdjacentElement('position', 'which parameter your adding?')
</script>

console -> element:
  <h1>hola</h1>              
  <div id="test">
    <p>Lorem ipsum dolor sit.</p>
  </div>
✅this is heading 
```
## DOM replace & remove methods 
```bash
1. replaceChild()
to replace text/ element nodes 

2. removeChild()
to remove existing text/ element nodes 
```
1. replaceChild()
```bash
<body>
  <h1>hola</h1>
  <ul id="list">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>
</body>
<script>
  var newElement = document.createElement("li")
  var newText = document.createTextNode("E")

  //adds E inside <li> tag
  newElement.appendChild(newText)

  var target = document.getElementById("list")
  ✅replace A with E 
  
  var oldElement = target.children[0]
  //console.log(oldElement) //console:A

  target.replaceChild(newElement, oldElement)
  //replaceChild("new element", "element you want to replace")
  //replaceChild(E, A)

</script>

console -> elements:
<ul id="list">
    <li>E</li>      ✅E replaced A
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>

document:
hola
*E
*B
*C
*D
```
2. removeChild()
```bash
<body>
  <h1>hola</h1>
  <ul id="list">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>
</body>
<script>

  //remove child at 0'th index 
  var target = document.getElementById("list")
  
  var oldElement = target.children[0]
  //console.log(oldElement)   console:A

  target.removeChild(oldElement)
</script>

console -> elements:
<ul id="list">     ✅child at 0'th index removed
    <li>B</li>  
    <li>C</li>
    <li>D</li>
  </ul>

document:
hola
*B
*C
*D
```
## DOM cloneNode()
copy an element/ text node from one list and paste it in another list 

> Properties of cloneNode:
1. cloneNode(false) - copies tag only, not the inner text inside it 
2. cloneNode(true) - copies tag + innertext
```bash
<body>
  <h1>hola</h1>
  <ul id="list1">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>

  <ul id="list2">
    <li>A</li>
    <li>B</li>
  </ul>
</body>
<script>
  //we want to copy <li>C</li> from #list1 and paste it in #list2
  var target = document.getElementById('list1').children[2]

  //cloning
  var copyElement = target.cloneNode(true)

  //console.log(copyElement)   //console: <li>C</li>

  //to append in #list2
  document.getElementById('list2').appendChild(copyElement)
</script>

console -> elements
<ul id="list2">
    <li>A</li>
    <li>B</li>
    <li>C</li>   ✅C is added to #list2
</ul>

document:
hola
*A
*B
*C       ✅C copied from #list1
*D

*A
*B
*C       ✅C copied to #list2
```
## DOM contains()
returns boolean value indicating whether a node is a descendant of a given node

> If the node is not a descendant (child/grandchild) of the parent node, contains returns false 
```bash
<body>
  <div id="test">
    <h2>Lorem ipsum dolor, sit amet consectetur</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima!</p>
    <p id="xyz">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus.</p>
  </div>
</body>
<script>
   //targetting parent element 
   var parentElement = document.getElementById('test')

   //to target 
   var target = document.getElementById('abc')

   //is #abc existing in #test or not ?
   var find = parentElement.contains(target)
   console.log(find)
   
   ✅returns false because #abc is not present in #test
</script>

console:
false 
```
> If the node is a descendant (child/grandchild) of the parent node, contains returns false 
```bash
<body>
  <div id="test">
    <h2>Lorem ipsum dolor, sit amet consectetur</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima!</p>

    ✅#xyz is a child of #test
    <p id="xyz">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus.</p>
  </div>
</body>
<script>
   //targetting parent element 
   var parentElement = document.getElementById('test')

   //to target 
   var target = document.getElementById('xyz')

   //is #xyz existing in #test or not ?
   var find = parentElement.contains(target)
   console.log(find)
   
   ✅returns true because #xyz is present in #test
</script>

console:
true
```
## hasAttribute() & hasChildNodes()
1. hasAttribute()
returns a Boolean value indicating whether the specified element has the specified attribute or not.

> returns false, if hasAttribute couldn't find the targetted attribute in the same level in which we are searching for 
```bash
<body>
  <div id="test">
    <h2>Lorem ipsum dolor, sit amet consectetur</h2>
    <p class="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima!</p>
    <p id="xyz">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus.</p>
  </div>
</body>

<script>
   //targetting the variable 
   var target = document.getElementById('test')

   //does class exist in the #test ?
   var find = target.hasAttribute('class')
   console.log(find) //console:false

   ✅returns false, because it couldnt find a class attribute in the same line as #test
</script>

console:
false
```
> returns true, if hasAttribute could find the targetted attribute in the same level in which we are searching for 
```bash
<body>
  <div id="test" class="abc">
  ✅#test and .abc are on the same level 
    <h2>Lorem ipsum dolor, sit amet consectetur</h2>
    <p class="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima!</p>
    <p id="xyz">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus.</p>
  </div>
</body>
<script>
   //targetting the variable 
   var target = document.getElementById('test')

   //does class exist in the #test ?
   var find = target.hasAttribute('class')
   console.log(find) //console:true

   //returns true, because it could find a class attribute in the same line as #test
</script>

console:
true 
```
2. hasChildNodes()
boolean value which signifies whether the parent has a childNode or not 

> when parent has childNodes, hasChildNodes() returns true  
```bash
<body>
  <div id="test" class="abc">
    <h2>Lorem ipsum dolor, sit amet consectetur</h2>
    <p class="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima!</p>
    <p id="xyz">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus.</p>
  </div>
</body>
<script>
   //targetting the variable 
   var target = document.getElementById('test')

   ✅does #test contain childNodes or not?
   var find = target.hasChildNodes()
   console.log(find) //console: true

</script>

console:
true 
```
> when parent has no childNodes, hasChildNodes() returns false 
```bash
<body>
  <div id="test" class="abc"></div>
  ✅Make sure there are no spaces between these div tags, otherwise the console output would be true, even though these div tags have no child, because then, it will consider the white spaces.

</body>
<script>
   //targetting the variable 
   var target = document.getElementById('test')

   //does #test contain childNodes or not?
   var find = target.hasChildNodes()
   console.log(find) //console: false 

</script>

console:
false 
```
## DOM isEqualNode()
we want to compare an element of one list, with an element of another list and check if its same or not, isEqualNode() returns a boolean value
```bash
  list 1                  list 2
* Orange                * Orange 
* Banana                * pineapple 
* grapes 

- is the childNode[0] of list1 = childNode[0] of list2?
```
> basics:
#### Attribute VS element VS tag
```bash
<div id="something" class="" onclick="">
  <p>  </p>
</div>
```

#### Attribute
additional properties which are part of your html element

- provides additional information about the tag 
- contains name= "value"
- case insensitive 
- attributes can only be used inside tags 
```bash
   <hr color="red">
   [attribute name = "attribute value"]
```

#### Element 
(start tag + text + end tag)
```bash
<div id="something" class="" onclick="">  ✅div element
  <p>  </p>
</div>
```
- everything inside opening and closing tag is element.
- element contains stuff between the tags
- element can have children 

#### Tag 
```bash
<div id="something" class="" onclick="">  ✅div opening tag
  <p>  </p>
</div>                                    ✅div closing tag
```
- anything between <> (angular brackets)
- tag are used to hold html element 
- tag is singular 

two types of tags:
1. container tag/ paired tag
- contains opening and closing tag (eg: <p></p>)
2. empty tag 
- contains only opening tag (eg: <br>, <hr>)

```bash
✅What is node?

Every object in the DOM is a node 
Node is a DOM object
- text node: text inside the tags 
- comment node: comments made in the document 
- element node: <p></p> / <li></li> / <div></div>
- attribute node:  id / class

✅What is an attribute?
<body>
  <div>
    <p>hello para</p>
  </div>
  <h2 id="myh2" class="myclass" title="somedata">hello</h2>
</body>
<script>
  //accessing the id 
  var h = document.getElementById('myh2')
  //what are attributes inside h 
  console.log(h.attributes)
  //returns the collection of its attribute collection

</script>

console:
NamedNodeMap
0: id      ✅attribute node = attribute name: attribute value
1: class   ✅attribute node
2: title   ✅attribute node 

class: class
id: id
title: title
length: 3
[[Prototype]]: NamedNodeMap
✅The attributes property returns a collection of the specified node's attributes, as a NamedNodeMap object.
✅each of these nodes defined inside this NamedNodemap is an attribute node 
✅In itself, id, class are element nodes, but wrt the attribute property it is, and attribute node 
```
> Properties of Node object:
1. nodeName
2. nodeValue
3. nodeType 
```bash
1. nodeName 
The nodeName property returns the name of the specified node.

   Node:                     NodeName property will return
   Element nodes             Tag name (p / div)
   Attribute nodes           name of attribute (id / class)
   Text nodes                name of text node 
   Comment nodes             name of comment node

This property is read-only.

<body>
  <div>
    <p id="para" >hello para
    </p>
  </div>
  <h2 id="myh2" class="myclass" title="somedata">hello</h2>
  
</body>
<script>
✅element node
var h = document.getElementById('myh2')
console.log(h.nodeName)          ✅h2 (returns the tag name)

✅attribute node 
var k = document.getElementById('para').attributes[0] //id#para
console.log(k.nodeName)          ✅id (attribute name)

✅text node 
var l = document.getElementById('para').childNodes[0]
console.log(l.nodeName)          ✅#text (name of text node)
</script>

2. nodeValue 
The nodeValue property sets or returns the node value of the specified node. Alternative to textContent.
If the node is an element node, the nodeValue property will return null.

<body>
  <div>
    <p id="para" >hello para
    (attribute node = attribute name: attribute value)

    attributename/ node name = id
    attributevalue/ node value = para
    </p>
  </div>
  <h2 id="myh2" class="myclass" title="somedata">hello</h2>
  
</body>
<script>
<script>
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeName)         //h2 (returns the tag name)
  console.log(h.nodeValue)        ✅null

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeName)         //id (attribute name)
  console.log(k.nodeValue)        ✅para (attribute value)
   
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l.nodeName)         //#text (name of text node)
  console.log(l.nodeValue)        ✅hello para 

  console.log(l.textContent)      ✅hello para 
</script>

3. nodeType
The nodeType property returns the node type, as a number, of the specified node.

   Node:                     NodeType property will return
   Element node              1 
   Attribute node            2
   Text node                 3
   Comment node              8

This property is read-only.

<body>
  <div>
    <p id="para" >hello para
    </p>
  </div>
  <h2 id="myh2" class="myclass" title="somedata">hello</h2>
  
</body>
<script>
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeType)         ✅1   (element node)

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeType)         ✅2   (attribute node)
   
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l.nodeType)         ✅3 (text node)
</script>
```
> here is the entire code 
```bash
<body>
  <div>
    <p id="para" >hello para </p>
  </div>
  <h2 id="myh2" class="myclass" title="somedata">hello</h2>
  
</body>
<script>
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeName)  //h2 (returns the tag name)
  console.log(h.nodeValue) //null
  console.log(h.nodeType)  //1   (element node)

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeName)  //id (attribute name)
  console.log(k.nodeValue) //para (attribute value)
  console.log(k.nodeType)  //2   (attribute node)
   
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l)
  console.log(l.nodeName)  //#text (name of text node)
  console.log(l.nodeValue) //hello para 
  console.log(l.nodeType)  //3 (text node)
</script>

```

> Criteria on which boolean value is decided and comparsion of 2 nodes, is done on the following criteria 
- same NodeType 
- same NodeName
- same NodeValue 
- same childNodes 
- same attributes

1. nodeType 
both the lists must be of the same nodetype. Nodetype is decided according to its boolean property 

In a broad sense, it categorizes the type of the node, 
whether its an element node (could be li, p, div tags) or attribute node (could be id or class) or text node

> not that, broadly h2 and p are element tags 
```bash
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeType)  //1   (element node)

  var h = document.getElementById('para')
  console.log(h.nodeType)  //1   (element node)

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeType)  //2   (attribute node)
   
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l.nodeType)  //3 (text node)
```
2. nodeName 
both the lists must be of the same nodeName, both must be embedded in the same tag

> here is an example of what nodename returns:
```bash
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeName)  //h2 (returns the tag name)

  var h = document.getElementById('para')
  console.log(h.nodeName)  //p (returns the tag name)

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeName)  //id (attribute name)
  
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l.nodeName)  //#text (name of text node)
```
3. nodeValue 
both the lists must return the same nodeValue 

> example 
```bash
  ✅element node 
  var h = document.getElementById('myh2')
  console.log(h.nodeValue) //null

  var h = document.getElementById('para')
  console.log(h.nodeValue) //null

  ✅attribute node 
  var k = document.getElementById('para').attributes[0] //id#para
  console.log(k.nodeValue) //para (attribute value)
  
  ✅text node 
  var l = document.getElementById('para').childNodes[0]
  console.log(l.nodeValue) //hello para 
```
4. childNodes 
both of the lists must have the same duplicate childnodes

```bash
var h = document.getElementById('para').childNodes
console.log(h)

console:
NodeList [text]
0: text
length: 1
[[Prototype]]: NodeList 
```
5. same attribute name and attribute value 
both of them must have the same attribute with matching attribute name and attribute values  

```bash
Attribute node = attribute name: attribute value 
                 id : "idname"
```
> isEqualNode()
The isEqualNode() method checks if two nodes are equal and returns a boolean value 

-  isEqualNode() returns false when the element were comparing in both lists is not equal 
```bash
<body>   
    <ul id="list1">
        <li>orange</li>
        <li>banana</li>
        <li>apple</li>
        <li>grapes</li>
    </ul>

    <ul id="list2">
        <li>Guava</li>
        <li>orange</li>
        <li>pineapple</li>
    </ul>
</body>
<script>
    ✅compare childnode[0] of list1 with childnode[0] of list2

    ✅targetting childnode[0] of list1
    var target1 = document.getElementById('list1').firstElementChild

    ✅targetting childnode[0] of list1
    var target2 = document.getElementById('list2').firstElementChild

    var equal = target1.isEqualNode(target2)
    console.log(equal)  
    ✅returns false because they are not equal 
</script>

console:
false 
```
- isEqualNode() returns true when the element were comparing in both lists is equal 
```bash
<body>   
    <ul id="list1">
        <li>orange</li>
        <li>banana</li>
        <li>apple</li>
        <li>grapes</li>
    </ul>

    <ul id="list2">
        <li>orange</li>
        <li>guava</li>
        <li>pineapple</li>
    </ul>
</body>
<script>
    ✅compare childnode[0] of list1 with childnode[0] of list2

    ✅targetting childnode[0] of list1
    var target1 = document.getElementById('list1').firstElementChild

    ✅targetting childnode[0] of list1
    var target2 = document.getElementById('list2').firstElementChild

    var equal = target1.isEqualNode(target2)
    console.log(equal)  
    ✅returns true because they are equal 
</script>

console:
true
```
> while isEqualNode is used to compare 2 nodes, and identify whether they are replicas of each other, in every possible way but in 2 different lists

> isSameNode is used to compare 2 nodes in the same list, to identify whether they are in the same node level, i.e in the same element 

### isSameNode()
> comparing childnode[0] of list1 with childnode[0] of list1
```bash
<body>   
    <ul id="list1">
        <li>orange</li>
        <li>banana</li>
        <li>apple</li>
        <li>grapes</li>
    </ul>

    <ul id="list2">
        <li>orange</li>
        <li>apple</li>
        <li>pineapple</li>
    </ul>
</body>
<script>
    ✅compare childnode[0] of list1 with childnode[0] of list1

    ✅targetting childnode[0] of list1
    var target1 = document.getElementById('list1').childNodes[0]

    ✅targetting childnode[0] of list1
    var target2 = document.getElementById('list1').childNodes[0]

    var equal = target1.isSameNode(target2)
    console.log(equal)  
    ✅returns true because they are same and in the same list 
</script>

console:
true 
```
> comparing childnode[0] of list1 with childnode[0] of list2
```bash
<body>   
    <ul id="list1">
        <li>orange</li>
        <li>banana</li>
        <li>apple</li>
        <li>grapes</li>
    </ul>

    <ul id="list2">
        <li>orange</li>
        <li>apple</li>
        <li>pineapple</li>
    </ul>
</body>
<script>
    ✅compare childnode[0] of list1 with childnode[0] of list2

    ✅targetting childnode[0] of list1
    var target1 = document.getElementById('list1').childNodes[0]

    ✅targetting childnode[0] of list2
    var target2 = document.getElementById('list2').childNodes[0]

    var equal = target1.isSameNode(target2)
    console.log(equal)  
    ✅returns false because they might look the same, but they are in 2 seperate lists
</script>

console:
false 
```

### What are events?
Any actions that you perform or any occurrence on the browser is an event.

> eg:
- clicking on a button
- The user selects a certain element or hovers the cursor over a certain element.
- The user chooses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or finishes.
- An error occurs.

> Note: Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.

### For every event, there must be a response, which is curated through event handlers 

### What is event handler?
When an event is occured, event handlers are triggered. 
Given below are a bunch of basic JS events, when we ***perform an event, like clicking on the button*** 
by using ***event attribute called onclick***
then the event handler (the snippet of code the onclick event is defined in).
When an event handler is defined in the code, its called ***registering an event handler***

### Types of event handlers
1. Inline/ HTML event handlers 
JS and html are in the html document.
2. Traditional DOM event handlers 
Js and html are in seperate documents
3. addeventlisteners and removeeventlisteners 
4. Using parameters with event handlers and listeners 

## 1. JS basic events / event attributes / browser events / Inline/HTML Event Handlers

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

- event: clicking on the button 
- event handler: executed when you click on the button 
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
> an example using basic js events 
```bash 
    <style type="text/css">
        button{
          max-width: auto;
          border: 3px solid black;
          font-size: xx-large;
          margin: auto;
        }
      </style>
</head>
<body>
    <button onclick = "changeColor()">DataFlair</button> 
    <p></p>
  
</body>
<script>
        function changeColor(){

        document.querySelector("button").style.backgroundColor = "blue"; //change background color

        document.querySelector("button").style.color = "white"; //change font color

        document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
      } 
</script>

document:
when we click on the button, the bg-color of the button changes to blue, and the message "Great! The button changed its color." is printed below it 
```

## Drawback of Basic JS Events 
A drawback from the Basic JS event events, was that for adding html event attributes 
> you would have to manually use it on every element in the html file,
> so in order to make our JS events completely in the js file, we can use these other event handlers:

### So to keep the JS code in Js file itself, we follow either of 2 ways 
#### 1. Assign events using HTML DOM
##### Traditional DOM event handlers 
This method separates JavaScript from the HTML, thus is preferred over Inline event handlers. All the major browsers support this approach

> for any event (say onclick), you can attach only one function 
```bash  
    <style type="text/css">
        button{
          max-width: auto;
          border: 3px solid black;
          font-size: xx-large;
          margin: auto;
        }
      </style>
</head>
<body>
    <button onclick = "changeColor()">DataFlair</button> 
    <p></p>
  
</body>
<script>
        var btn = document.querySelector("button");
      function changeColor(){
        btn.style.backgroundColor = "blue"; //change background color
        btn.style.color = "white"; //change font color
        document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
      }

      btn.onclick = changeColor; ✅traditional DOM Event handler
</script>
```
> another example
```bash
document.getElementById(id).onclick = functioncall;
```

When you click on the id:header, the bg-color will change to green
```bash 
<script>
    var element; 
    document.getElementById('header').onclick = abc;

    function abc()
    {
        document.getElementById('header').style.background = "green";
    }

</script>
```
#### 2. Assign events using eventlistener
## DOM Event Listeners 
Drawback of using basic Js events/ event handlers, was that for every attribute you'd have 
to set the events on the html file itself inline, which increases file length 

Unlike traditional DOM event handlers, eventlisteners allow a single event to trigger multiple functions. 

> Event listener listens for the event that is happening

### There are 2 types of event listeners
1. addeventlisteners
2. removeeventlisteners

#### 1.1 DOM addEventListener() Method 
The document.addEventListener() method attaches a basic js event to the document.
```bash 
document.getElementById(Id).addEventListener("click", function(){}
);
```
***2.1 click- insert any basic JS event here such as: mouseenter***
(note: we dont use onmouseeneter/ onclick -> we remove the on)

***2.2 function- create a function here (anonymous function), you can even declare the function outside*** 
This code using addEventListener, does the same thing as the previous code 

> anonymous function: function which has no name/ identifier 

### addeventlistener
> example 1 
```bash
    <style type="text/css">
        .button{
          max-width: auto;
          border: 3px solid black;
          font-size: xx-large;
          margin: auto;
        }
      </style>
</head>
<body>
    <button class = "button" >DataFlair</button>   
    ✅removes onclick="changeColor() from this line 
    <p></p>
  
</body>
<script>
      var btn = document.querySelector(".button");
      function changeColor(){
        btn.style.backgroundColor = "blue"; //change background color
        btn.style.color = "white"; //change font color
        document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
      }

    
      btn.addEventListener('click', changeColor); ✅addeventlistener 
</script>

```

> example 2
```bash 
<script>
    var element; 
    document.getElementById('header').addEventListener("click", abc);

    function abc()
    {
        document.getElementById('header').style.background = "green";
    }

</script>

document:
when you click on the button bg-color turns blue and the message is printed
```
### removeeventlistener 
this method is used to remove the addeventlistener, this is done by using the same arguments given when event was added 
```bash 
    <style type="text/css">
        .button{
          max-width: auto;
          border: 3px solid black;
          font-size: xx-large;
          margin: auto;
        }
      </style>
</head>
<body>
    <button class = "button" >DataFlair</button>   
    <p></p>
  
</body>
<script>
      var btn = document.querySelector(".button");
      function changeColor(){
        btn.style.backgroundColor = "blue"; //change background color
        btn.style.color = "white"; //change font color
        document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
      }

    
      btn.addEventListener('click', changeColor);
      btn.removeEventListener('click', changeColor); ✅removeeventlistener
</script>

document:
on clicking the button, no change shown 
```
## 4. Using parameters with event handlers and listeners 
An example with the function defined inside the html object itself 
```bash 
As you hover over the id:header it will change bg-color 

<script>
    var element; 

    document.getElementById('header').addEventListener("mouseenter", function(){
        document.getElementById('header').style.background = "green";
    });
</script>
```

Using this keyword 
```bash 
<script>
    var element; 

    document.getElementById('header').addEventListener("mouseenter", function()
    {
        this.style.background = "green";
    });
</script>
```

### Discusing DOM, BOM and CSSOM 

## What is BOM?
- its a window object 
- manipulating browser will be done via BOM
- parent of DOM 

parent of DOM IS BOM 
> anything in DOM is part of BOM 

- This is the difference between window and document object 
![](images2.PNG)

#### window object 
The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

> A document window is a section of the screen used to display the contents of a document file on a GUI (graphical user interface) operating system. the object of document window is called the document object

> window object properties:
1. document 
2. innerHeight
3. innerWidth
(discussed in detail below)

#### document object 
When an HTML document is loaded into a web browser, it becomes a document object.

> The document object is the root node of the HTML document.
> The document object is a property of the window object.

> The document object is accessed with:
window.document or just document

1. document 
```bash
console:
#document
```

2. window 
```bash
console:
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
```

3. window.document 
```bash
#document 
```

4. window.document == document 
```bash
console:
true 
```

## DOM 
it is a set of APIs allowing the manipulation of HTML from JavaScript

> set of API - **communicating JS with HTML objects** 

- its a global object used to manipulate the nodes on webpage 
- its a tree like structure with which we can manipuate the nodes

> JS - node we say, when we talk about JS point of view 
> HTML - element we say when we talk about HTML point of view 


DOM enables a document’s structure and content to be read and modified from JavaScript

atructure comprimises of:
1. all the properties and attributes of the page:
> eg: 
- onclick (event attribute)
- src (attribute)
- class
- value (property)
- type (property)
- id
- eventlisteners 
- target (event property)
- name 

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects in the DOM 

2. content 
> eg: innerText, innerHTML, children, grandchildren

## CSSOM 
contains all style of the page 
**On html dom, style is done using CSSOM**

The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML.

> eg: margin, padding, color, border etc 

```bash 
document.body.style.backgroundColor = 'lightblue';
```

## render tree => DOM + CSSOM 
(for representation purpose)
contains everything that is rendered on the page 
(structure + style)

- displaying document on the viewport (where content is displayed)
- showing data and styling/ Displaying the render tree on the viewport 

(only captures/ renders visible content from the CSSOM)

```bash 
   BOM 
    | 
   DOM   +   CSSOM  => RENDER TREE 
```
### How is Render Tree Parsed?
whenever we load a page:
1. html document (DOM) is loaded
2. while parsing the engine will find css file which will create CSSOM 
3. js file is parsed and added to DOM 
4. finally they are combined in render tree, which is rendered/ displayed on the viewport 

## BOM (browser object model)
**changes property of browser** 
Under the hood, DOM is BOM's child

for browser related programming, we use window object.
- chrome 
- firefox
- opera 
- IE 

> browser refers to the window
> browser object refers to window object 

Terminologies:
- viewport 
- browser window 

What can we get from window object (inbiult methods)?
1. get width and height of browser window 
2. open and close browser window 
3. move and resize browser window 
4. scroll to browser window 
5. get URL, hostname, protocol of browser window 
6. get history of browser window 

## 1. get width and height of browser window 
#### Window height and width methods:
- innerHeight - height of the viewport 
- innerWidth - width of the viewport
- outerHeight - height of the browser window 
- outerWidth - width of the browser window 

Note: As you minimize the console window, or extend it, the window height/ width value 
changes.
```bash 
<script>
        ✅ innerHeight- calculates height from console bar to top of viewport 
        var iHeight = window.innerHeight;
        console.log("innerheight",iHeight);

        ✅ outerHeight- calculates height from top of viewport to bottom of viewport
        with respect to the size of the browser window on the screen 
        var oHeight = window.outerHeight;
        console.log("outerheight", outerHeight)

        ✅ innerWidth- its the width of the viewport 
        var iWidth = window.innerWidth;
        console.log("innerwidth",iWidth);

        ✅ outerWidth- its the width of the viewport + the thin outer section of browser window 
        var oWidth = window.outerWidth;
        console.log("outerwidth",oWidth);        
</script>
```
## 2. open and close browser window 
#### window Open() & Close() methods 
##### Open() method
Open window B through window A through integrating a button on window A
##### Close() method
Close window B through window A through integrating a button on window A

syntax:
```bash 
window.open(URL, name, specs)

    url: domain name of website with protocol (https://www.website.com)
    name: name of the window that your opening (optional)

    name:
    1. you can mention any random name (optional field) 
    this name is just for our reference 

    or
    2. you can give predefined parameter 
        1. _blank (new window opened in new tab)
        2. _self (window opened in same tab its written)
        
        for frameset based websites 
        3. _top 
        4. _parent 

    when you dont specify anything, it opens a new window in a new tab 

    specs: (what are the specs of the new window thats opening)
        - width 
        - height 
        - left 
        - top 
```
window.open() example:
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    
    <script>
        function openWindow()
        {
            window.open("http://www.mozilla.org", "", "width=500px, height=200px, left=100px, top=200px");
            ✅ when you click on the button a new window gets opened 
         
            ✅ instead of using name property use target properties to indicate where the window must open when button is clicked 

            ✅ new window B that opens will be at a distance of these specs wrt the desktop screen
            // "width=500px, height=200px    left=100px, top=200px"
        }
       
    </script>

</body>
```
window.close() example:
```bash 
    <script>
        let myWindow;
        function openWindow()
        {
            myWindow = window.open("http://www.mozilla.org", "width=500px, height=200px, left=100px, top=200px");
        }

        function closeWindow()
        {
            myWindow.close();
        }
        //window that we opened now closes 
       
    </script>
```
## 3. move and resize browser window 
### 3.1 moveBy() and moveTo() method
### 3.2 resizeBy() and resizeTo()

### 3.1 moveBy() and moveTo() method
#### moveTo() method 
works on absolute postion
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="moveWindow()">Move window</button>
    
    <script>
        //1. click on the open window button 
        //2. click on move window button - it moves to the coordinates we set in the function
        
        var myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");  
            //move doesnt work when you enter the website URL and the name 
            
            myWindow.document.write("<p>this is my window </p>");
        } 

        function moveWindow()
        {
           myWindow.moveTo(100, 100); //left right 

           //this code ensures that on clicking move window, the window is still 
           //shown above the browser window screen
           ✅myWindow.focus();

           //if we hadnt given this the window would be hidden under the browser window 
        }
       
    </script>
</body> 
```
### moveBy() method
works on relative position
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="moveWindow()">Move By</button>
    <button onclick="moveWindow1()">Move to</button>
    
    <script>
        var myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");  
            //move doesnt work when you enter the website URL and the name 
            
            myWindow.document.write("<p>this is my window </p>");
        } 

        function moveWindow()
        {
           myWindow.moveBy(100, 100);
        }

        function moveWindow1()
        {
           myWindow.moveTo(100, 100);
        }
       
    </script>
</body>
```
> Difference between moveTo and moveBy?
moveTo() - The coordinates we set will move with respect to the desktop screen, top and left position
moveBy() - The coordinates we set will move with respect to its original position

### 3.2 resizeBy() and resizeTo()
resizeTo() - resizes the window to the value given 
resizeby() - default window size + coordinates given 

```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="closeWindow()">close window</button>
    <button onclick="resizeWindow()">resize to</button>
    <button onclick="resizebyWindow()">resize by</button>
    
    <script>
        let myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");

            myWindow.document.write("<p> this is a document </p>");
        } 

        function closeWindow()
        {
            myWindow.close();
        }
        function resizeWindow()
        {
            myWindow.resizeTo(400, 400);
            // resizeTo(width, height) 
        }

        function resizebyWindow()
        {  //takes relative value 
            //if the browser width is 100px x 100px (height x width)
            //resizeby will increase the browser with by 150px x 150px in this case 
            myWindow.resizeBy(150, 150)

            //so the final browser dimensions will be  250px x 250px 
        }   

    </script>
```

## 4. scroll to browser window 
### ScrollTo() and scrollBy() methods 
scroll without scrollbar 

Terminologies:
-  vertical scrollbar (give y axis value)
upwards: negative value 
downwards: positive value

-  horizontal scrollbar 
leftwards: negative value 
rightwars: positive value 

## 5. get URL, hostname, protocol of browser window 
#### Location object
```bash 
console.log(location);

console:
VM179:1 Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/main/13-12/bom4.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
```
To get value from the URL bar/ location bar there are certain 

#### Location object properties:
- hash 
- host 
- hostname 
- href 
- origin 
- pathname 
- port 
- protoocl 
- search 

1. Host
```bash 
console.log(location.host);

console:
VM385:1 127.0.0.1:5500
```
2. Hostname (doesnt contain port number)
```bash 
console.log(location.hostname);

console:
VM491:1 127.0.0.1
```
3. href (returns url)
```bash 
console.log(location.href);

console:
VM580:1 http://127.0.0.1:5500/main/13-12/bom4.html
```

4. port 
```bash 
console.log(location.port);

console:
VM695:1 5500
```

5. protocol 
```bash 
console.log(location.protocol);

console:
VM804:1 http:
```

6. hash- returns hash value in url 
we add /#first to the end of the url in the browser, it shows an 404 error on console 
```bash 
console.log(location.hash);

console:
VM1037:1 #first
```
### Location object methods 
- assign()
- reload()
- replace()

1. assign - what website do you want to load on that page through console
```bash 
console.log(location.assign("https://www.google.com");
```
![](images/assign.PNG)
> back button is still enabled after entering the command

2. reload - page will be reloaded 
```bash 
console.log(location.reload())
```
3. replace - just like assign, except after you write this command in console, 
you cant go back to the previous page 
```bash 
console.log(location.replace("https://www.google.com"));
```
![](images/replace.PNG)
> back button is disabled after entering the command

## 6. get history of browser window 
### History Object 
```bash 
console.log(history);

console:
VM170:1 
History {length: 1, scrollRestoration: 'auto', state: null}
length: 1
scrollRestoration: "auto"
state: null
[[Prototype]]: History
```
History object properties:
- length (denotes how many websites were open on the same page )

> We enter a new website in the url, to measure the length 
```bash 
console.log(history.length);

console:
VM526:1 2           //2 websites were open on the same page 
```

### History Object methods:
- back()
- forward()
- go()

1. back()
```bash 
history.back();

viewport:
(enter a new url on the same page, and type in console)
loads the previous loaded page 
```

2. forward()
```bash 
history.forward();

viewport:
(enter this command on the same page you started off with)
loads the next loaded page 
```

3. go() - can go both forward and backwards 
- forward   (enter 1)
```bash 
history.go(1);

viewport:
goes one page forwards 
```

- backwards (enter -1)
```bash 
history.go(-1);

viewport:
goes one page backwards 
```
----

# Functions
(till now we've discussed)
1. as regular Functions
2. as key value (methods) for objects 
3. pass function to another function 
4. function as argument -> callback function</br>

5. function as variable 
```bash 
const x = function (a, b) {return a * b};
```
## 6. Return function from another function

```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   return b; // b is returned as a variable 
}

// function call only when its invoked 

let res = a();             
// function invoked only when its called
// function saved as a data in a variable res 

console.log(typeof res);  //console: function
// response returned by b is stored in the res function 

res();
console.log(res);  // function pointer, res points to 

console:
function a is called
functions.html:25 function
functions.html:16 function b call

ƒ ()
   {
     console.log("function b call");
   }
```
```bash
let fn = function()
{
    console.log("func")
}
console.log(fn); //this is a pointer to the function 

fn();           //this is invokation; contain round brackets 

console:
ƒ ()
{
    console.log("func")
}

func
```

Multiple functions:
we can define n number of functions, they wont be called unless you invoke it 
```bash
  function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   return b; // b is returned as a variable 

   // return c;  
   //to call c use this return statement instead 
}

// function call only when its invoked 
let res = a();             
//function invoked only when its called

console.log(typeof res);  //console: function

res();

console:
function a is called
functions.html:30 function
functions.html:16 function b call
```

#### calling both b and c together
#### 1. first were going to call a and b together
```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   let arr = [b, c]
   return arr;
}

// function call only when its invoked 
let res = a();             
//function invoked only when its called

res[0]();
//res is an array 
// [0] - index that signifies b 
// () - signifies function invocation

console:
function a is called
VM108:6 function b call
```
#### 1.2 were going to call a and c together
```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   let arr = [b, c]
   return arr;
}

// function call only when its invoked
let res = a();             //function invoked only when its called

res[1]();
VM121:3 function a is called
VM121:11 function c call
```
#### 3. were talking about how console.log(res) acts as a pointer to the function
```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   let arr = [b, c]
   return arr;
}

// function call only when its invoked
let res = a();             //function invoked only when its called

console.log("typeof",typeof res);  //console: function

// because its an array were not calling using res()
console.log("res",res) //this is a pointer 
res[0]();

console:
VM240:3 function a is called
VM240:21 typeof object
VM240:24 res (2) [ƒ, ƒ] 0: ƒ ()1: ƒ ()length: 2[[Prototype]]: Array(0)
VM240:6 function b call
```
#### 1.4 Calling both b and c together 
```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   let arr = [b, c]
   return arr;
}

// function call only when its invoked
let res = a();             //function invoked only when its called

console.log("typeof",typeof res);  //console: function

// because its an array were not calling using res()
console.log("res",res)
res[0]();
res[1]();

console:
function a is called
VM255:21 typeof object
VM255:24 res (2) [ƒ, ƒ]
VM255:6 function b call
VM255:11 function c call
```

## Write function where your function invokation for sum looks like this sum(10)(20)
```bash
sum (10) (20)
variable name (function) (function)

this can be divided into two 
sum (10) (20)
```
```bash
 let a = function()
       {
           console.log("a called")
           let b = function()
           {
               console.log("b called")
           }
           return b;
       }

       // saving in variable "res" and calling it  
       let res = a();
       res();

console:
a called
b called
```
same output different approach to this code is:
```bash
    let a = function()
       {
           console.log("a called")
           let b = function()
           {
               console.log("b called")
           }
           return b;
       }

     a()();

console:
a called
b called
```

```bash
      let a = function(param1)
       {
           console.log("param1")
           let b = function(param2)
           {
               console.log("param2")
           }
           return b;
       }

     a()();
     // (): calls function a()
     // (): calls function b()

console:
param1
param2
```
## Important Question
```bash
 let sum = function(param1)
       {
           let b = function(param2)
           {
               let add = param1 + param2 
               console.log(add)
           }
           return b;
       }

    sum(10)(20);
     // (): calls function a()
     // (): calls function b()

console:
30
```

### Deep copy VS Shallow copy 
when you copy object there are 2 different approaches you can do 

```bash
  obj = {
        key 1 : value1,
        key 2 : value2,
  }
```

1. Create a clone (shallow copy)
two different objects clone of each other 
picking data from obj1 and creating a new object obj2 which is clone of it 
if you make change in obj2, it will change in obj1 too

only creates a new reference 
creates a new memory pointer, doesnt create a new object 

real world uses of shallow copy 
- excel sheet: two people share the same excel sheet 
(obj2 makes change, obj1 can see it)

2. create a reference (deep copy)
one object obj3, 2 pointers to that object say obj1 and 
obj2 

changes made in obj3 (template), simultanously change will be
made in obj1 and obj2 
- changes made in obj1/ obj2. it wont affect the obj3

real world use cases of deep copy:
google docs -> templates --> you create a clone of resume templates, the original resume template wont be affected 

```bash
 let obj1 = {
            'key1' : 'value1',
            'key2' : 'value2',
            'key3' : 'value3',
        };

        let obj2 = obj1;
        //shallow copy 

        console.log("obj1", obj1)
        console.log("obj2", obj2)

        obj2.key1 ="another value";
        console.log(obj2)

console:       
obj1 Object>
obj2 Object>
copy.html:24 Object>

```

## Object makes constant
```bash
   //object created as constant
        const obj = {
            'key1' : 'value1',
            'key2' : 'value2',
            'key3' : 'value3'
        };

        //❌Illegal
        //we cannot create a new pointer 
        //with the same name 
        /*

        obj = {
            'new_key' : 'new value'
        }

        */
        //object.html:21 Uncaught TypeError: Assignment to constant variable.

        console.log("obj",obj);

        //objects are stored as memory pointer 
        //they can be changed 

        //we can update existing pointer 
        obj.key1 = "new value 2"
        console.log("obj changed",obj)

        //sealing object 
        //prevents changing of obj properties 
        //you cannot make changes after this 
        Object.seal("sealed",obj);
        //this object is sealed completely 

        //thats why we cant change it 
        //we cant change or delete or update or edit 

        delete obj.key2; //wont work

console:
obj {key1: 'value1', key2: 'value2', key3: 'value3'}
object.html:36 obj changed {key1: 'new value 2', key2: 'value2', key3: 'value3'}
```

### this keyword : Context keyword 
### this keyword 
this refers to the parent object which contains the function which is being called
(Owner object)

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
        
console:
Objectfn: ƒ ()[[Prototype]]: Object
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
## call, apply, bind 
this refers to owner, but we want a custom object **give custom value to the this keyword **. Functions that help us give custom value are call, apply, bind
        
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
    //this returns windows object 
    //because its not inside an object 
}

let obj = {
    'key1' : 'something',
    'key2' : 'something',
}

console.log("object");
let func = fn(obj); //this returns the object 

console.log("object without bind",func);
console.log("without bind function type",typeof func)

 let new_fn = fn.bind(obj);  //doesnt display anything on console 
// doesnt execute function
// it only binds the object with the function, it does not call

//2. Executing it with the variable you saved it 
console.log(typeof new_fn); //console: function

console:
object
practice.html:13 {key1: 'something', key2: 'something'}

practice.html:14 undefined
practice.html:15 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// returns windows object because in the func function console.log(this) is mentioned, which is not defined in an object

practice.html:28 object without bind undefined
practice.html:29 without bind function type undefined
practice.html:36 function
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

## Scope 
Scope of a variable defines where that variable can be accessed in the code 
1. local scope 
   variables defined inside the function 
   const and let keyword gets defined in local scope 

2. global scope 
   variables defined outside the function
   var is defined in global scope.
 
3. Lexical scope 
   accessing the variables which are declared outside the function call 
   is lexical scoping. eg: accessing age outside displayAge 

```bash
<script>
    var name = "reem"; //global variable 
    function displayName()
    {
        //displayName has its own name variable 
        console.log(name)
        

        var age = 20;
        function displayAge()
        {   //displayAge does not have its own age variable 
            console.log(age)
        }
        displayAge();
    }
    displayName();

</script>

console:
reem
20
```
same output, when we keep both variables global 
```bash
 <script>

    //keeping both variables global 
    var name = "reem";
    var age = 20;
    function displayName()
    {
        console.log(name)

        function displayAge()
        {   
            console.log(age)
        }
        displayAge();
    }
    displayName();

</script>

console:
reem
20
```
### Lexical
Where in the code, is the variable defined; not where were calling it. the scope in which we can access that variable is called lexical scope 

### Lexical Parent 
where it is written?
> displayAge written inside displayName, displayName is the lexical parent 

### Lexical Environment 
Scope is directly related to the lexical environment.

1. Local memory of that function (local memory: anything defined inside the function)
   first displayAge() looks for the age variable in its scope 

2. parent's lexical Environment
   2.1 if it doesnt find it there, it looks for it in displayAge parent's scope (displayName)
   2.2 Then it looks for it, in the displayName parent's scope (global execution context)
   2.3 if the variable is not present globally, then its gives a reference error 

```bash
<script>

    var name = "reem";
    //4. if it doesnt find it in lexical parent environment, 
    // it then checks in the global execution context which is the parent of 
    // displayName

    function displayName()
    {
        //3. then it will look for it in the lexical parent's environment 
        var age = 20;
        console.log(name)

        function displayAge()
        { 
            //2. it will first look for the variable "age", inside the local memory of the function called, if its not present 
            console.log(age)
        }
        //1. when this function is called 
        displayAge();
    }
    displayName();

</script>

console:
reem
20 
```

local memory of global execution context 
1. var name = "reem"

local memory of displayName
1. var age = 20
> lexical parent: global execution context 

local memory of displayAge
1. no variables 
> lexical parent: displayName

##### Lexical scope 
relative scope - scope within which we can access 
> The process of finding lexical scope (scope where the variable is present) is called scope chaining 

> what is lexical scope wrt 2 lines of code?
```bash 
<script>
//reference scope where all required variables/ functions/ constants are available 
    let c = 10
    let d = 20 
    { //this bracket enclosure is the lexical scope 
        let c = 30
        {
            let d = 40 
            {
                console.log(c) ✅
                console.log(d) ✅
            }
        }
    }
</script>

console:
30 
40 
```
## Scope Chain 
this mechanism of finding variables through lexical environment scope and if its 
not available, referencing it to the parent lexical environment is called 
scope chain 

Every function has a reference to its lexical parent environment, 
> if it doesnt find in the local memory of displayAge it tries to find it in/ references it to  
> local memory of displayName which is the lexical parent of displayAge
> if it doesnt find it in displayName, it tries to find it/ references it to, lexical parent of displayName
> if it doesnt find it global execution context, it references it to null 
  which is why it throws reference error : age is not defined 

```bash
<script>
    var name = "reem";
    function displayName()
    {
        console.log(name)

        function displayAge()
        { 
            console.log(age)
        }
        displayAge();
    }
    displayName();
</script>

console:
reem
scope.html:19 Uncaught ReferenceError: age is not defined
at displayAge (scope.html:19)
at displayName (scope.html:21)
at scope.html:23
```
### You can only check for the variable, from the lexical parent, not the lexical child, according to the scope chain 
> var gets pushed on top due to hoisting 
```bash 
<script>
    {
        var a = 10
    }

    console.log(a)
</script>

console:
10
```

> hoisting doesnt work on let 
```bash 
<script>
        {
            let a = 10
        }

        console.log(a)
</script>
//let and const does not get hoisted, thats why this code crashes 

console:
reference error 
```
> let is in its scope 
```bash 
   <script>
        {
            let a = 10
            console.log(a)
        }

    </script>

console:
10
```
> example 
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        console.log(a)
    }
    </script>

console;
20 
10 
```
> example
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        {
            let a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
30
10 
```
> In the same scope you cant change const, but in child scope you can change it 
```bash
    <script>
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
10 
10
```
> in let, can update value within same scope level , in const cannot update value 
within the same scope level, can create a new child block and a new constant with the 
same name 
```bash 
    const m = "20"
    function fn()
    {
        const m = "30"
        console.log(m)
    }

    fn()

console:
30 
```
> example using const 
```bash 
    <script>
    const a = "5"
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            const a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20
30
10
5
```
> var refers to the last updated value, unlike const 
```bash 
    <script>
    var a = "5"
    {
        var a = "10"
        {
            var a = "20"
            console.log(a)
        }
        {
            var a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20 
30 
30 
30
```
> const refers to inner scope, var refers to outer scope 
```bash 
    <script>
    var a = "5"
    {
        const a = "20"
        {
            console.log(a)
        }
    }
    </script>

console:
20 
```
> parent: let, child:var. wont work 
```bash 
    <script>
    let a = "10"
    {
        var a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
chaining.html:13 Uncaught SyntaxError: Identifier 'a' has already been declared
```
> parent: var, child:let, works 
```bash 
    <script>
    var a = "10"
    {
        let a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
20 
10 
```
> cannot have two let together in same scope 
```bash 
    <script>
    // let a;   - declaration 
    // a = 20;  - defination 

    let a = 10  
    let a = 20   
    </script>

console:
Uncaught SyntaxError: Identifier 'a' has already been declared
```
> dont have redeclaration 
```bash 
<script>
    let a = 10    
    a = 20     
    console.log(a)
</script>

console:
20
10
```
> var allows redeclaration
```bash 
<script>
    var a = 10 
    var a = 20 
    console.log(a)
</script>
```

Drawback of this keyword:
sometimes IT BINDS TO WINDOWS OBJECT, SOMETIMES IT BINDS TO THE FUNCtION itself.
In arrow Keyword nothing in binded. but you cannot use them in method

### Arrow Functions 
Before ES6 these were 2 methods of defining functions 

```bash
 <script>
       //1st method
       function hello()
       {
           console.log("hello")
       }
       hello();

       //2. 2nd method 
       //anonymous function 
       //hello is not the function name, its the reference

       let hello = function(){
           console.log("hello")
       }
       hello();
  </script>

console:
hello 
hello 
```

### In case of Arrow Functions,
the code is shortened 
```bash
<script>
      //in case of arrow functions
      let hello = () => console.log("hello");

      hello(); //calling function
</script>

console:
hello
```
Before ES6 code was written like this 
```bash
<script>
      let welcome = function(name)
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
      //used before ES6 versions 
</script>

console:
hello, reem 
```
However, in ES6 after arrows were introduced these were changes made 
```bash
  <script>
      let welcome = (name) =>
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
  </script>

console:
hello, reem
```
#### we can call more than one parameters in the function as well
```bash
 <script>
      let welcome = (name, age) =>
      {
          return `hello, ${name} ${age}`
      }
      console.log(welcome('reem', 20))
  </script>

console:
hello, reem 20
```
#### we can reduce the entire function to a single line 
we can remove the return statement
```bash
<script>
    let welcome = (name, age) => `hello, ${name} ${age}`
    console.log(welcome('reem', 20))
</script>

console:
hello, reem 20
```
#### you can remove the parenthesis, if there is only one parameter 
```bash
 <script>
    let welcome = name => `hello, ${name}`
    console.log(welcome('reem'))
 </script>

 console:
hello, reem 
```

## REST operator 
Why did the need for REST operator emerge? 
```bash 
 //function with multiple args 
        function sum(num1, num2)
        {
            console.log(num1 + num2)
        }

        sum(20,30);
        //sum(20, 30, 40)

        //this function only works with 2 parameters to resolve this issue 
        //JS ES6 introduced REST Operators 
```
```bash 
        //for/ in loop converts args to objects,
        function sum()
        {
            console.log(arguments)

            let sum = 0 
            for(let i in arguments)
            {
                sum = sum + arguments[i]
            }

            document.write(sum + "<br>")
        }

        sum(20, 30)
        sum(20, 30, 40)
        //sum("reem", 20, 30)    // doesnt add up 

document:
50
90
0reem2030
```

1. problem here is that, we cant pass other datatypes here like strings, to resolve this issue we have rest operator 
2. In REST operator 

```bash 
sum("reem", 20, 10)
rest operator in this sum function seperates this into: name and arguments 

    // 20 and 10 in one array 'args'
    // reem in another array  'name'

... signifies REST operator 
REST stores all arguments that need to be summed, inside this ...args 
``` 

> using Rest Operator to seperate string with ints 
```bash 
        function sum(name, ...args)
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }
        sum("reem ", 20, 30)

document:
reem 50 
```

### Rest operator doesnt work on arrays 
Rest operator only works only on multiple values, not on array
```bash 
// for example, if we pass args in form of array 
// it will consider the array as one element 

        
        function sum(name, ...args)
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }

        var arr = [20, 30, 40 ]
        sum("reem ", arr)

document:
reem 020,30,40
```

### Spread operator 
    thats why we use SPREAD OPERATORS 
    spread the array into multiple arguments 

```bash 
    function sum(name, ...args)
    // rest operator used in function declaration 
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }
    var arr = [20, 30, 40 ]
    sum("reem ", ...arr)
    // spread operator used in function call 

document:
reem 90 
```
-----
## Time Async functions 
***1 second = 1000ms***
1. setTimeout()
2. clearTimeout()
3. setInterval()
4. clearInterval()

### 1. setTimeout() and clearTimeout()
#### 1.1 setTimeout()
function starts after the particular time interval we mentioned 
#### 1.2 clearTimeout()
function ends when clearTimeout() is invoked 

> example
```bash 
   <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="test"></div>
    <button onclick="stopAnim()">stop animation</button>
    <script>
        var id = setTimeout(Anim, 3000);
        //anim function starts after 3s

        function Anim()
        {
           var target = document.getElementById("test");
           target.style.width = "500px";
           //after 3s width increases to 500px
        }

        function stopAnim()
        {
            clearTimeout(id);
            //when you click on this the animation stops even after 3seconds
        }
    </script>
</body>

viewport:
1. After 3seconds the width of the box increases to 500px due to setTimout function
2. If you click on the stop Animation button before 3s, it will not increase its width 
```
Instead of creating a seperate function Anim(), we integrate it inside this,
```bash 
var id = setTimeout(Anim, 3000);
```
Here's how it looks like right now
```bash 
    <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="test"></div>
    <button onclick="stopAnim()">stop animation</button>
    <script>
       // var id = setTimeout(Anim, 3000);

       var id = setTimeout(function() ✅1. function Anim defined here 
        {
           var target = document.getElementById("test");
           target.style.width = "500px"; 
        }, 3000);

        //function Anim()
        // {
        // var target = document.getElementById("test");
        // target.style.width = "500px";
        // after 3s width increases to 500px
        // }

        function stopAnim()
        {
            clearTimeout(id);
            //when you click on this the animation stops even after 3seconds
        }
    </script>
</body>
```
### 2. setInterval() and clearInterval()
#### 2.1 setInterval()
function called at every interval (ms) you mention 
#### 2.2 clearInterval()
function to stop the interval at a particular time 
```bash 
    <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head> 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      var id = setInterval(Anim, 100);
      ✅ value of a increases by 10 at every 0.1 second 

      function Anim(){
          a = a + 10;

          ✅ after 0.5s the animation stops 
          if(a == 500)
          {
              //animation stops after 500ms
              clearInterval(id)
          }
          var target = document.getElementById('test');
          target.style.marginLeft = a + 'px';
          ✅ by the end of 0.5s, the value of a reaches 500 (10(increases by 10 every run) x 50 (runs 50 times))
      }   
    </script>
</body>

viewport:
1. the red box keeps moving to the left, by increasing the left margin to 10, at an interval of 100ms 
2. when the red box reaches a value of 500
````
#### Difference between setInterval() and setTimeout()
> setTimeout- calls only once 
> setInterval- calls multiple number of times
##### setTimeout()
- it prints hello after 3 seconds on the console 
```bash 
<body>
    <div id="test"></div>
    <script> 
   
      setTimeout(Anim, 3000);

      function Anim(){
          console.log("hello")
      }
    </script>
</body>
```
> another example
```bash 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      setTimeout(Anim, 3000);

      function Anim(){
          a = a + 10;
          console.log(a)
      }
    </script>
</body>

console: 
10
```
##### setInterval()
- count of hello keeps increasing in the console at an interval of 3s
```bash 
<body>
    <div id="test"></div>
    <script> 
   
      setInterval(Anim, 3000);

      function Anim(){
          console.log("hello")
      }
    </script>
</body>
```
> another example
```bash 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      setInterval(Anim, 3000);

      function Anim(){
          a = a + 10;
          console.log(a)
      }
    </script>
</body>

console: 
10
20
30...
keeps increasing at a 3s interval 
```
#### Difference between clearTimeout() and clearInterval()
In some browsers, like chrome, 
clearTimeout() can be used to stop setTimeout() and setInterval() as well 
clearInterval() can be used to stop setTimeout() and setInterval() as well 

However, both cannot be used interchangebly, 
clearTimeout() should be used to stop setTimeout()
clearInterval() should be used to stop setInterval()

> clearTimeout() method cancels a timeout set with setTimeout() method
> clearInterval() method clears a timer set with the setInterval() method.
-----

## What is fetch() method?
To understand this, lets first understand promise method 
(introduced in JS E6 version)

### 3 stages of promise:
1. promise: pending (not yet fulfilled )
2. promise: fulfilled 
3. promise: rejected

>> What is a promise?
> A method in JS, which can give 2 outcomes, for a condition specified 
#### 1. promise(): fulfilled 
>> this means promise is resolve()

if its resolved, we can use a JS function, then()
which is a callback function

#### 2. promise(): rejected
>> this means promise is reject()

if its rejected, we can use a JS function, catch(),
which is also a callback function 

Promise syntax:
```bash 
let prom = new Promise();
// we define a function inside promise 

let prom = new Promise(function()
{
});
```
#### The function can take parameters:
1. resolve
2. reject

based on whether promise is accepted or not.

### 1. If promise is accepted, call resolve() function
```bash 
let prom = new Promise(function(resolve)
{
});
```
### 2. If promise is declined, call reject() function
```bash 
let prom = new Promise(function(reject)
{
});
```
### We can even use an if-else, which lets the function know that 
1. if promise is accepted, then resolve() function is called 
2. if promise is rejected, then reject() function is called 

These are predefined callback functions in JS, you dont need to define it.
1. then 
2. catch 

```bash 
let prom = new Promise(function(resolve, reject)
//taking 2 conditions, one for success, other for fail 

{
if(condition)
{ 
   resolve("here is a success");
   // the message that is inside this, will be returned to result 
   (variable in onfulfilment function) 
}
else
{
   reject("here is a failure");
   // the message that is inside this, will be returned to error 
   (variable in onRejection function)
}
});
```
#### Whenever resolve() or reject() return something it will be stored in these functions
##### 1. Whenever resolve() function returns something, it will be stored in this result variable
```bash 
let onfulfilment = (result) => { console.log(result); }
```
This is how, it will look like in a function expression (anonymous)
```bash 
let onfulfilment = function(result)
{
   console.log(result)
}
```
##### 2. Whenever reject() function returns something, it will be stored 
in this error variable 
```bash 
let onRejection = (error) => { console.log(error); }
```
This is how, it will look like in a function expression (anonymous)
```bash 
let onRejection = function(error)
{
   console.log(error)
}
```

#### Now, to call these functions, JS has inbiult callback functions called
1. then 
2. catch 

> callback functions: functions that are called as parameters

1. then 
is called when promise is resolve()
```bash 
prom.then(onfulfilment);
```

2. catch 
is called when promise is reject()
```bash 
prom.catch(onRejection)
```

examples 
#### 1. When value entered is true 
```bash 
    <script>
        let complete = true; 
        ✅checking in promise is this value true or false 

        ✅creating promise method 
        let prom = new Promise(function(resolve, reject)
        {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });

        console.log(prom);
    </script>

console:
Promise {<fulfilled>: 'succesful promise'}
```
#### 2. When value entered is false 
```bash 
 <script>
        let complete = false; 
        //checking in promise is this value true or false 

        //creating promise method 
        let prom = new Promise(function(resolve, reject)
        {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });

        console.log(prom);
    </script>

console:
Promise {<rejected>: 'failed promise'}
```
#### Embedding parameter in a function  
     returning the value in the console.log 

##### 1. when value entered is true 
```bash 
    <script>
    //setting  function as a parameter 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

        console.log(prom(true));
        //add value over here 
    </script>
```

##### 2. When value entered is false 
```bash 
   <script>
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

        console.log(prom(false));
        //add value over here 
    </script>

console:
Promise >
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "failed promise"
```
example:
```bash
    <script>
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
                // if the promise is resolve i.e its fulfiled, then 
                its returned to onfulfilment function, where the value stored 
                inside the resolve function will be stored in result variable 
            }
            else
            {
                reject("failed promise");
                // if promise is in rejected state, then its returned to 
                onRejection function, where the value stored inside the 
                reject function will be stored in the error variable
            }

        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions

    // when complete is true
    prom(true).then(onfulfilment); 
    ✅ if promise is returned, then return the result in onfulfilment function 

    // when complete is false 
    prom(true).catch(onRejection);
    ✅ if promise is rejected, then return the result in onRejection function 

    </script>

console:
succesful promise 
```
## Pending promise 
illustration

#### 1. When complete is true 
```bash 
    <script>
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(true).then(onfulfilment);
    prom(true).catch(onRejection);

    </script>

console:
fetching data, please wait
fetching data, please wait
succesful promise

explanation:
Since prom is called 2 times, 
>> pending promise = fetching data, please wait
is displayed twice 

Succesful promise is loaded a second after, according to timeout manipulation
```

#### 2. When complete is false 
```bash 
    <script>

        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(false).then(onfulfilment);
    prom(false).catch(onRejection);

    </script>

console:
fetching data, please wait
fetching data, please wait
failed promise
```
### Method Chaining
Instead of writing, these statements two times,
```bash 
prom(false).then(onfulfilment);
prom(false).catch(onRejection);
```
we can minimize it to one line 
```bash 
prom(false).then(onfulfilment).catch(onRejection);
```
> if condition is true, promise resolved, then "this" function will be called; 
> if condition is false, promise rejected, then "catch" function will be called 

#### In this case, pending promise will be printed only one time 
```bash 
    <script>

        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    ✅method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then(onfulfilment).catch(onRejection);
    
    </script>
    
console:
fetching data, please wait
failed promise
```

### We are now replacing the onfulfilment function and onRejection code inside this statement itself 
```bash 
prom(true).then(onfulfilment).catch(onRejection);
```
Were doing this to minimize the code.
#### 1. When value is true, it returns .then function
```bash 
<script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    ✅ Removed onfulfilment function from here  
    ✅ Removed onRejection function from here 
  
    //prom(true).then(✅onfulfilment).catch(✅onRejection);

    prom(true).then((result) => 
    { console.log(result)
    }
    ).catch((error) => 
    {
        console.log(error)
    }
    );
    
    </script>
    
console:
fetching data, please wait
succesful promise
```
#### 2. When value is false, it returns .catch function 
```bash 
    <script>

        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    ✅method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then((result) => { console.log(result)
    }).catch((error) => {
        console.log(error)
    });

    </script>

console:
fetching data, please wait
failed promise
```

### Calculating division 
#### 1. succesful calculation, when a > 0 and b > 0
```bash 
<script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(5,4).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
succesful calculation: 1.25
```

#### 2. errors in calculation, when a = 0, b > 0
```bash 
 <script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(0,5).then((result)
    => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
fetching data, please wait
failed to calculate
```
### Lets learn some basics before jumping further 
#### Types of network architecture: 
ways in which computers are connected in a network 

##### 1. peer to peer architecture 
all computers are directly linked to each other and can share data with each other 
- we cannot backup data because there is no server 
- only feasible for say 10-20 computers

##### 2. client server architecture / Request-response architecture 
client makes a request to the server, and server will fulfill the response,
- data can be easily backed up in the server  
- increases speed of resource sharing

client requests for resources (typing the url in browser)
the server,fetches resource from database and returns the respsonse.

#### Client
web browser 

#### Server 
centralised machine that provides services to clients, clients connect thrugh over a network 

> Takes request from client and returns a response based on the client's request

##### server should essentially have:
1. Robust hardware, 
2. little to no down time 
3. server based CPU (intel XEON processor)
- multiprocessor ability (can add more than 1 XEON processor in the motherboard)
- supports larger amounts of RAM 
- larger cache memory 
4. ability to perform a lot of tasks simultanousely 
5. many powersupply, so it keeps running even when power fails at one spot 

### For different service, we have different servers, for different servers we have different softwares
types of server, based on type of service, server provides:
#### 1. web server (machine which provides web pages)
- contains web server software 

#### 2. database server (provides database only)
- contains database server software 

#### 3. email server (provides email only)
- contains email server software 

#### 4. file server (provides file server)
- contains file server software 

#### 5. print server (provides print services)
- contains print server software 

### For different softwares, we have different port numbers,
#### How do clients differentiate from different services?
every service has its own port numbers and its own protocol 

### Each port number has its own dedicated protocol 
1. file server (FTP protocol)
2. web server (HTTP protocol)
3. print server (IPP (Internet printing protocol))
4. database server (TCP/IP )
5. email server (SMTP protocol)

#### What is a protocol?
Client needs to identify **which server it needs to connect to**, in order to do this, 
it searches for the **port number**, that the particular server runs at,
**every distinguished port number has a particular protocol**

eg: file server runs on FTP protocol 
Once the **client identifies the protocol**, it can then connect the devices and 
exchange information between them over the network.

### http methods 
basic operations in website: CRUD 

#### Safe method 
when you fetch data, the data on server is not changing
1. get- get resource from server 

#### Unsafe method 
when you do manipulations, data on server is changing 
2. post   - create new data in the server database
3. put    - update resource
4. delete - delete resource 

```bash 
Create - Post
Read - Get
Update - Put
Delete - Delete
```

## JSON (Javascript Object Notation)
Data exchange format. (like XML)
> used to store and exchange data 

### When to use JSON?
When you want to send data from client to server and recieve data from server, 
we use JSON 

#### Diffference between JSON AND XML?
1. JSON is a text based format, not a language, while XML is a markup language
2. JSON is lightweight, XML is heavier 
3. Json doesnt support comments and namespaces, while XML does

#### Difference between JS object and JSON object? 
### Javascript object 
1. key-value pairs can be written in either '' or ""
2. its not neccesary to give quotes to key 
```bash 
var person = { firstName : "reem", lastname : "shaikh" };
alert(person.firstName + person.lastname)
```

### JSON object 
1. keys have to be in ""
2. '' is not accepted 
```bash 
var person = { "firstName" : "reem", "lastname" : "shaikh" };
alert(person.firstName + person.lastname)
```
> Disadvantages of JSON 
cannot use JSON to transfer video, audio, images or any another binary information

> Advantages of JSON 
mainly used in website API

### What is an API?
> two applications communicate with each other throough an API 
> we use API to get access to a specific functionality or data 
> we biuld API to aggregrate a bunch of backend data 

> example:
1. We created a website using PHP on backend and MYsql on db 
2. we want to create an app for that website in both ios and android 
3. our website can easily fetch data from mysql, however 
4. apps cannot fetch data directly from mysql because it has other libraries

### API is a third party program,
1. API takes request from android app & website & iphone app and sends it to mysql after authenticating through API key.

```bash 
                          sends a request            request recieved
   (native) android app   ---->
   (php)    website       ---->        API          ---------------->  MYSQL
   (swift)  ios app       ---->
                                    data converted 
                                    to JSON format   <----------------
                                                     returns a response                                              
```

2. mysql assess the data and returns a response 
3. data is now sent in the form of json data (from API- mysql data converted to JSON) which can be intrepreted by website, ios app and android app.
3. ios app, website and android app can easily access this data in json format  

```bash
Notes:
API key is a security key, which contains a unique value,
to access the API you need a key which will be send along with the request you 
make to the server 

API KEY 
a key ID that identifies the client responsible for the API service request.

API keys provides:
> Identification
identifies is the app that's making a call granted permission to access the API?

> Authentication:
Prove to API that you are the user you claim to be 

> Authorization
grant access right to use the API, this doesnt need log in/ crednetials 
```
### Types of API 
1. Generalised API
2. Web service API 

## 1. Generalised API 
##### 1.1 Open API / Public API 
A public API is open and available for use by any outside developer or
business. An enterprise that cultivates a business strategy that 
involves sharing its applications and data with other businesses will 
develop and offer a public API.

Public APIs typically involve moderate authentication and authorization.

##### 1.2 partner API - creating API in collaboration with business partners 
Partners have clear rights and licenses to access such APIs.
For this reason, partner APIs generally incorporate stronger 
authentication, authorization and security mechanisms.

##### 1.3 Internal API- internal API services, which are private to the company
An internal (or private) API is intended only for use within the enterprise, 
to connect systems and data within the business. 
For example, an internal API may connect an organization's payroll and
HR systems.

Internal APIs traditionally present weak security and authentication -- or none at all --
because the APIs are intended for internal use, and such 
security levels are assumed to be in place through other policies.

##### 1.4 Composite API- fetch from different API's and then create a single API through it 
Composite APIs generally combine two or more APIs to craft a sequence of related or interdependent
operations, and can sometimes improve speed and performance over individual APIs.

## 2. Web service API
1. REST 
2. SOAP - simple object access 
3. RPC - remote procedural call (RPC) 
RPC can employ two different languages, JSON and XML, for coding; these APIs are dubbed JSON-RPC and XML-RPC, respectively.
-  XML-RPC  
-  JSON-RPC 

#### Web server vs application server 
case: we have a script.js file which adds adds two numbers and returns the sum

##### Web Server
- returns only the data requested to the client, without doing any proccessing
- cannot execute the file 
case 1: web server will not return the sum, it will only return the script as it is

##### A web server delivers static web content—e.g., HTML pages, files, images, video, primarily in response to hypertext transfer protocol (HTTP) requests from a web browser.

eg: Apache HTTP server, NGINX 
> open source web server that includes reverse proxy, load balancing, mail proxy, and HTTP cache capabilities

##### Application server
- returns the data requested to the client, with the proccessing
- can execute the file 
case 2: application server returns the sum

##### Application server can generate dynamic content based on server-side logic.

eg: Apache Tomcat, Glassfish 
open source application server that executes Java Servlets, renders and delivers web pages that include JavaServer Page code, and serves Java Enterprise Edition (Java EE) applications.

## JQuery
Drawbacks of JS:
1. lengthy DOM manipulation
2. lengthy coding 
3. complex animations 
4. long selectors 

```bash
To fix this long code issue, each of these drawbacks were created as a function 
because its repeated code, which can be minimized and placed into a library called JQUERY.
```
> its cross-browser compliant, works on all browsers 

In js, for DOM manipulation 
```bash 
document.getElementsByClassName('classname)
```
however, in JQuery, code is minimized 
```bash 
$('.classname')
```
#### How to implement JQuery.js in html?
1. download the JQuery file 
2. implement JQuery with CDN path 

#### 1. Download the JQuery file 
1. download jquery file from jquery.com (uncompressed file)
2. save this file in the a js folder in the same repo as ur html 
3. add it to your code through script tag, define it in the head section 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery.js"></script>
</head>
<body>
    
    <script>

    </script>
</body>
</html>
```
#### 2. Jquery through CDN path
> CDN - content delivery network - content of the jquery part of your website comes from different network 

CDN Server contains the jquery library embedded, 
developers would prefer linking the CDN path instead of physically storing 
the file in the repo, because this reduces the load of the website. 

##### Steps to implement CDN path to code:
1. go to jquery official website and scroll down to using jquery with CDN 
2. click on this  https://code.jquery.com
3. we'll be using jquery 3.x, minified version 
4. this link loads 
```bash 
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
```
5. Add this code after the title secton in the head 

#### What is JQuery? 
1. Javascript library/ framework, which simplifies JS programming 
2. helps in AJAX and DOM manipulation 

## What is AJAX?
its a technology which helps creating fast and dyanamic web pages.

- A - Asynchronous 
- J - Javascript 
- A - and 
- X - XML 

1. AJAX stands for asynchronous Javascript and XML
(Modern websites use JSON instead of XML for data transfer)
2. AJAX is not a programming language, its set of existing technologies, it can be set using 
- JS 
- JSON or XML 
- Jquery 

3. AJAX helps in fetching data asynchronously

##### How it works?
Client requests server for a file, server processes the request and sends a response, in generic 
condiitons, for the client to view the changes, the clients browser is loaded/ refreshed. 

In order to prevent this loading, we use AJAX,
while client requests the server for a file, AJAX sends **XMLHttpRequest** in the background with the request to the server, now when the server processes the request and returns the response to the client, the changes are made without the need to load/ refresh the page

##### the data the server returns can be in 3 formats 
- .txt file
- .xml data 
- .json data 

***AJAX uses XMLHttpRequest (XHR object (inbiult object)) - which contains methods and utility functions***

> XHR object ensures that changes are loaded on the page, without refreshing 
```bash
There are 5 states involved while data is passed through XHR object in the background

Ready state is basically a code number assorted to each state/ each step of the data request- response process, when data is passed with XHR object in the background

These 5 state (code numbers) are called readyState
- 0: no request sent to the server 
- 1: client-server connection establishment 
- 2: request recieved to server 
- 3: server processes request 
- 4: response sent from server 

Response sent from the server contains:
Based on the data, we asked from the server, it returns the data format:
1. status
code which tells whether the response we recieved, is proper or not 
- 200: "ok"            ✅server responded with what we requested for 
- 403: "forbidden"     ✅server is not responding due to technical issues 
- 404: "not found"     ✅server has not recieved the file were requesting for 

2. responseText 
returns text if we requested for it 

3. responseXML 
returns XML if we requested for it 
```
##### Advantages of AJAX:
1. We can add a particular change in the page, and it gets integrated in the page without externally loading it 

> we want to add a change to a specific section of the website, the entire website will not be rendered, only the new change thats made will be sent to the server and integrated to the oage, without the need to load the page 

### Javascript Ajax syntax:
```bash
var xhhtp = new XMLHttpRequest()

xhttp.onreadystatechange = function()
{
   //did the server response reach succesfully or not?
   if(this.readyState == 4 && this.status == 200)
   ✅when readystate is 4 and status code is 200
   {
       //set the response in the HTML
       document.getElementById("demo").innerHTML = this.responseText;
   }

};

xhttp.open("GET", "filename.txt", true)  
xhttp.send()
```
✅create an object of XMLHttpRequest()
```bash
var xhhtp = new XMLHttpRequest()
```
//we can send a request to server through this object 
//we can fetch a response from server through this object 

✅There are 2 methods for assesing data:
```bash
xhttp.open("GET", "filename.txt", true)  
//xhhtp.open("method", "path of file you want to send/ server side file", async mode)

xhttp.send()
//request is sent to the server by using this method

method types:
1. GET - data that's sent to the server, is not hidden 
2. POST - data sent to the server is hidden 

async mode:
1. true- asynchronize mode is on(code is executed even when server has not given a response, yet, to the request we made)
2. false- aysnchronize mode is off (code will not be executed until server gives a response, to what we requested for)
```

Ready state is checked through this function 
```bash 
xhttp.onreadystatechange = function()
{
   //did the server response reach succesfully or not?
   if(this.readyState == 4 && this.status == 200)
   ✅when readystate is 4 and status code is 200
   {
       //set the response in the HTML
       document.getElementById("demo").innerHTML = this.responseText;
       //the entire page will not refresh, only #demo will be refreshed and rendered on the page 
   }

};

this works as an event, and returns the status of the readystate dyanamically
```
### Synchronous VS Asynchronous 
Synchronous
- when the client requests for data from the server, while the server is processing the data (server-side processing), client is blocked (JS Engine of the browser is blocked) until the request completes 
- full page is refresshed when the request is complete (the time server took to send the response, to the request is called request time) 

In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. you need to wait for a task to finish to move to the next one.

Asynchronous 
-  when the client requests for data from the server, while the server is processing the data (server-side processing), the client is not blocked (JS engine of the browser is not blocked), the user can perform other operations simultanously
- full page is not refreshed at request time, because while the data is server side processing, AJAX technology communicates with the server through XHR object

you can move to another task before the previous one finishes in asynchronous operations, hence your able to deal with multiple requests simultanousely, completing more tasks in shorter period of time 

### Where is it used?
JavaScript is a single-threaded programming language which means only one thing can happen at a time. That is, the JavaScript engine can only process one statement at a time in a single thread.

While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread.

Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.

That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.

> link to the blog: https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

## Data fetching with AJAX 
Data that's fetched from API, through AJAX server 

```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--Jquery CDN link-->
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>

</head>
<body>  

    <script>
    function prom()
    //function returns a promise
    {
        return new Promise(function(resolve, reject)
        {
        console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              console.log(data);
          })

        ✅ this function is used to fetch data from json API using AJAX 
        ✅ $.get(ajax url, where data should be displayed in AJAX)

        //AJAX URL 
        //we use a JSON placeholder API, head over to posts and copy the url 
        //https://jsonplaceholder.typicode.com/posts

        }, 1000)
          
        });
    }

    prom().then((result) => 
    {
        console.log(result)

    }).catch((error) =>
    {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //prints 100 arrays from the API 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
##### If the function(data) doesn't return anything, then it prints the reject parameter 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
    <!--Jquery CDN link-->
</head>
<body>  
    <script>
        function prom()
        //function returns a promise
        {
            return new Promise(function(resolve, reject)
            //taking resolve and reject as parameters 
            {
            console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              resolve(data);
              //calling resolve function

          }).fail(err => {
              reject("failed to load json")
              //calling reject function
          });

        //integrating error message 
        }, 1000)
          
        });
    }

    prom().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //same output as above 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
> code written without arrow function 
```bash
<body>
    <script>
          function prom()
        //function returns a promise
        {
            return new Promise(function(resolve, reject)
            //taking resolve and reject as parameters 
            {
            console.log("fetching data, please wait");
 
        setTimeout( function() {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              resolve(data);
              //calling resolve function

          }).fail(
            function err()  
          {
              reject("failed to load json")
              //calling reject function
          });

        //integrating error message 
        }, 1000)
          
        });
    }

    prom().then(
    function (result)
    { console.log(result)    
    }).catch(
    function(error)
    { console.log(error)
    }); 
    </script>

console: //same output as above 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

# promise() VS promise.all()
#### promise()
used to check conditions 
1. resolve(), .then() 
if promise resolved, then we use, then function and show success message 
2. reject(),  .catch()
if promise rejected, then we use, catch function and show error message 

#### If we have more than one promise 
### promise.all() method
1. resolve(), .then()
if all promises resolved, then only we use, then function and show success message 
2. reject(),  .catch()
if any promises rejected, then we use, catch function and show error message 

```bash 
       promise()         promise()          promise()
         |                  |                   |
         |__________________|___________________|
                            |
                        promise.all()
                            |
               ------------------------------
               |                            |
            resolve()                    reject()
               |                            |
               |                            |
               |                            |
    (if all promises resolve)     (if any promises reject)
             then()                       catch()
             
```
> Creating 2 promises 
```bash 
   <script>
        let p1 = new Promise(function(resolve, reject){
            console.log("first promise");
            resolve("successful promise");
        });

        let p2 = new Promise(function(resolve, reject){
            console.log("second promise");
            resolve("failed promise");
        });

        //Promise.all([p1,p2]).then().catch()

        Promise.all([p1,p2]).then(
            function (result)
            {
                console.log(`${result}`)
            }
        ).catch(
            function (error)
            {
                console.log(`${error}`)
            }
        );

        //we can pass an array of promises
        //you dont have to seperately pass then and catch for promise 
    </script>

console:
first promise
second promise
successful promise,failed promise
```
### What is fetch() method?
Before JSE6, we used to fetch data through 
1. Jquery using these methods $.get(), $.post()
2. Jquery using AJAX using XMLHttpRequest 

disadvantages:
> loading time increases, because of unnecesary file load, more code required 

To get rid of these disadvantages, and make load time faster, JSE6 introduced:

### fetch() method 
1. We can do CRUD to the server 
```bash
C - create data 
R - remove data 
U - update data 
D - delete data 
```
fetch syntax:
```bash
fetch(file/url).then(function(response){
     return response.json()

}).then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
});

- fetch returns a promise 
- then returns a promise
- file we recieve from the response, will be stored in response variable 
- we return response in either of the data format
✅1. data will be returned in text format if you write this 
    return response.text();

✅2. data will be returned in json format if you write this 
    return response.json();

- then(function(response)) returns a promise
- data will be returned to the result variable in the next then function,
- that promise is utilized in then(function(result))
1. we can print the data (whether in console or document in function(result)), using then method {then(function(result))}, if the promise is success 

2. if promise is failure, or server is not responding, were using catch method {catch(function(error))}, the error message will be stored in error variable 

```
#### Fetching API and printing on the console 
```bash 
<script>
        //fetch() method works on live server 

        // this API returns a promise 
        fetch("https://jsonplaceholder.typicode.com/posts").then(
        function(response){
           return response.json();
           ✅returns promise over here, however this promise will be used in
            the next then function

           ✅the next then function attached to the method chain 
        }).then(function(result)
        //if promise succeeds this function will execute
        {
            console.log(result)
            // data printed on console, is due to this console 

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)

        });
    </script>
</body>

console:
(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

### Fetching API, and printing on the document 
- get this API from  https://jsonplaceholder.typicode.com/

```bash 
    <script>
        //fetch() method works on live server 

        ✅this API returns a promise 
        fetch("https://jsonplaceholder.typicode.com/posts").then(function(response)
        {
           return response.json();

        }).then(function(result)
        //if promise succeeds this function will execute
        {
            ✅ for fetching data for in loop 
            for(var x in result)
            {
               // document.write(x);
               document.write("userid ",result[x].userId + "<br>")
               document.write("title ",result[x].title + "<br>")
            }

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)
        }); 
    </script>

console:
nothing.

document:
userid 1
title sunt aut facere repellat provident occaecati excepturi optio reprehenderit
userid 1
title qui est esse
userid 1
title ea molestias quasi exercitationem repellat qui ipsa sit aut
userid 1
title eum et est occaecati
userid 1
title nesciunt quas odio ....
(woops, there are like more...)
```

### How to save data on server using CRUD ?
Syntax:
```bash 
<script> 
      fetch(file / URL, 
      {
          method: "POST",
          body: data, 
          header : {
              'Content-type': 'application/json',
          },
      });
</script>
```
Different methods to CRUD data on the server. 
## 1. method
1. method: "POST"   (for inserting data)
2. method: "GET"    (for reading data)
3. method: "PUT"    (update server data)
4. method: "DELETE" (for deleting data)

## 2. body 
pass data that we want to save on the server 
```bash 
body: data, 
```
> Data can be in three forms 
1. form data 
2. json data 
3. text 

## 3. header 
In header we specify what kind of data were passing through the server 
> here is what, you need to specify for different data 
1. form data 
```bash 
'Content-type': 'application/x-www-form-urlencoded',
```

2. JSON data
```bash 
'Content-type': 'application/json',
```

##### In JSON placeholder API website, scroll down, to guide 
click on guide, which redirects you to this page 
https://jsonplaceholder.typicode.com/guide/
(these are fake data for testing)

This page contains different JSON API.
## 1. Data passed in JSON format 
#### 1.1 Get/ read a resource 
using method: 'GET'
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method : 'GET',
      })
      
  .then((response) => response.json())
  .then((json) => console.log(json));
    
</script>

console:
{userId: 1, 
id: 1,
title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
#### 1.2 Create a resource 
using method: 'POST'
```bash 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({  ✅this is a JS object 
    title: 'foo',           ✅It cannot be send on the server directly 
    body: 'bar',            ✅that's why we convert it to JSON using 
    userId: 1,                 JSON.stringify()
  }),
    headers: {              
    'Content-type': 'application/json; charset=UTF-8',
    },                       
})

.then((response) => response.json())
.then((json) => console.log(json));

console:
Object >
body: "bar"
id: 101
title: "foo"
userId: 1
```
Why do we convert JS object to JSON?
✅Data send on server is in JSON, because it can easily be read by any 
programming language. 

#### 1.3 Update a resource 
using method: 'PUT'
```bash 
<script>
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'feona',
          body: 'bary',
          userId: 2,
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((response) => response.json())
    .then((json) => console.log(json))
</script>

console:
body: "bary"
id: 1
title: "feona"
userId: 2
```
#### 1.4 Delete a resource 
using method: "DELETE"
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', 
      {
      method: 'DELETE',
      });
</script>
```
### JS Async function 
To remove drawbacks of promise(), Async function was returned.

#### Drawbacks of promise()
1. we had to declare resolve() and reject() inside promise function as parameters, 
upon calling them, then or catch function would automatically be called, based on whether 
the promise is fulfilled or rejected 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

    //function when condition is fulfilled
    let onfulfilment = function(result) {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = function(error) {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(true).then(onfulfilment);
    prom(true).catch(onRejection);

    </script>
```
Async function works in asynchronous mode in the background 

> Example 
```bash 
 <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
        }
        console.log(test());

    </script>

console:
Promise {<fulfilled>: 'hello'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "hello"
```
> Elaborating example
```bash 
    <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
            //this value passed to then function 
        }

        test().then(function(result)
        {
             console.log(result)
        });

    </script>

console:
hello
```
Using arrow function
```bash 
 <script>
        let test = async () => "hello";
        //storing function in variable test 

        test().then(function(result){
             console.log(result)
        });

</script>

console:
hello
```
## Await method 
```bash 
 <script>
        ✅ await method can be added on any line
        ✅ used inside async function  

        async function test()
        {
            console.log("A");
            await console.log("B"); 
            //await function- tells to wait after B 
            console.log("C");
        }

        test();
        console.log("D");
        console.log("E"); 

    </script>

console:
await1.html:10 A
await1.html:17 B
await1.html:23 D
await1.html:24 E
await1.html:19 C
```
example 2 
```bash 
<script>
        async function test(){
            console.log("2");
            await console.log("3"); 
            //await function- tells to wait after 3 and execute code below this function before coming back to execute this code  
            console.log("5");
        }

        console.log("1"); ✅1st this is executed
        test();           ✅executed till await function
        console.log("4"); ✅executed after await function 
                          ✅pointer goes back to the code after await function 
</script>

console:
1
2
3
4
5
```
> When is await method mainly used?
its mainly used when were fetching data from server using fetch() method (fetches data on the server)
and we want to pause the fetch command midway and resume it sometime later. 

> example 1
```bash 
<script>
      async function test() {
        console.log("1");         ✅2. 1 printed on console 

        console.log("2")          ✅3. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅4. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅5. pointer jumps outside the function 
        console.log("4")          ✅8. 4 printed on console
        return response;          ✅9. response object printed on console 

      }

      test().then(function(result)✅1. test function called first 
      { 
             console.log(result)
      });

      console.log("3")             ✅6. 3 is printed on console 
                                   ✅7. pointer jumps back to the test() 
</script>

console:
await3.html:12 1
await3.html:14 2
await3.html:27 3
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 2
```bash 
<script>
      async function test() {
        console.log("1");         ✅3. 1 printed on console 

        console.log("2")          ✅4. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅5. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅6. pointer jumps outside the function 

        console.log("4")          ✅9. 4 printed on console
        return response;          ✅10. response object printed on console 

      }

      console.log("3")            ✅1. 3 printed on console first 

      test().then(function(result)✅2. test function called first 
      { 
             console.log(result)
      });

      console.log("5")            ✅7. printed 5 on console 
                                  ✅8. jumps back in test()
</script>

console:
await3.html:12 3
await3.html:14 1
await3.html:27 2
await3.html:27 5
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 3 
```bash 
<script>
    //using try-catch
      async function test() {

        try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
        }

        catch(error)
        {
           console.log("errorrrrrrr");
        }

      } 
      test().then(function(result)
      //if code works properly thiswill be invoked
      {
          console.log(result);

      }).catch(function(error){
          //if there is any error it will be printed over here 
          console.log(error);
          ✅ if there is any error, the error message from top will be printed 
      });
      
</script>
```










