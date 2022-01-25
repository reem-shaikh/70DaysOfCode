### OOPS 
- object oriented programming(coding methadology) was introduced in JS in ES6 
- its a coding methodology/ pattern which makes the code more modular and reusable, makes code well organized and its best used for medium to larger projects using node.js etc 
- OOPS is easier to debug 

> What is class & object?
class - blueprint 
object - represents class, there can be many objects that can be created for a particular class 

Every class has its individual properties and values 
```bash
Class calculation
    ✅properties
    let a 
    let b 
    let c 

    ✅methods used to manipulate properties that are already declared 
    sum()_
    c= a + b
    return c 
```
#### 3 types of methods:
1. constructor - called by default, if we want to assign value to a property
2. prototype - cannot be called by default, it needs to be invoked 
3. static - cannot be called by object reference, can only be called by class reference 
```bash 
    <script>
        class hello{
            ✅constructor function - automatically called 
            constructor(name, age){
                //we can define property inside constructor, which can be used in other methods
                this.sname = name
                this.sage = age 
                console.log('constructor function')
            }

            ✅Protoype methods 
            method(){
                console.log('hello: ' + this.sname + this.sage)
            }

            //class can contain multiple methods 
            message(){
                console.log('hi')
            }

            message2(){
                console.log('bye')
            }

            //static method   
            static staticMethod(){
                console.log('static')
            }

        }

        ✅Calling a prototype method 
        //to use methods, you need to create an object 
        //eg: over here, we take a as an object 
        let a = new hello()

        //one object can be used to call many methods 
        a.message()           ✔hi
        a.message2()          ✔bye

        ✅calling a prototype method using the values defined in constructor 
        //were passing the constructor values like this 
        let b = new hello('reem shaikh', 20)
        //b.name = 'reem shaikh'
        b.method()           ✔reem shaikh20

        let c = new hello('itsrumbro', 20)
        c.method()           ✔itsrumbro20

        ✅calling a static method 
        hello.staticMethod() ✔static 
    </script>

console:
constructor function
index.html:27 hi
index.html:31 bye
index.html:17 constructor function
index.html:22 hello: reem shaikh20
index.html:17 constructor function
index.html:22 hello: itsrumbro20
index.html:36 static
```
### Class Inheritance 
> What is inheritance?
Inheriting properties and methods of base class from derived class.

1. single level inheritance 
```bash 
A (base class)
^
|
B (derived class)
```

2. Multilevel Inheritance 
```bash
A (base class)
^
|
B (derived class)
^
|
C (derived class)
```
> example 
```bash 
    <script>
       class Employee{
           constructor(name){
               console.log("constructor : employee" + name)
           }
       }

       class manager extends Employee{

       }

       let a = new manager('reem')
    </script>

console:
constructor : employeereem
```
> however, when we define constructor inside the derived class, it throws an error 
```bash 
    <script>
       class Employee{
           constructor(name){
               console.log("constructor : employee" + name)
           }
       }

       class manager extends Employee{
        constructor(){
               console.log("constructor : manager")
           }
       }

       let a = new manager('reem')
    </script>

console:
constructor : manager
index.html:19 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new manager (index.html:19:24) at index.html:24:16
```
> We can call both constructors of both base class and derived class by using super() keyword 
```bash 
    <script>
       class Employee{
           constructor(name){
               console.log("constructor : employee" + name)
           }
       }

       class manager extends Employee{
        constructor(){
               ✅super function ensures whether there is a constructor method in base class or not?
               if there is, it will call it 
               super()
               console.log("constructor : manager")
           }

       }

       let a = new manager('reem')
    </script>

console:
constructor : employeeundefined
index.html:22 constructor : manager
```
> using the derived class object to call base class object 
```bash 
    <script>
       class Employee{
           constructor(name){
               this.empname = name 
               console.log("constructor : employee")
           }

           info(){
            console.log("constructor : employee" + this.empname)
           }
       }

       class manager extends Employee{
        constructor(){
               //super function ensures whether there is a constructor method in base class or not?
               //if there is, it will call it 
               super()
               console.log("constructor : manager" + this.empname)
           }

       }

       let a = new manager('reem')

       //calling method of base class using object of our derived class 
       a.info()
    </script>

console:
index.html:14 constructor : employee
index.html:25 constructor : managerreem
```
> to call the method of base class, from the method of derived class 
```bash 
    <script>
       class Employee{
           constructor(name){
               this.empname = name 
               console.log("constructor : employee")
           }

           info(){
            console.log("constructor : employee" + this.empname)
           }
       }

       class manager extends Employee{
        info(){
            //super.info() returns the info() class from the parent class 
            super.info()
            console.log("constructor : manager" + this.empname)
           }
       }

       let a = new manager('reem')

       //calling method of base class using object of our derived class 
       a.info()
    </script>

console:
constructor : employee
index.html:18 constructor : employeereem
index.html:26 constructor : managerreem
```