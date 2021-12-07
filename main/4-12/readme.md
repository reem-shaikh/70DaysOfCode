
### History Of JS
1. Netscape created JS in 1996 and submitted the code to ECMA
2. Release one: EcmaScript 1 (1997)
ECMA (European Computer Manufacturers Association)
3. Release two: EcmaScript 2 (1998)
4. Release three: EcmaScript 3 (1999)
5. Release five: Ecmascript 5(2009)
   five versions:
   - Ecmascript 5.1 (2011)
#### 6. Release 6: Ecmascript 2015 (ES6): major update 
- new methods 
- OOPS Concepts 

7. Ecmascript 2016 (ES7)
8. Ecmascript 2017 (ES8)
9. Ecmascript 2018 (ES9)

### Arrow Functions 
Before ES6 these were 2 methods of defining functions 

```bash
 <script>
       //1st method
       function hello()
       {
           console.log("hello")
       }
       hello();

       //2. 2nd method 
       let hello = function(){
           console.log("hello")
       }
       hello();
  </script>

console:
hello 
hello 
```

### In case of Arrow Functions,
the code is shortened 
```bash
<script>
      //in case of arrow functions
      let hello = () => console.log("hello");

      hello(); //calling function
</script>

console:
hello
```
Before ES6 code was written like this 
```bash
<script>
      let welcome = function(name)
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
      //used before ES6 versions 
</script>

console:
hello, reem 
```
However, in ES6 after arrows were introduced these were changes made 
```bash
  <script>
      let welcome = (name) =>
      {
          return `hello, ${name}`
      }
      console.log(welcome('reem'))
  </script>

console:
hello, reem
```
#### we can call more than one parameters in the function as well
```bash
 <script>
      let welcome = (name, age) =>
      {
          return `hello, ${name} ${age}`
      }
      console.log(welcome('reem', 20))
  </script>

console:
hello, reem 20
```
#### we can reduce the entire function to a single line 
we can remove the return statement
```bash
<script>
    let welcome = (name, age) => `hello, ${name} ${age}`
    console.log(welcome('reem', 20))
</script>

console:
hello, reem 20
```
#### you can remove the parenthesis, if there is only one parameter 
```bash
 <script>
    let welcome = name => `hello, ${name}`
    console.log(welcome('reem'))
 </script>

 console:
hello, reem 
```

# OOPS
introduced in ES6 
- its a coding style which makes code 
1. more reusable 
2. well organised code 
3. easier to debug 
4. used in js frameworks
5. best for medium to large website projects 

### JS is an object oriented programming language 
OOPS features:
1. objects
2. classes
3. encapsulation
4. Inheritance 

## 1. Objects and classes 

## Objects 
##### (object is an instance of a class)
##### Using class we can create many objects, and they all have values which either have methods and properties

Object is a unique entity with property: value/ method 

## Class
EcmaScriptES6 provides the keyword class, making it very easy to create class
Using a class, we can create many objects, and each one of those objects share 
the same blueprint/ the same methods and properties that is encapsulated in that 
class

Class contains
1. properties  (declared inside the class)
2. Methods     (function inside the class/ object)

```bash
<script>
    class hello{
        //can create properties and methods inside class 
        message() //method
        {
            console.log("method")
            //you need to create an object to call it 
        }
    }

    let a = new hello();
    //variable 'a' is an object 

    a.message();
</script>

console:
method 
```
We can call multiple methods of the same class using the same defined object 
```bash
 <script>
    class hello{
        //can create properties and methods inside class 
        message() //method
        {
            console.log("method")
            //you need to create an object to call it 
        }

        sorry() //method
        {
            console.log("sorry")
        }
    }

    let a = new hello();
    //variable 'a' is an object 

    a.message();   
    a.sorry();
</script>

console:
method
sorry
```

### Types of methods in JS 
1. Constructor 
Whenever we create a class object constructor is called automatically 

```bash
 <script>
    class student{
        constructor()
        {
            console.log("constructor")
        }
    }

    //class object created 
    let a = new student()
    </script>

console:
constructor
```

2. Prototype 
Its used to calculate variables defined inside constructor 

```bash 
<script>
    class student{
        constructor() //constructor 
        { 
            let name;  //property defined 
            console.log("constructor")
        }

        hello()  //prototype method 
        {
            console.log("hello " + this.name)  
            //variable is defined inside the constructor      
        }
    }

    let a = new student()
    You have to create an object, before invoking a prototype

    Until you don't invoke the prototype, it wont be called
    //prototype method call
    a.name = "reem shaikh"
    a.hello()
</script>

console:
constructor
hello reem shaikh
```
another way to call a prototype 
```bash
 <script>
    class student
    {
        constructor(name) //constructor 
        { 
            let gname = name;  //property defined 
            console.log("constructor")
        }

        hello()  //prototype method 
        {
            console.log("hello " + this.name)  
            //variable is defined inside the constructor      
        }
    }

    //the prototype method call is happening inside the object call, because in the constructor we passed the parameter name, instead of simply defining it, in the constructor function
    let a = new student("reem shaikh")
  
    // a.name = "reem shaikh"
    a.hello()
 </script>

console:
 constructor
 hello reem shaikh
```
it also works like this 
```bash
<script>
    class student{
        constructor() //constructor 
        { 
            let sname = name; 
            //property defined 
            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.name)  
            //variable is defined inside the constructor      
        }
    }
    
    let a = new student();
  
    a.name = "reem shaikh"
    a.hello();
</script>

console:
 constructor
 hello reem shaikh
```

```bash
<script>
    class student{
        constructor(name) //constructor 
        { 
            //we add this property and call it in hello function
            ✅this.sname = name; 

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            ✅console.log("hello " + this.sname)  
            //variable is defined inside the constructor      
        }
    }

    let a = new student("reem");
  
    // a.name = "reem shaikh"
    a.hello();
</script>

console:
constructor
hello reem
```

Adding more than 2 parameters 
```bash
<script>
    class student{
        constructor(name,age)   //2 parameters
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()                //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)  
            //variable is defined inside the constructor      
        }
    }

    let a = new student("reem", 20);
  
    // a.name = "reem shaikh"
    a.hello();
</script>

console:
constructor
hello reem20
```
We can create many objects with one class 
```bash
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }
    }

    let a = new student("reem", 20);
    a.hello();

    //we can create many objects with one class
    let b = new student("d", 1);
    b.hello();
</script>

console:
constructor
hello reem20
constructor
hello d1
```

3. Static 
you dont need an object, to call a static method

you cannot callstatic method through an object
```bash
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }

        static staticMethod()
        {
            console.log("static function")
        }
        //❌we cannot create an object and call it, through the object name,
        it throws an error 
    }

    let a = new student("reem", 20)
    a.staticMethod()
</script>

console:
constructor
Uncaught TypeError: a.staticMethod is not a functionat object.html:36
```
However, you can call static method, through the class function 
```bash 
 <script>
    class student{
        //2 parameters 
        constructor(name,age) 
        { 
            //we add this property and call it in hello function
            this.sname = name; 
            this.sage = age;

            console.log("constructor")
        }

        hello()         //prototype method 
        {
            console.log("hello " + this.sname  + this.sage)     
        }

        static staticMethod()
        {
            console.log("static function")
        }
    }

    let a = new student("reem", 20)
    student.staticMethod()
 </script>

console:
constructor
static function
```

#### Inheritance 
child class inherits from parent class which contains certain methods and properties 
> child wants to inherit from parent class 
> Class vegetables wants to inherit properties/methods from class fruits 

```bash
 <script>
        class fruits //base class 
        {
            //properties & methods
        }
        class vegetables extends fruits 
        // derived class 
        {
            //properties & methods
        }
        let f = new fruits(); // can access only fruits properties and methods 

        let v = new vegetables();//can access both vegetables and fruits class and properties 
 </script>
```
example of inheritance 
```bash
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }

       class manager extends employee
       {

       }

       //let e = new employee("reem");
       //constructor automatically called 
       
       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

 </script>

 console:
 constructor reem
```
However if you try to call a constructor in derived class, it will throw an error 
```bash
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }
        class manager extends employee
       {   constructor()
           {
           console.log("manager")
           }
       }


       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

   </script>

console:
manager 

inheritance.html:22 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new manager (inheritance.html:22)
    at inheritance.html:27
manager @ inheritance.html:22
(anonymous) @ inheritance.html:27
```
### Super() class
to call both the constructors, we'll use super() class
```bash 
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
     }

       class manager extends employee
       {   constructor()
           {
           super()
           console.log("manager")
           }
       }
       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

</script>

console:
constructor undefined
manager
```
The variable will be displayed in the console, if its defined in the derived class 
constructor 
```bash
<script>
       class employee{
           constructor(name)
           {
              console.log("constructor " + name) 
           }
       }

       class manager extends employee
       {   constructor(name) ✅
           {
           super()
           console.log("manager" + name)
           }
       }

       let m = new manager("reem");
       //this function is inheriting the base class properties and methods 

</script>
``` 
### Inheriting prototype method from derived to base class 
```bash
  <script>
       class employee{
           constructor(name)
           {
              this.empname = name 
              console.log("constructor " + name) 
           }

           info() //prototype method 
           {
             console.log("info constructor" + this.empname)
           }
       }

       class manager extends employee
       {   
       }


       let m = new manager("reem");
  
       //to call prototype 
       m.info()

 </script>

console:
constructor reem
info constructorreem
```
### Calling prototype method in the base class to the prototype method in the derived class
### Using Super keyword 

```bash 
 <script>
       class employee{
           constructor(name)
           {
              //1. called first 
              this.empname = name 
              console.log("constructor " + name) 
           }

           info() //prototype method 
           {
             console.log("info constructor" + this.empname)
           }
       }

       class manager extends employee
       {   
           info() //prototype method 
           {
             super.info() //called second 
             console.log("manager info constructor" + this.empname)
             //called third 
           }
       }
       let m = new manager("reem");
  
       //to call prototype 
       m.info()
 </script>

console:
constructor reem
info constructorreem
manager info constructorreem
```
Passing multiple parameters in the constructor 
```bash 
<script>
       class employee{
           constructor(name, age, salary)
           {
              //1. called first 
              this.empname = name 
              this.empage = age
              this.empsalary = salary

              document.write("constructor " + name + age + salary)  
           }

           info() //prototype method 
           {
             document.write(`
             <h3>info constructor </h3>
             ${this.empname} <br>
             ${this.empage}  <br>
             ${this.empsalary}`)
           }
       }

       class manager extends employee
       {   
           
       }
       let m = new manager("reem", 20, 1000000);
  
       //to call prototype 
       m.info()
</script>

document:
constructor reem201000000
info constructor
reem
20
1000000
```
### 1.1 Object Literal 
comma seperated list of name-value pairs inside of curly braces 
    1. name: value 
    or
    2. name: method 

```bash
<script>
        
        let car = {
            name: 'Maruti 800',
            topSpeed: 89,
            run: function()
            {
                console.log("car is running")
            }
        }
        console.log(car);
        car.run();
        car.name;
</script>

console:
{name: 'Maruti 800', topSpeed: 89, run: ƒ}
car is running
```
We can create objects in 2 ways 
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

