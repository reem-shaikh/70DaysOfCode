> Bunch of concepts to get you started with DS problem solving.

### Concatenation 
```bash 
   <script>
      var str1 = prompt('enter str 1') #ab
      #we do concatenation for displaying
      #two strings in one line
      var str2 = prompt('enter str 2') #cd
      var con = str1 + str2
      alert(con) #abcd

      #adding two numbers
      var str1 = 10
      var str2 = 20
      var con = str1 + str2
      console.log(con) #30

      #number + string -> concatenation
      var str1 = 'string'
      var str2 = 20
      var con = str1 + str2
      console.log(con) #string20

      #to convert string to num
      var a = prompt('enter a') #5
      var b = prompt('enter b') #4
      var num1 = parseInt(a) #converts to int
      var num2 = parseInt(b)
      var con = num1 + num2 #9
      alert(con)

      #difference btw 10 and "10"
      # number and string
      # this is in string format
      var str1 = prompt('enter str 1') #10
      var str2 = prompt('enter str 2') #20
      var con = str1 + str2
      alert(con) #1020

      console.log('===')
      # === checks datatype and value also
      if ('10' === 10) {
        # (string === number)
        console.log('same datatype')
      } else {
        console.log('different datatype')
        #displays this
      }

      if (10 === 10) {
        # (string === number)
        console.log('same datatype')
        #displays this
      } else {
        console.log('different datatype')
      }

      # == checks only for value, doesnt care abour datatype
      if ('10' == 10) {
        console.log('same datatype')
        #displays this
      } else {
        console.log('different datatype')
      }

      # = used for assignment
    </script>
```
## objects 
(Key-value pairs)

#### We can create objects in 2 ways:
1. Through console.log only
```bash
var person = {
    name: "reem",
    age: 20
    }

console.log(person.name)
 
console:
reem 
```

2. Using new keyword,
```bash
var person = {
    name: "reem",
    age: 20
    }

var person = new Object()
person.name = "reem"
console.log(person.name)
 
console:
reem 
```

### 1. Creating object without new keyword 
Advanced version of arrays 
```bash 
 <script>
            var a = {
               #key: value 
              #property: value
                fname : 'reem',
                lname : 'shaikh',
                age : 20,
                email: 'rtrreem.rchc@gmail.com',

                #array inside object 
                favMovies : ['abcd', 'efgh', 'lkjh'],

                #adding object inside object 
                living :
                {
                   city : 'mumbai',
                   country : 'india'
                },

                salary :  function()   #method
                {
                    return 1000000;
                },

                fullname : function()   #method 
                {
                    return this.fname + " " + this.lname;
                }
            }

            console.log(a.fname);
            console.log(a)
            
            #calling array inside objects 
            console.log(a.favMovies);
            console.log(a.favMovies[0]);  #abcd

            console.log(a.salary());

            console.log(a.fullname());
            #reem shaikh

            #calling object inside object 
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
          #can also write it like this 
          #console.log(person['firstName']);
</script>

console:
reem
```
## Arrays 
in JS, array is a collection of multiple datatypes of elements.
> collection of elements/ strings/ booleans.
```bash
var arr = [1,"reem",3,4,5.55];
console.log(arr);
```

> Array is a container/ special variable which can hold more than one datatype
Values are stored in indices.
```bash 
 <script>
      var arr = ['reem', 'shaikh', 20, "india"];

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
        #0
        #1
        #2
        #3
      }
 </script>

viewport:
reem
shaikh
20
india
```
### Array 
> creating an empty array 
- var geek = []
- var geek = new Array()
- var geek = new Array(2) #2 is the length of the array 

### Creating Array without new keyword 
```bash 
<script>
      var arr = [ 10, 30, 20, 40];
      var sum = 0;

      for (var a = 0; a <= 3; a++) {
        sum = sum + arr[a]
      }
      
      document.write(sum);
</script>

viewport:
100
```
### Another way to create array using new keyword 
```bash
      var arr = new Array('reem', 'shaikh', 20, 'india')

      for (var a = 0; a <= 3; a++) {
        document.write(arr[a] + '<br>')
      }
```
### Using static value in new keyword:
```bash 
<script>
    #we can add unlimited values in this 
      var arr = new Array();
      arr[0] = 10;
      arr[1] = "reem";
      arr[2] = true;

      for (var a = 0; a <= 2; a++) {
        document.write(arr[a] + '<br>')
      }
</script>
```

### Adding dyanamic values through new keyword 
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
> Array inside array 
```bash 
    <script> 
    var arr = [
        # 0     1      3
        ["reem", 20, "female"], #0
        ["reem", 20, "female"], #1
        ["reem", 20, "female"], #2
        ["reem", 20, "female"]  #3
    ];

    #outer loop (rows)
    for(var a=0; a<4; a++)
    {
        #inner loop (columns)
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

> Presenting it in a table 
```bash 
   <script> 
    var arr = [
        # 0     1      2
        ["reem", 20, "female"], #0
        ["reem", 20, "female"], #1
        ["reem", 20, "female"], #2
        ["reem", 20, "female"]  #3
    ];

document.write("<table border= '1px'>");
    #outer loop (row)
    for(var a=0; a<4; a++)
    {
        document.write("<tr>");
        #inner loop (column)
        for(var b=0; b<3; b++)
        {
            document.write("<td>" + arr[a][b] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    </script>

viewport: #table border is not visible in readme, run this on vscode 

reem	20	female
reem	20	female
reem	20	female
reem	20	female
```
### string methods 
```bash
1. length 
2. toLowerCase 
3. toUpperCase
4. includes
5. startsWith
6. endsWith 
7. search 
8. match 
9. indexOf 
10. lastindexOf 
11. replace
12. trim 
13. charAt 
14. charCodeAt 
15. fromCharCode 
16. concat 
17. split 
18. repeat 
19. slice 
20. substr 
21. substring 
22. toString 
23. valueOf 
```
var str = "hi, i am a string";

1. length
```bash 
  var a = str.length;
  document.write("string is" + str + "<br>")
  document.write("length of string " + a + "<br>")

document:
string is hi, i am a string
length of string 17
```

2. toLowerCase()
```bash
    var b = str.toLowerCase();
    document.write("lowercase string " + b + "<br>")

document:
lowercase string hi, i am a string

```
3. toUpperCase()
```bash 
    var b = str.toUpperCase();
    document.write("uppercase string " + b + "<br>")

document:
uppercase string HI, I AM A STRING
```
4. includes()
```bash
  #true - if returns
  var b = str.includes("am");
  document.write("includes am?" + b + "<br>")

  var b = str.includes("the");
  document.write("includes the?" + b + "<br>")

  #case sensitive function 
  var b = str.includes("Am");
  document.write("includes Am?" + b + "<br>")

document:
includes am?true
includes the?false
includes Am?false
```
5. startsWith()
```bash
  var b = str.startsWith("Am");
  document.write("startswith Am? " + b + "<br>")

  var b = str.startsWith("hi");
  document.write("startswith hi? " + b + "<br>")

  # case sensitive 
  var b = str.startsWith("Hi");
  document.write("startswith Hi? " + b + "<br>")

document:
startswith Am? false
startswith hi? true
startswith Hi? false
```
6. endsWidth()
```bash
  var b = str.endsWith("string");
  document.write("endswith string? " + b + "<br>")

document:
endswith string? true
```
7. search - returns start index of the element we enetered if its found 
```bash
  var b = str.search("string");
  document.write("search " + b + "<br>")

  var b = str.search("str");
  document.write("str " + b + "<br>")

  #if it doesnt find the elemnt it returns -1 
  var b = str.search("ty");
  document.write("search " + b + "<br>")

document:
search 11
str 11
search -1
```
8. match - create an array of the matching string 
```bash
    str1 = "hi string, i am a string "
    var b = str1.match(/string/g);
    document.write("match " + b + "<br>")

document:
match string,string
```
9. indexOf()
```bash
    var b = str1.indexOf("string");
    document.write("indexof " + b + "<br>")

document:
indexof 3
```
10. lastIndexOf()
 ```bash
    var b = str1.lastIndexOf("string");
    document.write("lastindexof " + b + "<br>")

document:
lastindexof 18
```
11. replace()
```bash
    #replaces the first
    var b = str1.replace("string", "str");
    document.write("replaced " + b + "<br>")
       
    #using REGEX to replace all
    var b = str1.replace(/string/g, "str");
    document.write("replaced all" + b + "<br>")

document:
replaced hi str, i am a string
replaced allhi str, i am a str
```
12. trim()
```bash
    var str2 = "     javascript   "
    console.log(str2)
    #spaces displayed only on console, not on document 

    var a = str2.trim();
    console.log("trimmed", a)
```
11.1 trimLeft()
```bash
    var a = str2.trimLeft();
    console.log("trim left", a)
```
11.2 trimRight()
```bash
    var a = str2.trimRight();
    console.log("trim Right", a)
```
13. charAt()
```bash
    # return character at 3rd position
    document.write(str1 + "<br>")
    var b = str1.charAt(3);
    document.write("charAt " + b + "<br>")

document:
hi string, i am a string
charAt s
```
> every character on keyboard has a unique character code called ASCII code

14. charCodeAt()
```bash
    # returns ASCII code of ch
    document.write(str1 + "<br>")
    var b = str1.charCodeAt(1);
    document.write("charcode of i " + b + "<br>")

document:
hi string, i am a string
charcode of i 105
```
15. fromCharCode()
```bash
    # returns ch of the given ASCII code 

    #string is an inbiult object 
    var b = String.fromCharCode(65);
    document.write("ch code of 65 " + b + "<br>")

document:
ch code of 65 A
```
16. concat()
```bash
    # to merge two strings 
    str3 = "hi yo"
    str4 = "wassup"
    var a = str3.concat(str4);
    document.write("concat 2 strings " + a + "<br>")

    document.write("str1 "+ str1 + "<br>")
    document.write("str3 "+ str3 + "<br>")
    document.write("str4 "+ str4 + "<br>")

    var a = str2.concat(str3, str4)
    document.write("merging 3 strings " + a + "<br>")

document:
concat 2 strings hi yowassup
str1 hi string, i am a string
str3 hi yo
str4 wassup
merging 3 strings javascript hi yowassup
```
17. split()
```bash
    #convert every string to an array 
    var a = str.split(" ");
    document.write("split based on spaces " + a + "<br>")
    console.log(a)

     # 0 1 2 3 4 5 6 7 8 9 10 11 12
     # h i ,   i   a m   a     s  t 

document:
split based on spaces hi,i,am,a,string

console:
(5) ['hi,', 'i', 'am', 'a', 'string']
0: "hi,"
1: "i"
2: "am"
3: "a"
4: "string"
length: 5
[[Prototype]]: Array(0)
```
18. repeat()
```bash
    # repeats string the number of times you mentioned 

    #repeats string 2 times 
    var a = str.repeat(2);
    document.write("repeat " + a + "<br>")

document:
repeat hi, i am a stringhi, i am a string
```
19. slice()
```bash
    document.write("str " + str + "<br>")
    #returns character between 6 - 12 (doesnt include the 12th index)
        
        # 0 1 2 3 4 5 6 7 8 9 10 11 12
        # h i ,   i   a m   a     s  t 

    var a = str.slice(6, 12);
    document.write("slice " + a + "<br>")
        # am a s

document:
str hi, i am a string
slice am a s
```
20. substr()
```bash
    #returns string after 4 till (5 words)
    var a = str.substr(4, 5);
    document.write("substr " + a + "<br>")

    var a = str.substr(4);
    document.write("substr " + a + "<br>")

document:
substr i am
```
20. substring()
```bash
    #slice is preferrably, used for arrays 
    #substring is preferrably, used for strings  

    var a = str.substring(6, 12);
    document.write("substring " + a + "<br>")

document:
substring am a s
```
21. toString()
why are we converting string to string? 
```bash
    #convert to string 
    var a = str.toString();
    document.write("tostring " + a + "<br>")

document:
tostring hi, i am a string
```
22. valueOf()
```bash
    #print string as it is 
    #same as document.write
    var a = str.valueOf();
    document.write("Valueof " + a + "<br>")

document:
Valueof hi, i am a string
```
### Array methods 
```bash
1. modify 
2. delete 
3. sort 
4. reverse 
5. pop 
6. push 
7. shift 
8. unshift 
9. concat 
10. join 
11. slice 
12. splice 
13. isArray 
14. indexOf
15. lastindexOf 
16. includes 
17. some 
18. every 
19. find 
20. findindex 
21. filter 
22. tostring
23. valueof 
24. map 
25. fill 
26. findindexOf 
27. reduce 
```
1. modify 
```bash 
var a = ["reem", 20, "it"];
a[1] = 19;
document.write("modified: " + a + "<br>")

document:
modified: reem,19,it
```
2. delete 
```bash 
delete a[1]
document.write("deleted: " + a + "<br>")

document:
deleted: reem,,it
```

3. sort
```bash 
var arr = ["sanjay", "aman", "rehman", "karan"]
document.write("arr before sorting: " + arr + "<br>")
arr.sort()
document.write("arr after sorting: " + arr + "<br>")

document:
arr before sorting: sanjay,aman,rehman,karan
arr after sorting: aman,karan,rehman,sanjay
```
> Sorting of array of numbers 
in case of number inputs, sort() converts number to string, so to fix that there is another approach for number inputs 

> ascending order 
```bash
let numbers = [5, 20, 10]
# passing compare function
let sort = numbers.sort((x, y) => x-y)
# compare function can return 
# 0
# negative number 
# positive number 
console.log(sort)

console:
Array(3)
0: 5
1: 10
2: 20
length: 3
```
> descending order 
```bash 
let numbers = [5, 20, 10]
# passing compare function
let sort = numbers.sort((x, y) => y-x)
# compare function can return 
# 0
# negative number 
# positive number 
console.log(sort)

Array(3)
0: 20
1: 10
2: 5
length: 3
```
4. reverse 
```bash 
document.write("arr before reverse: " + arr + "<br>")
arr.reverse()
document.write("arr after reverse: " + arr + "<br>")

document:
arr before reverse: aman,karan,rehman,sanjay
arr after reverse: sanjay,rehman,karan,aman
```

5. pop  
```bash 
document.write("arr before pop: " + arr + "<br>")
arr.pop()
document.write("arr after pop: " + arr + "<br>")

document:
arr before pop: sanjay,rehman,karan,aman
arr after pop: sanjay,rehman,karan
```
6. push 
```bash 
        document.write("arr before push: " + arr + "<br>")
        arr.push("ronald")
        document.write("arr after push: " + arr + "<br>")

document:
arr before push: sanjay,rehman,karan
arr after push: sanjay,rehman,karan,ronald
```
7. shift 
```bash 
       #opposite of pop 
       #delete the first index 
        document.write("arr before shift: " + arr + "<br>")
        arr.shift()
        document.write("arr after shift: " + arr + "<br>")

document:
arr before shift: sanjay,rehman,karan,ronald
arr after shift: rehman,karan,ronald
```
8. unshift 
```bash 
        #unshift - opposite of push 
        #adding to first index 
        document.write("arr before unshift: " + arr + "<br>")
        arr.unshift("loki")
        document.write("arr after unshift: " + arr + "<br>")

document:
arr before unshift: rehman,karan,ronald
arr after unshift: loki,rehman,karan,ronald
```
9. concat 
```bash 
        var arr1 = ["rahul", "saloni"]
        document.write("arr value " + arr + "<br>")
        document.write("arr1 value " + arr1 + "<br>")
        var c = arr.concat(arr1);
        document.write("arr after concat: " + c + "<br>")

document:
arr value loki,rehman,karan,ronald
arr1 value rahul,saloni
arr after concat: loki,rehman,karan,ronald,rahul,saloni
```
10. join 
```bash 
        var d = c.join(" ")
        document.write("join: " + d + "<br>")

document:
join: loki rehman karan ronald rahul saloni
```
11. slice 
```bash 
        #slice - makes changes in a new created array
        document.write("arr before slice: " + arr + "<br>")
        var s = arr.slice(1, 4)
        document.write("arr after slice: " + s + "<br>")

document:
arr before slice: loki,rehman,karan,ronald
arr after slice: rehman,karan,ronald
```
12. splice 
```bash 
        #splice - makes changes in existing array
        document.write("arr before splice: " + arr + "<br>")
        # loki,rehman,karan,ronald
        #  0      1     2     3

        arr.splice(2, 0, "neha", "smriti")
        #these values added at 2nd position 
        #0 indicates we dont want to delete the elemnent at 2nd position 
        document.write("arr after splice: " + arr + "<br>")

        #another example 
        document.write("arr before splice: " + arr + "<br>")
        # loki,rehman,neha,smriti,neha,smriti,karan,ronald
        #  0      1     2     3     4    5     6      7

        arr.splice(2, 1, "kartik")
        #these values added at 2nd position 
        #1 indicates that were deleting the elemnent at 2nd position 
        document.write("arr after splice: " + arr + "<br>")

document:
arr before splice: loki,rehman,karan,ronald
arr after splice: loki,rehman,neha,smriti,karan,ronald

arr before splice: loki,rehman,neha,smriti,karan,ronald
arr after splice: loki,rehman,kartik,smriti,karan,ronald
```
13. isArray 
```bash 
        #isArray
        var I = Array.isArray(arr)
        document.write("Is arr an array: " + I + "<br>")

        var g = 10
        document.write("g: " + g + "<br>")
        var ii = Array.isArray(g)
        document.write("Is g an array: " + ii + "<br>")

document:
Is arr an array: true
g: 10
Is g an array: false
```
14. indexOf
```bash 
        #indexOf (search item, start)
        #search from starting 
        var b = arr.indexOf("kartik")
        document.write("index of kartik: " + b + "<br>")

document:
index of kartik: 2
```
15. lastindexOf 
```bash 
        #lastindexof - returns last index of the matching element 
        var j = arr.lastIndexOf("rehman", 1)
        document.write("lastindex of rehman: " + j + "<br>")

document:
lastindex of rehman: 1
```
16. includes 
```bash 
        #includes - is it included or not?
        var h = arr.includes("kartik")
        document.write("lis kartik included: " + h + "<br>")

document:
lis kartik included: true
```
17. some() 
```bash 
#returns true if even one element satisfies the condition
var ages = [10, 13, 18, 20]
var adultAge = 18 

var k = ages.some(checkAdult)
document.write("some: ", k, "<br>")

function checkAdult(age)
{
   return age >= 18
}

document:
some: true
```

18. every()
```bash 
#returns true if every element satisfies the condition
var ages = [10, 13, 18, 20]
var adultAge = 18 

var l = ages.every(checkAdult)
document.write("every: ", l)

function checkAdult(age)
 {
   return age >= 18
 }

document:
every: false
```
19. find() 
```bash 
#returns first value which passes the test

        var oo = ages.find(checkAdult)
        document.write("find method:", oo, "<br>")
        function checkAdult(age)
        {
            return age >= 18
        }

document:
find method:18
```
20. findindex 
```bash 
        #returns first value which satisfies the condition 
        var ages = [10, 23, 19, 20]
        document.write("ages: " + ages + "<br>")

        var kk = ages.findIndex(checkAdult)
        document.write("findindex: " + kk + "<br>")

        function checkAdult(age)
        {
            return age>=18
        }

document:
findindex: 1
```

21. filter
```bash 
#traverses through entire array and return the value which satisfies the condition 

        var o = ages.filter(checkAdult)
        document.write("filter method:", o, "<br>")
        function checkAdult(age)
        {
            return age >= 18
        }

document:
filter method:18,20
```
22. tostring
```bash 
        #tostring 
        var p = arr.toString()
        document.write("converted to string: " + typeof p + "<br>")

document:
converted to string: string
```
23. valueof
```bash 
        document.write("value of: " + arr.valueOf() + "<br>")

document:
value of: loki,rehman,kartik,smriti,karan,ronald
```

24. map()
```bash
        var a = [1, 3, 5, 8]
        #1. map 
        #apply same opration on all the values 
        let b = a.map(function(x){
            return x*10
        });

        document.write("map: ", b, "<br>")

        #Array of objects 
        var arr = [
            {fname : "reem",
             lname : "shaikh"},
            {fname : "reem",
             lname : "shaikh"},
        ];

        let c = arr.map(function(x){
            return x.fname + " " + x.lname
        });

        #extract objects and create an array 
        document.write("array of objects: ", c, "<br>")

document:
map: 10,30,50,80
array of objects: reem shaikh,reem shaikh
```

25. fill()
```bash 
var arr2 = ['reem', 'rum']
arr2.fill('reemie')
document.write("fill method:", arr2)

document:
fill method:reemie,reemie
```

26. findIndexOf() 
```bash 
 #returns first value index which passes the test
 
        var ooo = ages.findIndex(checkAdult)
        document.write("findindex method:", ooo)
        function checkAdult(age)
        {
            return age >= 18
        }

document:
findindex method:2
```

27. reduce
reduce() executes a reducer function on each element of the array, resulting in a single output value 
- accum - accumulating all the elem in one variable `accum`
- curr - shows the current value 
```bash 
let arr = [1,2,3,4,5]
# sum = 12
# avg=4
# product=30

let sum = arr.reduce((accum, curr) => {
    return accum + curr
}, [])
# second argument is the initial value 
console.log(sum)
```
> find average of an array using reduce()
```bash 
    <script>
          #          0  1  2  3
          let arr = [8, 2, 5, 5]
      let avg = arr.reduce((accum, curr, index, array) => {
          let total = accum + curr

          if(index === array.length-1){
            return total/array.length
          }
          return total
      })
      console.log(avg)
    </script>

console:
4 #20/5
```

#### Types of functions in JS 
```bash 
    <script>
        #when we call a function
        #saves a, b parameter value in a function
        function sum(a, b)
        {
            c = a+b;
            console.log(c);
        }
        sum(10,14);

        #function can be assigned in a variable
        #saves entire function in the variable sum 
        var sum = function (a, b)
        {
            c = a+b;
            console.log(c);
        }
        sum(11,14);


        #we can also save it as an object property 
        var obj = {
            'key1' : 'something',
            #key can also store a function 
            #key can be stored 
            #as an element of an array

            'key2' : function(a, b) 
            #function defination 
            {
                var sum = a+b;
                return sum;
            },
            #calling outside function in the object 
            'sum' : sum,
        }
        console.log(obj);
        #console -> global object 
        #log -> function 

        #to call the function in the object
        var s = obj.key2(10, 20);
        console.log("sum of function",s);

        #calling the function 
        console.log(obj.sum(40,50));
    </script>
```
> another example of functions 
```bash 
    <script>
        function mul(a,b)
        {
            let total = a*b;
            return total;
        }

        var multiplication = mul(10,20);
        console.log(multiplication);

        #function as a variable reference 
        #used mostly in industry approach 
        var mul = function (a,b)
        {
            let total = a*b;
            return total;
        }

        var multiplication = mul(10,20);
        console.log(multiplication);


        #function as value in an object 
        var calculator = {
            'mul' : mul,
            'div' : "",
            'sum' : "",
            'diff': "",

        };

        #calling the function inside the object
        var multiplication = calculator.mul(10,20);
        console.log(multiplication);


        #create calculator object with 4 different functionalities 

        #similarly we can even define function inside a key in the object 
        var calculator = {
            #calculator objects

            'mul' : function(a,b)
            {
            let total = a*b;
            return total;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        var multiplication = calculator.mul(10,30);
        console.log(multiplication);

        var addition = calculator.sum(10,30);
        console.log(addition);

        var divide = calculator.div(10,30);
        console.log(divide);
        
        var difference = calculator.diff(10,30);
        console.log(difference);



        #here we try to call individual function with its object 
        var calculator = {
            #calculator objects
            'num1':0,
            'num2':0,

            'mul' : function()
            {
            let total = calculator.num1*calculator.num2;
            return total;
            },

            'div' : function()
            {
            let total = calculator.num1/ calculator.num2;
            return total;
            },

            'sum' : function()
            {
            let total = calculator.num1 + calculator.num2;
            return total;
            },
            'diff': function()
            {
            let total = calculator.num1 - calculator.num2;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3;

        var multiplication = calculator.mul();
        console.log("product",multiplication);

        var addition = calculator.sum();
        console.log("addition",addition);

        var divide = calculator.div();
        console.log("division",divide);
        
        var difference = calculator.diff();
        console.log("difference",difference);

    </script>
```
### Loops in JS 
```bash 
   #show first n odd numbers
      # n=10
      # 1,3,5,7,9,11,13,15,17,19
      var n = 10
      var i = 1
      for (i = 0; i < n; i = i + 1) {
        console.log(2 * i + 1)
      }
      console.log('end of execution')

      #reverse numbers
      var n = 20
      for (var i = n - 1; i > 0; i = i - 1) {
        console.log(i)
      }

      console.log('end')

      #first n even numbers
      var n = 5
      for (var i = 0; i < n; i = i + 1) {
        console.log(2 * i)
      }
      console.log('end')

      #do-while
      var i = 11
      var n = 10
      do {
        console.log(i)
        i++
      } while (i < 10)
      console.log('end')

      #while
      var i = 11
      var n = 10
      while (i < n) {
        console.log(i)
        i++
      }
      console.log('end')

    #nested if else ladder
      # else if is chaining
      if (false) {
        console.log('condition is satsfied')
      } else if (true) {
        console.log('second condn satisfied')
      } else if (true) {
        console.log('third condn satisfied')
      } else {
        console.log('no condn is satisfied')
      }

    # switch
    # problem with else-if ladder 
     var num = parseInt(prompt('enter number'))
      # == checks for data value
      # not data type
      #thats we can skip the parseInt
      #but in case of switch there is no == thats why we need to use parseInt

      #   if(num == 1)
      #   {
      #       console.log("one");
      #   }
      #   else if(num == 2)
      #   {
      #       console.log("two");
      #   }
      #   else if(num == 3)
      #   {
      #     console.log("three");
      #   }
      #   else if(num == 4)
      #   {
      #     console.log("four");
      #   }
      #   else{
      #     console.log("other");

      #   }

      #convert to switch
      switch (num) {
        case 1:
          console.log('one')
          break

        case 2:
          console.log('two')
          break

        case 3:
          console.log('three')
          break

        case 4:
          console.log('four')
          break

        case 5:
        case 6:
        case 7:
          console.log('five/six/seven')
          break
        #we can combine
        default:
          console.log('everything else')
      }
```
#### Difference between `for in` and `for of` in javascript 
```bash 
const names = ['vinod', 'thapa']
# for(let i=0; i<names.length; i++){
#     console.log(names[i])
# }

# for-in loop 
# elem holds the index 
for(let elem in names){
    console.log(elem)
}
# console: 0 1

# for-of 
for(let elem of names){
    console.log(elem)
}
# console: vinod thapa 
```










