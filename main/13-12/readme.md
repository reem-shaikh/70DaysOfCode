## Interview Questions 

### Whats the output?
```bash 
    var car = {
            resgistrationnumber: "ga123",
            brand: "toyota",

            displaydetails: function()
            {
                console.log(this.resgistrationnumber + " " + this.brand)
            }
        }
        car.displaydetails(); 

console:      
ga123 toyota
```
### if were accessing two different properties that dont exist 
```bash 
    <script>
        var car = {

            displaydetails: function()
            {
                console.log(this.resgistrationnumber + " " + this.brand)
            }
        }
        car.displaydetails(); 
        
    </script>

console:
undefined undefined 
```
### Returns object of number 
```bash 
   <script>
        var func = function(){

           console.log(this) //this only points to object 
        }.bind(1) //returns an object of number 

        //every send inside bind will point to the object 'this'
        //bind returns a reference while call/apply execute 
        
        func();
        
    </script>

console:
Number {1}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 1
```
### Returns object of string 
```bash 
<script>
        var func = function(){

           console.log(this)
        }.bind("a")

        func();
        
    </script>

console:
String {'a'}0: "a"length: 1[[Prototype]]: Stringanchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "a"
```
## question using call
```bash 
function checkFun(a, b, c){
    console.log(this);
    //this only points to object 
    // the object is a number 

    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.call(1,2,3,4);
//executes the call function 
// call takes this keyword as a reference 

console:
[Number: 1]
2
3
4
```
## Question using apply
in apply you can pass args dyanamicaly, because we pass arguments in form on array 
```bash 
function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.apply(1,[2,3,4]);

console:
[Number: 1]
2
3
4
```
## Apply using strings 
```bash 
    <script>
    function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
    }
    checkFun.apply("a",[2,3,4]);
        
    </script>

console:
String {'a'}
q1.html:14 2
q1.html:15 3
q1.html:16 4
```

