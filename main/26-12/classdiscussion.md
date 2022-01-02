1. mediaquery 

css functions 
1. calc
2. repeat
3. var 

- preloader 
before page loads there is a subtle animation 

- specificity 
- flex (we talk about 1 Dimension): understand flex in depth
- grid (like a 2d table of elements)
- SASS 

scedule:
sun (8-11pm)
tue (8:30-10:30pm)
thu (8-10pm)
sat (8-11pm)

using only biult in features: vanilla 
and not exporting any framework or library 

- Ecommerce wireframe 
```bash
- preloader 
before page loads there is a subtle animation 

--------------------------------------------
logo    searchbar      cart | login | signup  <- sticky navbar 
--------------------------------------------
        < carousel of main images >
--------------------------------------------
recommended:

card  |   card   |  card  |  card  |  card |
--------------------------------------------
about contact      copyright        t&c       ^ (scroll to top, when click on it)
--------------------------------------------
```
> Dom tree for this webpage
```bash 
            html 
             |
            body
             |
---------------------------------
|         |           |         |
nav     section    section  footer
```

what is card?
```bash
title
image 
description 
```

- transition
> how will animation value change wrt tm

timing functions:
change of speed how you want to animate stuff:
1. linear 
2. ease-in 
3. ease- out 

- linear (anim increase in linear time, constant speed)
```bash
transition: all 5s linear 
```
- ease in (start slow, end fast)
```bash
transition: all 5s ease-in
```
- ease out (start fast, end slow)
```bash
transition: all 5s ease-out 
```
- ease in out (start slow, become fast in the middle, end slow)
```bash
transition: all 5s ease-in-out
```

Assignment:
1. create UI similar to google drive 
- using flex, cards

- when clicking on the button it turns to image 
display style table -> click on button -> display style flex 

functinality to switch between display:flex and display:table 
(which should happen on click of button)