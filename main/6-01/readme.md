### Spread operator 
if you have an object or an array (called iterable) then you can spread it. 

- you can iterate on it and have each element seperately 
```bash
        append: (push) adds at the last 
        const arr = [1,2,3,4]
        const arr2 = [5,6,7,8]
        arr.push(5)
        console.log(arr)

console:
(5) [1, 2, 3, 4, 5]
```
```bash 
        const arr3 = [1,2,3,4]
        const arr4 = [5,6,7,8]

        const pre_arr = [5, arr]
        console.log(pre_arr)

console:
(2) [5, Array(5)]0: 51: (5) [1, 2, 3, 4, 5]length: 2[[Prototype]]: Array(0)

```

```bash 
        const arr3 = [1,2,3,4]
        const arr4 = [5,6,7,8]

        const pre_arr = [5, ...arr]
        console.log(pre_arr)


console:
Array(6)0: 51: 12: 23: 34: 45: 5length: 6[[Prototype]]: Array(0)
```
> example, without using SPREAD operator 
```bash 
        const arr = [1,2,3,4]
        const fn = (a,b,c) => {
            console.log(a)  //arr gets mapped to a 
            console.log(b)  //undefined
            console.log(c)  //undefined
        }

        fn(arr)

console:
(4) [1, 2, 3, 4]
undefined   ✅its undefined because were not defining any value 
undefined
```
#### however, using SPREAD operator, JS will treat it as a spreaded array 
it takes an array/ iterable object and returns seperate memory locations (called destructuring)

***SPREAD doesnt return an array, it returns different smaller memory locations, instead***
```bash 
    <script>
        const arr = [1,2,3,4]
        const fn = (a,b,c) => {
            console.log(a)
            console.log(b) 
            console.log(c)
        }

        fn(...arr)
    </script>

console:
1
2
3
```
### SPREAD Vs REST 
(same syntax, used in different context)

- If were using ... in a function parameter, it is called rest operator 
- if we use in an iterable/ function argumnent, then we call it as spread operator 

```bash 
    <script>
        const arr = [1,2,3,4]
        const fn = (a,b,c, ...d)   ✅this is REST operator 
                                   ✅only written in parameter 
        => {
            console.log(a)
            console.log(b) 
            console.log(c)
        }

        fn(...arr)                ✅SPREAD operator 
                                  ✅only written in arguments 
    </script>

```
> eg. of REST and SPREAD
```bash 
    <script>
      const arr = [1, 2, 3, 4]
      const fn = (a, ...b) => {
          console.log(a) //1
          console.log(b) //[2,3,4]
        } 

    fn(...arr)

    </script>

console:
1
8-01.html:18 (3) [2, 3, 4]
```

### DEEP COPY VS SHALLOW COPY 
```bash 
    <script>
        const obj = {
            'key1': 'value',
            'key2': 'value2',
        }
        
        //copying obj to obj2 
        ✅shallow copy - copies memory location 
        const obj2 = obj           //obj2 copy memory location of obj  
        console.log("obj", obj)    //both objects are pointing to same location
        console.log("obj2", obj2)

        obj2.key1 = "valuenew"
        console.log("obj", obj)
        console.log("obj2", obj2)

        //both objects will get the same value
        //non primitive datatypes (arrays/ objects) are refered by memory location 
        //stored by reference


        //primitive datatypes are refered by value 
        //note this example is just to show how primitive datatypes are
        //stored by value 
        const a = 10
        let b = a 
        b = b + 10
        console.log("a", a)
        console.log("b", b)
        
        ✅to prevent both objects from getting same value, we have deep value 
        //both objects will have a seperate copy of the data 

        const obj3 = JSON.parse(JSON.stringify(obj))  
        ✅Deep copy creates another copy of obj in a seperate memory location 
        ✅shallow copy create a reference pointer of a memory 

        console.log("obj", obj)
        console.log("obj3", obj3)
    </script>
console:
obj {key1: 'value', key2: 'value2'}
8-01.html:24 obj2 {key1: 'value', key2: 'value2'}

8-01.html:27 obj {key1: 'valuenew', key2: 'value2'}
8-01.html:28 obj2 {key1: 'valuenew', key2: 'value2'}

8-01.html:38 a 10
8-01.html:39 b 20

8-01.html:47 obj {key1: 'valuenew', key2: 'value2'}
8-01.html:48 obj3 {key1: 'valuenew', key2: 'value2'}
```
### Operators 
Based on number of operand's it takes, its divided into 
```bash 
operand operator operand 
```
1. unary operator - takes one operand 
> Eg: NOT operator, pre/post increement, pre/post deecrement
```bash
    <script>
      let something = true
      something = !something
      console.log(something)
    </script>
```
2. binary operator - takes two operands
3. ternary operator - takes three operands

### Ternary operator 
Ternary is an alternate to if-else condition.
- It can be used, but shouldn't be used 

> syntax:
```bash 
<condition> ? <true> : <false>
```
> example
```bash 
    <script>
      let a = 15;
      (a >= 10) ? console.log('a greater') : console.log('a not greater')
    </script>

console:
a greater 
```
> If we have a condition and were saving something to a variable, then we should be using ternary operator, that is the ideal use case 
```bash 
    <script>
      let age = 17
      let isAdult = (age>=18) ? true : false;
      console.log(isAdult)
    </script>

console:
false 
```
> nesting 
we can do nesting of ternary operator
```bash 
    <script>
      let a=10
      let b=20
      let c=30 

      const max = (a>b) ? ((a>c) ? a  : c) : ((b>c) ? b:c)
                  (10>20) ? 10>30 : (20>30)
                   nope   ? c     :  c
                                  ✅false

      console.log(max)
    </script>

console:
30
```