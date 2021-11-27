✅decide team project

👍team project ideas:
- portfolio website
  - create one for myself 

- clones
- dashboard 

✅To do list 
- complete display and position properties 
- complete newspaper class lec code 
- complete 15-11 lecture code 

1. what is a programming language?
   used to communicate human to machine
   converts code to binary language

   we give certain instructions to the machine namely algo

2. Algorithm- 
   machine undestandable code
   - logic of functionality that we want to execute 

   set of steps which are to be executed by the machine 

3. Pseudo code 
   blueprint of our program

pseudo -> false/ fake

used to convey logic
steps of instructions written in plain english, so that it can be communicated with humans 

eg: calculate sum of two numbers 
1. take input of number 1 
2. take input of number 2
3. make addition of number 1 and number 2 and save it in sum variable 

Q. sort the data and search on it 
- 2 different algos that are combined to make a single program 

Q. whether number 1 can be divided by number 2 or not 
1. take input of num1
2. take input of num2 
3. check whether num2 is 0 or not
  3.1 cannot divide by 0 
4. num2 / num1 and store the remainder in "rem" variable
5. if rem==0 
  5.1 output: number is divisible
6. otherwise (else)
  6.1 output: number is not divisible 

1/2 - false
3/0 - undefined
8/4 - true

Q. display number 1,2,3,4,5,6.. upto n 
1. take input of n 
2. set 1 to a variable called "i"
3. start a loop from 1 to n 
   while(i<n)
3.1 output i 
3.2 increase the value of i by 1 

4. end of execution

psuedo code: you need to explain code to someone else 


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


> familiarize with console 
TO OPEN BROWSER CONSOLE: options:-
1. inspect element
2. more tools- developer tools
3. F12

> type this inside Console 
# 1. variable
 - used to store data
 - can assign and update 
 - start with ch/ not number
 - case sensitive

var abcd = 10; 
peice of memory which can contain data  

>> console screen:
var num1 = 10;
var num2 = 20; 
var sum = num1 + num2;

console.log(sum); 
VM2643:1 30

>console.log
logs data onto the browser 

>> 
console.log("string");
VM3891:1 string

>>
var temp = 10; 
undefined 

console.log(temp); 
VM4216:1 10

# 2. Constant 

- const 
-peice of memory contains only data
**can only be assigned, not updated**

>>
**const fixed= 10;**
**fixed = 20;**
VM5764:1 Uncaught TypeError: Assignment to constant variable.
at <anonymous>:1:7

>> we can update variables
**var variable = 10**
undefined

**console.log(variable);**
VM6895:1 10
undefined

**variable = 20;**
20

**console.log(variable);**
VM6998:1 20

# 3. Data Type 
   type of data which were going to store 
   1. primitive
   type is already predefined

   - Boolean 
   - Number
   
   2. non primitive datatype:
   we create our own custom type 

   - Array (["element 1", "element 2"]) 
     collection of multiple datatypes

   - String (text inside double or single quote)
   - Objects


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

JAVA.
- window software
- android

ASSIGNMENT:
- check whether given num is prime or not 
- generate a fibonnacci series upto number n 

0,1,1,2,3,5,8,13,21,34...

fimang companies like silicon valley
have DSA rounds 

service based companies and smaller scale companies 
basic DSA is enough 



