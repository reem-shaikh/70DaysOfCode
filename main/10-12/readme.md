
This was how we used functions before ES6
1. function Declaration
2. function Expression 

1. Function Declaration
```bash 
function hello()
{
  console.log("hello)
}

hello();
```
2. Function expression 
2.1. anonymous 
2.2. named 

2.1 Function expression (anonymous)
Function Expression  allows us to create an anonymous function which doesn’t 
have any function name
```bash 
let hello = function()
{
  console.log("hello)
}

hello();
```

2.2 Function expression (named)
```bash 
<script>
    var calMul = function Mul(x, y){
        let z = x * y;
        return z;
    }
 
    console.log("Multiplication : " + calMul(7, 4));
</script>
```
### Arrow functions 
```bash 
let hello = () => console.log("hello");
hello();
```
Demonstration:
```bash 
   <script>
        // using function expression (anonymous)
        let welcome = function(name)
        {
            return `hii ${name}` ;
        }

        console.log(welcome("reeem"));

        // using arrow function 
        let welcomes = (name, age) => 
        {
            return `hii ${name} - ${age}` ;
        }

        console.log(welcomes("reeem", 20));

        // for single line code you dont need curly braces and remove return 
        let welcomes1 = (name, age) => `hii ${name} - ${age}` ;

        console.log(welcomes1("reeem", 20));

    </script>

console:
hii reeem
hii reeem - 20
hii reeem - 20
```

## What is fetch() method?
To understand this, lets first understand promise method 
(introduced in JS E6 version)

3 stages of promise:
1. promise: pending (not yet fulfilled )
2. promise: fulfilled 
3. promise: rejected

1. What is a promise?
A method in JS, which can give 2 outcomes, for a condition specified 
1. promise(): fulfilled 
>> this means promise is resolve()

if its resolved, we can use a JS function, then()
which is a callback function

2. promise(): rejected
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
The function can take parameters:
1. resolve
2. reject

based on whether promise is accepted 
or not.

1. If promise is accepted, call resolve() function
```bash 
let prom = new Promise(function(resolve)
{
});
```
2. If promise is declined, call reject() function
```bash 
let prom = new Promise(function(reject)
{
});
```
### We can even use an if-else, which lets the function know that 
1. if promise is accepted, then resolve() function is called 
2. if promise is rejected, then reject() function is called 

These are predefined functions, you dont need to define it.
```bash 
let prom = new Promise(function(resolve, reject)
//taking 2 conditions, one for success, other for fail 

{
if(condition)
{ 
   resolve("here is a success");
   // the message that is inside this, will be returned to result 
   variable in onfulfilment function 
}
else
{
   reject("here is a failure");
   // the message that is inside this, will be returned to error 
   variable in onRejection function
}
});
```
#### Whenever resolve() or reject() return something it will be stored in these functions
1. Whenever resolve() function returns something, it will be stored 
in this result variable
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
2. Whenever reject() function returns something, it will be stored 
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
1. When value entered is true 
```bash 
    <script>
        let complete = true; 
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
Promise {<fulfilled>: 'succesful promise'}
```
2. When value entered is false 
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
embedding parameter in a function -> callback function 
and returning the value in the console.log 
1. when value entered is true 
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

        console.log(prom(true));
        //add value over here 
    </script>
```

2. When value entered is false 
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
        //setting  parameter as a function 
        
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

1. When complete is true 
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

2. When complete is false 
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
if condition is true, promise resolved, then "this" function will be called; 
if condition is false, promise rejected, then "catch" function will be called 

In this case, pending promise will be printed only one time 
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

    //method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then(onfulfilment).catch(onRejection);
    
    </script>
    
console:
fetching data, please wait
failed promise
```



