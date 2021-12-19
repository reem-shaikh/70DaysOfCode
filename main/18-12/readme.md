
## Write a program to print inverted triangle 
Testcases:
```bash
1. n=5
*****
 ***
  *
                          stars wrt n
2. n=9      row spaces    stars   ^    k     k=2*i         n-2i
*********    0  0space    9       n    0     2*0=0         9-0=0
 *******     1  1space    7       n-2  2     2*1=2         9-2=7
  *****      3  2space    5       n-4  4     2*2=4         9-4=5 
   ***       4  3space    3       n-6  6     2*3=6         9-6=3
    *        5  4space    1       n-8  8     2*4=8         9-8=1

each row is by default an empty string 
```

### Write a program to print the pattern 
```bash 
1. n=5
*****
 ***
  *
  *
 ***
*****
```

### Diamond pattern 
```bash 
1. n = 5 
   *
  ***
 *****
  ***
   *
```

#### Difference between JS and JAVA 
JS- scripting language 
- dyanamically/ loosely typed 
- intrepreted
- cross platform (browser, server, mobile app, desktop app)
- JS is muliparadigm 
```bash
What is paradigm? 
> way in which we structure and write program 
1. OOP 
2. FUNCTIONAL programming
3. procedural programming 
4. encapsulated programming 
5. Modular programming
```
- single threaded 

JAVA - programming language 
- strongly/ statiscally typed 
- compiled 
- cross platform (browser, server, mobile app, desktop app)
- java is strongly OOP
- multi threaded 

### datatypes in JS 
1. number (-9007199254740991 to 9007199254740991)
2. bigInt (1.7976931348623157e+308)

Bigger than this number, is BigInt datatype 
```bash 
Number.MAX_VALUE;

console:
1.7976931348623157e+308
```
Safe range- int range 
```bash 
Number.MAX_SAFE_INTEGER;

console:
9007199254740991
```
3. Nan 
variable is not a number 
js has given datatype a number, but value could not be decided 
> parseInt() - function which takes a string and returns a number equavalent
```bash 
let n = parseInt("abcd");

console:
undefined

typeof n;

console:
'number'
```
## difference between == , = and ===
- == checks for data values 
- === chcecks for value + datatype 
- = assignment operator 

### post increement and pre increement 
#### post increement 
- i++
```bash 
    let i = 10
    console.log(i++)    //10
    console.log("i", i) //11

console:
i 11
```
```bash 
    let k = 14 
    let j = k++
    console.log("j",j) //14
    console.log(k)     //15

console:
14
15
```
#### pre increement 
- ++i 
```bash 
    let p = 10
    console.log(++p)     //11
    console.log("p", p)  //11

console:
p 11
```
### type coercion 
js will automatically convert datatype to operate. this is called type coercion.
```bash 
  console.log(1+2+3+4+5+"6")  //156
        //3+3+4+5+"6"
        //6+4+5+"6"
        //10+5+"6"
        //15+"6"
        //156

    console:
    156
```
### BEDMAS 
- brackets 
- exponents 
- division 
- multiplication 
- addition 
- subtraction 

### to do list 
1. chaining
2. closure 
3. callback 
4. var vs let 
5. callback hell 
6. fetch 
7. promises 
8. api 
9. asynchronous programming 
10. hoisting 
11. call/ apply/ bond 
12. anagram 
13. coding 
- remove a duplicate element 
- reverse a string with words 
- largest substring in a string 
- largest subset from an array 

- code 
have the function largest four (arr) take the array of integers stored in arr and find the four largest elements and return their sum.for example: arr is [4,5,-2,3,1,2,6,6] then the four largest elements in this is 6,6,4,5 total sum is 21?
