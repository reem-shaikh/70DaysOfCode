#  Position
 - static: default positioning
1.  **Fixed: fixed wrt viewport and cannot be moved**,
   if you place fixed property on an element, no matter where you move on the web page, left, right up or down, this element will be fixed in the same position 

2. **Sticky: stuck wrt viewport**
    if we use 
    position:fixed; to place the menu on the top of the page 

    first line of text will be hidden behind nav bar
    
    we can solve using 
    - margin-top 
    - br tags

    but its not a ideal way to do this 
    position:sticky
    will not block the content

    when content where sticky is applied is placed on top of viewport its going to stick on top 

    but if its placed in center of viewport 
    when we scroll on top 
    it will be stuck on top 

   if you place a sticky property on an element it will be not be fixed at the same position, for instance 
## if the element on which sticky is implemented is in 
     - the middle
     as you scroll up: it will move with the page and get stuck to the top 
     as you scroll down: it will get stuck to the top
     - the top 
     it will remain stuck on the top 
     - the bottom 
     it will stick to the bottom, and as it reaches text below it, it stops sticking

if you give top:0; it sticks to the top
  position: -webkit-sticky;
  position: sticky;
  top: 0;

if you give bottom:0; it sticks to the bottom
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;

## If there were multiple sticky one below the other 
   on different intervals 
   - then as we scroll upwards it gets stuck to the top of the viewport 
   as another sticky comes up the new one sticks on top of the previous sticky 


## Difference between fixed and sticky 
fixed:
- its going to be removed
 removed and pasted on top of the webpage 

sticky:
- its going to be sticked
stays in document flow, when it reaches top 

eg:- navbar
     ios contact list 
     iphone website 


## difference btw fixed and absolute
- fixed: wrt viewport 
- absolute: wrt closest positioned ancestor 

3. **Absolute: positioned wrt nearest ancestor**
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

if class 2 had position:static 
then the closest posiition ancestor of 3 would be 1

.3{
    position:absolute;
}

if there is no closest position ancestor 
then it goes to the root tag -> html tag 

html children:
- head
- body 

 4. **Relative: placed relatively wrt default position/ initial position**
 if were using relative property use 
 - top/ bottom
 - right/ left 
 

 then the position of that element will move, and it wont affect the margin of elements near to it, and it wont move wrt a container like absolute, it will move wrt to its initial position of the entire viewport.


## difference between relative and absolute 
> Relative
places element relative to its current position 

we can move the element anywhere on the page, without changing the layout around it 

> Absolute 
places element relative to its parent's position 

changes layout around it 

**implementation: of Absolute property**
in the sticky posiition navbar 
the elements inside navbar has position:absolute 

the element fixes itself to the 
position:sticky navbar
**element positions itself wrt the nearest ancestor i.e navbar**

while were scrolling the nav is stuck to top and the elements with absolute property is stuck onto the nav 
because navbar:sticky is the closest 
ancestor to these element:absolute 

## 2. units and measurements
# Absolute units 
  these are fixed units 

  once the width of the mobile screen becomes small, the element will not reduce its size according to it, and a scrollbar will appear below 

- cm 
- mm
- in 
- px 
- pt - points
- pc - picas 

# Relative units 
  as the viewport size varies, these measurements adjust to the size.
> it will take its parent width 
> if it has no parent it will depend on the body 

- em: 
  takes parents font-size

- rem: relative em
  works according to root tag <html>
- ch 
- ex 
- vw 
- vh 
- vmax 
- vmin 
- % 


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

however if you try to use 
position:static
top:500px;
the position will remain default and the top values wont affect

2. position:sticky contact list 

# Necessary css properties to use with position 
1. left / right
2. Top / Bottom
