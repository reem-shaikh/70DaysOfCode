<<<<<<< HEAD
=======

>>>>>>> aa6ba8eb579fd93458073c4cbb64491c09f4fbc5
## ✅what can JS do?
JS is universal language.

give functionality in webpage. both:
- frontend (client side)
- backend (server side)

### use cases:
- filter results on fipkart 
- change language on web page 
- automatically load google autocomplete

can create 
- mobile apps
- web apps
- iot 

## 🔳interview questions.
### Difference between java and js

✅Java
```bash
- OOP programming language
- requires jvm, run on vrtual machine 

- compiler language
  COMPILED INTO SINGLE FILE 
  AND THEN EXECUTED 
```


✅Js
```bash
- OOP scripting language 
- runs on browser only 
- intrepreted language- 
  EXECUTED LINE BY LINE 
```

HLL -UNDESTANDABLE BY HUMANS 
- JAVA, C, CPP, PYTHON etc 

LLL -UNDESTANDABLE BY MACHINES
- assembly code

process of compiling converts HLL -> LLL

## Q. Intrepreted vs Compile code.

Programming language= 
  scripting language 
+ compiler language


## ✅Scripting Language
Intrepreted 
line by line conversion HLL -> LLL 
- its slower because it has to execute with every line of code everytime a the code is revamped 

eg: CSS, JS, RUBY, PYTHON, PHP, VBA, ES, TYPESCRIPT

## ✅Compiler Language
Compiled
completely source code compiled from HLL -> LLL
- compiled is faster because its executed once when file is saved and run 

eg: SCSS, SASS, JAVA, KOTLIN


✅Strongly typed programming language
first time assignment, we have to give data type, it cannot be changed in future.

eg: java code
int another = 10;
another = false;
❌throws error, because were assigning a boolean value to int code 

## ✅loosely typed programming language/ dyanamically typed
**type of data being stored in a variable can changed at any point of time** 

JS is loosely typed. it doesnt care what datatype your storing in variable

       var another= 10;
       console.log(another);

       another= "string"; //updating with datatype string
       console.log(another);

       another= false; //updating with datatype string
       console.log(another);

       number1 = "sting"
       console.log(number1)

       number1= false;
       console.log(number1)


## JavaScript: 
used both in frontend and backend 

***Runs in the Client-side***
   can implement logic in the client-side without the need to reach the server 
***Runs in the server-side***
   Using Node Js (server side Run time environment)

- JS helps in creating dyanamic web applications and websites  
> ***allows us to add dyanamic behavior to webpage***

## Request- Response flow 
working of websites 
 
1. Client requests for website 
web server   <------------------------------ client

2. Web server does processing using a dyanamic language (PHP/ Python/ Node Js) and returns the response to client in the form of html, css and JS.

3. CSS & Js will be embedded in HTML and this bundle will be send to your browser at client-side.
web server ------------------------------> client


#### Basic Requirments to biuld a website:
- HTML: must                (skeleton)
Markup language used for giving skeleton to web applications/ websites 

- CSS: designing            (features)
Markup langauge used to handle presentation of html webpage 

- JS: Client-side scripting  (brain)
  High level dyanamic intrepreted programming language 

### 1. Scripts can be executed on the browser itself.
> JS can be run on chrome developer tools -> console

## Js Console API 
ways to print on console:

### Alert command 
Get a pop up box 

```bash
   alert('hello world');
```

### Console.log command
 prints on the console 

```bash
  console.log("hello world");
```
VM476:1 hello world

### Document.write 
 prints on the webpage 

```bash
document.write("this is doc write");
```

### Console.error 
displays error on the console 

```bash
console.error("this is an error");
```
VM842:1 this is an error

### Console.warn 
displays a warning message 

```bash
console.warn("this is a warning");
```
VM916:1 this is a warning

### console.clear 
to clear the console 

```bash
console.clear();
```

### console.assert 
if both values are not equal then show an error 

```bash
console.assert(4==6);
```
VM1031:1 Assertion failed: console.assert

> if both values are equal, then dont show error 
```bash
console.assert(4==4);
```
undefined

### 2. Js can be executed on browser, as well as the server 
> Js can be used in the backend using Node Js 
In order for the server to process the client-side request, it needs to use a dyanamic language, if you want to use Js on the backend you need to use Node Js.

#### What is Node Js?
Node Js is a JS runtime environment which uses v8 Js engine.

Initially Js was only a client side language

Initially JS was used only for frontend 
> Js is a programming language that can be run on the console
> search engines has an inbiult JS Engine which converts Js code to machine level code 
- chrome uses V8 Js Engine (Js Engine helps in running JS)

v8 was used to create a runtime environment that could be run on the machine 
this runtime environment is called Node Js 

Node Js can be used as a server side component.

### Frontend frameworks in Js
***Angular, React***

### Server frameworks in Js
***Express Js***

### 3. There are languages that get transpiled to JS
Languages that are biult on top of JS.
> but in order to use them, they must be transpiled/ converted to Js
***CoffeeScript, Typescript***

# JS Variables 
container to store data values 

```bash
var number1 = 34;
var number2 = 36;
console.log(number1 + number2);
```
### Data Types in JS 
At a High level there are broadly two datatypes.

#### 1. Primitive Datatype 
datatypes that are singular element

- undefined 
- null 
- number 
- string 
- boolean 
- symbol

#### 2. Referenced Datatypes
datatypes that have multiple elements 

- Arrays 
- Objects 

1. number
```bash
var num1 = 10;
var num2 = 12.55;
```

2. string
```bash 
var str1 = "this is a string";
```

## String methods in Javascript 
let mystr = "hi, I am a string";

```bash
console.log(mystr.length)
17

console.log(mystr.slice(1,5)) 
i, I

console.log(mystr.indexOf("am"))
VM5443:1 6
// count starts from 0, spaces are also counted 

let mystr1 = "hi, I am a string am";
console.log(mystr1.lastIndexOf("am"))
18

d = mystr1.replace("hi","bye");
console.log(d);
//bye, I am a string am 

```


#### Dates in JS
```bash
let myDate = new Date();
console.log(myDate);
```
Wed Dec 01 2021 12:50:39 GMT+0530 (India Standard Time)

>> Date Methods
```bash
console.log(myDate.getTime());
```
1638343239484

```bash
console.log(myDate.getFullYear());
```
2021

```bash
console.log(myDate.getDay());
```
3

```bash
sunday:    0
monday:    1
tuesday:   2
wednesday: 3
thurday:   4
friday:    5
saturday:  6
```

```bash
console.log(myDate.getMinutes());
```
50

```bash
console.log(myDate.getHours());
```
12


3. Object
```bash
var marks = 
{   
   ravi: 34, 
   shubham: 78,
   harry: 99.987
}
```

4. Boolean
```bash
var a = true;
console.log(a);
```

5. Undefined 
created a variable and didnt mention what variable to return.
```bash
var und;
console.log(und);
```
undefined

6. null 
nothing in placed inside this variable 
```bash
var n = null; 
console.log(n);
```

7. Arrays 
collection of elements/ strings/ booleans.
in JS, array is a collection of multiple datatypes of elements.
```bash
var arr = [1,"reem",3,4,5.55];
console.log(arr);
```
# Array methods 

## Creating a new array 

```bash
const arr = new Array(23,11,21,'orange');
```

## Displaying items in array 

```bash
console.log(arr); // 23 11 21 orange
console.log(arr[1]); //11
```

## Accessing an Array item 
1. how to access array item 
- index of an array- starts from 0

- length: 5 (n)
- index: 4 (n-1)

   ```bash
   console.log(arr[0]);
   ```

## Sort an array 
```bash 
arr.sort();
```

## Convert array to string 
```bash 
arr.toString();
```

## Update an array index 
        ```bash
        arr[1] = 20;
        console.log(arr);
        ```

        ```bash
        arr[0]= 'harry';
        console.log(arr);

        ```

## Length of the array 
        ```bash
        var l = arr.length;
        console.log(l);
        ```

## Append to an array 
        ```bash
        arr.push("new element", "new element 2");
        console.log(arr);
        ```

## Display elements in the array 
        ```bash
        for(var i=0; i<arr.length; i++)
        {
            console.log(arr[i]);
        }
        ```
## Boolean array or not 
```bash
console.log(Array.isArray(arr)); //true 
console.log(Array.issArray('dsfs')); //false
```

## which index in the array, is the element located?
const marks = [12, 23, 23, 34, 56];

```bash
let value = marks.indexOf(12);
console.log(value); //index0
```

## Deleting elements from the array 

1. pop 
   remove element from end
```bash
marks.pop();
console.log(marks);
```
// (6) [100, 12, 23, 23, 34, 56]

2. shift 
   remove element from start 
```bash
marks.shift();
console.log(marks);
```

// (5) [12, 23, 23, 34, 56]

3. splice 
   remove element from position 
   - start index, remove these number of elements 

syntax#.
splice(start, end)

```bash
marks.splice(1, 2);
console.log(marks);
```
// (3) [12, 34, 56]

4. Slice 
   remove elements from existing array and place it in a new array.

syntax#.
slice(start, end) 

var newarr = ["sanjay", "aman", "rehman", "rahul", "karan"];

   1. between two elements
      ```bash
      var nb = newarr.slice(1,4);            //between 1 and 4
      document.write(nb, "<br>");
      ```
      //aman,rehman,rahul

   2. starting from one element
      ```bash
      var nb = newarr.slice(1);              //between 1 and 4
      document.write(nb);
      ```
     //aman,rehman,rahul,karan


## Reversing array 
```bash
marks.reverse();
console.log(marks);
```

// (3) [12, 34, 56]

## Concatenation
  2nd array concatenated to first array
let marks1 = [10,20,30];
let marks2 = [1,2,3,4];

```bash
marks1 = marks1.concat(marks2);
console.log(marks1);
```
// (7) [10, 20, 30, 1, 2, 3, 4]


## Concatenating 
### 1. two strings
```bash
var str1 = prompt('enter str 1') //ab
var str2 = prompt('enter str 2') //cd
var con = str1 + str2
alert(con) //abcd
```

## 2. adding two numbers
```bash
var str1 = 10
var str2 = 20
var con = str1 + str2
console.log(con) //30
```

## 3. adding number + string 
```bash
var str1 = 'string'
var str2 = 20
var con = str1 + str2
console.log(con) //string20
```

## convert string to num
```bash
var a = prompt('enter a')     //5
var b = prompt('enter b')    //4
var num1 = parseInt(a)      //converts to int
var num2 = parseInt(b)
var con = num1 + num2     //9
alert(con)
```


## map function
  works like the for loop 

var a = [1, 3, 5, 8];
console.log(a); // 1 3 5 8
//used to create a new array multiply all by 10 

```bash
function test(x)
{
    return x * 10;
}

var b = a.map(test);
console.log(b);
```
// (4) [10, 30, 50, 80]


# Operators in Js 
### 1. Arithmetic operators 
```bash
var a = 34;
var b = 56;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
```

### 2. Assignment operator (=)
```bash
var c = b;
console.log(c); 
```

### 3. Comparison Operator
```bash
var x = 34;
var y == 56;
console.log(x == y);    //false 
console.log(x >= y);    //false
console.log(x <= y);    //true
console.log(x < y);     //true
console.log(x > y);     //false
```

### 4. Logical Operators 
#### Logical And (x)
```bash
console.log(true && true);    //true 
console.log(true && false);   //false
console.log(false && false);  //false
```

#### Logical Or (+)
```bash
console.log(true || true);    //true 
console.log(true || false);   //true
console.log(false|| false);   //false
```

### Logical not 
```bash
console.log(!false);          //true
console.log(!true);           //false
```

### Difference btw =, ==, ===
## Strict equality Operator (===)
> Checks DATATYPE and VALUE 
```bash
    if ('10' === 10) //comparing string and number 
    {
    console.log('same datatype')
    } else 
    {
    console.log('different datatype') //displays this
    }
```
```bash
    if (10 === 10) 
    {
    console.log('same datatype') //displays this
    } else 
    {
    console.log('different datatype')
    }
```

## Equality/ Abstract comparison Operator (==)
> checks only for VALUE, doesn't care about DATATYPE
```bash
    if ('10' == 10)
    {
        console.log('same datatype')  //displays this
    } else 
    {
        console.log('different datatype')
    }
```

## Assignment Operator (=)
> used for assignment


# JS Functions 
DRY: Do not repeat yourself 

```bash
function avg(a, b)
{
return (a + b)/2;
}

c1 = avg(4,6);
console.log(c1);
```

✅Parameter & Arguments 
    function sum(a, b)
    **FORMAL parameters**
   **written inside function defination**
        {
            var sum = a+b;
            console.log("sum done");

            //return- the output of function
            return sum;
            console.log("after return");

            //anything written after return will never be executed

        }

        var num1 = prompt("enter num1");
        var num2 = prompt
        ("enter num2");
 

        var a = parseInt(num1);
        var b = parseInt(num2);

    var fin = sum(a, b);
   **ACTUAL PARAMETERS**
   **called during function invokation**

        console.log(fin);


# Conditionals in Js 
1. If Statement 
```bash
var age = 34;
if (age > 8)
{
console.log("you are not a kid");
}
```

2. If- else Statement
```bash
if()
{
console.log();
}
else
{
console.log();
}
```

3. If - Else Ladder
```bash 
var age = 34;
if ()
{
console.log();
}
else if ()
{
console.log();
}
else
{
console.log();
}
```

# Loops in JS 
### 1. For loop
```bash 
var arr = [1,2,3,4,5];
console.log(arr);
for(var i=0; i<arr.length; i++>)
{
console.log(arr[i]);
}
```

### 2. forEach loop
```bash 
var arr = [1,2,3,4,5];
console.log(arr);
arr.forEach(function(element)
{
console.log(element)
})
```
```bash
Array(5)
js1.html:16 1
js1.html:16 2
js1.html:16 3
js1.html:16 4
js1.html:16 5
```

### 3. While loop 
```bash 
let j = 1;
while(j < arr.length)
{
   console.log(arr[j]);
   j++;
}

js1.html:24 2
js1.html:24 3
js1.html:24 4
js1.html:24 5
```

### 4. Do-While loop 
prints the wrong last value, which does not to be included atleast once 

```bash
let k =1;
do
{
   console.log(arr[k]);
   k++;
}
while(k < arr.length);

js1.html:24 2
js1.html:24 3
js1.html:24 4
js1.html:24 5
```

```bash 
let i= 10;
do
{
    i++;
    console.log(i);
}
while(i<20);

js1.html:41 11
js1.html:41 12
js1.html:41 13
js1.html:41 14
js1.html:41 15
js1.html:41 16
js1.html:41 17
js1.html:41 18
js1.html:41 19
js1.html:41 20
```

### DOM manipulation (Document Object Model)
document is used to access HTML page elements to add dyanamic properties to it.

#### How does JS interact with HTML document?
- Document Object Model 
When html document is loaded in the browser corresponding to that document 
there is a new document ina  different format created for JS called DOM,
JS can easily intrepret DOM format. since it can only operate on objects and 
cannot access html tags.

> each tag in html is represented as objects in DOM.
> There is also a herierchy in DOM. It contains 3 primary nodes.
1. element node:   <head>, <body>
2. attribute node:  id/ class 
3. text node:       content inside element 

> we either get or set values 
- set: to change properties of element 
- get: to fetch value of elements


#### We can target DOM object through the following:
1. Id: document.getElementById
2. Class Name: document.getElementsByClassName
3. Tag Name: document.getElementsByTagName

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    
</head>
<body>
    <div id="wrapper">
        <div id="header">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</html>
```

#### This command converts html code to DOM 
```bash
 <script>
        var element;
        element = document; 
        console.log(element);
    </script>

location: Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/main/30-11/js1.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
URL: "http://127.0.0.1:5500/main/30-11/js1.html"
activeElement: body
adoptedStyleSheets: []
alinkColor: ""
all: HTMLAllCollection(25) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, script, style, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]
anchors: HTMLCollection []
applets: HTMLCollection []
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
bgColor: ""
body: body
characterSet: "UTF-8"
charset: "UTF-8"
childElementCount: 1
childNodes: NodeList(2) [<!DOCTYPE html>, html]
children: HTMLCollection [html]
compatMode: "CSS1Compat"
contentType: "text/html"
cookie: ""
currentScript: null
defaultView: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
designMode: "off"
dir: ""
doctype: <!DOCTYPE html>
documentElement: html
documentURI: "http://127.0.0.1:5500/main/30-11/js1.html"
domain: "127.0.0.1"
embeds: HTMLCollection []
featurePolicy: FeaturePolicy {}
fgColor: ""
firstChild: <!DOCTYPE html>
firstElementChild: html
fonts: FontFaceSet {onloading: null, onloadingdone: null, onloadingerror: null, ready: Promise, status: 'loaded', …}
forms: HTMLCollection []
fragmentDirective: FragmentDirective {}
fullscreen: false
fullscreenElement: null
fullscreenEnabled: true
head: head
hidden: false
images: HTMLCollection [img]
implementation: DOMImplementation {}
inputEncoding: "UTF-8"
isConnected: true
lastChild: html
lastElementChild: html
lastModified: "12/01/2021 14:57:47"
linkColor: ""
links: HTMLCollection(3) [a, a, a]
nextSibling: null
nodeName: "#document"
nodeType: 9
nodeValue: null
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfreeze: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointerlockchange: null
onpointerlockerror: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreadystatechange: null
onreset: null
onresize: null
onresume: null
onscroll: null
onsearch: null
onsecuritypolicyviolation: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvisibilitychange: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
ownerDocument: null
parentElement: null
parentNode: null
pictureInPictureElement: null
pictureInPictureEnabled: true
plugins: HTMLCollection []
pointerLockElement: null
previousSibling: null
readyState: "complete"
referrer: "http://127.0.0.1:5500/main/30-11/js1.html"
rootElement: null
scripts: HTMLCollection(2) [script, script]
scrollingElement: html
styleSheets: StyleSheetList {0: CSSStyleSheet, length: 1}
textContent: null
timeline: DocumentTimeline {currentTime: 5062.96}
title: "DOM"
visibilityState: "visible"
vlinkColor: ""
wasDiscarded: false
webkitCurrentFullScreenElement: null
webkitFullscreenElement: null
webkitFullscreenEnabled: true
webkitHidden: false
webkitIsFullScreen: false
webkitVisibilityState: "visible"
xmlEncoding: null
xmlStandalone: false
xmlVersion: null
[[Prototype]]: HTMLDocument
```
#### Creating an array and returning all html tags mapped with numbers
```bash
<script>
        var element;
        element = document.all; 
        console.log(element);
</script>

HTMLAllCollection(23) [html, head, meta, meta, meta, title, body, div#wrapper, div#header, h1, div#menu, ul#list, li, a, li, a, li, a, div#content, h2, img, p, script, viewport: meta, wrapper: div#wrapper, header: div#header, menu: div#menu, list: ul#list, …]0: html1: head2: meta3: meta4: meta5: title6: body7: div#wrapper8: div#header9: h110: div#menu11: ul#list12: li13: a14: li15: a16: li17: a18: div#content19: h220: img21: p22: script23: script24: stylecontent: div#contentheader: div#headerlist: ul#listmenu: div#menuviewport: metawrapper: div#wrapperlength: 25[[Prototype]]: HTMLAllCollection
```

```bash
document.all[2];
----------------
meta
```


### targetting an element node 
```bash
<script>
        var element;
        element = document.head; 
        console.log(element);
</script>

accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childElementCount: 4
childNodes: NodeList(9) [text, meta, text, meta, text, meta, text, title, text]
children: HTMLCollection(4) [meta, meta, meta, title, viewport: meta]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 0
clientLeft: 0
clientTop: 0
clientWidth: 0
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: meta
hidden: false
id: ""
innerHTML: "\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>DOM</title>\n    \n"
innerText: "\n    \n    \n    \n    DOM\n    \n"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: title
localName: "head"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: body
nextSibling: text
nodeName: "HEAD"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 0
offsetLeft: 0
offsetParent: null
offsetTop: 0
offsetWidth: 0
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>DOM</title>\n    \n</head>"
outerText: "\n    \n    \n    \n    DOM\n    \n"
ownerDocument: document
parentElement: html
parentNode: html
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: null
previousSibling: null
scrollHeight: 0
scrollLeft: 0
scrollTop: 0
scrollWidth: 0
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "HEAD"
textContent: "\n    \n    \n    \n    DOM\n    \n"
title: ""
translate: true
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLHeadElement
```
#### Diplays the title name "DOM" specified in the title tag
```bash
<script>
        var element;
        element = document.title;  //DOM
        console.log(element);
</script>
```

#### Displays everything in the body section of the document format conversion of html document 
```bash
 <script>
        var element;
        element = document.body; 
        console.log(element);
</script>

aLink: ""
accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
background: ""
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
bgColor: ""
childElementCount: 4
childNodes: NodeList(10) [text, div#wrapper, text, script, text, comment, text, script, text, style]
children: HTMLCollection(4) [div#wrapper, script, script, style, wrapper: div#wrapper]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 234
clientLeft: 0
clientTop: 0
clientWidth: 734
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: div#wrapper
hidden: false
id: ""
innerHTML: "\n    <div id=\"wrapper\">\n        <div id=\"header\">\n            <h1>heading</h1>\n        </div>\n        <div id=\"menu\">\n            <ul id=\"list\">\n                <li><a href=\"\">home</a></li>\n                <li><a href=\"\">about us</a></li>\n                <li><a href=\"\">contact</a></li>\n            </ul>\n        </div>\n        <div id=\"content\">\n            <h2>sub heading</h2>\n            <img src=\"\" alt=\"\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>\n        </div>\n    </div>\n\n    <script>\n        var element;\n        element = document.body; \n        console.log(element);\n    </script>\n\n\n<!-- Code injected by live-server -->\n<script type=\"text/javascript\">\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n</script>\n<style>.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}</style>"
innerText: "heading\nhome\nabout us\ncontact\nsub heading\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: style
lastElementChild: style
link: ""
localName: "body"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: null
nextSibling: null
nodeName: "BODY"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 234
offsetLeft: 0
offsetParent: null
offsetTop: 0
offsetWidth: 734
onabort: null
onafterprint: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforeprint: null
onbeforeunload: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
onhashchange: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onlanguagechange: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmessage: null
onmessageerror: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onoffline: null
ononline: null
onpagehide: null
onpageshow: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onpopstate: null
onprogress: null
onratechange: null
onrejectionhandled: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onstorage: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onunhandledrejection: null
onunload: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<body>\n    <div id=\"wrapper\">\n        <div id=\"header\">\n            <h1>heading</h1>\n        </div>\n        <div id=\"menu\">\n            <ul id=\"list\">\n                <li><a href=\"\">home</a></li>\n                <li><a href=\"\">about us</a></li>\n                <li><a href=\"\">contact</a></li>\n            </ul>\n        </div>\n        <div id=\"content\">\n            <h2>sub heading</h2>\n            <img src=\"\" alt=\"\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>\n        </div>\n    </div>\n\n    <script>\n        var element;\n        element = document.body; \n        console.log(element);\n    </script>\n\n\n<!-- Code injected by live-server -->\n<script type=\"text/javascript\">\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n</script>\n<style>.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}</style></body>"
outerText: "heading\nhome\nabout us\ncontact\nsub heading\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!"
ownerDocument: document
parentElement: html
parentNode: html
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: head
previousSibling: text
scrollHeight: 234
scrollLeft: 0
scrollTop: 0
scrollWidth: 734
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "BODY"
text: ""
textContent: "\n    \n        \n            heading\n        \n        \n            \n                home\n                about us\n                contact\n            \n        \n        \n            sub heading\n            \n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!\n        \n    \n\n    \n        var element;\n        element = document.body; \n        console.log(element);\n    \n\n\n\n\n\t// <![CDATA[  <-- For SVG support\n\tif ('WebSocket' in window) {\n\t\t(function () {\n\t\t\tfunction refreshCSS() {\n\t\t\t\tvar sheets = [].slice.call(document.getElementsByTagName(\"link\"));\n\t\t\t\tvar head = document.getElementsByTagName(\"head\")[0];\n\t\t\t\tfor (var i = 0; i < sheets.length; ++i) {\n\t\t\t\t\tvar elem = sheets[i];\n\t\t\t\t\tvar parent = elem.parentElement || head;\n\t\t\t\t\tparent.removeChild(elem);\n\t\t\t\t\tvar rel = elem.rel;\n\t\t\t\t\tif (elem.href && typeof rel != \"string\" || rel.length == 0 || rel.toLowerCase() == \"stylesheet\") {\n\t\t\t\t\t\tvar url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, '');\n\t\t\t\t\t\telem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());\n\t\t\t\t\t}\n\t\t\t\t\tparent.appendChild(elem);\n\t\t\t\t}\n\t\t\t}\n\t\t\tvar protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';\n\t\t\tvar address = protocol + window.location.host + window.location.pathname + '/ws';\n\t\t\tvar socket = new WebSocket(address);\n\t\t\tsocket.onmessage = function (msg) {\n\t\t\t\tif (msg.data == 'reload') window.location.reload();\n\t\t\t\telse if (msg.data == 'refreshcss') refreshCSS();\n\t\t\t};\n\t\t\tif (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {\n\t\t\t\tconsole.log('Live reload enabled.');\n\t\t\t\tsessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);\n\t\t\t}\n\t\t})();\n\t}\n\telse {\n\t\tconsole.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');\n\t}\n\t// ]]>\n\n.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}"
title: ""
translate: true
vLink: ""
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLBodyElement
```

#### Displays all the collection of anchor tags in the document 
```bash
    <script>
        var element;
        element = document.links; 
        console.log(element);
    </script>

HTMLCollection(3) [a, a, a]0: a1: a2: alength: 3[[Prototype]]: HTMLCollection
```
#### Targetting a  specific anchor tag: say at 0'th index; i.e the first anchor tag 
```bash
   <script>
        var element;
        element = document.links[0]; 
        console.log(element);
    </script>
```

#### Displaying all the images in the document  
```bash
   <script>
        var element;
        element = document.images; 
        console.log(element);
    </script>

HTMLCollection(2) [img, img]0: img1: imglength: 2[[Prototype]]: HTMLCollection
```

#### Targetting a specific image (1st image) in the document 
```bash 
   <script>
        var element;
        element = document.images[0]; 
        console.log(element);
    </script>
```

#### Displaying doctype
```bash
   <script>
        var element;
        element = document.doctype; 
        console.log(element);
    </script>

<!DOCTYPE html>
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: true
lastChild: null
name: "html"
nextSibling: html
nodeName: "html"
nodeType: 10
nodeValue: null
ownerDocument: document
parentElement: null
parentNode: document
previousSibling: null
publicId: ""
systemId: ""
textContent: null
[[Prototype]]: DocumentType
```

#### Displays the URL of the website 
```bash
    <script>
        var element;
        element = document.URL; 
        console.log(element);
    </script>

http://127.0.0.1:5500/main/30-11/js1.html

//to display URL we can also use 
    <script>
        var element;
        element = document.baseURI; 
        console.log(element);
    </script>
```

### Targetting the attribute node 
There are certain DOM methods to display HTML dyanamically

#### 1. document.getElementById("id name")
   used to target element by its id. 
```bash 
 <script>
        var element;
        element = document.getElementById("header"); 
        console.log(element);
</script>

div#header
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: id, id: id, length: 1}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childElementCount: 1
childNodes: NodeList(3) [text, h1, text]
children: HTMLCollection [h1]
classList: DOMTokenList [value: '']
className: ""
clientHeight: 38
clientLeft: 0
clientTop: 0
clientWidth: 734
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: h1
hidden: false
id: "header"
innerHTML: "\n            <h1>heading</h1>\n        "
innerText: "heading"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: h1
localName: "div"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: div#menu
nextSibling: text
nodeName: "DIV"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 38
offsetLeft: 8
offsetParent: body
offsetTop: 22
offsetWidth: 734
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<div id=\"header\">\n            <h1>heading</h1>\n        </div>"
outerText: "heading"
ownerDocument: document
parentElement: div#wrapper
parentNode: div#wrapper
part: DOMTokenList [value: '']
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 38
scrollLeft: 0
scrollTop: 0
scrollWidth: 734
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: -1
tagName: "DIV"
textContent: "\n            heading\n        "
title: ""
translate: true
virtualKeyboardPolicy: ""
[[Prototype]]: HTMLDivElement
```

#### 2. document.getElementsByClassName("class name")
```bash
   <script>
        var element;
        element = document.getElementsByClassName("para"); 
        console.log(element);
    </script>

HTMLCollection(2) [p.para, p.para]
0: p.para
1: p.para
length: 2
[[Prototype]]: HTMLCollection
```
```bash
//targetting the first paragraph
   <script>
        var element;
        element = document.getElementsByClassName("para")[0]; 
        console.log(element);
    </script>

p.para
```
#### 3. document.getElementsByTagName("tag name")
```bash
    <script>
        var element;
        element = document.getElementsByTagName("ul"); 
        console.log(element);
    </script>
```

```bash
//targetting the first ul
    <script>
        var element;
        element = document.getElementsByTagName("ul")[0]; 
        console.log(element);
    </script>

ul#list
```


