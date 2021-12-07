
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
this refers to owner, but we want a custom object **give custom value to the this keyword **. Functions that help us give cutom value are call, apply, bind
        
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

Read:
1. Scope Chain for closure:
2. practice extra assignment questions 


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
Where in the code, is the variable defined; not where were calling it.

### Lexical Parent 
where it is written?
displayAge written inside displayName, displayName is the lexical parent 

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

local memory of global execution context 
1. var name = "reem"

local memory of displayName
1. var age = 20
lexical parent: global execution context 

local memory of displayAge
1. no variables 
lexical parent: displayName
``` 
### You can only check for the variable, from the lexical parent, not the lexical child, according to the scope chain 



