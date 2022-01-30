### Hoisting
```bash 
    <script>
        ✅it shows undefined because we havent asssigned a value 
        console.log(x)
        var x = 10 

        x = 40       //assigning a value 
        console.log(x)
        var x;      //40 

        //-----------------------------------------//

        ✅const and let are in TDZ 
        console.log(y)
        const y= 20

        //console.log(z)
        const z= 30

        p = 50     //even though we assign a value, and define let later, it shows error 
        console.log(p)
        let p

        index.html:25 Uncaught ReferenceError: Cannot access 'y' before initialization
        at index.html:25:21
        index.html:25 Uncaught ReferenceError: Cannot access 'p' before initialization
        at index.html:25:21
        //-------------------------------------------//

        ✅hoisting works with function delcaration 
        console.log(add(2,4))  //6
        function add(a, b){
            return a+b
        }

        ✅using var keyword, where functions are variable of object type 
        console.log(subtract(4,3))
        //functions are variable of object type 
        var subtract=(a,b)=> {
            return a-b
        }

        console.log(multiply(4,3))
        let multiply=(a,b)=> {
            return a*b
        }
    </script>
```

### Difference between global context and functional context?
#### Execution Context 
place where peice of JS code is executed.
>> execution context is formed just after compilation and just before code is run
```bash 
Execution context contains:

1. variable involvement 
2. scope & scope chain 
3. this keyword 
```

### Types of contexts
- global context 
- functional context 
- block context 

```bash 
    <script>
        ✅Top level code(neither in function/ block) is executed in global context 
        //for every code there will be only one global context 
        var a = 10 

        //for every function another context will be created 
        //this function code will be executed in their own contexts 
        ✅the function code in a JS file depends on the number of functions executed in it 
        add(a,b)
        {
            return a+b
        }

        subtract(a,b)
        {
            return a-b
        }

        add(1,2)
        subtract(3,4)
    </script>
```
> both contexts are placed in stack
```bash 
    <script>
        //contexts are placed in a stack 
        var x = 10 //global context 
        function add(a, b) ✅
        3function context of add is created 
        {
            var c = a+b
            function subtract(a, b)
            {
                var d = a-b 
                console.log(d)
            }
            //when function is called, then only the function context will be created 
            ✅the function context of subtract() will be inside add()
            subtract(1, 4)
        }
        add(1, 2)
    </script>
```
> this keyword doesnt work on arrow functions, it points to windows object rather 

### Scope 
Their are 3 types of scope in JS:
1. global scope 
2. functional/ local scope 
3. block scope 
```bash 
    <script>
        //every scope will have access to all variables in parent scope 
        var x = 10      ✅global scope 
        if(x==10)       ✅block scope 
        {
            let c = 30
        }

        function test() ✅functional scope 
        {
            var b = 20
        }
    </script>
```
> parent can access child scope, child cannot access parent scope 
```bash 
    <script>
        var x = 10 

        function substract(a, b)
        {
            var c = a-b
            console.log(c)
            ✅parent cannot have access to child scope 
            //console.log(c1)

            function add(a, b){
                var c1 = a-b
                console.log(c1)
                ✅child can access parent scope 
                console.log(c)
            } 

        add(10, 15)
        ✔ add() has a local scope which is linked to the outer function subtract(), this forms a chain, which is called scope chaining 

        }
        substract(20,30)
    </script>

console:
-10
index.html:23 -5
index.html:25 -10
```
#### Scope chain 
Scope chains establish the scope for a given function. Each function defined has its own nested scope, and any function defined within another function has a local scope which is linked to the outer function — this link is called the chain.

#### This keyword 
```bash 
    ✅this keyword points to the parent
    ✅parent of DOM is window 
        console.log(this)

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
#### Behavior of this keyword with:
```bash
        ✅1. simple functions 
        Inside function, this will always be undefined 

        ✅2. Method 
        Inside method, this will point to current context 

        ✅3. arrow function
        this will point to parent function 
```
#### 1. simple functions 
```bash 
    <script>
    ✅1. simple functions 
    //Inside function, this will always be undefined 
    let x= 20
       function test(){
           console.log(this.x)
       }

   test()
    </script>

console:
undefined 
```
#### 2. Method 
```bash 
    <script>
    //✅2. Method 
    //Inside method, this will point to current context 

   const obj = {
       x:42,
       printX: function(){
           console.log(this.x)
       }
   }

   obj.printX()  //42
    </script>

console:
42
```
#### 3. Arrow 
```bash 
    <script>
   
   ✅in arrow keyword, this will point to parent object 
    function test1(){
        console.log(this)
        const test2 =()=>{
            console.log(this)
        }
        test2()
    }
    test1()
    </script>

consosle:
window 
window 
```
> another example, using arrow function with this keyword 
```bash 
   const add=()=>{
       console.log(this)
   }
   add()
   
console:
window 
```
```bash 
        var x= 10 //var will be binded to the window object: dangerous 
        function test(){
            console.log(this)
        }
        test()

        let y= 10 //let will not be binded to the window object: dangerous 
        function test2(){
            console.log(this)
        }
        test2()

console:
window 
window 
```
### Difference between strict and non strict mode.
Why do we need strict mode?
```bash 
<script>
    ✅Note that: over here, b is declared 2 times, which is infact wrong, however, in the console it prints 40, when in reality, it shouldve thrown an error

   function abc(a, b, b){
       return a+b+b
   }
   console.log(abc(20,30,10))
   to fix this issue, we use the strict mode, to make sure were not logging unnecesary bugs into our code 
</script>

console:
40 
```
> using strict mode 
```bash 
<script>
   'use strict'
   function abc(a, b, b)
   {
       return a+b+b
   }
   console.log(abc(20,30,10))
</script>

console:
Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```
```bash 
strict mode released in ES5 
   'use strict';
   ✅all code below this, will follow strict rules

   a= 10 
   console.log(a)
   //in strict mode, console shows, a is not defined, because we havent used an access specifier before it 

   var b = 20 
   console.log(b)

console:
index.html:16 Uncaught ReferenceError: a is not defined at index.html:16:5
20 
```
> similarly, same issues with function as well 
```bash
   function abc(){
       c = 40 
       console.log(c)
   }
   abc()

   function abc1(){
       var d  = 40 
       console.log(d)
   }
   abc1()

console:
index.html:29 Uncaught ReferenceError: c is not defined at abc (index.html:29:10) at index.html:32:4
40 
```
> non strict mode 
```bash 
    <script>
   //non strict mode
   var x= 10 //var will be binded to the window object: dangerous 
    function test(){
            console.log(this)
    }
    test()

    let y= 10 //let will not be binded to the window object: dangerous 
    function test2(){
            console.log(this)
    }
    test2()
    </script>

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
index2.html:21 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
> strict mode 
```bash 
    <script>
   //strict mode solves JS bugs, and makes code secure 
   'use strict'
   var x= 10 //var will be binded to the window object: dangerous 
    function test(){
            console.log(this)
    }
    test()

    let y= 10 //let will not be binded to the window object: dangerous 
    function test2(){
            console.log(this)
    }
    test2()
    </script>

console:
undefined 
undefined 
```
#### Closures 
A Function always has access to the variable involvement of the execution context, that were popped from the call
stack at any point of time (not a part of the call stack). The value of the variable is preserved due to closure.
```bash 
<script>
   function testingClosure(){
       ✅global execution context created in the call stack 
       let x = 10 
       return function(){
           x++
           console.log(x)
           //value of x is preserved, due to closure (function + lexical scope bundled together is closure)
       }
   }
   const tester = testingClosure()
   tester() //11
   //execution context created for tester, after execution its popped
   tester() //12
   //another execution context created for tester, after execution its popped 

</script>

console:
11
12
```