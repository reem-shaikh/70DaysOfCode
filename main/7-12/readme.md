
### DOM can be targetted by 
Different ways to select DOM reference 
1. Id- document.getElementById(id)
2. ClassName- document.getElementsbyClassName(name)
3. TagName - document.getElementsByTagName(name)

4. Name - document.getElementsByName

##### We fetch data from the input field, based on its name and add it to an Array 
```bash
<body>
   <input type="" name="u_name">
   <button onclick="getName()">Submit</button>
   <h1></h1>
</body>

<script type="text/javascript">
       function getName()
       {
           var uName = document.getElementsByName('u_name');
           //document.getElementsByName - creates an object of u_name and places it in the variable uName
           console.log(uName)
       }

</script>

console:
NodeList [input]0: inputlength: 1[[Prototype]]: NodeList
```
##### Fetch the data from the input field, based on the name, using document.getElementsByName and place it in a tag
```bash 
<body>
   <input type="" name="u_name">
   <button onclick="getName()">Submit</button>
   <h1></h1>
</body>

   <script type="text/javascript">
       function getName()
       {
           var uName = document.getElementsByName('u_name')[0];
           //document.getElementsByName - creates an object of u_name and places it in the variable uName

           //fetching the name on the 0'th position i.e first value 

           document.getElementsByTagName("h1")[0].innerHTML = uName.value;
           console.log(uName);
           //returns a nodelist / array 
       }

</script>
```
##### After targetting we can get and set methods 
1. html
2. text 
3. attribute 

# DOM Get & Set Methods 
## DOM get Value Methods 
1. innerText 
2. innerHTML 
3. getAttribute 
4. getAttributeNode 
5. Attributes 

```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
   <div id="wrapper">
       <div id="header" class="abc" style="color:red;"
       onclick="xyz()">
           <h1>hi</h1>
       </div>
       <div id="menu">
           <ul>
               <li><a href="">home</a></li>
               <li><a href="">about</a></li>
               <li><a href="">contact</a></li>
           </ul>
       </div>
       <div id= "content">
           <h2> sub heading</h2>
           <img src="" alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>

           <ul class="list">
               <li>Lorem ipsum dolor sit. </li>
               <li>Lorem ipsum dolor sit amet.</li>
           </ul>
       </div>
   </div>
</body>
```

## 1. innerText
```bash 
       var element;
       element= document.getElementById("header").innerText;
       console.log(element); //hi 
       //returns the content in heading in console 

       var element1;
       element1= document.getElementById("content").innerText;
       console.log(element1); //returns all id:content text
```

## 2. innerHTML
```bash 
       var element2;
       element2= document.getElementById("header").innerHTML;
       //returns html of the content in the console 
       console.log(element2); //  <h1>hi</h1>
```

### Difference btween innerHTML and innertext
```bash 
       var element2;
       element2= document.getElementById("header").innerHTML = "<h1>hello</h1>";
       //returns hello on console with the styling
       console.log(element2); 

       var element2;
       element2= document.getElementById("header").innerText = "<h1>hello</h1>";
       //returns <h1>hello</h1> on viewport 
       console.log(element2); 
```
## 3. getAttribute 
```bash 
      var element3;
       element3= document.getElementById("header").getAttribute("class");
       console.log(element3); //abc

       var element3;
       element3= document.getElementById("header").getAttribute("id");
       console.log(element3); //header

       var element3;
       element3= document.getElementById("header").getAttribute("style");
       console.log(element3); //color:red;

       var element3;
       element3= document.getElementById("header").getAttribute("onClick");
       console.log(element3); //xyz()
```
## 4. getAttributeNode
```bash 
      var element4;
       element4= document.getElementById("header").getAttributeNode("onClick");
       console.log(element4); //onClick = "xyz()"
       //it also returns a bunch of info 

console:
baseURI: "http://127.0.0.1:5500/main/7-12/dom.html"
childNodes: NodeList []
firstChild: null
isConnected: false
lastChild: null
localName: "onclick"
name: "onclick"
namespaceURI: null
nextSibling: null
nodeName: "onclick"
nodeType: 2
nodeValue: "xyz()"
ownerDocument: document
ownerElement: div#header.abc
parentElement: null
parentNode: null
prefix: null
previousSibling: null
specified: true
textContent: "xyz()"
value: "xyz()"
[[Prototype]]: Attr

       var element4;
       element4= document.getElementById("header").getAttributeNode("onClick").value;
       console.log(element4); //xyz()
```
## 5. attributes
```bash 
      var element4;
       element4= document.getElementById("header").attributes;
       console.log(element4); //returns an object 

console:
NamedNodeMap {0: id, 1: class, 2: style, 3: onclick, id: id, class: class, style: style, onclick: onclick, length: 4}


       var element4;
       element4= document.getElementById("header").attributes[1];
       console.log(element4);


console:
class
baseURI: "http://127.0.0.1:5500/main/7-12/dom.html"
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

       var element4;
       element4= document.getElementById("header").attributes[1].value;
       console.log(element4);  //abc

       var element4;
       element4= document.getElementById("header").attributes[1].name;
       console.log(element4);  //class
```
## DOM Set Methods
We can change/ remove object value using these methods 

1. innerText
2. innerHTML
3. setAttribute 
4. attribute
5. removeAttribute

## 1. innerText
```bash 
       var element2;
       element2 = document.getElementById("header").innerText = "<h1>wowza</h1>";
       //adds this text on viewport <h1>wowza</h1>
```

## 2. innerHTML
```bash 
       var element;
       element = document.getElementById("header").innerHTML = "<h1>wow</h1>";
       //adds wow with styling <h1> on viewport 
```

## 3. setAttribute 
```bash 
       var element2;
       document.getElementById("header").setAttribute("class", "xyz"); 
       element2 = document.getElementById("header").getAttribute("class");
       console.log(element2)  //xyz
```

## 4. Attributes
```bash 
      var element3 = document.getElementById("header").attributes; 
       console.log(element3);

// NamedNodeMap {0: id, 1: class, 2: style, 3: onclick, id: id, class: class, style: style, onclick: onclick, length: 4}

      var element3 = document.getElementById("header").attributes[1].value = "hjk"; 
      console.log(element3); //hjk
```
## 5. removeAttribute 
```bash 
    //removes the attribute, duh 
      var element3 = document.getElementById("header").removeAttribute("style"); 
      console.log(element3);
    //styling from the viewport is removed 
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

## JS methods:
### 1. setInterval(functionName, millisecond)
> 1000ms = 1second 
> 2000ms = 2second 

```bash 
<script>
        var a = 0;
        setInterval(Anim, 1000);
        //at the pace of 1 sec this function keeps on calling and the box keeps on moving on the rhs

        function Anim()
        {
            a = a + 10;
            
            var target = document.getElementById("test");
            target.style.marginLeft = a + 'px';           
        }
</script>
```

### 2. clearInterval()
to stop the animation we use this.

```bash 
 <style>
       #test {
           width: 150px;
           height: 150px;
           background: red;
       }
</style>
<body>
        <div id="test"></div>
<script>
        var a = 0;
        var SI = setInterval(Anim, 1000);
        //at the pace of 1 sec this function keeps on calling and the box keeps on moving on the rhs

        function Anim()
        {
            a = a + 10;

            if(a==200)
            {
                clearInterval(SI);
            }
            else
            {
            var target = document.getElementById("test");
            target.style.marginLeft = a + 'px';
            }        
        }

</script>
```

### 3. setTimeout(functionName, millisecond)
JS one time animation

> runs only one time, unlike setInterval, if you want to stop this function 
> before the millisecond provided in the setTimeout function then there is the 
> clearTimeout function

```bash 
<script>  
     var id = setTimeout(Anim, 4000);

     function Anim()
     {
         console.log("hello")
         //after 4 seconds, it will print hello on console 
     }

</script>
```

another example 
```bash 
<style>
       #test {
           width: 150px;
           height: 150px;
           background: red;
       }
</style>
<body>
        <div id="test"></div>
    <script>
    var id = setTimeout(Anim, 4000);

     function Anim()
     {
         var target = document.getElementById("test");

         target.style.width = "500px";
         //after 4seconds width will increase on the viewport 
     }
    </script>

</body>
```

### 4. clearTimeout()
```bash 
   <style>
       #test {
           width: 150px;
           height: 150px;
           background: red;
       }
    </style>
    <body>
    <div id="test"></div>
    <button onclick ="stopAnimation()">stop animation</button> 

<script>
    var id = setTimeout(Anim, 4000);
    
    function Anim()
     {
         var target = document.getElementById("test");

         target.style.width = "500px";
         //after 4seconds width will increase on the viewport 
     }

    function stopAnimation()
     {
         clearTimeout(id);
     }

</script>
```
#### Datatypes in JS 
1. string 
2. number 
3. boolean 
4. array 
5. object 
6. null 
7. undefined 

## Arrays 
container/ special variable which can hold more than one datatype
Values are stored in indices.
```bash 
 <script>
      var arr = ['reem', 'shaikh', 20, "india"];

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
      }
 </script>

viewport:
reem
shaikh
20
india
```
```bash 
<script>
      var arr = [ 10, 30, 20, 40];
      var sum = 0;

      for (var a = 0; a <= 3; a++) {
        sum = sum + arr[1]
      }
      
      document.write(sum);
</script>

viewport:
120
```
Another way to create array
```bash
      var arr = new Array('reem', 'shaikh', 20, 'india')

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
      }
```
Using static value:
```bash 
<script>
    //we can add unlimited values in this 
      var arr = new Array();
      arr[0] = 10;
      arr[1] = "reem";
      arr[2] = true;

      for (var a = 0; a <= 2; a++) {
        document.write(arr[a] + '<br>')
      }
</script>
```

Adding dyanamic values:
```bash
<script> 
    var arr = new Array(3);

    for (var a = 0; a < 3; a++) {
        arr[a] = prompt("enter the value");
      }

    for (var g = 0; g < 3; g++) {
        document.write(arr[g] + "<br>");
      } 

</script>

viewport:
reem
100
true
```

## Multidimensional Arrays 
Array inside array 
```bash 
    <script> 
    var arr = [
        // 0     1      3
        ["reem", 20, "female"], //0
        ["reem", 20, "female"], //1
        ["reem", 20, "female"], //2
        ["reem", 20, "female"]  //3
    ];

    //outer loop (rows)
    for(var a=0; a<4; a++)
    {
        //inner loop (columns)
        for(var b=0; b<4; b++)
        {
            document.write(arr[a][b] + " ");
        }
        document.write("<br>");
    }
    </script>

viewport:
reem 20 female 
reem 20 female 
reem 20 female 
reem 20 female 
```

Presenting it in a table 
```bash 
   <script> 
    var arr = [
        // 0     1      2
        ["reem", 20, "female"], //0
        ["reem", 20, "female"], //1
        ["reem", 20, "female"], //2
        ["reem", 20, "female"]  //3
    ];

document.write("<table border= '1px'>");
    //outer loop (row)
    for(var a=0; a<4; a++)
    {
        document.write("<tr>");
        //inner loop (column)
        for(var b=0; b<3; b++)
        {
            document.write("<td>" + arr[a][b] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    </script>

viewport: //table border is not visible in readme, run this on vscode 

reem	20	female
reem	20	female
reem	20	female
reem	20	female
```

## Array Methods 
1. map 
2. index 
3. find 
4. findIndexOf
5. fill 
6. some 
7. every 

## objects 
(Key-value pairs)

### 1. Creating object without new keyword 
Advanced version of arrays 
```bash 
 <script>
            var a = {
              //property: value
                fname : 'reem',
                lname : 'shaikh',
                age : 20,
                email: 'rtrreem.rchc@gmail.com',

                //array inside object 
                favMovies : ['abcd', 'efgh', 'lkjh'],

                //adding object inside object 
                living :
                {
                   city : 'mumbai',
                   country : 'india'
                },

                salary :  function()   //method
                {
                    return 1000000;
                },

                fullname : function()   //method 
                {
                    return this.fname + " " + this.lname;
                }
            }

            console.log(a.fname);
            console.log(a)
            
            //calling array inside objects 
            console.log(a.favMovies);
            console.log(a.favMovies[0]);  //abcd

            console.log(a.salary());

            console.log(a.fullname());
            //reem shaikh

            //calling object inside object 
            console.log(a.living.city);
</script>

console:
reem
object >

(3) ['abcd', 'efgh', 'lkjh']
0: "abcd"
1: "efgh"
2: "lkjh"
length: 3
[[Prototype]]: Array(0)

abcd
dom.html:25 1000000
reem shaikh
mumbai 
```

### 2. Creating an object and assigning value using new keyword 
```bash
 <script>
          var person = new Object();
          person.firstName = 'reem';
          person.lastName = 'shaikh';
          person.age = 20;

          console.log(person.firstName);
          //can also write it like this 
          //console.log(person['firstName']);
</script>

console:
reem
```

## Array of objects 
adding objects inside array

```bash 
 <script>
          var student = [
              {name :'reem', age :20},
              {name :'abcd', age :20},
              {name :'efgh', age :20},
          ];
          console.log(student);
</script>

console:
(3) [{…}, {…}, {…}]0: {name: 'reem', age: 20}1: {name: 'abcd', age: 20}2: {name: 'efgh', age: 20}length: 3[[Prototype]]: Array(0)
```
Printing using for loop 
```bash
 <script>
          var student = [
              {name :'reem', age :20},
              {name :'abcd', age :20},
              {name :'efgh', age :20},
          ];
          console.log(student);

          //printing in a loop
          for(var a=0; a < student.length; a++ )
          {
              document.write(student[a].name + " " + student[a].age + " " + "<br>");
          }
</script>

viewport:
reem 20
abcd 20
efgh 20
```


## To Do List:
1. Simple Task List 
- input field - add button 
- list of all tasks
- edit/ delete a task 
- mark the task as done 

#### Why do we use array of objects for creating to do list?
```bash
We'll be using "array of objects" over objects to create the to do list, 
using arrays would be comapritively difficult to manage, in arrays we dont have 
custom keys, only indices.
```

TaskList is an array of individual task objects 
```bash
TaskList = [
    key : value,
    key : value,
    ];
```

> looping through array easier than looping through object 

1. In arrays, adding a new data is comparitively easy 
2. In objects, we get more versatality 
- adding done flag 
3. A single task can be represented by an object 
- we'll have multiple properties of that task 
   3.1 delete 
   3.2 edit 
   3.3 add 

> What are event listeners?
callback function which is executed when an event happens 

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

### split() function
splits string into an array 
> takes a seperator and splits string based on that 

```bash 
> let str = "hello geekster";
undefined

> console.log(str.split(" "));
VM9194:1 
(2) ['hello', 'geekster']
0: "hello"
1: "geekster"
length: 2
[[Prototype]]: Array(0)
```

```bash 
> let id = "btn_1";
undefined

> console.log(id.split("_"));
VM9572:1 (2) ['btn', '1']
0: "btn"
1: "1"
length: 2[[Prototype]]: Array(0)
```

# Event Handlers 
> Basic JS functions are called event handlers 

## Mouse Events 
1. click (onclick)
2. double click (ondblclick)
3. right click (concontextmenu)
4. mouse over (onmouseenter)
5. mouse out (onmouseout) 
   when you hover over the button and move cursor out of it mouseout triggered
6. mouse down (onmousedown)
   same like click
7. mouse up (onmouseup)
   when you click on the button and move upwards 

## Keyboard Events 
8. key press (onkeypress)
9. key up (onkeyup)
   when you release pressing the keyboard key, this will be triggered 

## Windows Events
10. load (onload)
    when you refresh page this will be triggered 
11. unload (onunload)
    when you close the windows page, this will be triggered 
12. resize (onresize)
    when you resize page this will be triggered 
13. scroll (onscroll)
    when you scroll the page, this will be triggered


### Task List 
(step by step)

#### 1. We start off by creating a function which displays an alert popup when the 
button is clicked using an event handler onclick 
```bash 
<body>
    <!--whenevr you click on the button "add new task" a pop up alert shows up
    which says "button clicked"-->
    
    <h2>Task List</h2>
    <input type="text"
    placeholder="enter task" />
    <button onclick= "fn();">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        let fn = function()
        {
           alert('button clicked')
        }
      
    </script>
</body>
```

#### 2. Now were converting the usage of basic JS events/ event handlers and using DOM event listeners instead, because they are kept in a seperate JS page.
(same output as 1.)

> Since we dont want any js in inline html (adding basic js events in button tag), 
thats why were creating a seperate JS file and using DOM manipulation to get the 
same result  
    
i.e 
1. when your clicking on 'Add new task'
2. an alert popped up saying  'button clicked'

```bash
<body>
    <h2>Task List</h2>
    <input type="text"
    placeholder="enter task" />

    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           alert('button clicked')
        }

        //attaching an event listener 
        btn.addEventListener('click', fn)
        //when you click on the button function fn is called 

         
    </script>
</body>
```

#### 3. When we enter in the input field and click on the button, a node list is returned with the same index for every task entered 
```bash 
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what task you want to add 

           let r = document.getElementsByName('task');
           //document.getElementsByName: returns a list of elements with the
            name: task

           console.log(r);
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
    
    </script>
</body>

console:
1. When we enter something in input field "task 1" this is printed in console 
NodeList [input]
0: input
length: 1[[Prototype]]: NodeList

2. When we enter something in input field "task 2" this is printed in console 
NodeList [input]
0: input
length: 1[[Prototype]]: NodeList
```

#### 4. Were targeting the 0'th index in the task 
```bash 
<body>

    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what task you want to add 
           let r = document.getElementsByName('task');
           //document.getElementsByName: returns a list of elements

           let ip = r[0];
           //accesing 0'th element

           console.log(ip)

           //this gives the same output as above 
           //let r = document.getElementsByName('task')[0];

        }

        //attach an event listener 
        btn.addEventListener('click', fn)

</script>

console:
1. When we enter something in input field "task 1" this is printed in console 
<input type="text" name="task" placeholder="enter task" />

2. When we enter something in input field "task 1" this is printed in console 
<input type="text" name="task" placeholder="enter task" />
```

#### 5. Were biulding on the logic and fetching the value entered in the input field to add it in the console 
```bash 
<body>
    <!--
        value we added to the task field, gets added to the console 
    -->

    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what task you want to add 
           let input = document.getElementsByName('task')[0].value; ✅


           console.log(input);
           //this line adds the value we entered in the field, to the console
            
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>

console:
1. When the user enters "task 1" in the input field, it will be added to the console
task 1
```
Notes: 

```bash
document.getElementsByName('task')
console:
// returns a node list 
```

```bash
document.getElementsByName('task')[0]
console:
<input type="text"
name="task"
placeholder="enter task" />
```

```bash
document.getElementsByName('task')[0].value
console:
adds the value we entered in the field to the console 
```
       
#### 6. Were trying to push the value the user entered into the tasks[] array 
```bash
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input); 
           //✅ pushing the values entered in the input field to the tasks array       
        
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

console:
1. enter in the field
       task 3 , click button
       task 4 , click button
       task 5 , click button

2. enter this in console:
       console.log(tasks);

returns array in console 
       
(3) ['task 3', 'task 4', 'task 5']
0: "task 3"
1: "task 4"
2: "task 5"
length: 3
[[Prototype]]: Array(0)
```

#### 7. Were trying to add the value added in the console, to the viewport 
```bash 
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter 
           the values in console to the viewport 
        }

    
        //loop on the list and create elements 
        let display = function ()
        {
            for(let i=0; i < tasks.length; i++)
            {
                console.log(tasks[i]); ✅
            }
        }

        
        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 
    
    </script>
</body>

Notes:
//tasks.length = number of elements you entered in the field and hit enter 

//for example 
In the input field we entered 
task 3, click button 
task 4, click button
task 5, click button

then in console we entered these commands
> console.log(tasks);
VM163:1 (3) ['task 3', 'task 4', 'task 5']

> console.log(tasks.length);
VM185:1 3


console:
> When we enter value in input field, say 
1. when we enter "task 3" in the input field 
console:
practice7.html:52 task 3            (0)

2. when we enter "task 4" in the input
console:
practice7.html:52 task 3            (0)
practice7.html:52 task 4            (1)

3. when we enter "task 5" in the input
console:
practice7.html:52 task 3            (0)
practice7.html:52 task 4            (1)
practice7.html:52 task 5            (2)

3. when we enter "task 6" in the input
console:
practice7.html:52 task 3
practice7.html:52 task 4
practice7.html:52 task 5
practice7.html:52 task 6

> console.log(tasks);
VM3255:1 (3) 
['task 3', 'task 4', 'task 5']
0: "task 3"
1: "task 4"
2: "task 5"
3: "task 6"
length: 3
[[Prototype]]: Array(0)
undefined

> console.log(tasks[0]);
VM3324:1 task 3
it displays the output at that particular index 
```

#### 8. We create a new element li to insert the task we entered in the input field 
```bash 

    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

    
        //loop on the list and create elements 
        let display = function ()
        {
        for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
        //the task we entered in the input field is saved in this variable 
        //single_task

                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');
                console.log(new_elem);
        //li tag is going to be printed, as many times as tasks.length 

            }
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 
  
    </script>

console:
1. Every time we enter in the input field say
task 3, click on button

console:
<li></li>
//an li tag is created 
//when tasks.length: 1, number of li tag is one 

2. task 4, click on button
<li></li>
<li></li>
//when tasks.length: 2, number of li tag is two

3. task 5, click on button
<li></li>
<li></li>
<li></li>
//when tasks.length: 3, number of li tag is three

4. task 6, click on button
<li></li>
<li></li>
<li></li>
<li></li>
//when tasks.length: 4, number of li tag is four 
```

#### 9. Now we've created li tags, we need to insert the value we entered in the input field into the li tags 
```bash 
<body>
  <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
           //push the value in tasks[] array
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

    
        //loop on the list and create elements 
        let display = function ()
        {
            let ul_list = document.getElementByIdName('task_list');
            //returns list of elements which have the same idname
            
            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;

               }
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>

✅ value we entered in the input field should be assigned to the innerText
of new_elem.

✅ it should be assigned inside the <li> tags 

✅ until now its only linked in the memory we have to attach it to DOM 

✅ in ul_list, we have to append a newChild li evrytime we enter a value in 
the input field 

✅to do this, we need to get a reference of the ul, we'll add a id name
to the ul tag above and define it, in our display function before we start
the loop

console:
this doesnt give any output 
```

#### 10. We have appended li inside the ul tags in this 
```bash 
<body>
<!--were adding the value specified in the console to the viewport under the ul list
-->


    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');


        //loop on the list and create elements 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //✅ returns list of elements which have the same idname
            
            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
 
✅ the value user enters in the input field will now be appended to the 
last index of the li, and li will be embedded inside the ul tag 
                ul.appendChild(new_elem); 


            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

console:
nothing shown on console

viewport:
the value user enters is added one below the other in the viewport, 
however there is a small issue 

whenever we enter 
1. task 1 in input field, it shows this on the viewport 
item 1

2. task 2 in input field, it shows this on the viewport 
item 1
item 2

3. task 3 in input field, it shows this on the viewport 
item 1
item 2
item 3

the final output on the viewport looks like this;
item 1
item 1
item 2
item 1
item 2
item 3
```

#### 11. To fix this were going to make sure the text inside ul tag is set to empty every time we loop across to add an item to the viewport 
```bash 
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');


        //loop on the list and create elements 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = ""; ✅

//we do this, to solve this
/* whenever we enter 
1. task 1 in input field, it shows this on the viewport 
item 1

2. task 2 in input field, it shows this on the viewport 
item 1
item 2

3. task 3 in input field, it shows this on the viewport 
item 1
item 2
item 3

the final output on the viewport looks like this;
item 1
item 1
item 2
item 1
item 2
item 3


*/        
            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 
                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter
            the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

viewport:
1. When user enters "task 1" in input field 
* task 1

1. When user enters "task 2" in input field 
* task 2

complete viewport view:
* task 1
* task 2
```

#### 12. Starting the delete function
1. we created a ❌ emoticon besides the new_elem using appendChild 
   (inside the display fucntion), 
    and we added and event listener which calls the delete function

2. we created a delete function and created a popup alert message to test it 

```bash
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

      ✅let delete_task = function ()
        {
            alert('delete function called');
        }

        //loop on the list and create elements 
        //and push to tasks[] array 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 

                ✅created a button to store ❌
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //placing this emoticon inside the btn innerText

                ✅adding event listener 
                btn.addEventListener('click', delete_task);

                new_elem.appendChild(btn);

                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

console:
nothing 

viewport:
1. When we enter "task 1" and click on ❌ button 
an alert pop up appears which says "delete function called"
```

#### 13. Were initiating to add an ID to differentiate which button of which task is clicked on,in this we'll be giving the same ID to all tasks added, to test it
```bash 
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>

    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        ✅ check in function which btnid is clicked ?

        ✅ event is an object of click 
           event object returns all this info related to event on console:

        ✅ how do we differentiate which button was clicked ?

        let delete_task = function (event)
        {
            console.log(event);
            alert('delete function called');

        }

        //loop on the list and create elements 
        //and push to tasks[] array 

        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to
                 the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach 
                it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a
                 value in the input field 

                // to do this, we need to get a reference of the ul, we'll 
                add a id name to the ul tag above and define it, in our
                display function before we start the loop

                //the value user enters in the input field will now be 
                appended to the last index of the ul 

                //created a X button 
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //creating an element button and placing it besides new_elem

                //adding event listener 
                btn.addEventListener('click', delete_task);

                ✅ adding an id to differentiate which button of which task
                is clicked on 
                btn.id = "abcd";
                //all buttons will have the same id 

                new_elem.appendChild(btn);
                //append button on the new_elem

                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

console:
1. Whenver we enter in the input field say "task 1"
and click on the ❌ emoticon 

it returns the pointer event object:
Note that: for every task enetered, the target remains the same 
> target: button#abcd

because we have set all the btn.id = 'abcd' //for testing 

isTrusted: true
altKey: false
altitudeAngle: 1.5707963267948966
azimuthAngle: 0
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 124
clientY: 113
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
height: 1
isPrimary: false
layerX: 124
layerY: 113
metaKey: false
movementX: 0
movementY: 0
offsetX: 21
offsetY: 6
pageX: 124
pageY: 113
path: (7) [button#abcd, li, ul#task_list, body, html, document, Window]
pointerId: 1
pointerType: "mouse"
pressure: 0
relatedTarget: null
returnValue: true
screenX: 124
screenY: 216
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button#abcd
tangentialPressure: 0
✅target: button#abcd
tiltX: 0
tiltY: 0
timeStamp: 7207.300000011921
toElement: null
twist: 0
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
which: 1
width: 1
x: 124
y: 113
[[Prototype]]: PointerEvent


//note, that we'll be using target property in the 14. approach      
```

#### 14. Were creating a unique ID for every input we entered in the input field 
```bash 
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        //check in function which btnid is clicked 
        let delete_task = function (event)
        //event is an object of click 

        //how do we differentiate which button was clicked 
        {
            console.log("target",event.target);
            ✅ we can get which button is clicked 

            ✅ let id = event.target.id;
            console.log("id", id);

            alert('delete function called');

        }

        //loop on the list and create elements 
        //and push to tasks[] array 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 

                //created a X button 
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //creating an element button and placing it besides new_elem

                //adding event listener 
                btn.addEventListener('click', delete_task);

               ✅adding an id to differentiate which button of which task 
               is clicked on 

                btn.id = `btn_${i}`;
                //it will generate a new id for every task


                new_elem.appendChild(btn);
                //append button on the new_elem

                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>


   1. we added event.target 
 
When you enter in the input field 
task 1, click on button, 
click on ❌

pop up alert will be called, when you click on okay, this will be loaded on 
console:
<button id="abcd">❌</button>
//because then btn.id = "abcd", same for all buttons 
    

    2. added string templating to button id  btn.id = `btn_${i}`;
    to differentiate different buttons from each other 
 
When you enter in the input field 
task 1, click on button, 
click on ❌

pop up aalert will be called, when you click on ok, this will be loaded 
console:
<button id="btn_0">❌</button>

------ 
Note that: 
first task entered say, "task 1" will be assigned 
a. first button = 0 
<button id="btn_0">❌</button>

second task entered say, "task 2" will be assigned 
b. second button = 1
<button id="btn_1">❌</button>
-----

    3. we added 
    let id = event.target.id;
    console.log("id", id);

When you enter in the input field 
task 1, click on button, 
click on ❌

console:
btn_0

------ 
Note that: 
first task entered say, "task 1" will be assigned 
a. first button = 0 
btn_0

second task entered say, "task 2" will be assigned 
b. second button = 1
btn_1
-----

In this, basically were fetching what id, needs to be deleted 
```

#### 15. Were going to be deleting the fetched ID in the delete_task function 
```bash
<body>
    <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        //check in function which btnid is clicked 
        let delete_task = function (event)
        //event is an object of click 

        //how do we differentiate which button was clicked 
        {
            let id = event.target.id;
            ✅ id = btn_i

            //we want to remove the entire li, the button is a part of,
            //not just the button, thats why we created a new id 
            //referencing to the li, which contains the btn we want to delete 
            
            ✅ let element_id = `li_${id}`;
            //Note that:
            //id = btn_i 

            ✅ li_${id} is basically same as li_btn_${i}

            //so over here were calling the same id, 
            that we defined in the display function 

            //and that is: 
            ✅ new_elem.id = `li_btn_${i}`;

            let elem = document.getElementById(element_id);
            ✅ were fetching the element_id, which contains the btn_${id}
            which needs to be removed 

            console.log("elem", elem);
            ✅ were displaying the element just to double check what value, 
            were going to remove, in the console 

            elem.remove();
            ✅ we remove the element 

        }

        //loop on the list and create elements 
        //and push to tasks[] array 

        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 

                //created a X button 
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //creating an element button and placing it besides new_elem

                //adding event listener 
                btn.addEventListener('click', delete_task);

                //adding an id to differentiate which button of which task is 
                clicked on 

                btn.id = `btn_${i}`;
                //it will generate a new id for every task

                new_elem.id = `li_btn_${i}`;
                ✅ this button helps in referencing the li which needs to be
                deleted

                new_elem.appendChild(btn);
                //append button on the new_elem
                //new_elem ❌


                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

Changes we made in this code:
1. we added in the display func.
        new_elem.id = `li_btn_${i}`;
    
to target the li, with the particular button index

2. added tons of code to the delete function

When we enter in the input field, 
task 1, click on button 
click on ❌

console:
<button id="li_btn_0"> </button>

we've gotten the reference of the list item we have to delete 

3. remove from display 
    elem.remove()
    now its removed from DOM when you click on ❌

------
console:
1. we enter "task 1" in the input field and click on add new task button
2. we enter "task 1" in the input field and click on add new task button
3. we click on ❌, to remove the "task 1" from the list 

this shows up on console:
elem >

<li id="li_btn_0">
"task 1"
<button id="btn_0">❌</button>
</li>

viewport:
and simultanousely, "task 1" is removed from the viewport.
```

#### 16. Until now, we've only removed, the value entered from the viewport, not from the tasks[] array yet, so we'll be initiating to do that here 
```bash
16.1 We entered these in the input fields 
    1. task 1 
    2. task 2 

we deleted task 2, by clicking on ❌
    this prints in the console:
    elem> 

    <li id="li_btn_1">
    "task 2"
    <button id="btn_1">X</button>
    </li>

    However, in the tasks[], its still not deleted 
    > console.log(tasks);

VM5837:1 
(2) ['task 1', 'task 2']
0: "task 1"
1: "task 2"
length: 2
[[Prototype]]: Array(0)  
```

To fix, this we'll use the split function and splice to delete the element from the task_list 

```bash
  <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>

    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        //check in function which btnid is clicked 
        //event is an object of click 
        //how do we differentiate which button was clicked 

        let delete_task = function (event)
        {
            let id = event.target.id;
            //btn_i

            //we want to remove the entire li the button is a part of 
            
            let element_id = `li_${id}`;
            //Note that:
            //id = btn_i 

            //li_${id} is basically same as li_btn_${i}

            //so over here were calling the same id, that we defined in the display function 

            //and that is: 
            //new_elem.id = `li_btn_${i}`;

            let elem = document.getElementById(element_id);

            console.log("elem",elem);

            elem.remove();

            ✅ to remove the deleted li element from the task list 

            ✅ splits string into an array 

---
How does split function work?
> let id = "btn_1";
undefined

> console.log(id.split("_"));
VM9572:1 (2) ['btn', '1']
0: "btn" ✅
1: "1"   ✅
length: 2[[Prototype]]: Array(0)
---

//since id = btn_i
            let arr = id.split("_");
            let index = arr[1];
            ✅ 0'th element is btn 
            ✅ 1'st element is arr[1]

            console.log("index ",index);
---
we enter these in the input field 
task 1, click on button
task 2, click on button 
task 3, click on button

remove task 3 by clicking on ❌
console:
index 2
//this means the element at index 2 was deleted 

remove task 2 by clicking on ❌
console:
index 1
//this means the element at index 1 was deleted 

splice - now were going to be removing this element from a specific position 
in the tasks[] array
---
        ✅ tasks.splice(index, 1);
        //splice(index, how many elements must be deleted)

        }

        //loop on the list and create elements 
        //and push to tasks[] array 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 

                //created a X button 
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //creating an element button and placing it besides new_elem

                //adding event listener 
                btn.addEventListener('click', delete_task);

                //adding an id to differentiate which button of which task is clicked on 
                btn.id = `btn_${i}`;
                //it will generate a new id for every task

                new_elem.id = `li_btn_${i}`;
                //this button helps in referencing the li which needs to be deleted

                new_elem.appendChild(btn);
                //append button on the new_elem
                //new_elem ❌

                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>

console:
 we entered this in the input field 
 task 1, click on button
 task 2, click on button 
 task 3, click on button

 we clicked on ❌ to remove task3

console:
elem>

<li id="li_btn_2">
"task 3"
<button id="btn_2">❌</button>
</li>

index 2
//task3 was at the 2nd index, now its removed 

to check this, 
> console.log(tasks);
VM1125:1 (2) ['task 1', 'task 2']
0: "task 1"
1: "task 2"
length: 2[[Prototype]]: Array(0)
undefined

note that: task 3 is officially deleted, woohoo

viewport:
"task 3" is removed 
```

#### 17. Creating an edit function 
```bash 
<body>
  <h2>Task List</h2>

    <!--added name-->
    <input type="text"
    name="task"
    placeholder="enter task" />
    <button id="add_task_button">Add New Task</button>
    <ul id="task_list">
       <!--no li defined here-->
    </ul>

    <script>
        let tasks = []; //initially no task 

        //getting element based on the ID 
        let btn = document.getElementById('add_task_button');

        //check in function which btnid is clicked 
        //event is an object of click 
        //how do we differentiate which button was clicked 

        let delete_task = function (event)
        {
            let id = event.target.id;
            //btn_i

            //we want to remove the entire li, the button is a part of 
            
            let element_id = `li_${id}`;
            //Note that:
            //id = btn_i 

            //li_${id} is basically same as li_btn_${i}

            //so over here were calling the same id, that we defined in the display function 

            //and that is: 
            //new_elem.id = `li_btn_${i}`;

            let elem = document.getElementById(element_id);

            console.log(elem);

            elem.remove();

            //to remove the deleted li element from the task list 

            //splits string into an array 

            //since id = btn_i
            let arr = id.split("_");

            let index = arr[1];
            //o'th element is btn 
            //first element is arr[1]

            console.log("index ",index);

            tasks.splice(index, 1);
   
        }

        let edit_task = function(event) 
        ✅ learn about this event object 
        {
            // id = btn_i
            let id = event.target.id;

            //splits into 
            //btn - 0th index 
            //i   - 1st index

            let index = id.split("_")[1];
            ✅ were fetching the index to edit on based on the i'th value 
            which is at 1'st index 

            let edit_task = prompt("enter updated task");
            ✅ taking input through prompt 

            tasks[index] = edit_task;
            ✅ edit task on the i'th value
            ✅ when we click on the edit emoji, the id will be fetched 
            based on the btn_{id}, which will be stored in index variable,

            tasks[index] - specifies, which task will be editted 
            edit_task - will take the prompt value 

            tasks[index] = edit_task, will store the prompt value inside the element
            which we want to edit 

            display();
            ✅ call the display function to make changes, we entered 

            //it will map the index we want to edit and accordingly, add it 
            //let single_task = tasks[i];

        }

        //loop on the list and create elements 
        //and push to tasks[] array 
        let display = function ()
        {
            let ul = document.getElementById('task_list');
            //returns list of elements which have the same idname

            ul.innerText = "";

            for(let i=0; i < tasks.length; i++)
            {
                let single_task = tasks[i];
                
                //create element li inside the document 
                // document.createElement('li');

                //store it in a reference 
                let new_elem = document.createElement('li');

                new_elem.innerText = single_task;
                //value we entered in the input field should be assigned to the innerText of new_elem.

                //it should be assigned inside the <li> tags 

                //until now its only linked in the memory we have to attach it to DOM 

                //in ul, we have to append a newChild li evrytime we enter a value in the input field 

                // to do this, we need to get a reference of the ul, we'll add a id name to the ul tag above and define it, in our display function before we start the loop

                //the value user enters in the input field will now be appended to the last index of the ul 

                //created a ❌ button 
                let btn = document.createElement('button');
                btn.innerText = "❌";
                //creating an element button and placing it besides new_elem

                //adding event listener 
                btn.addEventListener('click', delete_task);

                let edit_btn = 
                document.createElement('button');
                //✅create an element button to store the edit emoji

                edit_btn.innerText = '📓';
                //✅add this emoji inside it 

                edit_btn.addEventListener('click', edit_task);
                //✅add event listener, such that when we click it it executes 
                this function

                edit_btn.id = `edit_${i}`;
                //✅adding an id to differentiate which button of which task is 
                clicked on 

                btn.id = `btn_${i}`;
                //it will generate a new id for every task

                new_elem.id = `li_btn_${i}`;
                //this button helps in referencing the li which needs to be deleted

                new_elem.appendChild(btn);
                //append button on the new_elem
                //new_elem ❌

                new_elem.appendChild(edit_btn);
                //✅this code appends the emoji in front of elem
              

                ul.appendChild(new_elem);

            }
        }

        let fn = function()
        {
           //when we click on a button it should add a new task 
           
           //1. fetch what value you want to add 
           let input = document.getElementsByName('task')[0].value;

           tasks.push(input);
  
           display();
           //calling the display function from here, because we want to enter the values in console to the viewport 
        }

        //attach an event listener 
        btn.addEventListener('click', fn)
        //when button is clicked fn function is called 

    </script>
</body>
```

## Array Methods 
1. map 
2. index 
3. find 
4. findIndexOf
5. fill 
6. some 
7. every 