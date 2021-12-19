
## This keyword 
> reference of the current object 
> object of execution 
> represents the owner object 
> its also the window object in global object 

### depends on context of execution 
This keyword depends on where your using it

> Demonstrating this, by using a simple calculator 
```bash
 <script>
        let cal = {
            'num1' : 10,   ✅type: number
            'num2' : 20,
            'num3' : "30", ✅type: string 

            ✅Number + number 
            'sum' : function()
            {
                let add = this.num1 + this.num2;
                console.log(add);
                        
            },

            ✅Number + string 
            'stringsum' : function()
            {
                let add = this.num1 + this.num3;
                console.log(add);

            },

            'showthis': function()
            {
            console.log(this); ✅pointer to the owner object 
            }
        }

        cal.sum(); //30
        cal.showthis(); ✅refers to the owner object 

        //if one of them was string the output would be a string
        cal.stringsum(); //1030

    </script>

console:
30
this.html:38 {num1: 10, num2: 20, num3: '30', sum: ƒ, stringsum: ƒ, …}num1: 10num2: 20num3: "30"showthis: ƒ ()stringsum: ƒ ()sum: ƒ ()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
this.html:33 1030
```
> Usecase of this in industry 
```bash 
<body>
    <button id="abcd">click em 1</button>
    <button id="abcd1">click em 2</button>
    <script>
        function fn()
        {
            console.log(this);
            ✅addeventlistener and get using this keyword 
            when we dont use eventlistener along with this keyword, it 
            returns windows object 

        alert("button clicked");
        //displays a pop box displaying button clicked 

        }

        ✅ add same event listener to both of our button
        var x = document.getElementById('abcd');
        x.addEventListener('click', fn);


        var x = document.getElementById('abcd1');
        x.addEventListener('click', fn);


    ✅x is the variable which is referencing the button with specific ID, x.
    ✅addEventListener is telling it to what to do when it is clicked
    </script>

console:
1. when we click on button "click em 1"
<button id="abcd">click em 1</button>

2. when we click on button "click em 2"
<button id="abcd1">click em 2</button>
```
## Default behavior of this keyword is to point to its owner object 
This by default points to the owner object 

when we call an event listener with this keyword, under the hood, js will be calling the custom object 
> This keyword pointing to custom object 'btn_obj' when fn1.call(btn_obj); is caled 

```bash 
<body>
    <button id="abcd">click em</button>
    <button id="abcd1">click em</button>
    <script>

   function fn1()
   {
       console.log(this);
       ✅this keyword has default behavior:
        pointer to context of execution 

       //this="1234"
       ✅cannot update this value 
   }

   //for each dom element there is an object 
   let btn_obj = {
       'id' : 'abcdss',
       'classes' : 'bcshsj',
   }

   fn1();
   //gives window global object 

   //fn1 as a callback object 
   fn1.call(btn_obj);
   ✅this keyword will be pointing at this object passed in this function
</script>

console:
windows object >
Objectclasses: "bcshsj"id: "abcdss"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
```
## Apply/ bind/ call are used when you want to customize the object 
### When we use call/ apply/ bind 
then whatever value you pass as an argument, this keyword will point to that argument
> This is called customized behavior of this keyword 

1. passing string as an argument 
```bash
  function fn1()
  { 
     console.log(this)
  }

   fn1.call("string")
   ✅context of execution can be changed through call method
   ✅Default value of object can be changed by using call/ apply/ bind
   ✅whatever value we pass in this function, this keyword will point to that 

console:
returns string object 
```
2. passing number as an argument 
```bash
  function fn1()
  { 
     console.log(this)
  }

   fn1.call(1)
   ✅context of execution can be changed through call method
   ✅Default value of object can be changed by using call/ apply/ bind
   ✅whatever value we pass in this function, this keyword will point to that 

console:
returns number object 
```
### Object inside object 
What will this keyword refer to?
```bash 
<script>
        let complex_obj = {
            'key1' : 'value 1',
            'key2' : 'value2',
            'complex_key' : {
                'innerkey1': 'inner value 1',
                'innerkey2': 'inner value 2',
                'inner_fn': function()
                {
                    console.log(this); ✅this keyword will refer to the immediate owner 
                }
            }
            //console.log(this);
            ✅it will target the entire object 
        }

        complex_obj.complex_key.inner_fn();
    </script>

console:
{innerkey1: 'inner value 1', innerkey2: 'inner value 2', inner_fn: ƒ}
inner_fn: ƒ ()
innerkey1: "inner value 1"
innerkey2: "inner value 2"
[[Prototype]]: Object
```
what will this keyword return?
```bash 
 <script>
        let complex_obj = {
            'key1' : 'value 1',
            'key2' : 'value2',
            'complex_key' : {
                'innerkey1': 'inner value 1',
                'innerkey2': 'inner value 2',
                'inner_fn': function()
                {
                    console.log(this);
                }
    
            },
            'out_fn': function()
                {
                    console.log(this);
                    ✅this keyword points the parent object "complex_obj"
                }

        }
        complex_obj.out_fn();
</script>

console:
Object
complex_key: {innerkey1: 'inner value 1', innerkey2: 'inner value 2', inner_fn: ƒ}
key1: "value 1"
key2: "value2"
out_fn: ƒ ()
[[Prototype]]: Object
```
### Rest operator 
used for alloting dyanamic arguments to function 
```bash 
function fn1(...x)
 {
   console.log(x)
 }

fn1(2, 1, 32, 23, 223);

✅passing dyanamic parameters 
fn1.apply(1, [4, 56]);

let ref = fn1.bind(133);
//bind returns a new reference, which you can execute later 
ref()  //executing the reference 

console:
(5) [2, 1, 32, 23, 223]
(2) [4, 56]
[]  ✅this is what the reference returns 
```
## Function
set of instructions combined together 
> example of block of code 

- It gives reusability 
- peice of code which performs a specific functionality/ specific task

```bash 
<script>
        //function defination/ declaration
        //its also called function declaration, because were declaring function in it 
        
        function sum(a,b)
        {
            return a+b;
        }

        ✅this is not function invokation/ execution 
        let a = sum;      
        console.log(a);
        ✅returns reference of the function, 
        ✅this is pointer to the function, its not executing it

        //let a = sum()
        ✅this is function execution

//function invokation, needs a round bracket 
//round brackets important for execution
let b = sum(10, 20);
console.log(b);

</script>

console:
ƒ sum(a,b)
        {
            return a+b;
        }

functions.html:48 30
```
### Nested functions 
function inside functions, to increase security within functions 
```bash 
<script>
        function outer()
        {
            function inner1()
            {
                console.log("inner 1 called");
            }

            function inner2()
            {
                console.log("inner 2 called")
            }
            ✅inner function cannot be called outside
            ✅it should be called from within the scope 
            inner1();
        }

        outer();
</script>

console:
inner 1 called 
```
Secret key cannot be accessed outside its parent scope 
```bash 
 <script>      
    function outer(a)
        {
            var secretkey = "10";
            ✅secretkey cannot be accesed outside outer() function

            console.log("a outer",a);
            //you can access a both inner and outside 

            function inner1()
            {
                console.log("a inner",a);
                 
                ✅you can access secretkey here 
                console.log(secretkey);
                //you can access secretkey only in the inner functions 
            }

            return inner1;
    }

        let x = outer("argument");
        x();

 </script>

 console:
a outer argument
fun3.html:25 a inner argument
fun3.html:27 10
```
