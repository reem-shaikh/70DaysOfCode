Further reading: Inheritance in JS.
pop
shift
unshift
slice
splice
map()

we can use JS (multi paradigm language)
  can be used in different programming 
  structures.
> multiple programming approaches can be 
  implemented through this

- object oriented approach 
- procedural programming
- functional programming

Inputs and outputs:

✅Parameter & Arguments 
    function sum(a, b)
    🎱PARAMETERS/ FORMAL parameters
       written inside function defination
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
    🎱ARGUMENT/ ACTUAL PARAMETERS
    called during function invokation

        console.log(fin);


parseInt- string to int conversion

Different ways of using parseInt

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

 In JS.
 holds different data types- you can combine diff data types

 - it is mutable (you can modify/change it)

✅Js is dyanamically typed language- it doesnt care what datatype is in the array

3. Objects