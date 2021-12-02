
# Javascript Basic Events 
> On any html tag we can add events.
> when we call an event, function will be run 

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





