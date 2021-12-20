
### DOM (Document Object Model)
document is used to access HTML page elements to add dyanamic properties to it.

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

meta
```


### targetting an element node 
```bash
<script>
        var element;
        element = document.head; 
        console.log(element);
</script>
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

div#header...
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

## We either get or set values 
- set: to change properties of element 
- get: to fetch value of elements

What can we get and set with DOM?
1. HTML
2. text
3. attribute

### DOM Get Methods:
1. innerText- returns the text inside the element specified 
2. innerHTML
3. getAttribute
4. getAttributeNode 
5. Attributes

### DOM Set Methods:
1. innerText
2. innerHTML
3. setAttribute
4. Attribute
5. removeAttribute

# DOM Get Methods
### 1. innerText 
extracts the text from a given id and returns it

```bash 
<script>
        var element;
        element = document.getElementById("header").innerText; 
        console.log(element);
</script>

heading
```

### 2. innerHTML
displays all the html inside the tag 

```bash 
<script>
        var element;
        element = document.getElementById("content").innerHTML; 
        console.log(element);
</script>

 <h2>sub heading</h2>
    <img src="" alt="">
    <img src="" alt="">
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
    <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

```

### 3. getAttribute
returns the value of class/ id

```bash 
//we make following changes in the code 

<body>
    <div id="wrapper">
        <div id="header" class="abc" style="border: 1px solid red;" > //added 
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
    <!--all the commands in dom.md -->

    <script>
        var element;
        element = document.getElementById("content").getAttribute("para"); 
        console.log(element);
    </script>


</body>
```

#### returns the classname 
```bash 
 <script>
        var element;
        element = document.getElementById("header").getAttribute("class"); 
        console.log(element);
</script>

abc 
```

#### returns the id name 
```bash 
<script>
    var element;
    element = document.getElementById("header").getAttribute("id"); 
    console.log(element);
</script>

header
```

### 4. getAttributeNode
returns the property name and value 

```bash
 <script>
        var element;
        element = document.getElementById("header").getAttributeNode("style"); 
        console.log(element);
</script>


style
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "style"
name: "style"
namespaceURI: null
nextSibling: null
nodeName: "style"
nodeType: 2
nodeValue: "border: 1px solid red;"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "border: 1px solid red;"
value: "border: 1px solid red;"
[[Prototype]]: Attr
```


```bash
<script>
        var element;
        element = document.getElementById("header").getAttributeNode("style").value; 
        console.log(element);
</script>

border: 1px solid red;
```

### 5. Attributes 
returns an object 

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes;
        console.log(element);
    </script>

NamedNodeMap {0: id, 1: class, 2: style, id: id, class: class, style: style, length: 3}
0: id
1: class
2: style
class: class
id: id
style: style
length: 3
[[Prototype]]: NamedNodeMap
```

```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1];
        console.log(element);
    </script>

class
baseURI: "http://127.0.0.1:5500/main/30-11/js1.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "class"
name: "class"
namespaceURI: null
nextSibling: null
nodeName: "class"
nodeType: 2
nodeValue: "abc"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "abc"
value: "abc"
[[Prototype]]: Attr
```

#### returned the value of attribute 1 
```bash
    <script>
        var element;
        element = document.getElementById("header").attributes[1].value;
        console.log(element);
    </script>

abc 
```

# DOM Set Methods
### 1. innerText
This doesn't print in the h1 tag format on the viewport 

```bash
<script>
    var element
    element = document.getElementById('header').innerText = "wow";
    console.log(element)
</script>
```
> to print in h1 tag format we need to use innerHTML
### 2. innerHTML

```bash
 <script>
    var element;
    document.getElementById('header').innerHTML = "<h1>wow</h1>";
    element = document.getElementById("header").innerHTML;
    console.log(element)
</script>
```

### 3. setAttribute
changes attribute (class/id) name.
> no need to remember index number 

```bash
//were renaming class="abc" to class="xyz"
<script>
    var element;
    document.getElementById('header').setAttribute("class", "xyz");
    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>

xyz
```

### 4. Attribute 
we can change value using index numbers 

```bash
<script>
    var element;
    document.getElementById('header').attributes[1].value = "sdf"; 
    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)

</script>

sdf 
```

### 5. removeAttribute
removes a specific property from an attribute.

```bash 
<script>
    var element;
    document.getElementById('header').removeAttribute("style"); 
    // over here were removing border: 1px solid red on the header class

    
    //<div id="header" class="abc" style="border: 1px solid red;">

    //attribute  position 
    //   id        0 
    //  class      1 
    //  style      3

    element = document.getElementById("header").getAttribute("class");
    console.log(element)
</script>
```
### Event handler Object 
    Event e , contains information about the event that has just occured    
```bash 
<body>
    <button id="btn1">button</button>

    <script>
        let btn = document.getElementById('btn1').addEventListener('click', function(e){
            console.log(e)
            //contains properties about event that has just occured 

            if(e.ctrlKey)
            {
                //when you click on control + click on button 
                //this prints on console 
                console.log("olllllllllllllol")
            }
        });

    </script>
</body>

1. when you click on both cntrl + button this loads on
console:
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}isTrusted: truealtKey: falsealtitudeAngle: 1.5707963267948966azimuthAngle: 0bubbles: truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 42clientY: 14composed: truectrlKey: truecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullheight: 1isPrimary: falselayerX: 42layerY: 14metaKey: falsemovementX: 0movementY: 0offsetX: 32offsetY: 4pageX: 42pageY: 14path: (5) [button#btn1, body, html, document, Window]pointerId: 1pointerType: "mouse"pressure: 0relatedTarget: nullreturnValue: truescreenX: 817screenY: 130shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: button#btn1tangentialPressure: 0target: button#btn1tiltX: 0tiltY: 0timeStamp: 27880.099999999627toElement: nulltwist: 0type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 1width: 1x: 42y: 14[[Prototype]]: PointerEvent
jsevent.html:25 olllllllllllllol
```

## What will happen, when multiple document.getElementById is defined?
If, there are two elements with the same id 
and when we try to fetch it through document.getElementById
it will parse JS, line by line and it will fetch the first element with that id, 
it will return that value
and wont check the other element with the same id 

## String Templating/ Template Literals
variables inside a string 
```bash
let n = 10;
undefined

//this is string Templating
console.log(`${n}`);
VM361:1 10

console.log(n);
VM403:1 10
```

# Event Handlers 
> Basic JS functions are called event handlers 
> Javascript Basic Events 
when we call an event, function will be run 

### Button events 
1. Click 
2. Double Click 
3. Right Click 

### Mouse Events 
4. Mouse Hover 
5. Mouse Out 
6. Mouse Down 
7. Mouse Up 

### Keyboard Events 
8. Key Press
9. Key Up 

### windows Events 
10. Load 
11. Unload 
12. Resize 
13. Scroll 


## 1. click
**onclick* 
> On clicking on the button, the function will be loaded 

```bash
<script>
<head>
    function hello()
        {
            document.write("hello everyone");
        }

    </script>
</head>
<body>
    <button onclick="hello()">click me</button>
</body>
```
## 2. Double click 
*ondblclick**
> when clicking on the button twice the function will be loaded 

```bash 
 <button ondblclick="hello()">click me</button>
```

## 3. Right Click 
*oncontextmenu**
> when right clicking on the button once the function will be loaded 

```bash 
<button oncontextmenu="hello()">click me</button>
```

## 4. Mouse Hover 
*onmouseenter**
> when hovering over the button the function will be loaded 

```bash
<button onmouseenter="hello()">click me</button>
```

## 5. Mouse Out 
*onmouseout**
> as long as you hover on the button nothing will be shown, but when you hover out 
the function will be loaded AKA Event will be called 

```bash
 <button onmouseout="hello()">click me</button>
```

## 6. Mouse Down 
*onmousedown**
same as onclick.

```bash 
<button onmousedown="hello()">click me</button>
```

## 7. Mouse Up 
*onmouseup**
as you click on the button, nothing happens, as you release event will be called.

```bash 
<button onmouseup="hello()">click me</button>
```

## 8. Key Press
*onkeypress**
as soon as you press a keyword key, the function will be executed 
- works only in forms/ body tag

```bash
<body onkeypress="hello()">
 //press any key on the page and event will be called 
</body>
```

## 9. Key Up 
*onkeyup**
as you press a keyword key, and release it, the function will be executed 
```bash
<body onkeyup="hello()">
</body>
```

## 10. Load 
*onload**
on refreshing the page, event will be triggered 

```bash
<body onload="hello()">
</body>
```

## 11. Unload 
*onunload**
before you close the page, event will be triggered 

## 12. Resize 
*onresize**
whenever we resize the page, the event will be called 
```bash
<body onresize="hello()">

</body>
```
## 13. Scroll 
*onscroll**
whenver we scroll the event will be called 
```bash
<body onscroll="hello()">

</body>
```
# New DOM Targetting methods:
## 1. querySelector- Targets the first element in css selector
    document.querySelector(CSS Selector)

## 2. querySelectorAll(CSS Selector)- Targets all elements in css selector
    document.querySelectorAll(CSS Selector)

Using this example
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
        <div id="header" class="abc" style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>     
            </ul>

            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>
        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 
    document.getElementById("header").innerHTML = "<h1>WoW</h1>";
    //changes heading to wow with the same styling as before, 
    //in innertext we cannot set the styling

    element = document.getElementById("header").getAttribute("class");
    //In the ID:header there is a class, what is its attribute
    console.log(element)
    //abc
</script>

console:
abc
```

## 1. Using querySelector
Targets the first target 

doing this problem using query selector 
```bash
<script>
    var element; 
    document.querySelector("#header").innerHTML = "<h1>WoW</h1>";
   //adding # to specify id 

    element = document.querySelector("#header").getAttribute("class");
    
    console.log(element)
</script>

console:
abc
```
## 2. Using querySelectorAll
Targets all the elements in that attribute

``bash
<script>
    var element; 

    element = document.querySelectorAll(".list")[0].innerText;
    //extracting innertext from the 0th index of the list 
    //there is ul and p with the same classname .list 
    //shown in the next example 
    console.log(element)

</script>

console:
Lorem, ipsum dolor.
Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet consectetur.
```
### In case of querySelectorAll it returns all the attributes with the same class name

```bash
<script>
    var element; 
    element = document.querySelectorAll(".list");
    console.log(element)

</script>

console:
NodeList(2) [ul.list, p.list]
0: ul.list
1: p.list
length: 2
[[Prototype]]: NodeList
```

### However, querySelector returns only the first class with the given attribute 
note that its only returning the innertetx of the ul.list 

```bash 
<script>
    var element; 

    element = document.querySelector(".list").innerText;
    //query selector targets the first one only 
    
    console.log(element)

</script>

console:
Lorem, ipsum dolor.
Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet consectetur.
```

## DOM CSS Styling Methods 
we can get and set css values with these methods 

### 1. Style 

#### 1.1 Using style to get the element's style 
```bash
<script>
    var element; 
    element = document.querySelector("#header").style.border;
    console.log(element)
</script>

console:
1px solid red
```

#### 1.2 Using style to set the element's style 
```bash 
<body>
    <div id="wrapper">
        <div id="header" class="abc" style="border: 1px solid red; background-color: aquamarine;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 

    // to set the style 
    document.querySelector('#header').style.backgroundColor = "tan";

    // to get the style on console 
    element = document.querySelector("#header").style.backgroundColor;  
    console.log(element)

</script>

console:
tan 
```
#### 2. className
Adds a class to a particular id.

```bash
<style>
        .abc{
            background-color: crimson;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header"  style="border: 1px solid red;>
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
    var element; 
    document.querySelector('#header').className = "abc"
    //a new class abc is created where the id:header 
    //we have set the styling for this new class

    element = document.querySelector("#header").className;
   
    console.log(element)

</script>

console:
abc

output returned in the form of a string
```
#### 3. classList 
In case of className console output was returned in form of a string, 
however, in classList output on console is returned in the form of an array 

```bash 
<script>
    var element; 
    document.querySelector('#header').classList = "abc"

    element = document.querySelector("#header").classList;
   
    console.log(element)

</script>
```

##### 3.1 Methods of classList 
###### 1. Add 
adds classes 
```bash 
<script>
    var element; 
    document.querySelector('#header').classList.add("xyz");

    document.querySelector('#header').classList.add("abc");

    //to add more than 2 classes in the same line 
    //document.querySelector('#header').classList.add("xyz", "efg");

    element = document.querySelector("#header").classList;
   
    console.log(element)

</script>

console: added 2 classes
DOMTokenList(2) ['xyz', 'abc', value: 'xyz abc']
0: "xyz"
1: "abc"
length: 2
value: "xyz abc"
[[Prototype]]: DOMTokenList
```
###### 2. Remove 
removes class 
```bash 
<script>
    var element; 
    document.querySelector('#header').classList.add("xyz");

    document.querySelector('#header').classList.add("abc");

    document.querySelector('#header').classList.remove("abc");

    element = document.querySelector("#header").classList;
   
    console.log(element)

</script>

console:
DOMTokenList ['xyz', value: 'xyz']
0: "xyz"
length: 1
value: "xyz"
[[Prototype]]: DOMTokenList
```
###### 3. length 
how many classes are there in that specific id
```bash 
<script>
var element; 
document.querySelector('#header').classList.add("xyz", "efg");
element = document.querySelector('#header').classList.length;
//how many classes are there in total?

console.log(element)
</script>

console:
2
```

###### 4. item(index)
shows attribute based on their index 
```bash 
    <style>
        .abc{
            background-color: crimson;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header" class="abc xyz efg" style="border: 1px solid red;">
            <h1>heading</h1>
        </div>
        <div id="menu">
            <ul id="list">
                <li><a href="">home</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">contact</a></li>
            </ul>

            <ul class="list">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
               
            </ul>
            <p class="list">para Lorem ipsum dolor sit amet.</p>
        </div>

        <div id="content">
            <h2>sub heading</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>

            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit!</p>
        </div>
    </div>
</body>
<script>
var element; 

element = document.querySelector('#header').classList.item(1);
//shows the first class 
console.log(element)
</script>

console:
xyz
```
## DOM Create Methods
#### 1. createElement
   to add a tag such as <p> in html using JS
#### 2. createTextNode 
   to add a text in html using Js
#### 3. createComment
   to add a comment <!-- --> in html using JS

```bash
<script>
       var newElement = document.createElement("p");
       //p - creates a paragragh tag
       console.log(newElement);

       var newText = document.createTextNode("this is text");
       //no word limit for inserting text
       console.log(newText);

       var newComment = document.createComment("this is a comment");
       console.log(newComment);
</script>

console:
<p></p>
"this is text"
<!--this is a comment -->
```

## Drawback of Basic JS Events 
A drawback from the Basic JS event handlers, was that for adding html event attributes 
you would have to manually use it on every element in the html file, 
so in order to make our JS events completely in the js file, we can use js addEventListener

## DOM Add Event Listeners 
Drawback of using basic Js events/ event handlers, was that for every attribute you'd have 
to set the events on the html file itself inline, which increases file length 
So to keep the JS code in Js file itself, we follow either of 2 ways 

### 1. Assign events using HTML DOM
```bash
document.getElementById(id).onclick = functioncall;
```
When you click on the id:header, the bg-color will change to green
```bash 
<script>
    var element; 
    document.getElementById('header').onclick = abc;

    function abc()
    {
        document.getElementById('header').style.background = "green";
    }

</script>
```

### 2. DOM addEventListener() Method 
```bash 
document.getElementById(Id).addEventListener("click", function(){}
);
```
***2.1 click- insert any basic JS event here such as: mouseenter***
(note: we dont use onmouseeneter/ onclick -> we remove the on)

***2.2 function- create a function here (anonymous function), you can even declare the function outside*** 
This code using addEventListener, does the same thing as the previous code 

> anonymous function: function which has no name/ identifier 

```bash 
<script>
    var element; 
    document.getElementById('header').addEventListener("click", abc);

    function abc()
    {
        document.getElementById('header').style.background = "green";
    }

</script>
```
An example with the function defined insidethe html object itself 
```bash 
As you hover over the id:header it will change bg-color 

<script>
    var element; 

    document.getElementById('header').addEventListener("mouseenter", function(){
        document.getElementById('header').style.background = "green";
    });
</script>
```

Using this keyword 
```bash 
<script>
    var element; 

    document.getElementById('header').addEventListener("mouseenter", function()
    {
        this.style.background = "green";
    });
</script>
```


### Discusing DOM, BOM and CSSOM 
parent of DOM IS BOM 
> anything in DOM is part of BOM 

```bash 
   BOM 
    | 
   DOM   +   CSSOM  => RENDER TREE 
```
## DOM 
contains all the content of the page 
**changes properties of html document** 
eg: onclick, src, class, value, type, id, listeners, target, name 

also contains content 
> eg: innerText, innerHTML, children, grandchildren

## CSSOM 
contains all style of the page 
**On html dom, style is done using CSSOM**
The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML.
> eg: margin, padding, color, border etc 

```bash 
document.body.style.backgroundColor = 'lightblue';
```

## render tree => DOM + CSSOM 
(for representation purpose)
contains everything that is rendered on the page 
(structure + style)

![](images/image2.PNG)
(only captures/ renders visible content from the CSSOM)

## BOM (browser object model)
**changes property of browser** 
Under the hood, DOM is BOM's child

for browser related programming, we use window object.
- chrome 
- firefox
- opera 
- IE 

> browser refers to the window
> browser object refers to window object 

Terminologies:
- viewport 
- browser window 

What can we get from window object (inbiult methods)?
1. get width and height of browser window 
2. open and close browser window 
3. move and resize browser window 
4. scroll to browser window 
5. get URL, hostname, protocol of browser window 
6. get history of browser window 

## 1. get width and height of browser window 
#### Window height and width methods:
- innerHeight - height of the viewport 
- innerWidth - width of the viewport
- outerHeight - height of the browser window 
- outerWidth - width of the browser window 

Note: As you minimize the console window, or extend it, the window height/ width value 
changes.
```bash 
<script>
        ✅ innerHeight- calculates height from console bar to top of viewport 
        var iHeight = window.innerHeight;
        console.log("innerheight",iHeight);

        ✅ outerHeight- calculates height from top of viewport to bottom of viewport
        with respect to the size of the browser window on the screen 
        var oHeight = window.outerHeight;
        console.log("outerheight", outerHeight)

        ✅ innerWidth- its the width of the viewport 
        var iWidth = window.innerWidth;
        console.log("innerwidth",iWidth);

        ✅ outerWidth- its the width of the viewport + the thin outer section of browser window 
        var oWidth = window.outerWidth;
        console.log("outerwidth",oWidth);        
</script>
```
## 2. open and close browser window 
#### window Open() & Close() methods 
##### Open() method
Open window B through window A through integrating a button on window A
##### Close() method
Close window B through window A through integrating a button on window A

syntax:
```bash 
window.open(URL, name, specs)

    url: domain name of website with protocol (https://www.website.com)
    name: name of the window that your opening (optional)

    name:
    1. you can mention any random name (optional field) 
    this name is just for our reference 

    or
    2. you can give predefined parameter 
        1. _blank (new window opened in new tab)
        2. _self (window opened in same tab its written)
        
        for frameset based websites 
        3. _top 
        4. _parent 

    when you dont specify anything, it opens a new window in a new tab 

    specs: (what are the specs of the new window thats opening)
        - width 
        - height 
        - left 
        - top 
```
window.open() example:
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    
    <script>
        function openWindow()
        {
            window.open("http://www.mozilla.org", "", "width=500px, height=200px, left=100px, top=200px");
            ✅ when you click on the button a new window gets opened 
         
            ✅ instead of using name property use target properties to indicate where the window must open when button is clicked 

            ✅ new window B that opens will be at a distance of these specs wrt the desktop screen
            // "width=500px, height=200px    left=100px, top=200px"
        }
       
    </script>

</body>
```
window.close() example:
```bash 
    <script>
        let myWindow;
        function openWindow()
        {
            myWindow = window.open("http://www.mozilla.org", "width=500px, height=200px, left=100px, top=200px");
        }

        function closeWindow()
        {
            myWindow.close();
        }
        //window that we opened now closes 
       
    </script>
```
## 3. move and resize browser window 
### 3.1 moveBy() and moveTo() method
### 3.2 resizeBy() and resizeTo()

### 3.1 moveBy() and moveTo() method
#### moveTo() method 
works on absolute postion
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="moveWindow()">Move window</button>
    
    <script>
        //1. click on the open window button 
        //2. click on move window button - it moves to the coordinates we set in the function
        
        var myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");  
            //move doesnt work when you enter the website URL and the name 
            
            myWindow.document.write("<p>this is my window </p>");
        } 

        function moveWindow()
        {
           myWindow.moveTo(100, 100); //left right 

           //this code ensures that on clicking move window, the window is still 
           //shown above the browser window screen
           ✅myWindow.focus();

           //if we hadnt given this the window would be hidden under the browser window 
        }
       
    </script>
</body> 
```
### moveBy() method
works on relative position
```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="moveWindow()">Move By</button>
    <button onclick="moveWindow1()">Move to</button>
    
    <script>
        var myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");  
            //move doesnt work when you enter the website URL and the name 
            
            myWindow.document.write("<p>this is my window </p>");
        } 

        function moveWindow()
        {
           myWindow.moveBy(100, 100);
        }

        function moveWindow1()
        {
           myWindow.moveTo(100, 100);
        }
       
    </script>
</body>
```
> Difference between moveTo and moveBy?
moveTo() - The coordinates we set will move with respect to the desktop screen, top and left position
moveBy() - The coordinates we set will move with respect to its original position

### 3.2 resizeBy() and resizeTo()
resizeTo() - resizes the window to the value given 
resizeby() - default window size + coordinates given 

```bash 
<body>
    <button onclick="openWindow()">Open window</button>
    <button onclick="closeWindow()">close window</button>
    <button onclick="resizeWindow()">resize to</button>
    <button onclick="resizebyWindow()">resize by</button>
    
    <script>
        let myWindow;
        function openWindow()
        {
            myWindow = window.open("", "", "width=500px, height=200px, left=100px, top=200px");

            myWindow.document.write("<p> this is a document </p>");
        } 

        function closeWindow()
        {
            myWindow.close();
        }
        function resizeWindow()
        {
            myWindow.resizeTo(400, 400);
            // resizeTo(width, height) 
        }

        function resizebyWindow()
        {  //takes relative value 
            //if the browser width is 100px x 100px (height x width)
            //resizeby will increase the browser with by 150px x 150px in this case 
            myWindow.resizeBy(150, 150)

            //so the final browser dimensions will be  250px x 250px 
        }   

    </script>
```

## 4. scroll to browser window 
### ScrollTo() and scrollBy() methods 
scroll without scrollbar 

Terminologies:
-  vertical scrollbar (give y axis value)
upwards: negative value 
downwards: positive value

-  horizontal scrollbar 
leftwards: negative value 
rightwars: positive value 

## 5. get URL, hostname, protocol of browser window 
#### Location object
```bash 
console.log(location);

console:
VM179:1 Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/main/13-12/bom4.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
```
To get value from the URL bar/ location bar there are certain 
#### Location object properties:
- hash 
- host 
- hostname 
- href 
- origin 
- pathname 
- port 
- protoocl 
- search 

1. Host
```bash 
console.log(location.host);

console:
VM385:1 127.0.0.1:5500
```
2. Hostname (doesnt contain port number)
```bash 
console.log(location.hostname);

console:
VM491:1 127.0.0.1
```
3. href (returns url)
```bash 
console.log(location.href);

console:
VM580:1 http://127.0.0.1:5500/main/13-12/bom4.html
```

4. port 
```bash 
console.log(location.port);

console:
VM695:1 5500
```

5. protocol 
```bash 
console.log(location.protocol);

console:
VM804:1 http:
```

6. hash- returns hash value in url 
we add /#first to the end of the url in the browser, it shows an 404 error on console 
```bash 
console.log(location.hash);

console:
VM1037:1 #first
```
### Location object methods 
- assign()
- reload()
- replace()

1. assign - what website do you want to load on that page through console
```bash 
console.log(location.assign("https://www.google.com");
```
![](images/assign.PNG)
> back button is still enabled after entering the command

2. reload - page will be reloaded 
```bash 
console.log(location.reload())
```
3. replace - just like assign, except after you write this command in console, 
you cant go back to the previous page 
```bash 
console.log(location.replace("https://www.google.com"));
```
![](images/replace.PNG)
> back button is disabled after entering the command

## 6. get history of browser window 
### History Object 
```bash 
console.log(history);

console:
VM170:1 
History {length: 1, scrollRestoration: 'auto', state: null}
length: 1
scrollRestoration: "auto"
state: null
[[Prototype]]: History
```
History object properties:
- length (denotes how many websites were open on the same page )

> We enter a new website in the url, to measure the length 
```bash 
console.log(history.length);

console:
VM526:1 2           //2 websites were open on the same page 
```

### History Object methods:
- back()
- forward()
- go()

1. back()
```bash 
history.back();

viewport:
(enter a new url on the same page, and type in console)
loads the previous loaded page 
```

2. forward()
```bash 
history.forward();

viewport:
(enter this command on the same page you started off with)
loads the next loaded page 
```

3. go() - can go both forward and backwards 
- forward   (enter 1)
```bash 
history.go(1);

viewport:
goes one page forwards 
```

- backwards (enter -1)
```bash 
history.go(-1);

viewport:
goes one page backwards 
```


----
# Functions
(till now we've discussed)
1. as regular Functions
2. as key value for objects 
3. pass function to another function 
4. function as argument  </br>
5. function as variable 

## 6. Return function from another function

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
#### 1. first were going to call a and b together
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

res[0]();
//res is an array 
// [0] - index that signifies b 
// () - signifies function invocation

console:
function a is called
VM108:6 function b call
```
#### 1.2 were going to call a and c together
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
res[1]();
VM121:3 function a is called
VM121:11 function c call
```
#### 3. were talking about how console.log(res) acts as a pointer to the function
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

console.log("typeof",typeof res);  //console: function

// because its an array were not calling using res()
console.log("res",res) //this is a pointer 
res[0]();

console:
VM240:3 function a is called
VM240:21 typeof object
VM240:24 res (2) [ƒ, ƒ] 0: ƒ ()1: ƒ ()length: 2[[Prototype]]: Array(0)
VM240:6 function b call
```
#### 1.4 Calling both b and c together 
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

console.log("typeof",typeof res);  //console: function

// because its an array were not calling using res()
console.log("res",res)
res[0]();
res[1]();

console:
function a is called
VM255:21 typeof object
VM255:24 res (2) [ƒ, ƒ]
VM255:6 function b call
VM255:11 function c call
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

### this keyword : Context keyword 
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

local memory of global execution context 
1. var name = "reem"

local memory of displayName
1. var age = 20
> lexical parent: global execution context 

local memory of displayAge
1. no variables 
> lexical parent: displayName

##### Lexical scope 
relative scope - scope within which we can access 
> The process of finding lexical scope (scope where the variable is present) is called scope chaining 
> what is lexical scope wrt 2 lines of code.
```bash 
<script>
//reference scope where all required variables/ functions/ constants are available 
    let c = 10
    let d = 20 
    { //this bracket enclosure is the lexical scope 
        let c = 30
        {
            let d = 40 
            {
                console.log(c) ✅
                console.log(d) ✅
            }
        }
    }
</script>

console:
30 
40 
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
### You can only check for the variable, from the lexical parent, not the lexical child, according to the scope chain 
> var gets pushed on top due to hoisting 
```bash 
<script>
    {
        var a = 10
    }

    console.log(a)
</script>

console:
10
```

> hoisting doesnt work on let 
```bash 
<script>
        {
            let a = 10
        }

        console.log(a)
</script>
//let and const does not get hoisted, thats why this code crashes 

console:
reference error 
```
> let is in its scope 
```bash 
   <script>
        {
            let a = 10
            console.log(a)
        }

    </script>

console:
10
```
> example 
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        console.log(a)
    }
    </script>

console;
20 
10 
```
> example
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        {
            let a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
30
10 
```
> In the same scope you cant change const, but in child scope you can change it 
```bash
    <script>
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
10 
10
```
> in let, can update value within same scope level , in const cannot update value 
within the same scope level, can create a new child block and a new constant with the 
same name 
```bash 
    const m = "20"
    function fn()
    {
        const m = "30"
        console.log(m)
    }

    fn()

console:
30 
```
> example using const 
```bash 
    <script>
    const a = "5"
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            const a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20
30
10
5
```
> var refers to the last updated value, unlike const 
```bash 
    <script>
    var a = "5"
    {
        var a = "10"
        {
            var a = "20"
            console.log(a)
        }
        {
            var a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20 
30 
30 
30
```
> const refers to inner scope, var refers to outer scope 
```bash 
    <script>
    var a = "5"
    {
        const a = "20"
        {
            console.log(a)
        }
    }
    </script>

console:
20 
```
> parent: let, child:var. wont work 
```bash 
    <script>
    let a = "10"
    {
        var a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
chaining.html:13 Uncaught SyntaxError: Identifier 'a' has already been declared
```
> parent: var, child:let, works 
```bash 
    <script>
    var a = "10"
    {
        let a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
20 
10 
```
> cannot have two let together in same scope 
```bash 
    <script>
    // let a;   - declaration 
    // a = 20;  - defination 

    let a = 10  
    let a = 20   
    </script>

console:
Uncaught SyntaxError: Identifier 'a' has already been declared
```
> dont have redeclaration 
```bash 
<script>
    let a = 10    
    a = 20     
    console.log(a)
</script>

console:
20
10
```
> var allows redeclaration
```bash 
<script>
    var a = 10 
    var a = 20 
    console.log(a)
</script>
```

Drawback of this keyword:
sometimes IT BINDS TO WINDOWS OBJECT, SOMETIMES IT BINDS TO THE FUNCtION itself.
In arrow Keyword nothing in binded. but you cannot use them in method

### Arrow Functions 
Before ES6 these were 2 methods of defining functions 

```bash
 <script>
       //1st method
       function hello()
       {
           console.log("hello")
       }
       hello();

       //2. 2nd method 
       let hello = function(){
           console.log("hello")
       }
       hello();
  </script>

console:
hello 
hello 
```

### In case of Arrow Functions,
the code is shortened 
```bash
<script>
      //in case of arrow functions
      let hello = () => console.log("hello");

      hello(); //calling function
</script>

console:
hello
```
Before ES6 code was written like this 
```bash
<script>
      let welcome = function(name)
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
      //used before ES6 versions 
</script>

console:
hello, reem 
```
However, in ES6 after arrows were introduced these were changes made 
```bash
  <script>
      let welcome = (name) =>
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
  </script>

console:
hello, reem
```
#### we can call more than one parameters in the function as well
```bash
 <script>
      let welcome = (name, age) =>
      {
          return `hello, ${name} ${age}`
      }
      console.log(welcome('reem', 20))
  </script>

console:
hello, reem 20
```
#### we can reduce the entire function to a single line 
we can remove the return statement
```bash
<script>
    let welcome = (name, age) => `hello, ${name} ${age}`
    console.log(welcome('reem', 20))
</script>

console:
hello, reem 20
```
#### you can remove the parenthesis, if there is only one parameter 
```bash
 <script>
    let welcome = name => `hello, ${name}`
    console.log(welcome('reem'))
 </script>

 console:
hello, reem 
```

## REST operator 
Why did the need for REST operator emerge? 
```bash 
 //function with multiple args 
        function sum(num1, num2)
        {
            console.log(num1 + num2)
        }

        sum(20,30);
        //sum(20, 30, 40)

        //only works with 2 parameters to resolve this issue 
        //JS ES6 introduced REST Operators 
```
```bash 
        //for/ in loop converts args to objects,
        function sum()
        {
            console.log(arguments)

            let sum = 0 
            for(let i in arguments)
            {
                sum = sum + arguments[i]
            }

            document.write(sum + "<br>")
        }

        sum(20, 30)
        sum(20, 30, 40)
        //sum("reem", 20, 30)    // doesnt add up 

document:
50
90
0reem2030
```

1. problem here is that, we cant pass other datatypes here like strings, to resolve this issue we have rest operator 
2. In REST operator 

```bash 
sum("reem", 20, 10)
rest operator in this sum function seperates this into: name and arguments 

    // 20 and 10 in one array 'args'
    // reem in another array  'name'

... signifies REST operator 
REST stores all arguments that need to be summed, inside this ...args 
``` 

> using Rest Operator to seperate string with ints 
```bash 
        function sum(name, ...args)
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }
        sum("reem ", 20, 30)

document:
reem 50 
```

### Rest operator doesnt work on arrays 
Rest operator only works only on multiple values, not on array
```bash 
// for example, if we pass args in form of array 
// it will consider the array as one element 

        
        function sum(name, ...args)
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }

        var arr = [20, 30, 40 ]
        sum("reem ", arr)

document:
reem 020,30,40
```

### Spread operator 
    thats why we use SPREAD OPERATORS 
    spread the array into multiple arguments 

```bash 
    function sum(name, ...args)
    // rest operator used in function declaration 
        {
            console.log(args)
            document.write(`${name}`)

            let sum = 0 
            for(let i in args)
            {
                sum = sum + args[i]
            }

            document.write(sum + "<br>")

        }
    var arr = [20, 30, 40 ]
    sum("reem ", ...arr)
    // spread operator used in function call 

document:
reem 90 
```
-----
## Time Async functions 
***1 second = 1000ms***
1. setTimeout()
2. clearTimeout()
3. setInterval()
4. clearInterval()

### 1. setTimeout() and clearTimeout()
#### 1.1 setTimeout()
function starts after the particular time interval we mentioned 
#### 1.2 clearTimeout()
function ends when clearTimeout() is invoked 

> example
```bash 
   <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="test"></div>
    <button onclick="stopAnim()">stop animation</button>
    <script>
        var id = setTimeout(Anim, 3000);
        //anim function starts after 3s

        function Anim()
        {
           var target = document.getElementById("test");
           target.style.width = "500px";
           //after 3s width increases to 500px
        }

        function stopAnim()
        {
            clearTimeout(id);
            //when you click on this the animation stops even after 3seconds
        }
    </script>
</body>

viewport:
1. After 3seconds the width of the box increases to 500px due to setTimout function
2. If you click on the stop Animation button before 3s, it will not increase its width 
```
Instead of creating a seperate function Anim(), we integrate it inside this,
```bash 
var id = setTimeout(Anim, 3000);
```
Here's how it looks like right now
```bash 
    <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="test"></div>
    <button onclick="stopAnim()">stop animation</button>
    <script>
       // var id = setTimeout(Anim, 3000);

       var id = setTimeout(function() ✅1. function Anim defined here 
        {
           var target = document.getElementById("test");
           target.style.width = "500px"; 
        }, 3000);

        //function Anim()
        // {
        // var target = document.getElementById("test");
        // target.style.width = "500px";
        // after 3s width increases to 500px
        // }

        function stopAnim()
        {
            clearTimeout(id);
            //when you click on this the animation stops even after 3seconds
        }
    </script>
</body>
```
### 2. setInterval() and clearInterval()
#### 2.1 setInterval()
function called at every interval (ms) you mention 
#### 2.2 clearInterval()
function to stop the interval at a particular time 
```bash 
    <style>
        #test{
            width: 150px;
            height: 150px;
            background-color: red;
        }
    </style>
</head> 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      var id = setInterval(Anim, 100);
      ✅ value of a increases by 10 at every 0.1 second 

      function Anim(){
          a = a + 10;

          ✅ after 0.5s the animation stops 
          if(a == 500)
          {
              //animation stops after 200ms
              clearInterval(id)
          }
          var target = document.getElementById('test');
          target.style.marginLeft = a + 'px';
          ✅ a+10 runs 50 times at an interval of 0.1s 
          ✅ by the end of 0.5s, the value of a reaches 500 (10 x 50)
      }   
    </script>
</body>

viewport:
1. the red box keeps moving to the left, by increasing the left margin to 10, at an interval of 100ms 
2. when the red box reaches a value of 500
````
#### Difference between setInterval() and setTimeout()
> setTimeout- calls only once 
> setInterval- calls multiple number of times
##### setTimeout()
- it prints hello after 3 seconds on the console 
```bash 
<body>
    <div id="test"></div>
    <script> 
   
      setTimeout(Anim, 3000);

      function Anim(){
          console.log("hello")
      }
    </script>
</body>
```
> another example
```bash 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      setTimeout(Anim, 3000);

      function Anim(){
          a = a + 10;
          console.log(a)
      }
    </script>
</body>

console: 
10
```
##### setInterval()
- count of hello keeps increasing in the console at an interval of 3s
```bash 
<body>
    <div id="test"></div>
    <script> 
   
      setInterval(Anim, 3000);

      function Anim(){
          console.log("hello")
      }
    </script>
</body>
```
> another example
```bash 
<body>
    <div id="test"></div>
    <script> 
      var a = 0
      setInterval(Anim, 3000);

      function Anim(){
          a = a + 10;
          console.log(a)
      }
    </script>
</body>

console: 
10
20
30...
keeps increasing at a 3s interval 
```
#### Difference between clearTimeout() and clearInterval()
In some browsers, like chrome, 
clearTimeout() can be used to stop setTimeout() and setInterval() as well 
clearInterval() can be used to stop setTimeout() and setInterval() as well 

However, both cannot be used interchangebly, 
clearTimeout() should be used to stop setTimeout()
clearInterval() should be used to stop setInterval()

> clearTimeout() method cancels a timeout set with setTimeout() method
> clearInterval() method clears a timer set with the setInterval() method.
-----

## What is fetch() method?
To understand this, lets first understand promise method 
(introduced in JS E6 version)

### 3 stages of promise:
1. promise: pending (not yet fulfilled )
2. promise: fulfilled 
3. promise: rejected

>> What is a promise?
> A method in JS, which can give 2 outcomes, for a condition specified 
#### 1. promise(): fulfilled 
>> this means promise is resolve()

if its resolved, we can use a JS function, then()
which is a callback function

#### 2. promise(): rejected
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
#### The function can take parameters:
1. resolve
2. reject

based on whether promise is accepted 
or not.

### 1. If promise is accepted, call resolve() function
```bash 
let prom = new Promise(function(resolve)
{
});
```
### 2. If promise is declined, call reject() function
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
##### 1. Whenever resolve() function returns something, it will be stored in this result variable
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
##### 2. Whenever reject() function returns something, it will be stored 
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
#### 1. When value entered is true 
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
#### 2. When value entered is false 
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
#### Embedding parameter in a function -> callback function 
     returning the value in the console.log 
##### 1. when value entered is true 
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

##### 2. When value entered is false 
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

#### 1. When complete is true 
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

#### 2. When complete is false 
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
> if condition is true, promise resolved, then "this" function will be called; 
> if condition is false, promise rejected, then "catch" function will be called 

#### In this case, pending promise will be printed only one time 
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

### We are now replacing the onfulfilment function and onRejection code inside this statement itself 
```bash 
prom(true).then(onfulfilment).catch(onRejection);
```
Were doing this to minimize the code.
#### 1. When value is true, it returns .then function
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

    ✅ Removed onfulfilment function from here  
    ✅ Removed onRejection function from here 
  
    //prom(true).then(✅onfulfilment).catch(✅onRejection);
    prom(true).then((result) => 
    { console.log(result)
    }
    ).catch((error) => 
    {
        console.log(error)
    }
    );
    
    </script>
    
console:
fetching data, please wait
succesful promise
```
#### 2. When value is false, it returns .catch function 
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

    //method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then((result) => { console.log(result)
    }).catch((error) => {
        console.log(error)
    });

    </script>

console:
fetching data, please wait
failed promise
```

### Calculating division 
#### 1. succesful calculation, when a > 0 and b > 0
```bash 
<script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(5,4).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
succesful calculation: 1.25
```

#### 2. errors in calculation, when a = 0, b > 0
```bash 
 <script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(0,5).then((result)
    => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
fetching data, please wait
failed to calculate
```
### Lets learn some basics before jumping further 
#### Types of network architecture: 
ways in which computers are connected in a network 

##### 1. peer to peer architecture 
all computers are directly linked to each other and can share data with each other 
- we cannot backup data because there is no server 
- only feasible for say 10-20 computers

##### 2. client server architecture / Request-response architecture 
client makes a request to the server, and server will fulfill the response,
- data can be easily backed up in the server  
- increases speed of resource sharing

client requests for resources (typing the url in browser)
the server,fetches resource from database and returns the respsonse.

#### Client
web browser 

#### Server 
centralised machine that provides services to clients, clients connect thrugh 
over a network 

> Takes request from client and returns a response based on the client's request

##### server should essentially have:
1. Robust hardware, 
2. little to no down time 
3. server based CPU (intel XEON processor)
- multiprocessor ability (can add more than 1 XEON processor in the motherboard)
- supports larger amounts of RAM 
- larger cache memory 
4. ability to perform a lot of tasks simultanousely 
5. many powersupply, so it keeps running even when power fails at one spot 

### For different service, we have different servers, for different servers we have different softwares
types of server, based on type of service, server provides:
#### 1. web server (machine which provides web pages)
- contains web server software 

#### 2. database server (provides database only)
- contains database server software 

#### 3. email server (provides email only)
- contains email server software 

#### 4. file server (provides file server)
- contains file server software 

#### 5. print server (provides print services)
- contains print server software 

### For different softwares, we have different port numbers,
#### How do clients differentiate from different services?
every service has its own port numbers and its own protocol 

### Each port number has its own dedicated protocol 
1. file server (FTP protocol)
2. web server (HTTP protocol)
3. print server (IPP (Internet printing protocol))
4. database server (TCP/IP )
5. email server (SMTP protocol)

#### What is a protocol?
Client needs to identify **which server it needs to connect to**, in order to do this, 
it searches for the **port number**, that the particular server runs at,
**every distinguished port number has a particular protocol**

eg: file server runs on FTP protocol 
Once the **client identifies the protocol**, it can then connect the devices and 
exchange information between them over the network.

### http methods 
basic operations in website: CRUD 

#### Safe method 
when you fetch data, the data on server is not changing
1. get-   - get resource from server 

#### Unsafe method 
when you do manipulations, data on server is changing 
2. post   - create new data in the server database
3. put    - update resource
4. delete - delete resource 

```bash 
Create - Post
Read - Get
Update - Put
Delete - Delete
```

## JSON (Javascript Object Notation)
Data exchange format. (like XML)
> used to store and exchange data 

### When to use JSON?
When you want to send data from client to server and recieve data from server, 
we use JSON 

#### Diffference between JSON AND XML?
1. JSON is a text based format, not a language, while XML is a markup language
2. JSON is lightweight, XML is heavier 
3. Json doesnt support comments and namespaces, while XML does

#### Difference between JS object and JSON object? 
### Javascript object 
1. key-value pairs can be written in either '' or ""
2. its not neccesary to give quotes to key 
```bash 
var person = { firstName : "reem", lastname : "shaikh" };
alert(person.firstName + person.lastname)
```

### JSON object 
1. keys have to be in ""
2. '' is not accepted 
```bash 
var person = { "firstName" : "reem", "lastname" : "shaikh" };
alert(person.firstName + person.lastname)
```
> Disadvantages of JSON 
cannot use JSON to transfer video, audio, images or any another binary information

> Advantages of JSON 
mainly used in website API

### What is an API?
> two applications communicate with each other throough an API 
> we use API to get access to a specific functionality or data 
> we biuld API to aggregrate a bunch of backend data 

> example:
1. We created a website using PHP on backend and MYsql on db 
2. we want to create an app for that website in both ios and android 
3. our website can easily fetch data from mysql, however 
4. apps cannot fetch data directly from mysql because it has other libraries

### API is a third party program,
1. API takes request from android app & website & iphone app and sends it to mysql after authenticating through API key.

```bash 
                          sends a request            request recieved
   (native) android app   ---->
   (php)    website       ---->        API          ---------------->  MYSQL
   (swift)  ios app       ---->
                                    data converted 
                                    to JSON format   <----------------
                                                     returns a response                                              
```

2. mysql assess the data and returns a response which gets converted in the API, 
3. data is now sent in the form of json data which can be intrepreted by website, ios app and android app.
3. ios app, website and android app can easily access this data in json format  

```bash
Notes:
API key is a security key, which contains a unique value,
to access the API you need a key which will be send along with the request you 
make to the server 

API KEY 
a key ID that identifies the client responsible for the API service request.

API keys provides:
> Identification
identifies is the app that's making a call granted permission to access the API?

> Authentication:
Prove to API that you are the user you claim to be 

> Authorization
grant access right to use the API, this doesnt need log in/ crednetials 
```
### Types of API 
1. Generalised API
2. Web service API 

## 1. Generalised API 
##### 1.1 Open API / Public API 
A public API is open and available for use by any outside developer or
business. An enterprise that cultivates a business strategy that 
involves sharing its applications and data with other businesses will 
develop and offer a public API.

Public APIs typically involve moderate authentication and authorization.

##### 1.2 partner API - creating API in collaboration with business partners 
Partners have clear rights and licenses to access such APIs.
For this reason, partner APIs generally incorporate stronger 
authentication, authorization and security mechanisms.

##### 1.3 Internal API- internal API services, which are private to the company
An internal (or private) API is intended only for use within the enterprise, 
to connect systems and data within the business. 
For example, an internal API may connect an organization's payroll and
HR systems.

Internal APIs traditionally present weak security and authentication -- or none at all --
because the APIs are intended for internal use, and such 
security levels are assumed to be in place through other policies.

##### 1.4 Composite API- fetch from different API's and then create a single API through it 
Composite APIs generally combine two or more APIs to craft a sequence of related or interdependent
operations, and can sometimes improve speed and performance over individual APIs.

## 2. Web service API
1. REST 
2. SOAP - simple object access 
3. RPC - remote procedural call (RPC) 
RPC can employ two different languages, JSON and XML, for coding; these APIs are dubbed JSON-RPC and XML-RPC, respectively.
-  XML-RPC  
-  JSON-RPC 

#### Web server vs application server 
case: we have a script.js file which adds adds two numbers and returns the sum

##### Web Server
- returns only the data requested to the client, without doing any proccessing
- cannot execute the file 
case 1: web server will not return the sum, it will only return the script as it is

##### A web server delivers static web content—e.g., HTML pages, files, images, video, primarily in response to hypertext transfer protocol (HTTP) requests from a web browser.

eg: Apache HTTP server, NGINX 
> open source web server that includes reverse proxy, load balancing, mail proxy, and HTTP cache capabilities

##### Application server
- returns the data requested to the client, with the proccessing
- can execute the file 
case 2: application server returns the sum

##### Application server can generate dynamic content based on server-side logic.

eg: Apache Tomcat, Glassfish 
open source application server that executes Java Servlets, renders and delivers web pages that include JavaServer Page code, and serves Java Enterprise Edition (Java EE) applications.

## JQuery
Drawbacks of JS:
1. lengthy DOM manipulation
2. lengthy coding 
3. complex animations 
4. long selectors 

```bash
To fix this long code issue, each of these drawbacks were created as a function 
because its repeated code, which can be minimized and placed into a library called JQUERY.
```
> its cross-browser compliant, works on all browsers 

In js, for DOM manipulation 
```bash 
document.getElementsByClassName('classname)
```
however, in JQuery, code is minimized 
```bash 
$('.classname')
```
#### How to implement JQuery.js in html?
1. download the JQuery file 
2. implement JQuery with CDN path 

#### 1. Download the JQuery file 
1. download jquery file from jquery.com (uncompressed file)
2. save this file in the a js folder in the same repo as ur html 
3. add it to your code through script tag, define it in the head section 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery.js"></script>
</head>
<body>
    
    <script>

    </script>
</body>
</html>
```
#### 2. Jquery through CDN path
> CDN - content delivery network - content of the jquery part of your website comes from different network 

CDN Server contains the jquery library embedded, 
developers would prefer linking the CDN path instead of physically storing 
the file in the repo, because this reduces the load of the website. 

##### Steps to implement CDN path to code:
1. go to jquery official website and scroll down to using jquery with CDN 
2. click on this  https://code.jquery.com
3. we'll be using jquery 3.x, minified version 
4. this link loads 
```bash 
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
```
5. Add this code after the title secton in the head 

#### What is JQuery? 
1. Javascript library/ framework, which simplifies JS programming 
2. helps in AJAX and DOM manipulation 

## What is AJAX?
its a technology which helps creating fast and dyanamic web pages.
We can set AJAX through JQUERY and JS 

1. AJAX stands for asynchronous Javascript and XML
(Modern websites use JSON instead of XML for data transfer)
2. AJAX is not a programming language, its set of existing technologies 
3. AJAX helps in fetching data asynchronously

##### How it works?
Client requests server for a file, server processes the request and sends a response, in generic 
condiitons, for the client to view the changes, the clients browser is loaded/ refreshed. 

In order to prevent this loading, we use AJAX,
while client requests the server for a file, AJAX sends **XMLHttpRequest** in the background with the request to the server, now when the server processes the request and returns the response to the client, the changes are made without the need to load/ refresh the page

##### the data the server returns can be in 3 formats 
- .txt file
- .xml data 
- .json data 

***AJAX uses XMLHttpRequest (XHR object (inbiult object)) - which contains methods and utility functions***


> XHR object ensures that changes are loaded on the page, without refreshing 
```bash
There are 5 states involved while data is passed through XHR object in the background

Ready state is basically a code number assorted to each state/ each step 
of the data request- response process.

These 5 state (code numbers) are called readyState
- 0: no request sent to the server 
- 1: client-server connection establishment 
- 2: request recieved to server 
- 3: server processes request 
- 4: response sent from server 

Response sent from the server contains:
Based on the data, we asked from the server, it returns the data format:
1. status
code which tells whether the response we recieved, is proper or not 
- 200: "ok"            ✅server responded with what we requested for 
- 403: "forbidden"     ✅server is not responding due to technical issues 
- 404: "not found"     ✅server has not recieved the file were requesting for 

2. responseText 
returns text

3. responseXML 
returns XML
```
 
##### Advantages of AJAX:
1. We can add a particular change in the page, and it gets integrated in the page without externally loading it 

## Example with AJAX 
Data that's fetched from API, through AJAX server 

```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--Jquery CDN link-->
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>

</head>
<body>  

    <script>
    function prom()
    //function returns a promise
    {
        return new Promise(function(resolve, reject)
        {
        console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              console.log(data);
          })
        ✅ this function is used to fetch data from json API using AJAX 
        ✅ $.get(ajax url, where data should be displayed in AJAX)

        //AJAX URL 
        //we use a JSON placeholder API, head over to posts and copy the url 
        //https://jsonplaceholder.typicode.com/posts

        }, 1000)
          
        });
    }

    prom().then((result) => 
    {
        console.log(result)

    }).catch((error) =>
    {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //prints 100 arrays from the API 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
##### If the function(data) doesn't return anything, then it prints the reject parameter 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
    <!--Jquery CDN link-->
</head>
<body>
    
    
    <script>
        function prom()
        //function returns a promise
        {
            return new Promise(function(resolve, reject)
            //taking resolve and reject as parameters 
            {
            console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              resolve(data);
              //calling resolve function

          }).fail(err => {
              reject("failed to load json")
              //calling reject function
          });

        //integrating error message 
        }, 1000)
          
        });
    }

    prom().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //same output as above 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

# promise() VS promise.all()
#### promise()
used to check conditions 
1. resolve(), .then() 
if promise resolved, then we use, then function and show success message 
2. reject(),  .catch()
if promise rejected, then we use, catch function and show error message 

#### If we have more than one promise 
### promise.all() method
1. resolve(), .then()
if all promises resolved, then only we use, then function and show success message 
2. reject(),  .catch()
if all promises rejected, then we use, catch function and show error message 

```bash 
       promise()         promise()          promise()
         |                  |                   |
         |__________________|___________________|
                            |
                        promise.all()
                            |
               ------------------------------
               |                            |
            resolve()                    reject()
               |                            |
               |                            |
               |                            |
    (if all promises resolve)     (if any promises reject)
             then()                       catch()
             
```
an example, 
```bash 
   <script>
        let p1 = new Promise(function(resolve, reject){
            console.log("first promise");
            resolve("successful promise");
        });

        let p2 = new Promise(function(resolve, reject){
            console.log("second promise");
            resolve("failed promise");
        });

        Promise.all([p1,p2]).then(
            function (result)
            {
                console.log(`${result}`)
            }
        ).catch(
            function (error)
            {
                console.log(`${error}`)
            }
        );

        //we can pass an array of promises
        //you dont have to seperately pass then and catch for promise 
    </script>

console:
first promise
second promise
successful promise,failed promise
```
### What is fetch() method?
We can fetch data through 
1. Jquery using these methods $.get(), $.post()
2. Jquery using AJAX using XMLHttpRequest 

disadvantages:
> loading time increases, because of unnecesary file load, more code required 

To get rid of these disadvantages JSE6 introduced:
### fetch() method 
1. We can do CRUD to the server 
```bash
C - create data 
R - remove data 
U - update data 
D - delete data 
```
#### Fetching API and printing on the console 
```bash 
<script>
        //fetch() method works on live server 

        // this API returns a promise 
        fetch("https://jsonplaceholder.typicode.com/posts").then(function(response){
           return response.json();
           //returns format of data

           //returns promise over here, however this promise will be used in
            the next then function

           //the next then function attached to the method chain 
        }).then(function(result)
        //if promise succeeds this function will execute
        {
            console.log(result)
            // data printed on console, is due to this console 

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)

        });
    </script>
</body>

console:
(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
```bash
✅1. data will be returned in text format if you write this 
    return response;
✅2. data will be returned in json format if you write this 
    return response.json();
```

### Fetching API, and printing on the document 
- get this API from  https://jsonplaceholder.typicode.com/
```bash 
    <script>
        //fetch() method works on live server 

        // this API returns a promise 
fetch("https://jsonplaceholder.typicode.com/posts").then(function(response)
        {
           return response.json();

        }).then(function(result)
        //if promise succeeds this function will execute
        {
            ✅ for fetching data for in loop 
            for(var x in result)
            {
               // document.write(x);
               document.write("userid ",result[x].userId + "<br>")
               document.write("title ",result[x].title + "<br>")
            }

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)
        }); 
    </script>

console:
nothing.

document:
userid 1
title sunt aut facere repellat provident occaecati excepturi optio reprehenderit
userid 1
title qui est esse
userid 1
title ea molestias quasi exercitationem repellat qui ipsa sit aut
userid 1
title eum et est occaecati
userid 1
title nesciunt quas odio ....
(woops, there are like more...)
```

### How to save data on server using CRUD ?
Syntax:
```bash 
<script> 
      fetch(file / URL, 
      {
          method: "POST",
          body: data, 
          header : {
              'Content-type': 'application/json',
          },
      });
</script>
```
Different methods to CRUD data on the server. 
## 1. method
1. method: "POST"   (for inserting data)
2. method: "GET"    (for reading data)
3. method: "PUT"    (update server data)
4. method: "DELETE" (for deleting data)

## 2. body 
pass data that we want to save on the server 
```bash 
body: data, 
```
> Data can be in three forms 
1. form data 
2. json data 
3. text 

## 3. header 
In header we specify what kind of data were passing through the server 
> here is what, you need to specify for different data 
1. form data 
```bash 
'Content-type': 'application/x-www-form-urlencoded',
```

2. JSON data
```bash 
'Content-type': 'application/json',
```

##### In JSON placeholder API website, scroll down, to guide 
click on guide, which redirects you to this page 
https://jsonplaceholder.typicode.com/guide/
(these are fake data for testing)

This page contains different JSON API.
## 1. Data passed in JSON format 
#### 1.1 Get/ read a resource 
using method: 'GET'
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method : 'GET',
      })
      
  .then((response) => response.json())
  .then((json) => console.log(json));
    
</script>

console:
{userId: 1, 
id: 1,
title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
#### 1.2 Create a resource 
using method: 'POST'
```bash 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({  ✅this is a JS object 
    title: 'foo',           ✅It cannot be send on the server directly 
    body: 'bar',            ✅that's why we convert it to JSON using 
    userId: 1,                 JSON.stringify()
  }),
    headers: {              
    'Content-type': 'application/json; charset=UTF-8',
    },                       
})

.then((response) => response.json())
.then((json) => console.log(json));

console:
Object >
body: "bar"
id: 101
title: "foo"
userId: 1
```
Why do we convert JS object to JSON?
✅Data send on server is in JSON, because it can easily be read by any 
programming language. 

#### 1.3 Update a resource 
using method: 'PUT'
```bash 
<script>
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'feona',
          body: 'bary',
          userId: 2,
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((response) => response.json())
    .then((json) => console.log(json))
</script>

console:
body: "bary"
id: 1
title: "feona"
userId: 2
```
#### 1.4 Delete a resource 
using method: "DELETE"
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', 
      {
      method: 'DELETE',
      });
</script>
```
### JS Async function 
To remove drawbacks of promise(), Async function was returned.

#### Drawbacks of promise()
1. we had to declare resolve() and reject() inside promise function as parameters, 
upon calling them, then or catch function would automatically be called, based on whether 
the promise is fulfilled or rejected 
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

    //function when condition is fulfilled
    let onfulfilment = function(result) {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = function(error) {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(true).then(onfulfilment);
    prom(true).catch(onRejection);

    </script>
```
Async function works in asynchronous mode in the background 

> Example 
```bash 
 <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
        }
        console.log(test());

    </script>

console:
Promise {<fulfilled>: 'hello'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "hello"
```
> Elaborating example
```bash 
    <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
            //this value passed to then function 
        }
        test().then(function(result)
        {
             console.log(result)
        });

    </script>

console:
hello
```
Using arrow function
```bash 
 <script>
        let test = async () => "hello";
        //storing function in variable test 

        test().then(function(result){
             console.log(result)
        });

</script>

console:
hello
```
## Await method 
```bash 
 <script>
        ✅ await method can be added on any line
        ✅ used inside async function  

        async function test(){
            console.log("A");
            await console.log("B"); 
            //await function- tells to wait after B 
            console.log("C");
        }

        test();
        console.log("D");
        console.log("E"); 

    </script>

console:
await1.html:10 A
await1.html:17 B
await1.html:23 D
await1.html:24 E
await1.html:19 C
```
example 2 
```bash 
<script>
        async function test(){
            console.log("2");
            await console.log("3"); 
            //await function- tells to wait after 3 and execute code below this function before coming back to execute this code  
            console.log("5");
        }

        console.log("1"); ✅1st this is executed
        test();           ✅executed till await function
        console.log("4"); ✅executed after await function 
                          ✅pointer goes back to the code after await function 
</script>

console:
1
2
3
4
5
```
> When is await method mainly used?
its mainly used when were fetching data from server using fetch() method (fetches data on the server)
and we want to pause the fetch command midway and resume it sometime later. 

> example 1
```bash 
<script>
      async function test() {
        console.log("1");         ✅2. 1 printed on console 

        console.log("2")          ✅3. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅4. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅5. pointer jumps outside the function 
        console.log("4")          ✅8. 4 printed on console
        return response;          ✅9. response object printed on console 

      }

      test().then(function(result)✅1. test function called first 
      { 
             console.log(result)
      });

      console.log("3")             ✅6. 3 is printed on console 
                                   ✅7. pointer jumps back to the test() 
</script>

console:
await3.html:12 1
await3.html:14 2
await3.html:27 3
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 2
```bash 
<script>
      async function test() {
        console.log("1");         ✅3. 1 printed on console 

        console.log("2")          ✅4. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅5. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅6. pointer jumps outside the function 

        console.log("4")          ✅9. 4 printed on console
        return response;          ✅10. response object printed on console 

      }

      console.log("3")            ✅1. 3 printed on console first 

      test().then(function(result)✅2. test function called first 
      { 
             console.log(result)
      });

      console.log("5")            ✅7. printed 5 on console 
                                  ✅8. jumps back in test()
</script>

console:
await3.html:12 3
await3.html:14 1
await3.html:27 2
await3.html:27 5
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 3 
```bash 
<script>
    //using try-catch
      async function test() {

        try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
        }

        catch(error)
        {
           console.log("errorrrrrrr");
        }

      } 
      test().then(function(result)
      //if code works properly thiswill be invoked
      {
          console.log(result);

      }).catch(function(error){
          //if there is any error it will be printed over here 
          console.log(error);
          ✅ if there is any error, the error message from top will be printed 
      });
      
</script>
```










