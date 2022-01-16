### Pure & Impure functions 
Different classification of functions:

## Pure function
```bash 
    <script>
        function sum(a, b){
            return a+b
        }
    
    console.log(sum) //it will refer to the function
    </script>

console:
ƒ sum(a, b){
            return a+b
        }
```
#### 3 conditions required for function to be pure
```bash
1. its not using any of the data (variable outside of its inner scope )
2. its should not have any side effect (leaking), function should not edit 
any data outside of its inner scope
3. if i run my function n number of times with the same input, it should give 
the same output everytime 
```

1. it is not using any of the data (variable) from outside of its inner scope (should not use any global variable)

> this example uses data from outside of its inner scope
```bash 
    <script>
        var name="geekster"
        ✅data (variable) is present in the global scope 

        function printName(){
            console.log(name)
            //this example uses data from outside of its inner scope
        }
    
    printName()
    </script>

console:
geekster
```
for the next point, first lets first understand,
### Pass by value VS Pass by reference 
👍Call by value/ pass by value
- fetch value from memory and send the exact value from memory (doesnt send the memory location)

👍Call by reference/ pass by reference
- fetch the memory location only, because of which if we change anything inside the function, the memory content will be changed

```bash 
    <script>
        ✅primitive datatypes- data that is not an object and has no methods.
        There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. ... All primitives are immutable,
         i.e., they cannot be altered.

        They store the value of a variable directly in memory.

        ✔ Call by Value - send value, instead of pointer 
        let num = 10;
        function increaseNum(a){
            a=20;               //value of 10 is being passed here 
        }

        ✅sends a value instead of the reference 
        increaseNum(num);  
        console.log("call by value",num)     //10

        ✔ Call by reference - send reference of the object 
        ✅non primitive datatypes- array, object
        Non-primitive data types is the object. The JavaScript arrays and functions are also objects. 
        
        They cannot store the value of a variable directly in memory. They store a memory address/ reference of the variable which keeps updating.

        //array/ object is sent as a reference/ pointer (memory location)

        ✅it passes the pointer instead of passing the value 
        ✅it passes only memory reference/ pointer/ reference 
        //if we change anything inside the inner scope, it would change the actual value, the memory reference is updated

        let arr = [1, 2, 3]

        function changeArr(a){
            a[0] = "hello"     
        }

        changeArr(arr) 
        ✅this is a reference to the array 
        console.log("call by reference",arr)   //['hello', 2, 3]
    </script>

console:
call by value 10
index.html:37 call by reference (3) ['hello', 2, 3]
```

#### Note: All pass by reference is not impure 
2. there should not be any side effects, for a function to be pure 
> side effect: 
```bash
when your trying to update something, 
it should not change anything on outside of its inner scope, 
this is called a side effect and leaking.
```

##### 2. when you run a function, it should not edit any data outside of its inner scope 
```bash 

<script>
let arr = [1, 2, 3]

function changeArr(a){
    a[0] = "hello"
}

changeArr(arr) 
✅this is a reference to the array 
console.log("call by reference",arr)

//side effect: when your trying to update something, 
it should not change anything on outside of its scope, this is called a side effect 
</script>
    
console:
index.html:37 call by reference (3) ['hello', 2, 3]
```

3. if you run function n number of time with same input, it should return same output 
```bash 
   <script>
    ✅pure function
    function sum()
    {
        let num = 10;
        function increaseNum(a){
            a=20;
        }
    }
        
    increaseNum(num);  
    console.log("call by value",num)   //20

    ✅impure function
    //this function is breaking rule 3 
        function generateRandom(){
            return Math.random()
            //every time you call this function n number of time with same input in
            console, it gives a different output 
        }
    </script>
```
### Note: Write pure functions, because it gives assurity nothing will break, also its more secure, 
### its difficult to keep track of variables when they are not bounded in their inner scope, less bugs, no memory leak
-----

### First Order function & Higher Order function
> theorotical concept 

##### Higher Order functions 
- functions that take another function as its argument
- functions that return another function as an output

##### First order functions 
functions does not deal with functions as argument or return. 
this type of function will not take another function as argument,
and will not return a function as output 

#### High order function 
1. takes function as an argument 
```bash 
    <script>
    ✅higher order function 
    it takes or returns another function 
    //eg: array.foreach/ .then

    ✔ this is higher order function
    
    ✅function cb passed as an argument 
    function fn(name, cb){
        console.log(name)
        cb() 
    }

    ✅function passed as an argument 
    fn("geeks", function(){
        console.log("this is from callback")
    } )
    </script>

geeks
index.html:21 this is from callback
```
2. returns function as an output 
> kareeng is also a higher order function, because it returns function as an output 
```bash 
    function fn2(){
        function f(){
            console.log("inner function")
            ✅higher order function can also be a pure function
        }
        return f;
    }

    fn2()()
    ✅returning function as output   
```
> there is no connection btw pure & impure | first & higher order function 

#### First order function 
1. does not take any function as argument 
2. does not return any function as output 

```bash 
function sum(a, b){
    return a + b
}

let s = sum(2, 3)
console.log(s)
```

### Callback 
passing function as an argumnent to a higher order function 
& invoking it from inside of the higher order function 

```bash 
    <script>
    ✅this entire function is higher order function
    function fn(name, cb){
        console.log(name)
        cb()
    }

    ✅this entire function is a callback function
    //function passed as an argument -> callback function
    fn("geeks", ✅function(){
        console.log("this is from callback")
    } )
 
    </script>
```
> callback example 
function passed as an argument, which is executed in another function 
```bash 
    <script>
    //write function to take name as an input and show it as a callback 
    function takeName(cb)         ✅function (cb) passed as an argument 
    {
        let name = prompt("enter your name");
        cb(name)
        
    }

    ✅callback function
    takeName(function(a){         ✅cb executed in another function 
        console.log("hello", a)
    });

    ✅callback function
    takeName(function(a){
        console.log("hey", a)
    });
    </script>

console:
1. enter your name in prompt box - reem
2. enter your name in prompt box - ree
hello reem
index.html:24 hey ree
```

> callback example 
when event is clicked, callback is called 
```bash 
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
```
> Any function, that you pass as an argument and is executed in another function is called 
a callback 
```bash 
    setTimeout(() => {
        console.log('hi')
    }, 1000)
```
### Recursion
function that calls itself is called recursive function 

```bash 
    <script>
    function abcd(){
        console.log("hi")
        abcd();       ✅this function calls itself 
        //it will become an infinite loop 

        //any algo that can be formed using recursion 
        //can also be formed using loops 
    }
    </script>
```

#### types of recursion 
1. direct recursive function - call itself from within directly (c calls itself directly)
```bash 
    ✅direct recursion
    function c(){
        console.log("a called")
        c()
    }

    c()

console:
998 index.html:27 a called
✅it ran 998 times already 
```
2. indirect recursive function - will call another function which will call an initial function (a calls b, b calls a)
```bash 
    ✅indirect recursion
    //a call b 
    function a(){
        console.log("a called")
        b()
    }

    function b(){
        console.log("a called")
        a()
    }
```

### Loop Vs Recursion
> loop can run infinitely number of times, even though your browser/system will crash 
> Recursion after running many times, console throws error recursion stack reached, and script execution stops.
 ***recursion has a limit till which it can execute***

- any algo done by recursion, can be done through loops and vice versa 

**recursion has a limit till which it can execute**
```bash 
    //write a function to print natural numbers

    function print(a){
        console.log(a)
        print(++a)
    }

    //a++ - use variable then increement 
    //++a - increement then use variable
    print(0)

    //crash around 35000
    </script>

console:
1 
2
...
..
11397
index.html:30 11398
index.html:30 11399
index.html:30 11400
index.html:30 11401
index.html:30 11402
index.html:30 11403
index.html:30 11404
index.html:30 11405
index.html:30 11406
index.html:30 11407
index.html:30 11408
index.html:30 11409
index.html:30 11410
index.html:30 11411
index.html:30 11412
index.html:30 11413
index.html:30 11414
index.html:30 11415
index.html:30 11416
```
```bash 
    //write a function to print natural numbers

    function print(a){
        console.log(a)
        print(++a)
    }

    //a++ - use variable then increement 
    //++a - increement then use variable
    print(0)

    //crash around 35000
    </script>
```

### write a program to get sum of all numbers up to n
> n=5; 1+2+3+4+5
```bash 

✅Solving problem using loop
    function getSum(n) {
        let sum = 0
        for(let i=1; i<=n; i++){
            sum = sum + i
        }
        return sum 
    }

    let sum = getSum(5)
    console.log(sum)

Console:
15
```
✅Solving problem using Recursion
```bash 
  function getSum(n){
        if(n==0)
        {
            return 0
        }
        else
        {
            return n + getSum(n-1)
        }
    }

    //n--  use variable then deecrement
   //--n   deecrement then use variable 

    let sum = getSum(5)
    console.log(sum)
    
    </script>

console:
15 

---
✅How recursive call executes under the hood?

it biulds on callstack, by pushing elements 
getsum(5) = 5 + getsum(4)
getsum(4) = 4 + getsum(3)
getsum(3) = 3 + getsum(2)
getsum(2) = 2 + getsum(1)
getsum(1) = 1 + getsum(0)

when it encounters breakpoint, it pops backwards in the callstack -> this is called return chain 
getsum(1) = 1 + getsum(0)  //1+0= 1
getsum(2) = 2 + getsum(1)  //2+1=3
getsum(3) = 3 + getsum(2)  //3+3=6
getsum(4) = 4 + getsum(3)  //4+6=10
getsum(5) = 5 + getsum(4)  //5+10=15 

it returns this value to console statement 
```
### Recursive calls are faster than loop (Use recursion)
- they execute in linear time 
- they are better from code readible point of view 

- example of recursion
✅Write a recursive function to get the nth fibbonacci number
```bash 
    <script> 
    //sum of last 2 nums - fibbonacci 
    //0,1,1,2,3,5,8 - fibbonaci series 

    function getFib(n){
        //breaking conditions
        if(n==0){
            return 0
        }

        if(n==1){
            return 1
        }

        return getFib(n-1) + getFib(n-2)
        //sum of last + sum of second last 
    }

    let s = getFib(6) //6th number in fibbonacci is 8
    console.log(s)
    </script>

console:
8
```

##### however, if it exeeds data stack dont use recursion 
> if data stack > 38000 
```bash 
  function getSum(n){
        if(n==1){
            return 1
        }
        else{
            return n + getSum(n-1)
        }
    }

    let sum = getSum(40000)
    console.log(sum)

console:
this wont work 
```

### Lexical scope 
scope where the required data is available 
- what part of the program has variables defined which your using 
```bash 
    <script>
    function a(){
        ✅lexical scope of b is inside a 
        var abcd = "hello"

        function b(){
            console.log(abcd)
        }
        return b
    }
    </script>

```

### Closure 
function inside another function
>  where if we return the inner function it will prevent its lexical scope from being garbage collected 

Garbage collection: if your not using any var, js will throw it to garbage collection 
***closure says The value of lexical scope wont be sent for garbage collection, instead it will be preserved***
```bash 
<script>
    function a(){

        ✅closure will prevent variable abcd from being garbage collected 
        var abcd = "hello"
        function b(){
            console.log(abcd)
        }
        return b
    }

    let s = a()
    s() //hello 
</script>

console:
hello
```
> example variant 
```bash 
<script>
    function a(){
        //returning function from within a function  
        var abcd = "hello"
        function b(){
            console.log(abcd) //hello

            //it will prevent its lexical scope from being garbage collected
        }
    }
    abcd="world"             //update abcd="world"
    return b

    let s = a()
    s() //world
</script>

console:
world
```
✅importance of closure wrt security 
```bash 
    <script>
    const counter = function(){
       let value = 0;

       //nobody can change these values further in code outside of function 
       let increement = function(){
           ✅closure says that the value inside the lexical scope of the function, will not be sent for garbage collection
           ✅rather this will be preserved 
           value++
       }

       let decreement = function(){
           value--
       }

       let getCounter = function(){
           return value
       }

       return {
           increement: increement,
           decreement: decreement,
           getCounter: getCounter,
       }
   };

   let ctr = counter()
   ctr.increement()  //1  (0+1=1)
   ctr.increement()  //1  (1+1=2)
   ctr.decreement()  //-1 (2-1=1)
   console.log(ctr.getCounter())  //1
</script>

console:
1
```

