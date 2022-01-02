> Latest version of EcmaScript is ES12.
since almost a year to a half year a new release is derived and currently were at ES12, right now were at 2022. so it would be released around 2015.

### Functions 
- set of commands that can be called any number of times 
- its reusable 
- need to be called / invoked 
- takes input gives an output 
- inputs given as arguments 
- outputs are given as return 

> if you have only one line of code/ statement of execution no need of {}

### write a function to take a year and return true/ false based on whether it is a leap year or not 
```bash 
<body>
    <script>
        //year must divide by 4 and 400 to be qualified as a leap year 

        function isLeapYear(year){
            //check for 400th year
            if(year % 400 == 0){
                return true;
            }

            //check for 100th year
            if(year % 100 == 0){
                return false;
            }

            //check for 4th year 
            if(year % 4 == 0)
            {
                return true;
            }

            //default case:
            return false;
        }
    </script>
</body>

console:
1. write isLeapYear(2022)
false
```

```bash
    <script>
    //write a function to give sum of 2 numbers 
    function sum(a,b){
        return a+b;
    }

    let s = sum(2,5)
    console.log("s: ", s)
    </script>
```
#### Anonymous function: no function name
```bash 
    let sum = function(a, b){
        return a+b
    }
    //it doesnt have its own identity, were refering the function through this reference variable "sum"

    let s = sum(2,5)
    console.log("s: ", s)
```
> use const, instead of let, you cannot change function in other line of code, which is better for code security 
```bash 
    const sum = function(a, b){
        return a+b;
    }
    //it doesnt have its own identity, were refering the function through this reference variable "sum"

    let s = sum(2,5)
    console.log("s: ", s)
```
> why anonymous function?
sometimes we dont want to declare the entire function in callbacks 

### Arrow function
> regular arrow function
```bash 
    //arrow function
    const sum = (a, b) => 
    {
        return a+b;
    }

    let s = sum(2,5)
    console.log("s: ", s)
    </script>
```
> we can remove function 
```bash 
    //check whether function is positive number or not
    const isPositive = (num) => 
    {
        return num > 0;
    }

    console.log(isPositive(-15))
    </script>

console:
false
```
> we can remove brackets 
```bash 
    const isPositive = num => 
    {
        return num > 0;
    }

    console.log(isPositive(-15))
    </script>
```
> one liner arrow function (remove curly braces and return)
```bash 
 <script>
    //one liner arrow function
    const isPositive = num =>  num > 0;
    console.log(isPositive(-15))
</script>
```
### All arrow function are anonymous functions by nature 

#### Pros of arrow function:
- improve code readibility 
- because of anonymous nature, they are more secure 
- there is no need of context

#### Cons of arrow function:
- it doesnt bind with this keyword as we expect 
- Internet explorer (js engine] doesnt support arrow functions (also cetain ES6 features)(we will have to do something called polyfill(compatibility code) to work on IE)

```bash 
<script>
    const randomNumber = () => Math.random()
    console.log(randomNumber())
</script>

0.6758265788880051
```
> instead of (), we can use _ as well.
> _ used to define nothing.
```bash 
    <script>
    const randomNumber = _ => Math.random()
    console.log(randomNumber())
    </script>

console:
0.2968265788880051
```
> however, technically speaking _ is a variable 
```bash 
<script>
   let _ = "1234";
   console.log(_)
</script>

console:
1234
```
> returns windows object 
```bash 
    <script>
    const fn = function()
    {
        console.log(this)
    } 
    
    const arrow_fn = () => {
        console.log(this)
    }

    fn()
    arrow_fn()
    </script>

console:
window 
window 
```
### Disadvantage of arrow function
If in an object we are calling a regular function 
- it will bind to the context of execution 

> regular function will point to the context of execution 
> arrow function will not bind to context of execution and it will
not point to the object, instead it will point to the window. 
```bash 
    <script>
    const obj = {
        key: "ABCD",
        fn: function(){
            console.log(this)
            ✅In regular function, this keyword automatically bind to the owner/ context of execution
        },
        arrow_fn: () => {
            console.log(this)
            ✅arrow function doesnt bind to the owner; thats why it returns window object
        }
    }

    obj.fn()
    obj.arrow_fn()
    </script>
</body>

console:
{key: 'ABCD', fn: ƒ, arrow_fn: ƒ}
window object 
```
context of execution 
part of the scope of the variable/ function 

### Advantage of arrow function
if in the same object, we have async code (setTimeout), in that case, 
the async timeout function is executed in the window context because 

> regular function points to the window object 
> arrow function does not bind to the context of execution, so it wont bind to window 
> Instead, it will bind to the scope of the caller, it will point to the object 
```bash 
    <script>
    const obj = {
        key: "ABCD",
        fn: function()
        {
            setTimeout(function(){
                console.log(this.key);
            }, 1000);
            ✅returns undefined because this keyword bind to execution scope 
            that is windows object 

            setTimeout(() => {
                console.log(this.key);
            }, 1000);

            ✅since arrow function doesnt bind to execution scope
            //it binds to object 
        }
    }

    obj_timeout.fn()
    </script>

console:
undefined 
ABCD
```
### regular function have this keyword point to context of execution 
### arrow function have this keyword point to the scope where they are written


```bash 
    <script>
    //context: object within which it is executed 
    const obj = {
        outerkey: "outer value",

       ✅k1 is owner object 
       k1: {   
           innerkey: "inner value",
           fn: function(){
               console.log(this);
           }
       }
    }

    obj.k1.fn()
    </script>

console:
Object
fn: ƒ ()
innerkey: "inner value"
[[Prototype]]: Object
```

### eval 
whatever you pass in string it evaluates and executes 
```bash 
    eval("console.log(1234);");

console:
1234
```
> another example 
```bash 
    eval("let a = 10; let b= 20; console.log(a+b);")

console:
30
```
#### function instantiation 
creating object based on constructor using new keyword 
```bash 
  const sum = new Function("a", "b","console.log(a+b);");
  ✅by writing a and b you are initialising it 
  ✅eval function used inside this 
  sum(3, 5);

console:
8
```

#### IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
> immediately invoked - invoke function immediately (maybe on the same line)
> function expression - a typical function

> lets first, understand this:
```bash 
        //Anonymous function
        const sum = function(a, b){
            console.log(a+b)
        }

        sum(1, 4)
```
> wrapping : just add braces.
```bash
  a wrapper is a function that is intended to call one or more other functions, sometimes purely for convenience, and sometimes adapting them to do a slightly different task in the process. 

- wrapping happens with 
1. variables 
2. functions 
```

1. variables 
```bash 
    wrapping doesnt do anything fancy with variables 
    let a = ((10));
    console.log(a)

console:
10
```
#### 2. function 
```bash 
    ✅when you wrap functions then you can immediately call it 

    ✅immediately invoked function
        (function(a, b){
                console.log(a+b)
        })(1,4)

    ✅IIFE only works with anonymous functions
console:
5
```
### Pros of IIFE:
1. IIFE gives security, because its an anonymous function, which means no one will be able to call it 
- suppose we have network connection which has secret data, we use immediate invoked function because of secured data 
- there is certain scoping of let/var/const in IIFE. the variables written inside cannot be accessed outside of it 

2. it can only be called once, this is immediately, after that even we cant call it again 
- use it in places where we need to do initialisation, where steps are executed only once. we use IIFE for security points, since nobody can call it again or even get any data outside of our function

## Arguments & Parameters 
> difference between Arguments & parameters ?
- parameters: written in function definition 
- arguments: sent in function invokation 

```bash 
    <script>
        function sum(a, b) ✅parameter: passed during function defination
                           ✅function defination/ formal parameter 
        {
            console.log(a+b)
        }

        sum(1,6)          ✅argument: what you send during invokation 
                          ✅function invokation/ actual parameter 
    </script>
```

### Rest Operator 
> lets see this example, to undertsand why we need REST
```bash 
        function s(a, b) {
            console.log(a + b)
        }   
        
        s(1,2,3,4)
        ✅it ignores rest of the parameters

console:
3
```
> Rest operator says it will take rest of the arguments (n number of inputs) and put it in an array 
```bash 
    <script>
        function s(a, b, ...c) {
            console.log(a + b )
            //console.log(typeof(c))      object
            console.log(c)
        }   
        
        s(1,2,3,4)
    </script>

console:
3
(2) [3, 4]
```
> sum example 
```bash 
    <script>
        const sumall = (...numbers) => {
            let sum = 0
            console.log(numbers)

            for(let i=0; i<numbers.length; i++){
                sum = sum + numbers[i]
            }
            console.log(sum)
        }
        sumall(1, 2, 3)
        sumall(1, 2, 4, 5, 6, 8)
        
    </script>

console:
[1, 2, 3]
index.html:19 6

[1, 2, 4, 5, 6, 8]
index.html:19 26
```
## Prototype 
```bash 
  <script>
       //prototype 
       const obj = {}
       console.log(obj)  //returns specific set of biult-in-functions which you can apply on that object 
 </script>

console:
{}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
```
> write a function to check whether a number less than 10 is present in array or not 
```bash 
<script>
       ✅create a new custom functions using prototype 
       ✅write function once and its available for every object/array you create 
       Array.prototype.check10 = function() {
           for(let i=0; i<this.length; i++){
               if(this[i]<10)
               {
                   return true
               }
           }
           return false 
        }
        console.log(this)
        //this points to context of execution 
        //context of execution is the array pointing to it (arr3) & (arr4)

       const arr3 = [1, 2, 30, 40]
       console.log(arr3.check10())

       const arr4 = [14, 15, 8, 9]
       console.log(arr4.check10())
       ✅custom function attached to the entire data structure 
</script>

console:
true 
true 
```
> write a function to check if a string ch is present in the given string or not 
```bash 
       String.prototype.contains = function(ch){
        for(let i=0; i< this.length; i++){
            if(this[i] == ch){
                return true 
            }
        }
        return false 
    }

       const str = "Hello";
       console.log(str.contains('w'))  //check if w present in string or not 
       
console:
false
```














