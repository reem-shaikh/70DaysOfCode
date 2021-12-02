### this keyword : Context keyword 
  this keyword: refers to the object it belongs to.
> this keyword is the reference to the current/parent object 

#### In a method it refers to the owner object 
#### Alone it refers to the global object 


It has differet values depending on where it is used:
#### 1. when this keyword used alone it represents the global object i.e the window object 
```bash
console.log(this);

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```
***it will refer to the windows object (which is global object of the browser)***

#### 2. In Regular function, this refers to the global object (windows object)
#### This is also called Default Binding 
```bash
<script>
       function sum()
        {
            var add = 2+2;
            console.log("sum" +add);
            console.log(this);
        }
    sum();
</script>

console:
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

#### 3. In a method, this refers to the owner object 
```bash
const thapa = 
        {
            name: "vinod thapa",
            qualif: "mcs",
            sum: function()
            //sum is called method 
            {
                var add = 2+2;
                console.log("add" +add);
                console.log(this); //this refers to the owner object 

                console.log("name", this.name);
                //this is called implicit binding 
                //the object that is standing after the dot is what the keyword 
                //will be bound to 
            }
        }

        thapa.sum();

console:
add4

thiskeyword.html:43 
{name: 'vinod thapa', qualif: 'mcs', sum: ƒ}
name: "vinod thapa"
qualif: "mcs"
sum: ƒ ()
[[Prototype]]: Object

name vinod thapa
```

### In web browsers, the window object is also the global object:
```bash
console.log(this === window); // true
```

#### This keyword wont work without an object 
```bash
function fn()
{
    console.log(this);
}

fn();

console:
window object 
```

### over here, were refering to the method function with the help of the object from outside 
```bash
 var calculator = {
            //calculator objects

            'num1': 0,
            'num2': 0,
            'mul' : function ()
            {
            //refer with help of object name from outside 
            let product = calculator.num1 * calculator.num2;
                        
            return product;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3; 

        var product = calculator.mul();
        console.log(product);
```

### better way to write this code, is using the this keyword 
```bash
    var calculator = {
            //calculator objects

            'num1': 0,
            'num2': 0,
            'mul' : function ()
            {
            let product = this.num1 * this.num2;
                        
            return product;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3; 

        var product = calculator.mul();
        console.log(product);

```
use this keyword because in case we change the object name from calculator 
to something else, then we'll have to manually change the inside objects

> Another example of this keyword 
```bash
<script>
        var obj1 = {
            'key1' : 19,
            'fun'  : function() 
            {
                console.log(this);
            }
        };

        obj1.fun();

        var obj2 = {
            'key2' : 1000,
            'fun'  : function() 
            {
                console.log(this);
            }
        };

        obj2.fun();
</script>

console: //prints the object for both the methods 
Objectfun: ƒ ()arguments: nullcaller: nulllength: 0name: "fun"prototype: {constructor: ƒ}[[FunctionLocation]]: this.html:13[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]key1: 19[[Prototype]]: Object
this.html:25 Objectfun: ƒ ()key2: 1000[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

```

#### 4. In a function, in strict mode, this keyword is undefined 
Js strict mode does not allow default binding 
```bash
"use strict"

        function sum()
        {
        var add = 2+2;
        console.log("sum" +add);
        console.log(this);
        }

        sum();
    
console:
sum4
thiskeyword.html:57 undefined
```

### ways to implement this keyword:
1. Default binding 
2. Implicit Binding  


## 1. Default Binding
when default binding applies, it refers to the window. 

we cannot use the this keyword without defining it inside an object, 
because this will give the windows object 
```bash
function fn()
{
    console.log(this);
}

fn();

console:
window object 
```
#### we can call a variable/ function through "this" keyword which has no object
However, we can call a variable through this keyword 
```bash

function fn()
{
    console.log(this.a);
}

var a = 5; 
fn();

console:
5
```

we can also call a function through this keyword 
```bash
function fn() {
console.log('ABCD');
}

this.fn();
```

## 2. Implicit Binding 
Implicit Binding is applied when you invoke a
function in an Object using the dot notation
```bash
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 
```

> In a constructor 
```bash
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```

#### This keyword refers to the context of execution 
```bash 
var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John
```

Drawback of this keyword:
sometimes IT BINDS TO WINDOWS OBJECT, SOMETIMES IT BINDS TO THE FUNCtION itself.
In arrow Keyword nothing in binded. but you cannot use them in method

