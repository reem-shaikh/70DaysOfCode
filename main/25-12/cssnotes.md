
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

### MAJOR html release: 
HTML5 - 22nd Jan, 2008

### latest Html release:
HTML 5.3 - 2021

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
1. Why do we write css links on top?
we want to optimise page and make it look good thats why css link is in top 
and script link is at the bottom
> Improvement in UI, the style is already available when HTML is loaded 

> Trade off performance, we are not loading unnecessary functionality before.

2. What does name property do?
            1. helps identify data for reference
            2. used to refer data for the 
            backend 
            3. used to group multiple inputs together for radio/ checkbox 

3. placeholder
its like a hint forthe user to understand what input we want them to enter 

4. self closing 
A self closing tag is a type of tag in HTML that need not to be closed by a closing tag,
which means there is no saperate closing tag f

5. select is a nested tag and option is its list
we can group options together in optgroup

6. sans serif vs sans
default font-family: 
serif: used in print media, has sharp edges, stroke endings are identifiers for serid
serif 
sans-serif: its much more softer 

7. margin 
7.1 four values:
  top right bottom left 
               
7.2 three values 
  top horizontal bottom 

7.3 two values 
  top bottom 
  left right

7.4 one value 
  for all four values 

7.5 auto- for center allign
  
8. is css case senesitive? 
nope 







### styling reference:
1. Color Palletes:
https://colorhunt.co/palettes/pastel https://coolors.co/

2. Creative Additions:
https://www.blobmaker.app/

3. UI Ideas:
Dribble