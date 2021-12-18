

##  REGEX
pattern matching/ string matching 

> used for 
1. email validation 
2. password validation 

```bash 
pattern       character includes 
  [abc]           a / b / c 
  [^abc]          any ch except a/b/c  
  [a-z]           a - z 
  [A-Z]           A - Z  
  [a-z A-Z]       a-z, A-Z
  [0-9]           0-9
   
```

Quantifiers: signify repetetion
```bash 
pattern            meaning
[ ]                occurs 1 time 
[ ]?               occurs 0 or 1 times 
[ ]+               occurs 1 or more times 
[ ]*               occurs 0 or more times 
[ ]{n}             occurs n times 
[ ]{n, }           occurs n or more times 
[ ]{y,z}           occurs atleast y times, but less than z times 

```

REGEX Meta characters: short form 
/- treats character as search character 
```bash 
instead of writing this           you can write this 
[0-9]                             \d 
[^0-9]                            \D
[a-zA-Z_0-9]                      \w
[^ a-zA-Z_0-9]                    \W
```

#### Examples
1. mobile number 
start with 8 or 9, total digit 10 
#### [8 9][0 - 9]{9}

2. first character uppercase, contains lowercase alphabet, only one digtit allowed in between
#### [A-Z][a-z]* [0-9] [a-z]*

3. email ID 
hi.123 @ gmail . com 
#### [a-zA-Z0-9_ \- \. ]+ [@] [a-z]+ [\.][a-z]{2,3}

> - has predifined meaning attached to it, thats why we use it like \-


------


### Interview questions 
> var creates one variable, which it keeps updating 
```bash 
    <script>
        function outer()
        // outer function 
        {
            var arr = []
            var i;
            for (i = 0; i< 4; i++)
            {
                // i=0 ; i<4; i=1 
                // i=1; i<4;  i=2
                // i=2; i<4;  i=3
                // i=3; i<4;  i=4
                // i=4; i<4   i=5
                // i=5; ❌

                arr[i] = function()
                // inner function 
                {
                    return i;
                    // 4 
                }
            }
            return arr 
            // returns 4, for 4 times 
            // 0 1 2 3
        }

        var get_arr = outer()

        console.log(get_arr[0]())
        console.log(get_arr[1]())
        console.log(get_arr[2]())
        console.log(get_arr[3]())
    </script>

console:
4
4
4
4
```
> using let, it only keeps value in its scope 
```bash 
   <script>
        function outer()
        { 
            var arr = []
            for (let i = 0; i< 4; i++)
            {
                // i=0 ; i<4; i=1 
                // i=1; i<4;  i=2
                // i=2; i<4;  i=3
                // i=3; i<4;  i=4
                // i=4; i<4   i=5
                // i=5; ❌

                arr[i] = function()
                {
                    return i;
                    // 0 1 2 3 
                }
            }
            return arr 
        }

        var get_arr = outer()

        console.log(get_arr[0]())
        console.log(get_arr[1]())
        console.log(get_arr[2]())
        console.log(get_arr[3]())
    </script>

console:
0
1
2
3
```

> let doesnt update, accesible inside the block  
```bash 
    <script>
       let a = 10
       {
           let a = 20 
           console.log(a)
       }
       console.log(a)
    </script>

console:
20 
10 
```
> var accesible anywhere 
```bash 
    <script>
       var a = 10
       {
           var a = 20 
           console.log(a)
       }
       console.log(a)
    </script>

console:
20 
20 
```
### CSS Specificity 
in case of same property being defined at multiple places 
like inline, internal and external,which value will be applied>  

- the style property which has a higher priorty 
```bash 
inline css > internal css > external css 
```
1. If in same page (same selector level), same element is given 
different styling, then the styling which has been defined last, 
will be considered 

> external stylesheet
```bash 
//same selector level 
p {
    color: red
}

p{
    color: black
}
``` 
2. for different selector levels:
- universal selector has least priorty when compared to other selectors 
- type (tag) selector has comparitively higher priorty (even if its placed before or after *)
- class selector has comparitively higher specificty than tags 
- id selector has higher priorty 

  ID > Class > Type > Universal 

### Exception: 
if you mention !important, it will override the default specificity sequence 

```bash 
(main html page)
<body>
<p class="abcd" id="id">Test Para</p>
</body>  

(external stylesheet)
p {
    color: red
}

p{
    color: black
}

.abcd{
    color: violet !important;
}

document:
Test Para (violet color)
```
If in a situation, there are multiple !important attached, then 
it fallbacks to the specificity rule and checks which has a higher specificity
```bash 
(main html page)
<body>
<p class="abcd" id="id">Test Para</p>
</body>  

(external stylesheet)
p {
    color: red
}

p{
    color: black
}

.abcd{
    color: violet !important
}

#id{
   color: red !important
}

document:
Test Para (red color)
// fetching value of ID 
```
### Count number of words in a string 
```bash 
<body>
    <h2>question</h2>
    <input type="text" placeholder="enter a string" id="input">
    <button id="take_input">calc</button>
    <p id="output"></p>

    <script>
        let btn = document.getElementById('take_input');
        btn.addEventListener('click', function(){
            let inp = document.getElementById('input');

            let str = inp.value;
            console.log("str", str)

            let word_count = calcwordcount(str);
            let p = document.getElementById('output');
            p.innerText = word_count;

        });

        // hello from the dark side 
        function calcwordcount(str)
        {
        // 1. string split 
        // split string into array based on the delimeter (like space)

        //In order to calculate the number of words, we need to first split the array into an array of words 
            let word_arr = str.split(" ");
            // 2. go ch by ch, count spaces 

            let word_count = word_arr.length; 

            console.log("array", word_arr)
            console.log("length", word_arr.length)

            return word_count;
        }
    </script>

console:
1. when we enter more than one space in input field (hi  ss  s)
str hi  ss  s
q3.html:42 array (5) ['hi', '', 'ss', '', 's']
q3.html:43 length 5
// it prints unecessary spaces 

2. when we enter only one string in input field  (hi ss)
str hi ss
q3.html:42 array (2) ['hi', 'ss']
q3.html:43 length 2
```
> to fix this issue, were going to add a filter function 
```bash 
<body>
    <h2>question</h2>
    <input type="text" placeholder="enter a string" id="input">
    <button id="take_input">calc</button>
    <p id="output"></p>

    <script>
        let btn = document.getElementById('take_input');
        btn.addEventListener('click', function(){
            let inp = document.getElementById('input');

            let str = inp.value;
            console.log("str", str)

            let word_count = calcwordcount(str);
            let p = document.getElementById('output');
            p.innerText = word_count;

        });

        // hello from the dark side 
        function calcwordcount(str)
        {
        // 1. string split 
        // split string into array based on the delimeter (like space)

        //In order to calculate the number of words, we need to first split the array into an array of words 
            let word_arr = str.split(" ");
            // 2. go ch by ch, count spaces 

            // to fix empty spaces when we give more than 1 space in the input field 
            word_arr = word_arr.filter(function(word){
                if(word.length > 0)
                {
                    return true
                }
                else
                { 
                    return false 
                }
            });
            let word_count = word_arr.length; 

            console.log("array", word_arr)
            console.log("length", word_arr.length)

            return word_count;
        }
        
    </script>
</body>

console;
when we enter more than one space in input field (hi  ss  s)

str hi  ss  s
q2.html:53 array (3) ['hi', 'ss', 's']
q2.html:54 length 3

document:
3
```
### String methods 
1. trim
remove spaces from left and right 
```bash
let str = "     hello    mate    "
console.log(str.trim())

console:
hello    mate 
//doesnt remove spaces in between 2 words 
```
other trim methods 
2. trimLeft - to remove spaces from left 
3. trimRIght - to remove spaces from right 


> Adding trim to this code, to get rid of spaces on lhs and rhs 
```bash 
<body>
    <!--count number of words in a string-->
    <h2>question</h2>
    <input type="text" placeholder="enter a string" id="input">
    <button id="take_input">calc</button>
    <p id="output"></p>

    <script>
        let btn = document.getElementById('take_input');
        btn.addEventListener('click', function(){
            let inp = document.getElementById('input');

            let str = inp.value;
            console.log("str", str)

            let word_count = calcwordcount(str);
            let p = document.getElementById('output');
            p.innerText = word_count;

        });

        // hello from the dark side 
        function calcwordcount(str)
        {
        // 1. string split 
        // split string into array based on the delimeter (like space)

        //In order to calculate the number of words, we need to first split the array into an array of words 
            let word_arr = str.split(" ");


            //2. go ch by ch, count spaces 

            // to fix empty spaces when we give more than 1 space in the input field 
            word_arr = word_arr.filter(function(word){
                if(word.trim().length > 0)
                // trim - remove spaces from lhs and rhs
                // this is to solve the issue of spaces added before entering a value 
                {
                    return true
                }
                else
                { 
                    return false 
                }
            });
            let word_count = word_arr.length; 

            console.log("array", word_arr)
            console.log("length", word_arr.length)

            return word_count;
        }      
    </script>
</body>

console:
1. When you enter (   hi ss) in input field 
q4.html:22 str   hi ss
q4.html:57 array (2) ['hi', 'ss']
q4.html:58 length 2
```
### Write a script to reverse a number without using .reverse
```bash 
<body>
    <input type="number" id="input">
    <button id="calculate">click me</button>
    <p id="output"></p>

    <script>
        let btn = document.getElementById('calculate');
        btn.addEventListener('click', function(){
            let inp = document.getElementById('input')
            let num = parseInt(inp.value)

            let op = reverseNum(num)
            let p = document.getElementById('output')
            p.innerText = op 
        });

        function reverseNum(num)
        {
            let op = 0
            while(num > 0)
            {
                let single_digit = num % 10
                // 134 % 10 = 4 
                // 13 % 10 = 3 
                // 1 % 10 = 1


                console.log(single_digit)
                num = Math.floor(num / 10)
                // 134 / 10 = 13 
                // 13 / 10 = 1
                // 1 % 10 = 0

                op = op*10 + single_digit
            }

            console.log(op)                
        }
    </script>
</body>

console:
1. when we enter 123 in input 
reverse.html:36 3
reverse.html:36 2
reverse.html:36 1
reverse.html:45 321

2. when we enter 100 in input 
0 
0 
1
1 // doesnt print 001 
```
we need to fix, the bug, when we enter 100, it needs to show output 001



