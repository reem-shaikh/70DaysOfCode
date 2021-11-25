1. position
 - static: default positioning
 - fixed: fixed wrt viewport and cannot be moved
 - sticky: stuck wrt viewport 
 - relative: placed relatively wrt default position/ initial position
 
 - absolute: positioned wrt nearest ancestor 

Difference between fixed and sticky 

fixed:
- its going to be removed
 removed and pasted on top of the webpage 

sticky:
- its going to be sticked
stays in document flow, when it reaches top 

eg:- navbar
     ios contact list 
     iphone website 


difference btw fixed and absolute

- fixed: wrt viewport 
- absolute: wrt closest positioned ancestor 

ancestor -> parent element/ grand parent element ...

positioned- any element who has position that is not static 

<div class="1">
<div class="2">

  <div class="3">
  </div>
  the closest position ancestor of 3 will be the first class which has anything other than posiiton:static 

</div>
</div>

css:
.1{
    position:sticky;
}

.2{
    position:fixed;
}
if class 2 had posiiton:static 
then the closest posiition ancestor of 3 would be 1

.3{
    position:absolute;
}

if there is no closest position ancestor 
then it goes to the root tag -> html tag 

html children:
- head
- body 

implementation:
in the sticky posiition navbar 
the elements inside navbar has position:absolute 

the element fixes itself to the 
position:sticky navbar 
while were scrolling the nav is stuck to top and the elements with absolute property is stuck onto the nav 
because navbar:sticky is the closest 
ancestor to these element:absolute 

2. units and measurements
- px-single dot screen can display
(ideally dont use pixel fot fonts, use 
✅em/ rem)

  eg:16px
  16pixel size of our font
  🏁 pixel is absolute

  large display has less pixel density 

  720px display, 1px is bigger 
  4k display, 1 px is smaler 

  so px will look different on different device resolutions, 
  it wont look uniform

- ppi (pixels per inch)
- % 
- vh 
- em/ rem 
em -> relative wrt closest ancestor which has font property 

🤍em is relative
1em = 16px

rem -> closest wrt root 
rem goes to the root 

- cm / mm / inch
- fr

3. z index
4. opacity / transparency 


assignment:
1. center alligned div 
vertically and horizontally using posiition when we changed width and height

margin-top:500px
when using margin, content around will also shift according to the margin 

when using position only the content the property is implemented on will be shifted 
posiiton:relative
top:500px

2. position:sticky contact list 
