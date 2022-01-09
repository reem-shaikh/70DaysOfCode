### Spread operator 
if you have an object or an array (called iterable) then you can spread it. 

- you can iterate on it and have each element seperately 
```bash
        append: (push) adds at the last 
        const arr = [1,2,3,4]
        const arr2 = [5,6,7,8]
        arr.push(5)
        console.log(arr)

console:
(5) [1, 2, 3, 4, 5]
```
```bash 
        const arr3 = [1,2,3,4]
        const arr4 = [5,6,7,8]

        const pre_arr = [5, arr]
        console.log(pre_arr)

console:
(2) [5, Array(5)]0: 51: (5) [1, 2, 3, 4, 5]length: 2[[Prototype]]: Array(0)

```

```bash 
        const arr3 = [1,2,3,4]
        const arr4 = [5,6,7,8]

        const pre_arr = [5, ...arr]
        console.log(pre_arr)


console:
Array(6)0: 51: 12: 23: 34: 45: 5length: 6[[Prototype]]: Array(0)
```
> example, without using SPREAD operator 
```bash 
        const arr = [1,2,3,4]
        const fn = (a,b,c) => {
            console.log(a)  //arr gets mapped to a 
            console.log(b)  //undefined
            console.log(c)  //undefined
        }

        fn(arr)

console:
(4) [1, 2, 3, 4]
undefined   ✅its undefined because were not defining any value 
undefined
```
#### however, using SPREAD operator, JS will treat it as a spreaded array 
it takes an array/ iterable object and returns seperate memory locations (called destructuring)

***SPREAD doesnt return an array, it returns different smaller memory locations, instead***
```bash 
    <script>
        const arr = [1,2,3,4]
        const fn = (a,b,c) => {
            console.log(a)
            console.log(b) 
            console.log(c)
        }

        fn(...arr)
    </script>

console:
1
2
3
```
### SPREAD Vs REST 
(same syntax, used in different context)

- If were using ... in a function parameter, it is called rest operator 
- if we use in an iterable/ function argumnent, then we call it as spread operator 

```bash 
    <script>
        const arr = [1,2,3,4]
        const fn = (a,b,c, ...d)   ✅this is REST operator 
                                   ✅only written in parameter 
        => {
            console.log(a)
            console.log(b) 
            console.log(c)
        }

        fn(...arr)                ✅SPREAD operator 
                                  ✅only written in arguments 
    </script>

```
> eg. of REST and SPREAD
```bash 
    <script>
      const arr = [1, 2, 3, 4]
      const fn = (a, ...b) => {
          console.log(a) //1
          console.log(b) //[2,3,4]
        } 

    fn(...arr)

    </script>

console:
1
8-01.html:18 (3) [2, 3, 4]
```

### DEEP COPY VS SHALLOW COPY 
```bash 
    <script>
        const obj = {
            'key1': 'value',
            'key2': 'value2',
        }
        
        //copying obj to obj2 
        ✅shallow copy - copies memory location 
        const obj2 = obj           //obj2 copy memory location of obj  
        console.log("obj", obj)    //both objects are pointing to same location
        console.log("obj2", obj2)

        obj2.key1 = "valuenew"
        console.log("obj", obj)
        console.log("obj2", obj2)

        //both objects will get the same value
        //non primitive datatypes (arrays/ objects) are refered by memory location 
        //stored by reference


        //primitive datatypes are refered by value 
        //note this example is just to show how primitive datatypes are
        //stored by value 
        const a = 10
        let b = a 
        b = b + 10
        console.log("a", a)
        console.log("b", b)
        
        ✅to prevent both objects from getting same value, we have deep value 
        //both objects will have a seperate copy of the data 

        const obj3 = JSON.parse(JSON.stringify(obj))  
        ✅Deep copy creates another copy of obj in a seperate memory location 
        ✅shallow copy create a reference pointer of a memory 

        console.log("obj", obj)
        console.log("obj3", obj3)
    </script>
console:
obj {key1: 'value', key2: 'value2'}
8-01.html:24 obj2 {key1: 'value', key2: 'value2'}

8-01.html:27 obj {key1: 'valuenew', key2: 'value2'}
8-01.html:28 obj2 {key1: 'valuenew', key2: 'value2'}

8-01.html:38 a 10
8-01.html:39 b 20

8-01.html:47 obj {key1: 'valuenew', key2: 'value2'}
8-01.html:48 obj3 {key1: 'valuenew', key2: 'value2'}
```
### Operators 
Based on number of operand's it takes, its divided into 
```bash 
operand operator operand 
```
1. unary operator - takes one operand 
> Eg: NOT operator, pre/post increement, pre/post deecrement
```bash
    <script>
      let something = true
      something = !something
      console.log(something)
    </script>
```
2. binary operator - takes two operands
3. ternary operator - takes three operands

### Ternary operator 
Ternary is an alternate to if-else condition.
- It can be used, but shouldn't be used 

> syntax:
```bash 
<condition> ? <true> : <false>
```
> example
```bash 
    <script>
      let a = 15;
      (a >= 10) ? console.log('a greater') : console.log('a not greater')
    </script>

console:
a greater 
```
> If we have a condition and were saving something to a variable, then we should be using ternary operator, that is the ideal use case 
```bash 
    <script>
      let age = 17
      let isAdult = (age>=18) ? true : false;
      console.log(isAdult)
    </script>

console:
false 
```
> nesting 
we can do nesting of ternary operator
```bash 
    <script>
      let a=10
      let b=20
      let c=30 

      const max = (a>b) ? ((a>c) ? a  : c) : ((b>c) ? b:c)
                  (10>20) ? 10>30 : (20>30)
                   nope   ? c     :  c
                                  ✅false

      console.log(max)
    </script>

console:
30
```
### Hoisting 
Hoisting is moving declaration at top of execution scope.
Hoisting is part of a JS engine, it happens in all datatypes

```bash 
    console.log(a) //undefined
    var a = 10 
    console.log(a) //10
```
- TDZ (temporal dead zone)
let & const variables cannot be editted until and unless they have been completely intialized 

- TDZ feature introduced in ES6 
- Hoisting works on let, const and var 
- let & const have an additional security, which doesnt allow access of variable until the TDZ zone 
- the idea of having this, is to slowly get rid of hoisting 
- if they tried to delete hoisting, then it will cause a problem called ***breaking changes***

### TDZ is implemented for more security 
to prevent accesing variables, before declaring it 

```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
   
<script>
    console.log(a)
    ✅its called temporal because it cannot be accesed in the first line of code 
    ✅its called dead because in this part, variable is dead, it cannot be read/ write/ accesed
    ✅TDZ of line 264 is from 250 - 264 (this entire enippet of code is blocked, but under the hood hosting is happening)

    let a = 10 
    console.log(a) 
</script>
</body>
</html>

console:
8-01.html:15 Uncaught ReferenceError: Cannot access 'a' before initialization at 8-01.html:15
```
> security pov example 
```bash 
<script>
    a = 20 
    console.log(a)
    let a = 10     ✅everything before 286 is the TDZ zone 

    console.log(a) ❌this line doesnt execute 
</script>

console:
8-01.html:15 Uncaught ReferenceError: Cannot access 'a' before initialization at 8-01.html:15
```
### Event loop
contains 
1. Call stack 
whenever we execute a function, its pushed in callstack, when execution is over it popped from callstack

It is a mechanism which will keep track of the function call. which function is being executed, which is the caller function and who this function will call 
> LIFO 
```bash 
<script>
    const fn = () => {
        console.log("hey geeks")
    }

    fn()
</script>
```
Web API - it works as an interface which allows communication between two peices of software 

### JS Engine communicates with browser through WEB API 
```bash 
       BROWSER                         JS Engine 
       chrome    communicate with      JS Engine V8 
                 using web API 


JS Engine: executes JS code here 
Browser 

✅Possible due to web API 
1. for setinterval, timer is provided by web api 
2. fetch request 
3. DOM manipulation 
4. console.log 

✅JS is a single-threaded programming language 
JS engine doesnt have 
document object 
browser object 
window object 

to access these, we have web API 
were accessing features of browser using web api 

Different browser have different JS engine 

```
> list of web API's: https://developer.mozilla.org/en-US/docs/Web/API

2. Task queue 
- Task queue (FIFO) which contains the callback which has to be executed 
- JS engine contains event loop (periodically check the task queue)

This is the loop which will run infinitely which will check the callstack and if that is empty then pick the task from task queue ad push it in callstack 

```bash 
    <script>
    ✅a is pushed into the call stack, executed and popped after execution
    ✅this is the global execution context 

    ✅c is pushed into the call stack, executed and popped after execution 
    ✅this is the global execution context 

    const fn = () => {
        console.log("a")
        setTimeout(() => {
            console.log("b")
            ✅it goes to web API and notifies it about the 
            settimeout function 
            ✅because timer funtion is given through web API 
    
            ✅this variable (callback) has to execute after a particular time, it pushes this element in task queue 

        }, 1000)
        ✅JS Engine has to keep checking if the task queue has any thing in it, so it can be executed through event loop

        console.log("c")
    }
    
    fn()
    </script>

console:
a
c
b
```