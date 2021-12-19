
## Star Patterns 
### 1. simple star pattern 
```bash
               i      j         j<=i
*              1      1                    
**             2      1 2
***            3      1 2 3
****           4      1 2 3 4
*****          5      1 2 3 4 5
<script>

    for(i=1; i<=5; i++)
    {
        for(j=1; j<=i; j++)
        {
            document.write('*')
        }

        document.write('<br>')
    }
</script>
```
```bash
1
12
123
1234
12345

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write(j)
            }
            document.write('<br>')
        }
    </script>
```

```bash
1
22
333
4444
55555

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write(i)
            }
            document.write('<br>')
        }
    </script>

```

```bash
1
11
111
1111
11111

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write(1)
            }
            document.write('<br>')
        }
    </script>
```
## 2. Reverse Star Pattern 
```bash
               i        j              j>=i 
*****          1        1 2 3 4 5     
****           2        1 2 3 4
***            3        1 2 3 
**             4        1 2
*              5        1

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=5; j>=i; j--)
            {
                document.write('*')
            }
            document.write('<br>')
        }
    </script>
```

```bash
54321
5432
543
54
5
    <script>
        for(i=1; i<=5; i++)
        {
            for(j=5; j>=i; j--)
            {
                document.write(j)
            }
            document.write('<br>')
        }
    </script>
```

```bash
11111
2222
333
44
5

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=5; j>=i; j--)
            {
                document.write(i)
            }
            document.write('<br>')
        }
    </script>
```
### 3. Stars on the opposite side 
```bash

####*            
###**
##***
#****
*****
    <script>
        for(i=1; i<=5; i++)
        {
            for(j=4; j>=i; j--)
            {
                document.write('#')
            }
            
            for(k=1; k<=i; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>

```

```bash
                 i     k            k<=i
    *            1     1           
   **            2     1 2
  ***            3     1 2 3 
 ****            4     1 2 3 4
*****            5     1 2 3 4 5
1. print spaces 
2. print stars 

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=4; j>=i; j--)
            {
                document.write('&nbsp')
            }
            
            for(k=1; k<=i; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>
```
```bash
    1
   12
  123
 1234
12345

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=4; j>=i; j--)
            {
                document.write('&nbsp ')
            }
            
            for(k=1; k<=i; k++)
            {
                document.write(k)
            }
            document.write("<br>")
        }
    </script>
```
```bash
     1
    22
   333
  4444
 55555

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=4; j>=i; j--)
            {
                document.write('&nbsp ')
            }
            
            for(k=1; k<=i; k++)
            {
                document.write(i)
            }
            document.write("<br>")
        }
    </script>
```
### 4. Reverse on opposite side 
```bash 
              i    j
*****         5    1 2 3 4 5
 ****         4    2 3 4 5
  ***         3    3 4 5 
   **         2    4 5
    *         1    5
1. print spaces 
2. print stars 

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(k=5; k>=i; k--)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>
```
```bash 
54321
 5432
  543
   54
    5

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(k=5; k>=i; k--)
            {
                document.write(k)
            }
            document.write("<br>")
        }
    </script>
```
```bash 
11111
 2222
  333
   44
    5

    <script>
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(k=5; k>=i; k--)
            {
                document.write(i)
            }
            document.write("<br>")
        }
    </script>
```
### 5. Combining star patterns 
```bash 
*
**
***
****
*****
*****
****
***
**
*
    <script>
        for(let i=1; i<=5; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
        for(let i=1; i<=5; i++)
        {
            for(let j=5; j>=i; j--)
            {
                document.write("*")
            }
            document.write("<br>")
        }  
    </script>
```
```bash 
         *
        **
       ***
      ****
     *****
     *****
      ****
       ***
        **
         *

    <script>
        //top triangle 
        //spaces 
        for(let i=1; i<=5; i++)
        {
            for(let j=5; j>=i; j--)
            {
                document.write("&nbsp ")
            }
            //stars 
            for(k=1; k<=i; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
        //bottom triangle 
        for(let i=1; i<=5; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(let k=5; k>=i; k--)
            {
                document.write("*")
            }
            document.write("<br>")
        }       
    </script>
```
```bash 
         *
        **
       ***
      ****
     *****
      ****
       ***
        **
         *
         
    <script>
        //top triangle 
        //spaces 
        for(let i=1; i<=5; i++)
        {
            for(let j=5; j>=i; j--)
            {
                document.write("&nbsp ")
            }
            //stars 
            for(k=1; k<=i; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
        //bottom triangle 
        for(let i=1; i<=5; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            ✅k=4 here is where the change is made 
            for(let k=4; k>=i; k--)
            {
                document.write("*")
            }
            document.write("<br>")
        }       
    </script>
```
### 6. triangle alligned in center 
```bash 
        *
       ***
      *****
     *******
    *********

    <script>
        for(let i=1; i<=5; i++)
        {
            for(let j=5; j>=i; j--)
            {
                document.write("&nbsp ")
            }
            
            for(let k=1; k<i*2; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>
```
### 7. inverted trinagle alligned in center 
```bash 
  *******
   *****
    ***
     *

    <script>
        for(let i=1; i<=9; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            ✅k>i*2 (this is the only difference from last code)
            for(let k=9; k>i*2; k--)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>
```
### 8. Diamond pattern 
```bash 
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *

    <script>
        for(let i=1; i<=5; i++)
        {
            for(let j=4; j>=i;j--)
            {
                document.write("&nbsp ")
            }
            for(let k=1; k<i*2; k++)
            {
                document.write("*")
            }
            document.write("<br>")
        }
        for(let i=1; i<=9; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(let k=9; k>i*2; k--)
            {
                document.write("*")
            }
            document.write("<br>")
        }
    </script>
```
> with spaces 
```bash
          *
         * *
        * * *
       * * * *
      * * * * *
      * * * * *
       * * * *
        * * *
         * *
          *

    <script>
        for(let i=1; i<6; i++)
        {
            for(let j=5; j>=i; j--)
            {
                document.write("&nbsp ")
            }
            for(let k=1; k<=i; k++)
            {
                document.write(" *")
            }
            document.write("<br>")
        }
        for(let i=1; i<=5; i++)
        {
            for(let j=1; j<=i; j++)
            {
                document.write("&nbsp ")
            }
            for(let k=5; k>=i; k--)
            {
                document.write(" *")
            }
            document.write("<br>")
        }
    </script>

```

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
### JS- scripting language 
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

### JAVA - programming language 
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