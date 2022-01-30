Till now, we've created all our code in a single JS file, however there is a problem with this, 
*if we have 2 JS files, with same functionality, it goes against the DRY principle***

There is a principle called as the **'DRY principle' -> which means 'Dont repeat yourself'**

If there is a bug in one JS file, and if we want to maintain this file, its going to be very hard, because we have to fix it in both the files.
Till now we've been following ***'functional programming paradigm'***

> Modular programming paradigm means the whole code is consisting of small modules which can be used in plug and play, (similar to LEGO).

Our project is a complex collection of modules 
```bash
eg: Video streaming app can include:

video list module
recommendation module 
search suggestion module 
navbar module 
```
### Modules 
Using modules we just have to make changes in one single file and it will be linked to the other js file 

> index.html 
```bash 
<body>
✅in order to notify the browser were using modules, we specify type="module"

<script type="module" src="modules1.js"></script>
</body>
```
> random.js 
```bash 
✅Creating a module
const getRandomNumber = () => {
    return Math.random()
}

✅exporting object "getRandomNumber" to module1.js
✅default keyword used when the function is exporting
✅default can only export one function

export default getRandomNumber;
```
> module1.js 
```bash 
✅importing object from random.js
import getRandomNumber from "./random.js"
✅random.js is called module 

console.log(getRandomNumber())
✅ ./ indicates current directory
```

#### Functional programming paradigm VS modular  programming paradigm
> Functional programming paradigm 
suppose we have an index.html file, and 2 JS files,
we have functions written in a single very big js file, if we want to use the js file in a seperate index.html, we can either script src that big file in the html file along with the other js file or copy that first js file into the other js file, kind of like combining both.

> Modular programming paradigm 
we refer to these functions as modules (like a component). Multiple components will make a big complex file and if we need to use it somewhere else, we just import it to that place.

### If were exporting only one file, we use "default" keyword, we can even export multiple 
- functions
- constants 
- primitive datatypes 

> using "as" keyword
![](img.PNG)

> index.html
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--in order to notify the browser were using modules, we specify type="module"-->
    <script type="module" src="modules1.js"></script>
</body>
</html>

```

> random.js 
```bash 
const getRandomNumber = () => {
     return Math.random()
}

const increaseNumber = (num) => {
    return ++num
}

✅exporting multiple functions
export {increaseNumber, getRandomNumber}
```
> module1.js 
```bash 
✅as keyword used to import multiple functions/ variables
import {increaseNumber as new_fn, getRandomNumber as abcd} from './random.js';

console.log("increasenum",new_fn(10))
console.log("getrandomnumber",abcd())
```
#### We can export constants as well along with the other functions
> index.html 
```bash 
<body>
    ✅in order to notify the browser were using modules, we specify type="module"
    <script type="module" src="modules1.js"></script>
</body>
```
> random.js
```bash 
const getRandomNumber = () => {
     return Math.random()
}

const increaseNumber = (num) => {
    return ++num
}

✅const API_KEY = "very secret"
export {increaseNumber, getRandomNumber, API_KEY}
```
> module1.js 
```bash 

import {increaseNumber as new_fn, getRandomNumber as abcd, API_KEY as secret} from './random.js';

console.log("increasenum",new_fn(10))
console.log("getrandomnumber",abcd())
✅console.log("secret", secret)
```
> IE doesnt support module 
> Module is supported in edge, edge is part of chromium browser 
> IE supports only till ecmascript 5
> IE supports Polyfill 

### Since IE doesn't support so many features, developers write compatibility code to support new features in old browser, the code that we write is called polyfill

## OOPS 
> oops.html
```bash 
<body>
    <h4>OOPS I did it again</h4>
    <script type="module" src="book.js"></script>
</body>
```
> book.js 
```bash 
//were creating seperate objects for seperate books 
const book = {
    title : "the subtle art of not giving a fuck", 
    author: "john who?",
    release_date: "1000",  
};

const book2 = {
    title : "alchemist", 
    author: "john doe",
    release_date: "1000",  
};

const book = {
    title : "bro, chill", 
    author: "john doe",
    release_date: "1000",  
};
```
### Factory Approach 
> instead of copy pasting one object and pasting and revamping the new objects, we can create a function which copies and creates a new book 
> book.js
```bash 
//factory approach 
//one single object "createBook" which generates different objects for you, from this approach we can create n number of objects from a single object 

const createBook = (title, author, release_date) => {
    const book = {
        ✅when key and value have the same name, we can skip writing the value, if we want 
        title: title, 
        author: author,
        release_date: release_date,

        ✅instead of the above code we can write it as 
        //title, 
        //author,
        //release_date,
    };
    return book;
}

const book1 = createBook('FIOS', 'John Doe')
console.log(book1)

console:
Book {title: 'FIOS', author: 'John Doe', release_date: undefined}
author: "John Doe"
release_date: undefined
title: "FIOS"
[[Prototype]]: Object
```
> oops.html
```bash 
<body>
    <h4>OOPS I did it again</h4>
    <script type="module" src="book.js"></script>
</body>
```
> when there is no inheritance involved, use functional programming: factory approach.

### Constructor Approach 
> book.js
```bash 
//factory approach 
✅after we create an object, constructor will be initialized
const createBook = (title, author, release_date) => {
     const book = {
        title: title, 
        author: author,
        release_date: release_date,
     };
     return book;
}

✅constructor approach (using functions)
//we already have an object using new keyword 
//well be constructing it 

✅Classname must start with capital letters 
✅function Book is a constructor 
function Book(title, author, release_date){
    this.title = title;
    this.author = author;
    this.release_date = release_date;
}

✅new keyword is used to create an instance of the object "createBook" that has a constructor function 
const book1 = new Book('FIOS', 'John Doe')
console.log(book1)

console:
Book {title: 'FIOS', author: 'John Doe', release_date: undefined}
author: "John Doe"
release_date: undefined
title: "FIOS"
[[Prototype]]: Object
```
> oops.html
```bash 
<body>
    <h4>OOPS I did it again</h4>
    <script type="module" src="book.js"></script>
</body>
```
> these two approaches are ES5 approach
> we'll be using an ES6 version of this approach using class keyword 

### Class Approach 
This is a syntactical sugar of constructor approach, under the hood, its doing the same thing as the constructor approach

> book.js 
```bash 
class bookClass {
    ✅Constructor is first function of the class that will be called when an object is created 
    ✅constructor is used to create object from the class
    ✅create a constructor when you want to assign some default properties to the class 

    constructor(title, author, release_date){
        this.title = title;
        this.author = author;
        this.release_date = release_date;
    }
}

✅new keyword creates class object 
const book3 = new bookClass('harry potter', 'rowling')
console.log(book3)

console:
bookClass {title: 'harry potter', author: 'rowling', release_date: undefined}
author: "rowling"
release_date: undefined
title: "harry potter"
[[Prototype]]: Object
```
> we can have a class with 0 constructors 
```bash 
class Empty {

}

const empty = new Empty()
console.log(empty)

console:
Empty {}
```
## OOP
Its a programming paradigm which revolves around the idea that everything is an object. Objects can have properties or functionalities.

#### The correlation: an ANALYSIS:
- JavaScript is an object-oriented programming language, so everything in JavaScript is an object.
- An object is a collection of propertieS (KEY-VALUE PAIRS)

##### There are three ways in which we can create a JavaScript object.
1. METHOD 1 - Using object literal to create and define a JS object 
```bash
     var student = {
        ✅A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
        name: "Chris Hemsworth",
        age: 21,
        branch: "Computer Science",

      };
```
2. METHOD 2 - using new keyword to create and define an object 
```bash 
    var student = new Object();

      student.name = "Chris Hemsworth";
      student.age = 21;
      student.branch = "Computer Science";

```
3. METHOD 3 - were using object's constructor to intiialize the js object: AKA ***object prototyping***
```bash 
 function stud(name, age, branch) {

        this.name = name;
        this.age = age;
        this.branch = branch;

      }
```
### Ways to access JS properties 
> for instance, this is the object 
```bash 
    var student = {

        name: "Chris Hemsworth",
        age: 21,
        branch: "Computer Science",

      };
```
1. METHOD 1:  access the property by using the dot(.) notation - object.property
```bash 
student.age;
```

2. METHOD 2:  by using square brackets - object[property]
```bash 
 student[age];
```

3. METHOD 3: store a property name, in the form of a string, in a variable and then use that variable to access the associated property.
```bash 
    x = "age";
    student[x];
```
#### There are 4 pillars of OOP:
In order for program to have Object oriented approach, it should follow these 4 pillars.

### 1. Encapsulation 
everything (all properties and methods) is wrapped inside an object (bundling all data and encapsulating in a single object)

> book.js
```bash 
class bookClass {
    constructor(title, author, release_date){
        this.title = title;
        this.author = author;
        this.release_date = release_date;
    }

    //creating a method 
    getSummary() {
        ✅everything(method/ functions) in class "bookClass" is wrapped inside the object "book3"
        const summary = `The book ${this.title} is written by ${this.author}`
        return summary
    }

}

const book3 = new bookClass('harry potter', 'rowling')
console.log(book3)
console.log("summary",book3.getSummary)

console:
bookClass {title: 'harry potter', author: 'rowling', release_date: undefined}
book.js:18 summary ƒ getSummary() {
        const summary = `The book ${this.title} is written by ${this.author}`
        return summary
    }
```
> combine all objects, inside a single capsule - encapsulation
![](img2.PNG)

> as long as the method/ function is inside the class, it follows encapsulation

### 2. Abstraction 
We abstract uneccesary data from users and allow only selected method/ properties to be invoked/ accessed 
> If we dont want user to view something like API_KEY we code it as private, i.e we are abstracting/ hiding secure/ uneccesary information from the user 

> its like encapsulation, except its hidden 
![](img3.PNG)

> abstraction is a new feature released in EcmaScript12, around July, 2021
```bash 
class bookClass {
    //private information
    ✅use # to denote the variable is private
    #API_KEY = "very secret"

    constructor(title, author, release_date){
        this.title = title;
        this.author = author;
        this.release_date = release_date;
    }

    //creating a method - a method is basically a function inside a class 
    getSummary() {
        const summary = `The book ${this.title} is written by ${this.author}`
        return summary
    }

    ✅creating a private function
    #showSomeData() {
        console.log('API')
        return 'API response'
        ✅we can access this API inside its private scope, but we cant access it outside 
    }

}

const book3 = new bookClass('harry potter', 'rowling')
✅we tried to call the private function, using the object
console.log(book3.#showSomeData())

✅we tried to call the private variable, using the object
console.log(book3.#API_KEY)

console:
Uncaught SyntaxError: Private field '#showSomeData' must be declared in an enclosing class
```
> private class features (introduced in ES12) - just use #

##### Getters & Setters 
> lets take an instance, where we want to update the property of the object and make it all uppercase, in this case you'd pass the touppercase function in the console
```bash 
    <script>
       var person = {
           name: 'reem',
           age: 20,
       };

       console.log(person.name.toUpperCase())
    </script>

console:
REEM
```
> If we have a requirment, where we want to make it uppercase inside the object itself 
```bash 
    <script>
       var person = {
           name: 'reem',
           age: 20,

           //we create a method 
           getname: function(){
               return this.name.toUpperCase()
           }
       };

       ✅we called the method, using () (this is how methods are called)
       console.log(person.getname())
    </script>

console:
REEM
```
> Why do we need getter and setters ? 
✅in order to call the method, without (), that is, in order to call a method like a property <classname>.<method>, we use getters and setters 

> why do we need getter functions? 
```bash 
    <script>
       var person = {
           name: 'reem',
           age: 20,

           ✅using getters we want to make changes in the property in the object itself and then send it to the console 
           get getname(){
               return this.name.toUpperCase()
           }
       };

       ✅<classname>.<method>
       console.log(person.getname)
    </script>
```
> why do we need setter functions?
```bash
    <script>
       var person = {
           name: 'reem',
           age: 20,

           get getname(){
               return this.name.toUpperCase()
           }
       };

       ✅over here were setting/updating the value of property, outside of the object, if we want to set a property like lowercase to this property we cannot set it outside of the object 
       person.name = 'rum'
       console.log(person.getname)
    </script>

console:
RUM
```
> using set function, we can set the value of the property we set, inside the class/object itself 
```bash 
    <script>
       var person = {
           name: 'reem',
           age: 20,

           //getter function
           get getname(){
               return this.name.toUpperCase()
           },

           ✅to set the value of the property inside the object inside use setter function 
           set setname(n){
               this.name = n.toUpperCase()
           }
       };

       person.setname = 'rum'
       console.log(person.name)
    </script>

console:
RUM
```
Getters and setters allow the defining of object accessors.
```bash 
    ✅Create an object:
      var car = {

        model: "BMW 320d",
        color: "Navy Blue",
        fuel_type: "Diesel",

        get fuel() {
          return this.fuel_type;
        },

        set fuel(fuel) {
          this.fuel_type = fuel;

    },
};

    ✅Display data from the object using a getter:
      document.getElementById("demo").innerHTML = car.fuel;

    ✅Set an object property using a setter:
      car.fuel = "Petrol"; //were setting the final fuel property 

    ✅Display data from the object:
      document.getElementById("demo").innerHTML = car.fuel_type;
```
Any objects data member (object property), can be accesed directly by using .<property_name> using setter and getter functions 

#### What if there is a situation where we want to access, but dont want to allow update ?
> Eg: anybody can access API key but nobody should be able to update it, from outside the class 

#### Q. Suppose we have a counter which can only increement we dont want anyone to be able to deecrement the counter?
```bash 
<script>
class book3 {
    #counter = 0;

    //functionality: getting
    //only expose functionality we want to give 
    ✅get value of private data member
    getCounter(){
        return this.#counter;
    }

    //functionality: setting
    ✅set value of private data member 
    setCounter(val){
        this.#counter = val
    }

    increementCounter(){
        this.#counter++;
    }
}

console.log(book3.getCounter());
console.log(book3.increementCounter());
console.log(book3.getCounter());

//setting value  
book3.val = 4
console.log(book3.getCounter())

</script>
```

### 3. Inheritance
Inherit properties and methods of parent class in child class 

### This is syntax of ES6 
```bash 
class <childclass> extends <parentclass>
```
> Inheritance.html
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <!-- 
        Example: all squares are rectangles 
        ✅rectangle (parent/ base class)
        ✅square (child/ class) 
        -->

<script src="rect.js"></script>
<script src="square.js"></script>
</body>
</html>
```

> rect.js 
```bash 
//Parent/ Base Class 
class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

const rect1 = new Rectangle(10, 15)
console.log(rect1.getArea()) //150
```

> square.js 
```bash 
//Child class - we want to inherit properties from the parent class 

✅to inherit, we use the keyword, extends 
//which means child class "square" extends the parent class "rectangle"

class Square extends Rectangle{
    constructor(side) {
    ✅to use constructor of parent, we use keyword "Super"

    //super calls constructor of parent class 
    super(side, side)
    }
}

✅creating an object 
const sqr1 = new Square(10)
//we can access getArea() function from the parent class "Rectangle"

console.log(sqr1.getArea())
```
#### this is syntax of ES5
```bash 
<childclass>.prototype = Object.create(<parentclass>.prototype);
<parentclass>.call(this, <the arguments to the constructor>)
```
> book2.html
```bash 
<script>
const createBook = (title, author, release_date) => {
     const book = {
         title: title, 
         author: author,
        release_date: release_date,
     };
     return book;
}

✅parent class 
function BookCons(title, author, release_date){
    this.title = title;
    this.author = author;
    this.release_date = release_date;
}

BookCons.prototype.getSummary = function(){
    const summary = `${this.title} : ${this.author}`
    return summary
}

✅prototype of parent class 
✅magazine is the child 
function Magazine(title, author, release_date, issue_number){

    BookCons.call(this, title, author, release_date)
    ✅once we write these arguments in (), then you dont need to
    define it here 
    // this.title = title
    // this.author = author 
    // this.release_date = release_date

    ✅we cant add issue_number in the arguments, because 
    the parent class "BookCons" doesnt have issue_number defined

    this.issue_number = issue_number
}

const book2 = new BookCons('ikigai', 'ayush', 2022)
console.log("book2",book2)
console.log("summary", book2.getSummary())

✅This is how inheritance occured in es5
✅taking prototype of parent and place it as prototype of child 

//Inheriting all function from class book to Magazine
✅taking all member functions of parent, making a copy using object.create and placing that copy in Magazine.prototype 

✅all member functions of BookCons are now member functions of Magazine 
Magazine.prototype = Object.create(BookCons.prototype)
Magazine.prototype.checkLatestIssue = function(){
    console.log('latest issue') 
}

const mag1 = new Magazine('magazine 1', 'someone', 2022, 14)
console.log("mag1",mag1)
mag1.checkLatestIssue()
</script>

console:
✅book2
BookCons {title: 'ikigai', author: 'ayush', release_date: 2022}
author: "ayush"
release_date: 2022
title: "ikigai"
[[Prototype]]: Object

book2.html:42 ikigai : ayush

✅mag1
book2.html:54 
Magazine {title: 'magazine 1', author: 'someone', release_date: 2022, issue_number: 14}
author: "someone"
issue_number: 14
release_date: 2022
title: "magazine 1"
[[Prototype]]: BookCons

latest issue
```
### 4. Polymorphism
- Poly - many 
- Morph - forms 

One name, many forms 

> If we have 2 functions with the same name 
```bash
✅If both parent and child class have a function with same name 

When called from parent object, it shows the parent object execution 

When called from the child object, it shows the child object execution, If child does not have the function, then it will fall back to parent, due to inheritance 
```
#### Types of inheritance
#### 1. single level inheritance 
```bash 
A (base class)
^
|
B (derived class)
```

> inheritance.html
```bash 
<body>
<script src="rect.js"></script>
<script src="square.js"></script>
</body>

console:
✅When called from parent object, it shows the parent object execution 
150
rect.js:13 a rectangle

✅When called from the child object, it shows the child object execution
square.js:21 100
square.js:14 a square
```

> rect.js 
```bash 
class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    whoami(){
        console.log('a rectangle')
    }
}

const rect1 = new Rectangle(10, 15)
console.log(rect1.getArea()) //150
rect1.whoami()
```

> square.js 
```bash 
class Square extends Rectangle{
    constructor(side) {
      //to use constructor of parent, we use keyword "Super"

      //super calls constructor of parent class 
      super(side, side)
    }

    ✅one name, many forms 
    whoami(){
        console.log('a square')
    }
}

//creating an object 
const sqr1 = new Square(10)
//we can access getArea() function from the parent class "Rectangle"
console.log(sqr1.getArea())
sqr1.whoami()
```

#### 2. Multilevel Inheritance 
```bash
A (base class)      ✅shape 
^
|
B (derived class)   ✅rectangle  ✅square 
^
|
C (derived class)
```

> inheritance.html
```bash 
<body>
<script typw="module" src="inheritance.js"></script>
</body>
```
> rect.js 
```bash 
class Rectangle {
    constructor (width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    whoami(){
        console.log('a rectangle')
    }
}

// const rect1 = new Rectangle(10, 15)
// console.log(rect1.getArea()) //150
// rect1.whoami()

✅Rectangle class created as module and exported 
export default Rectangle

```
> square.js 
```bash
✅importing rectangle 
import Rectangle from "./rect.js"

class Square extends Rectangle{
    constructor(side) {
      super(side, side)
    }

    whoami(){
        console.log('a square')
    }
}

// creating an object:
// const sqr1 = new Square(10)

// we can access getArea() function from the parent class "Rectangle"
// console.log(sqr1.getArea())
// sqr1.whoami()

✅square is created as module and exported 
export default Square
```
> inheritance.js 
```bash 
✅both modules we exported are imported here 
import Square from "./square.js";
import Rectangle from "./rect.js";

const sqr1 = new Square(10)
console.log("square",sqr1.getArea())
sqr1.whoami()

const rect1 = new Rectangle(10, 15)
console.log(rect1.getArea()) //150
rect1.whoami()

```
2. Multilevel inheritance 
```bash
A (base class)    ✅shape 
^
|
B (derived class) ✅rectangle  ✅circle
^                  ^
|                  |
C (derived class) ✅square 
```
```bash 
//shape (base class)
//children:  circle    rectangle
//children:              square  
```
> inheritance.html
```bash 
<body>
<script type="module" src="inheritance.js"></script>
</body>

console:
square 100
square.js:10 a square
inheritance.js:11 150
rect.js:15 a rectangle
inheritance.js:15 circle 78.53981633974483
```
> shape.js 
```bash 
class Shape {
    getArea(){
        console.log('im just a shape')
    }

    whoami(){
        console.log("shape bro")
    }
}

export default Shape; 
```

> rect.js 
```bash 
import Shape from "./shape.js"

class Rectangle extends Shape {
    constructor (width, height){
        super();
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    whoami(){
        console.log('a rectangle')
    }
}

// const rect1 = new Rectangle(10, 15)
// console.log(rect1.getArea()) //150
// rect1.whoami()

//Rectangle class created as module and exported 
export default Rectangle
```

> square.js 
```bash 
//importing rectangle 
import Rectangle from "./rect.js"

class Square extends Rectangle{
    constructor(side) {
      super(side, side)
    }

    whoami(){
        console.log('a square')
    }
}

//creating an object 
// const sqr1 = new Square(10)
// //we can access getArea() function from the parent class "Rectangle"
// console.log(sqr1.getArea())
// sqr1.whoami()

//square is created as module and exported 
export default Square
```

> circle.js 
```bash 
import Shape from "./shape.js"
class Circle extends Shape{
    constructor(radius){
        //since we extend it from parent class shape, thats why to indicate that this is a child, were using super() class
        super()
        this.radius = radius
    }

    getArea()
    {
        return Math.PI * this.radius * this.radius
    }

    whoami(){
        console.log('a circle bro')
    }
}

export default Circle
```
#### Ways to store data on the browser 
```bash    
                    capacity     expires        storage location
1. local storage     10mb        never          browser only
2. session storage    5mb        on tab close   browser only 
3. cookies            4kb        manually set   browser & server 

cookies are stored on the browser, but cookies are sent to the server along with your request, everytime a user requests something from the server 
```
> storage mechanisms:
```bash 
    <script>
      ✅1. local storage is persistent; its permanent until its removed 
      localStorage.setItem('key', 'value')
      console.log(localStorage.getItem('key'))
      localStorage.removeItem('key')

      ✅2. session storage- lasts until one session 
      sessionStorage.setItem('key', 'value')
      console.log(sessionStorage.getItem('key'))
      sessionStorage.removeItem('key')

      ✅3. cookies 
      //document.cookie allows us to set cookie 

      ✅name-value pairs must not contains any whitespace character, commas or semicolons 
      document.cookie = `name=reem; expires=` + new Date(2022, 1, 2).toUTCString()

      //date: year, month, day

      //allows us to view cookie 
      console.log(document.cookie)
    </script>

console:
value
call.html:20 value
call.html:29 name=reem
```
### Cookies 
Cookies are primarily for reading server-side, local storage can only be read by the client-side.

stores data on the browser which can be later updated also. 
- keep me signed in/ remember me 
- for tracking/ showing ADS 
- these cookies use our data and share to third part apps, which throws relevant ads out to us 

Cookies are are a part of the browser, which are saved via the  Web API. It's referenced via the web API. It stores data in key value format in the browser. 
- to access it, we use document.cookie in console 

> Cookie syntax
```bash 
key=value; key=value; key=value;
```
```bash
document.cookie;

console:
'OptanonAlertBoxClosed=2022-01-15T11:29:13.446Z; OptanonConsent=isIABGlobal=false&datestamp=Sat+Jan+15+2022+16%3A59%3A13+GMT%2B0530+(India+Standard+Time)&version=6.10.0&hosts=&landingPath=NotLandingPage&groups=C0003%3A1%2CC0004%3A1%2CC0002%3A1%2CC0001%3A1; _ga=GA1.2.2024221433.1642753769'

typeof(document.cookie)

console:
'string'

let cookie_arr = document.cookie.split(';')
undefined


cookie_arr;
(3) ['OptanonAlertBoxClosed=2022-01-15T11:29:13.446Z', ' OptanonConsent=isIABGlobal=false&datestamp=Sat+Ja…ups=C0003%3A1%2CC0004%3A1%2CC0002%3A1%2CC0001%3A1', ' _ga=GA1.2.2024221433.1642753769']
```
> Whenever you make a network request, cookies will always be sent by server, the insta server undertands who the user is through the cookie which is a unique identifier which insta server assigns to the user 

- cookie hijacking is when someone tries to use your cookie to impersonate you

### CRUD operations on cookie 
```bash 
    <h2>Cookies</h2>
    <script>
        ✅1. create a cookie 
        //cookie is a string
        //cookie is key-value pair 
        let key = "userid"
        let val = "ayush"
        let cookie_str = `${key}=${val}`
        document.cookie = cookie_str

        //create another cookie
        key = "role"
        val = "instructor"
        cookie_str = `${key}=${val}`
        document.cookie = cookie_str

        //create another cookie 
        key = "name"
        val = "Angel Priya"
        cookie_str = `${key}=${val}`
        document.cookie = cookie_str

        ✅2. Update Cookie
        //in order to update, give the same key and change the val 
        key = "role"
        val = "instructor2"
        cookie_str = `${key}=${val}`
        document.cookie = cookie_str

        ✅3. Read cookie - returns all cookies in this particular domain 
        let all_cookies = document.cookie;
        all_cookies = all_cookies.split("; ")
        const obj = {}
        all_cookies.forEach(element => {
            const key = element.split("=")[0]
            const value = element.split("=")[1]

             //using array destructuring it would look like this 
            //[key, value] = element.split("=")
            obj[key] = value
        })
        console.log("object",obj)
        console.log("allcookies",all_cookies)


    </script>

console:
✅object - this returned all the key names 
{userid: 'ayush', name: 'Angel Priya', role: 'instructor2'}
name: "Angel Priya"
role: "instructor2"
userid: "ayush"
[[Prototype]]: Object

✅allcookies - this returned both key-value pairs 
(3) ['userid=ayush', 'name=Angel Priya', 'role=instructor2']
0: "userid=ayush"
1: "name=Angel Priya"
2: "role=instructor2"
length: 3
[[Prototype]]: Array(0)
```
✅Delete a cookie
We can set a cookie for an interval of time, after that time we can explicitly set it to expire 
> bank websites have 30-45mins of cookie expiry 
> autofilling credentials on websites is done by the browser, not by cookies
> autofill forms is not done by cookies, its done by the browser 

```bash 
        key="login_status";
        value= true;

        ✅we use date object to set the expiry date 

        const date = new Date()

        //toUTCstring() converts date to UTC string 
        console.log("cuurent timestamp",date.toString())

        console.log("utc",date.toUTCString())
        //utc returns gmt time format 

        let current_minutes = date.getMinutes()

        current_minutes+=10
        date.setMinutes(current_minutes)

        let expired = date.toUTCString() //converts date to string (returns GMT format) 
        console.log("expired time",expired)

        ✅we can set timestamp we want it to expire
        //to do this, we convert it to UTC string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
        //UTC format is the standard format 

        cookie_str = `${key}=${value}; expires=${expired}`
        document.cookie = cookie_str //to access cookie we use this 

        //in order to delete, we need to set expiry in the past 
        //instead of currentmins+=10, do currentmins-=10
    </script>

console:
cuurent timestamp    Sun Jan 23 2022 21:09:12 GMT+0530 (India Standard Time)
deletecookie.html:66 utc Sun, 23 Jan 2022 ✅15:39:12 GMT
deletecookie.html:75 expired time    Sun, 23 Jan 2022 ✅15:49:12 GMT
```
#### Cookies Vs Sessions 
- Keep me logged in, is done by cookies, cookies can store data for more than one time use, when you log out of the browser, its not deleted, its stored on the server side. Cookie is persistent/permanent until the expiry, session will be removed when browser is closed.session is just used for that one time use, when browser is closed, the session is closed, its stored on the client side. 

- cookies sent to server with every netowrk call, sessions are in browser only.
- cookies are small (4kb) / sessions are big (128kb)
- cookies are string only / sessions can store complicated objects also.
- cookie was before HTML5 also / session was introduced in HTML5

> sessions can be used (frame data stored as a buffer in sesion storage)
> instagram scroll - next 20 images are loaded and saved in the session storage 

### Scope specifier 
var , let , const 

```bash 
        ✅var can be re- initialised
        var a = 10 
        console.log(a) //10

        var a = 20
        console.log(20) //20

        function fn(){
            //var cannot be accessed outside of its function, var is functional scoped, var is not global scoped 
            var a= 30 
            console.log(a) //30
        }
        fn() 

        function fn2(){
            console.log(a)
        }
        fn2() //20
        console.log("a",a) //20 

        //this function below is truly global scoped 
        //which can only happen when we havent mentioned any access specifier 
        function fn3(){
            a = 40
        }
        fn3() //40

        //let is block scoped, you cannot access let outside of its block of scope 
        {
            let b = 80
            console.log(b)
        }
        console.log(b)


        //hoisting only happens on access specifiers(let/ var /const)
        console.log(c)
        let c = 90 

console:
10
var.html:17 20
var.html:22 30
var.html:28 20
var.html:31 a 20
var.html:43 80
var.html:45 Uncaught ReferenceError: b is not defined
```
> var is functional scoped: cannot be accesed outside its scope 
```bash 
    <script>
        function fn2(){
            var a = 20
            console.log("inside",a)
        }
        fn2() 
        console.log("outside",a) //20 

    </script>

console:
var.html:14 inside 20
var.html:17 Uncaught ReferenceError: a is not defined
```
> an example 
```bash 
    <script>
        function fn4(){
            var o = 3
            console.log(o) //3 -var 
        }

        fn4()
        console.log(o) //reference error -var is functional scoped 

    </script>

console:
var.html:14 3
var.html:19 Uncaught ReferenceError: o is not defined
```
> an example 
```bash 
    <script>

✔ leaking of variable 

        function fn4(){
            //o created through var scoping 
            //p is created through global scoping, p is not automatically created as var 
            var o = p = 3
            console.log(o) //3 -var 
            console.log(p) //3 -global
        }

        fn4()

        console.log(p) //3 -gloabl can be accessed throughout
        console.log(o) //reference error -var is functional scoped 

    </script>

console:
3
var.html:19 3
var.html:24 3
var.html:25 Uncaught ReferenceError: o is not defined
```
> example 
```bash 
    <script>
        function fn(){
            var x = 23 

            function inner(){
                x++
                console.log(x)
                var x = 43
                //hoisting moves x=43 at the top of the scope which is the inner(), so it would be undefined, because var doesnt support hoisting, so x will be undefined, when we do console.log(x) it says Nan

            }
            inner()
        } fn()
    
    </script>

console:
Nan
```
> example 
```bash 
    <script>
        function fn(){
            var x = 23 

            function inner(){
                x++
                console.log(x)
                x = 43
            }
            inner()
        } fn()
    </script>

console:
24
```
> constructor - construct the object of class and return the object 
### Static Keyword 
- static data member 
- static member function 

Static data member or member function does not need an object to be used. I can directly use that function or the property without instantiation (creating object using new keyword)

> oop.js 
```bash 
class Square {
    //private members must be initialized 
    #side = 0 

    ✅static member 
    static APIKEY = "bro"

    constructor(side){
        this.#side = side 
    }

    getArea(){
        return Math.pow(this.#side, 2)
    }

    getPerimeter(){
        return this.#side *4
    }

    ✅static method 
    //this function doesnt use any obejct properties 
    //to create static method, use static keyword 
    //dont need an object to access static function 
    static whoAmI(){
        console.log('hello')
    }
}

const sqr = new Square(5)
console.log(sqr.getArea())
console.log(sqr.getPerimeter())

//invoking a static method, dont need an object to access it
//static is a part of the class, not of object 
Square.whoAmI()

//invoking a static member 
console.log(Square.APIKEY)

console:
25
oop.js:30 20
oop.js:24 hello
oop.js:37 bro
```
### SINGLETON structure 
each class will have only one object, which helps in DB connection 

