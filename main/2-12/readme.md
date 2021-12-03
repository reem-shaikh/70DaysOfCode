
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

Read:
1. Scope Chain for closure:
2. practice extra assignment questions 



