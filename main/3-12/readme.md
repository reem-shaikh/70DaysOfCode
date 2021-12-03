
# Functions
(till now we've discussed)
1. as regular Functions
3. as key value for objects 
5. pass function to another function 
6. function as argument 
7. function as variable 

## 8. Return function from another function

```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   return b; // b is returned as a variable 
}

// function call only when its invoked 
let res = a();             //function invoked only when its called
// function saved as a data in a variable res 

console.log(typeof res);  //console: function
// response returned by b is stored in the res function 

res();
console.log(res);  // function pointer, res points to 

console:
function a is called
functions.html:25 function
functions.html:16 function b call

ƒ ()
   {
     console.log("function b call");
   }
```
```bash
let fn = function()
{
    console.log("func")
}
console.log(fn); //this is a pointer to the function 

fn(); //this is invokation; contain round brackets 

console:
ƒ ()
{
    console.log("func")
}
```

Multiple functions:
we can define n number of functions, they wont be called unless you invoke it 
```bash
  function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   return b; // b is returned as a variable 
   // return c;  //to call c use this return statement instead 
}

// function call only when its invoked 
let res = a();             //function invoked only when its called

console.log(typeof res);  //console: function

res();

console:
function a is called
functions.html:30 function
functions.html:16 function b call
```

#### calling both b and c together
```bash
function a()  // function defination
{
   console.log("function a is called")
   let b = function()
   {
     console.log("function b call");
   }

   let c = function()
   {
     console.log("function c call");
   }

   let arr = [b, c]
   return arr;
}

// function call only when its invoked 
let res = a();             //function invoked only when its called

console.log(typeof res);  //console: function

// because its an array were not calling using res()
console.log(res)
res[0]();
//res is an array 
// [0] - index 
// () - signifies function invocation
```

## Write function where your function invokation for sum looks like this sum(10)(20)
```bash
sum (10) (20)
variable name (function) (function)

this can be divided into two 
sum (10) (20)
```
```bash
 let a = function()
       {
           console.log("a called")
           let b = function()
           {
               console.log("b called")
           }
           return b;
       }

       // saving in variable and calling it  
       let res = a();
       res();

console:
a called
b called
```
same output different approach to this code is:
```bash
    let a = function()
       {
           console.log("a called")
           let b = function()
           {
               console.log("b called")
           }
           return b;
       }

     a()();

console:
a called
b called
```

```bash
      let a = function(param1)
       {
           console.log("param1")
           let b = function(param2)
           {
               console.log("param2")
           }
           return b;
       }

     a()();
     // (): calls function a()
     // (): calls function b()

console:
param1
param2
```
## Important Question
```bash
 let sum = function(param1)
       {
           let b = function(param2)
           {
               let add = param1 + param2 
               console.log(add)
           }
           return b;
       }

    sum(10)(20);
     // (): calls function a()
     // (): calls function b()

console:
30
```

### Deep copy VS Shallow copy 
when you copy object there are 2 different approaches you can do 

```bash
  obj = {
        key 1 : value1,
        key 2 : value2,
  }
```
1. Create a clone (shallow copy)
two different objects clone of each other 
picking data from obj1 and creating a new object obj2 which is clone of it 
if you make change in obj2, it will change in obj1 too
only creates a new reference 
creates a new memory pointer, doesnt create a new object 

real world uses of shallow copy 
excel sheet: obj2 makes change, obj1 can see it 

2. create a reference (deep copy)
one object obj3, 2 pointers to that object say obj1 and 
obj2 

changes made in obj3, simultanously change will be
made in obj1 and obj2 

real world use cases of deep copy:
google docs -> templates --> you create a clone of resume templates, 
        the original resume template wont be affected 

```bash
 let obj1 = {
            'key1' : 'value1',
            'key2' : 'value2',
            'key3' : 'value3',
        };

        let obj2 = obj1;
        //shallow copy 

        console.log("obj1", obj1)
        console.log("obj2", obj2)

        obj2.key1 ="another value";
        console.log(obj2)

console:       
obj1 Object>
obj2 Object>
copy.html:24 Object>

```

## Object makes constant
```bash
   //object created as constant
        const obj = {
            'key1' : 'value1',
            'key2' : 'value2',
            'key3' : 'value3'
        };

        //❌Illegal
        //we cannot create a new pointer 
        //with the same name 
        /*

        obj = {
            'new_key' : 'new value'
        }
        */
        //object.html:21 Uncaught TypeError: Assignment to constant variable.

        console.log("obj",obj);

        //objects are stored as memory pointer 
        //they can be changed 

        //we can update existing pointer 
        obj.key1 = "new value 2"
        console.log("obj changed",obj)

        //sealing object 
        //prevents changing of obj properties 
        //you cannot make changes after this 
        Object.seal("sealed",obj);
        //this object is sealed completely 

        //thats why we cant change it 
        //we cant change or delete or update or edit 

        delete obj.key2; //wont work

console:
obj {key1: 'value1', key2: 'value2', key3: 'value3'}
object.html:36 obj changed {key1: 'new value 2', key2: 'value2', key3: 'value3'}
```

## DOM 
represents html document in a JS object.

> represented in a tree structure 
> Object model- js has global object called document 
> everything in html document is inside dom

> DOM used for easy manipulation, easy access 

```bash
<script>
      console.log(document);
</script>

console:
document object >
```

#### Tree structure of this code 
```bash
        Html (root) 
head tag         body tag

1.meta            h2
2.meta            div {p span{}}
3.title element   div {div a{ }} p{}
4.meta            h5 
                  script 
```

Node levels:
parent 
element 
child 
sibling- meta tags

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom</title>
</head>
<body>
    <h2> DOM </h2>
    <div>
        <p>Lorem ipsum dolor <span>sit amet consectetur<span> adipisicing elit. Aspernatur!</p>
    </div>

    <div>
        <div>
            <a href="#"></a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
    <h5>heading</h5>
    <script src="dom.js> </script>
    
</body>
</html>
```

### DOM manipulation
concept of changing content of DOM (web page) using JS 
eg: loading and showing video on youtube  

```bash
//add content to html content 
document.write()
```

#### why do we update in JS file not in html file 
google search is updated through JS functionalities, we cant make dyanamic 
changes using html 

### through dom manipulation 
//we can get the reference
//we can change the content 

```bash
//to manipulate any element say p tag in Dom 
    //you need reference to it 
    1. use ID attribute- unique 

    2.from the element,get element based on ID 

    3.from the document, get element by the id

    4.from the document, get the elementbyid

    5.from the document, getelementbyid

    //document.getelementbyid()
    //return element based on ID

    let e = document.getElementById("changepara");
    console.log(e);
    // e - object 

    console:
    p#changepara>
     
    //we accesed element now were going to update it
    //innerText - shows text inside the element

    //used for updating data
    e.innerText = "new content";
    //used for getting data
    console.log(e.innerText)
   
    console:
    new content 
```

### we can call JS using html events 
    > actions performed on the document by the user 
    any thing that happens on browser is event, here are eg of some events:-
    1. click on a button 
    2. text input using keyboard 
    3. hover on the link 
    4. loading of document 
    5. moving cursor

### Event Listeners 
#### 1. Onclick 
```bash
<body>
  <button onclick="show_alert()">click</button>
</body>

<script>
  function show_alert()
    {
        alert("alert lol");
    }
    show_alert();
</script>
```

Glossary:
> Vanilla- without library or framework



