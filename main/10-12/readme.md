1. querySelector vs querySelectorAll vs getElementById

2. Asynchronous JS function
- settimeout 
- fetch API call

3. What is debugger?

further reading:
1. after hours -> async await 
2. array methods 
3. XML 

### How does JS engine end of line, because ; is not used?
CRLF signifies end of line in every search engine


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
2. Whenever reject() function returns something, it will be stored 
in this error variable 
```bash 
let onRejection = (error) => { console.log(error); }
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