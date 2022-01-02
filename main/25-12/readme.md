## What is BOM?
- its a window object 
- manipulating browser will be done via BOM
- parent of DOM 

document object
```bash
document
#document

window
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

window.document
#document

window.document == document 
true
```

## What is DOM?
Document Object model 
it is a set of APIs allowing the manipulation of HTML from JavaScript

> set of API - **communicating JS with HTML objects** 

- its a global object used to manipulate the nodes on webpage 
- its a tree like structure with which we can manipuate the nodes

> JS - node we say, when we talk about JS point of view 
> HTML - element we say when we talk about HTML point of view 

#### Attribute VS element VS tag
<div id="something" class="" onclick="">
  <p>  </p>
</div>

#### Attribute
additional properties which are part of your html element

#### Element 
<div id="something" class="" onclick="">  //div element
  <p>  </p>
</div>
everything inside opening and closing tag is element.
element contains stuff between the tags
element can have children 

#### Tag 
<div id="something" class="" onclick="">  //div opening tag
  <p>  </p>
</div>                                    //div closing tag
anything between <> (angular brackets)
tag are used to hold html element 
tag is singular 

### What is CSSOM?
- CSS object model 
Tree of document, which contains style properties 

it is a set of APIs allowing the manipulation of CSS from JavaScript

> set of API - **communicating JS with CSS styling** 

### Render Tree = CSSOM + DOM 
Rendering 
- displaying document on the viewport (where content is displayed)
- showing data and styling/ Displaying the render tree on the viewport 

### How is Render Tree Parsed?
whenever we load a page:
1. html document (DOM) is loaded
2. while parsing the engine will find css file which will create CSSOM 
3. js file is parsed and added to DOM 
4. finally they are combined in render tree, which is rendered/ displayed on the viewport 

- looks are more important than functionality thats why its added on top 

## Tags in Html:
<marquee></marquee> ❌deprecated tag

## Tags introduced in html5:
```bash
<input type="email">
<input type="date">

<!--starts date selection from this value "2015-08-09-->
<input type="date" data-date-format="DD MMMM YYYY" value="2015-08-09">

<input type="month">
<input type="week">
<input type="time">
<input type="color">
<input type="tel">

<output>100</output>
<progress value="60" max="100">  </progress>
<!--show how much file is downloaded (100-60 = 40)-->

<input type="range">
```

#### Why do we need output tag?
```bash
<body>
    <h2>add 2 nums</h2>
    <form oninput="op.value = parseInt(num1.value) + parseInt(num2.value);">
    <!--output with 1 single line of JS
    
    oninput - its an eventlistener and gets executed everytime an input is changed inside the input tags-->

        <input type="number" placeholder="num1" name="num1" value="0">
        <input type="number" placeholder="num2" name="num2" value="0">
        <output name="op"> </output>
        <!--
            why output and not paragraph tag?
            1. output tag can have a name property, to refer to it
            2. output tag can have value property

            paragraph tag, you have to refer by id 
            in p tag, you had to use .innerText,

        -->
    </form>
</body>

document:
1. every time we add a value to the input field, simultanously it does the operation and returns the value on the output tag field 
```
> Real time use case 
create a simple password validation (comparing if both passwords are same)
```bash
<body>
    <h2>password validation</h2>
    <form oninput="op.value = (num1.value == num2.value);">
    <!--if both passwords are same validate it-->
        <input type="password" placeholder="num1" name="num1" >
        <input type="password" placeholder="num2" name="num2">
        <output name="op"> </output>

    </form>
</body>

document:
1. when we enter same password for both input value it returns true 
2. when we enter different password for both input value it returns false
```

## layout proposed in html 5
all these tags are display: block;
```bash
          header 
-------------------------------
            nav 
-------------------------------
section      |
--------------      aside 
article      |
--------------------------------
           footer 
```

## Form 
 meta tag 
 ```bash
        gives additional info about our webpage 
        not mandatory, but good to have 

        used for search optimisation 
        when you have a high ranking meta tag, it can be shown at higher property of search result 

        use meta tag seo in personal portfolio

        Different sites have different tags:
        eg: 
        fb has its own set of tags 
        https://developers.facebook.com/docs/sharing/webmasters/

        twitter has its own 
        https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary

        google 
        https://support.google.com/programmable-search/answer/2595557?hl=en#:~:text=The%20meta%20tag%20contains%20information,enable%20sorting%20of%20search%20results.

        you can integrate it in your website 
```

### Selectors in CSS 
1. type 
2. attribute selector 
3. id 
4. class 
5. universal 
6. combinators (multiple selectors)
7. psuedo (elements + class) 
8. grouping 

