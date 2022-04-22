## Interview Questions
> Difficulty level: very easy 

### Number divisibled 
```bash 
    <script>
      var num1 = 8
      var num2 = 4

      #case when 3/0
      if (num2 == 0) {
        console.log('cannot divide by 0')
      } else {
        var rem = num1 % num2
        if (rem == 0) {
          console.log('no is divisibled')
        } else {
          console.log('no is not divisibled')
        }
      }
    </script>
```
### even or not 
```bash
   var num1 = 5
      var rem = num1 % 2
      if (rem == 0) {
        console.log('Number is even')
      } else {
        console.log('Number is odd')
      }
```
> odd or even 
```bash 
<script>
      function oddeven(num) {
        if (num % 2 == 0) {
          console.log('number is even')
        } else {
          console.log('number is odd')
        }
        return num
      }

      var num = parseInt(prompt('enter num'))

      var issodd_even = oddeven(num)
      console.log(issodd_even)

      issodd_even(4)
    </script>
```
### sum of even and odd numbers 
```bash 
 <script>
var num = prompt("enter the number");
num = parseInt(num);
# num = Math.round(num);
#string is a collection/array of characters

var sumodd = 0;
var sumeven = 0;

       while(num > 0)
       {
           var digit = num % 10;
           num = num/ 10;
           num = parseInt(num);

           console.log(digit);
           var rem = digit % 2;
           #checking if modulo is even or odd 

           if(rem == 0)
           {
               sumeven = sumeven + digit;
           }
           else
           {
               sumodd = sumodd + digit;
           }

       }
       console.log("sumeven",sumeven);
       console.log("sumodd",sumodd);
    </script>
```
### calculate area 
```bash 
 <script>
      #function declaration
      #passing the parameters
      function area(w, h) {
        area = w * h
        return area
      }

      var width = parseInt(prompt('enter width'))
      var height = parseInt(prompt('enter height'))

      #function invocation:
      #passsing the arguments
      var rectarea = area(width, height)
      console.log(rectarea)
    </script>
```
### String to int 
```bash 
  <script>
# string inputs 
      var a = prompt('enter a')
      var b = prompt('enter b')
# converting to int 
      var num1 = parseInt(a)
      var num2 = parseInt(b)
      var con = num1 + num2
      alert(con)
    </script>
```
### Array 
> creating an empty array 
- var geek = []
- var geek = new Array()
- var geek = new Array(2) #2 is the length of the array 

### 1D array 
#### How to get input from user in Array 
> taking number of inputs from user 
```bash 
    <script>
        # defining array 
        var elem = prompt('enter number of elements:')
        var geek=[]
        # geek[0] = 'reem'

        # taking input from user 
        for(let i=0; i<=elem; i++){
            geek[i] = prompt('enter name')
        }

        # display values 
        for(let i=0; i<elem; i++){
            document.write(geek[i] + " ")
        }
    </script>

# prompt shows up it takes number of values
# 2
# reem
# rum 

document 
reem rum 
```
> Defining a fixed number of input 
```bash 
    <script>
        # defining array via constructor 
        var geek= new Array(3)
        var ln = geek.length
        console.log('ln', ln)

        # taking input from user 
        # takes 3 inputs because ln=3 (0,1,2,3)
        for(let i=0; i<ln; i++){
            geek[i] = prompt('enter name')
        }

        # display values 
        for(let value of geek){
            document.write(value + " ")
        }
    </script>

# prompt 
# reem
# rum 
# reem

document:
reem rum reem
```
### 2D Array 
> How to get input from user in 2D array 
```bash 
    <script>
        var rows= 3
        var cols=2 
        var geek = new Array(rows)
        for(var i=0; i<rows; i++){
            geek[i] = new Array(cols)
        }

        # input for array 
        for(var i=0; i<rows; i++){
            for(var j=0; j<cols; j++){
                geek[i][j] = prompt('enter name')
            }
        }

        # displaying values 
        for(var i=0; i<rows; i++){
            for(var j=0; j<cols; j++){
               document.write(geek[i][j] + " ")
            }
            document.write('<br>')
        }
    </script>

document:
1 2
3 4
5 6
```
#### Min and max number from an array element 
```bash 
    <script>
        arr = [2, 3, 4, 7]
        var max = arr[0]
        var min = arr[0]
        for(var i=0; i<arr.length; i++){
            if(arr[i] >= max){
                max = arr[i]
            } 

            if(arr[i] <= min){
                min = arr[i]
            } 
        }
        console.log('max',max)
        console.log('min',min)
    </script>

console:
max 7
min 2
```
#### Compare 2 arrays are equal or not 
```bash 
    <script>
        # these 2 arrays are equal because they have the same values 
        # the only difference is that their allignment is different 
        var arr1 = [4, 8, 10, 9, 5]
        var arr2 = [5, 10, 8, 9, 4]

        # check if their length is equal and the array elements are same 
        const is_same = arr1.length == arr2.length &&
        arr1.every((currElem) => {
            # were fetching every value from arr1 and were checking 
            # checking if elem in arr1 is present in arr2 or not 
            # by running the element we found from arr1 through indexOf 
            # to extract the the indexOf the value from arr2 
            if(arr2.indexOf(currElem) > -1)
            # is value of arr1 included in arr2 
            # if its not available return -1 
            # else return that elements in arr1 is included in arr2 
            return (currElem = arr2[arr2.indexOf(currElem)])
        }) 
        console.log(is_same)  #true 
        # indexOf() returns -1 when elem not found 
    </script>
```
#### Remove duplicate values from an array 
```bash 
let arr = [1, 2 , 1, 3, 2]
let newUniqueArr = [...new Set(arr)]
# array can contain duplicate values 
# set cannot contain duplicate values 
console.log(newUniqueArr)

# new set(arr) is a set containing all the unique / distinct values in an array 
console:
Array(3)0: 11: 22: 3length: 3[[Prototype]]: Array(0)
```
#### Reverse 
> reverse array 
```bash 
    <script>
        # without using predefined reverse method 
        #       0    1   2   3
        var a = [10, 34, 56, 78]
        # console.log(a.reverse())

        # for(var i=5; i>=0; i--){
        #     console.log(i)
        # }

        for(var i=a.length-1; i>=0; i--){
            console.log(`elem at ${i+1} ` 
            +a[i])
        }
    </script>

console:
elem at 4 78
revarr.html:21 elem at 3 56
revarr.html:21 elem at 2 34
revarr.html:21 elem at 1 10
```
> reverse words in a sentence 
```bash 
# split: ["my", "name", "is", "reem"]
# reverse: ["reem","is","my","name"]
# join: reem is name my 
const reverseWords = (sentence) => {
    const words = sentence.split(" ")
    const revWords = words.reverse()
    return revWords.join(" ")
}

console.log(reverseWords('my name is reem'))
```
> reverse integer number 
```bash 
# toString() - to convert to a string 
# split() - convert string to array 
# eg: -123 = ["-","1","2","3"]

# reverse() - reverse this new created array 
# ["3","2","1","-"]

# join() - join all the elemnets of the array into a string 
 <script>
        const revInt = (num) => {
            let myRevNum = num.toString().split("")
            # ['1','2','3'] - split("")
            # "123" - split()
            console.log(myRevNum)
            let rev = myRevNum.reverse()
            # ['3','2','1']
            let join = rev.join("")
            console.log(join)
            # 3,2,1 - join()
            # 321 - join("")

            # handling negative values 
            if(join.endsWith("-")){
                join= "-" + join
                return parseInt(join)
            } else {
                return parseInt(join)
            }
        }
        console.log(revInt(-123))
        # usually -123 will return 321-
        # to remove negative from rhs we parseint it and we add - before the string 
    </script>

console:
Array(4)
0: "3"
1: "2"
2: "1"
3: "-"
length: 4[[Prototype]]: Array(0)

revnum.html:19 321-
revnum.html:31 -321
```
### Prime 
Prime number is a whole number greater than 1. it has 2 factors that is 1 and the number itself. Composite numbers have more than 2 factors.
```bash 
let num = 10 
var isPrimeNumber = true 

for(let i=2; i<num; i++){
    if(num % i ==  0) {
        # any number divided by i not prime 
        console.log('not prime')
        isPrimeNumber = false 
    } 
}

if(isPrimeNumber == true){
    console.log(`${num} is prime number`)
} else {
    console.log('not prime')
}
```

### Factorial 
> 4! = 4 x 3 x 2 x 1

> solution 1
```bash 
let num = 5
    # 5x4x3x2x1
    for(let i=num; i>=1;){
        i = i - 1
        var fact = num * i
        num = fact 
    }

console:
120
```

> better solution 
```bash 
let num = 5
for(let fact=1; num>1; num--){
    fact = fact * num  
}
```

### Union of 2 arrays 
```bash 
    <script>
        const num1 = [9, 5, 6]
        const num2 = [8, 6, 5]
        const getUnion = () => {
            let oneArr = [...num1, ...num2]
            return [...new Set(oneArr)]
            # new Set helps remove duplicate values from the array 
        }
        console.log(getUnion())

        # if you want to sort the returned array in ascending order use sort()
        console.log(getUnion().sort())
    </script>

console:
Array(4)
0: 9
1: 5
2: 6
3: 8
length: 4
[[Prototype]]: Array(0)
```
### Intersection of 2 arrays
> common elements in two arrays 
```bash 
    <script>
        let num1 = [1, 2, 2, 1]
        var num2 = [2, 2]

        let intersectionArray = num1.filter((currElem) => {
            # filter creates new array with all elems that pass the condition
            return num2.includes(currElem)
            # is the value at num1 included at num2
        })
        console.log([...new Set(intersectionArray)])
    </script>

console:
Array(1)
0: 2
length: 1
[[Prototype]]: Array(0)
```
### Function currying
> using the normal method 
```bash 
    <script>
        function getSum(a) {
            # this function is returning another function which is returning another argument 
            return function(b) {
                    return function (c){
                        return function (d) {
                            return function (e){
                            # closure - inner function can access args of the parent function
                                console.log(a, b, c, d, e)
                            }
                        }
                    }
            }
        }
       getSum(5)(4)(3)(2)(1)
    </script>

console:
5 4 3 2 1
```
> acheive currying in one line 
```bash 
    <script>
        const getSum = (a) => {
            # converted to arrow function 
            # common return statement 
            # removed curly braces, because one line of code 
            return (b) =>  (c) => (d) => (e) => a+b+c+d+e
                            
        }
       console.log(getSum(5)(4)(3)(2)(1))
    </script>
```
### character is vowel or consonant 
```bash 
    <script>
      const findVowelOrNot = () => {
        # is p vowel or not 
        let char = "p";
        if (
          char == "a" ||
          char == "e" ||
          char == "i" ||
          char == "o" ||
          char == "u"
        ) {
          console.log("vowel");
        } else {
          console.log("not vowel");
        }
      };
      findVowelOrNot();
    </script>

console:
not vowel 
```
### Fibonacci series 
```bash 
    <script>
        # 0, 1, 1, 2, 3, 5, 8
        # print fibonnaci series before 100
        const num = 100
        let x = 0 
        let y = 1 

        let fn = x + y 
        while(fn < num){
            console.log(fn)
            fn = x+y
            x=y
            y=fn 
        }
    </script>
    
console:
fibonacci.html:19 1
fibonacci.html:19 2
fibonacci.html:19 3
fibonacci.html:19 5
fibonacci.html:19 8
fibonacci.html:19 13
fibonacci.html:19 21
fibonacci.html:19 34
fibonacci.html:19 55
fibonacci.html:19 89
```
#### Swap two numbers in JS 
```bash 
    <script>
        const test = () => {
            let a = 55
            let b = 20
        
        let c = a
        a = b 
        b = c 

        console.log(a)
        console.log(b)
        }

        test()
    </script>

console:
20
55
```
> swap without using third variable 
```bash 
    <script>
        const test = () => {
            let a = 55
            let b = 20
        
        a= a+b  #75
        b= a-b  #75-20= 55
        a= a-b  #75-55= 20
        console.log(a)
        console.log(b)
    }
        test()
    </script>

console:
20
55
```
### difference between split() and split('')
```bash 
let str2 = 'earth'
        let sorted2 = str2.split('')
        # Array(5)
        # 0: "e"
        # 1: "a"
        # 2: "r"
        # 3: "t"
        # 4: "h"
        # length: 5[[Prototype]]: Array(0)

        let sorted2 = str2.split()
        #Array(1)
        #0: "earth"
        #length: 1
        #[[Prototype]]: Array(0)
```
### two strings anagram of each other 
> abcd and bcad are anagrams 
```bash 
 <script>
      #split turns string to every element in an array
      #join to combine them back to the string
      #to make it case insensitive we convert it to lowercase

      function isAnagram(str1, str2) {
      # compare 2 strings 
      # convert string to array, sorted the array, joined the sorted array and converted it to lowercase 
        let sorted1 = str1.split('').sort().join('').toLowerCase()
        let sorted2 = str2.split('').sort().join('').toLowerCase()

        let len1 = str1.length
        let len2 = str2.length
        if (len1 != len2) {
          console.log('invalid input')
        }

        if (sorted1 === sorted2) {
          #checking value and datatype
          return console.log('true')
        } else {
          return console.log('false')
        }
      }
      var result = isAnagram('heart', 'earth')
      console.log(result)
    </script>

console:
true 
```
### Palindrome 
> 121 is same as 121 
> madam read reverse is same 
```bash 
    <script>
        var string = prompt('please enter a string')
        var len = string.length
        
        for(var i=0; i<len/2; i++){
            if(string[i] != string[len-1-i]){
                console.log('its not palindrome')
            }
        }
    </script>
```







 






