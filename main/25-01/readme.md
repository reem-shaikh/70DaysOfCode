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

### call 
```bash 
    <script>
       let name = {
          firstname:'reem',
          lastname: 'shaikh',
          printFullname: function(){
            console.log(this.firstname + " " + this.lastname)
          }
       }
       ✅name.printFullname();

       let name2 = {
           firstname: 'sachin',
           lastname: 'tendulkar',
       }

       //in order to borrow function from object "name"
       ✅name.printFullname.call(name2)
       //call(reference)
    </script>

console:
reem shaikh
call.html:16 sachin tendulkar
```
> we can even seperately invoke printFullName 
```bash 
    <script>
        //seperately declaring printfullname
        let printFullname = function(){
            console.log(this.firstname + " " + this.lastname)
        }

        let name = {
          firstname:'reem',
          lastname: 'shaikh',
       }

       let name2 = {
           firstname: 'sachin',
           lastname: 'tendulkar',
       }
       printFullname.call(name2)
       //call(reference)
    </script>

console:
sachin tendulkar 
```
> parameters inside the function 
```bash 
    <script>
        //seperately declaring printfullname
        let printFullname = function(hometown){
            console.log(this.firstname + " " + this.lastname + "from" + hometown)
        }

        let name = {
          firstname:'reem',
          lastname: 'shaikh',
       }

       let name2 = {
           firstname: 'sachin',
           lastname: 'tendulkar',
       }
       printFullname.call(name2, 'mumbai')
       //call(reference to the variable, arguments of the function)
    </script>

console:
sachin tendulkarfrommumbai
```
### apply - arguments passed as an array list 
```bash 
    <script>
        //seperately declaring printfullname
        let printFullname = function(hometown){
            console.log(this.firstname + " " + this.lastname + "from" + hometown)
        }

        let name = {
          firstname:'reem',
          lastname: 'shaikh',
       }

       let name2 = {
           firstname: 'sachin',
           lastname: 'tendulkar',
       }
       printFullname.apply(name2, ['mumbai'])
       //apply(reference to the variable, array [arguments of the function])
    </script>

console:
sachin tendulkarfrommumbai
```
### Bind 
```bash 
    <script>
        //seperately declaring printfullname
        let printFullname = function(hometown){
            console.log(this.firstname + " " + this.lastname + "from" + hometown)
        }

        let name = {
          firstname:'reem',
          lastname: 'shaikh',
       }

       let name2 = {
           firstname: 'sachin',
           lastname: 'tendulkar',
       }

       let printMyName = printFullname.bind(name2, ['mumbai'])
       //bind(reference to the variable, array [arguments of the function])

       ✅creates a copy of printfullname, bind it to name2 object and return a function 
       ✅it returns a function which can be logged later on 
       console.log(printMyName)
       printMyName()
    </script>

console:
ƒ (hometown){
            console.log(this.firstname + " " + this.lastname + "from" + hometown)
        }

call.html:13 sachin tendulkarfrommumbai
```
### closures 
```bash 
    <script>
        ✅closure is a function which is bundled together with its lexical environment
        //function + lexical scope => closure 
        function x(){
            var a = 7 
            function y(){
                console.log(a)
            }
            //when y() tries to run it tries to find a in its scope, when it doesnt find its value delcaration it tries to find it in its parent scope 
            y()
        }
        x()
    </script>

console:
7
```
> an example where the value is preserved due to closure 
```bash 
    <script>
        function x(){
            var a = 7 

            function y(){
                console.log(a)
                ✅the value is stored by reference (variable itself is passed)
            }
            ✅when function are returned from another function, they preserve their lexical scope

            ✅function + lexical scope => closure is returned  
            return y
        }
        var z = x()
        console.log(z)
        ✅due to closure, value of a is preserved 
        z()
    </script>

console:
call.html:21 ƒ y(){
                console.log(a)
            }

call.html:15 7
```
> since the value preserved by closure, is call by reference (i.e instead of preserving a copy of the value, it preserves the variable itself)
```bash 
    <script>
        function x(){
            var a = 7 

            function y(){
                console.log(a)
            }
            a=100
            ✅when function are returned from another function, they preserve their lexical scope 
            return y
        }
        var z = x()
        console.log(z)
        //due to closure, value of a is preserved 
        z()
    </script>

console:
ƒ y() {
      console.log(a)
      }

call.html:15 100
```
> its trying to access parent scope and parent's parent scope 
```bash 
    <script>
        function z(){
            var b = 900
            function x(){
                var a = 7 
                function y(){
                    console.log(a, b)
                }
                y()
            }
            x()
        }
        z()
    </script>

console:
7 900
```
```bash
Closures are used in:
- module design pattern 
- currying 
- functions like once 
- memoize 
- maintaining state in async world 
- settimeouts 
- iterators 
```
### var, let & const 
```bash 
    <script>
        ✅variables declared with var in JS is function scoped 
        var name = 'reem'
        name = 'resin'
        //value gets updated 
        console.log('var',name)

        function modJS1(love)
        //function scope starts 
        {
            if(love)
            { //block scope starts 
                var name = 'vinod';
                var sname = 'thapa';
            } //block scope ends 
            console.log('my name is'+ name + " "+ sname)
        }
        //function scope ends 
        modJS1(true)


        ✅variables declared with let & const in JS is block scoped 
        let Name = 'rum'
        Name='resin'
        console.log('let', Name)

        function modJS(love)
        //function scope starts 
        {
            if(love)
            { //block scope starts 
                let name = 'vinod';
                const sname = 'thapa';

                console.log('my name is'+ name + " "+ sname)
            } //block scope ends 
        }
        //function scope ends 
        modJS(true)

        ✅const - value cannot be changed in the future 
        const cname = 'artsy'
        console.log('const',cname)
    </script>

console:
var resin
call.html:25 my name isvinod thapa
call.html:34 let resin
call.html:44 my name isvinod thapa
call.html:52 const artsy
```
> let & const in TDZ 
```bash 
    <script>
        ✅const & let also works on hoisting, except its placed in the TDZ, thats why it throws reference error 
        console.log('let', a)
        let a = 10 
        ✅we can access a even before we have initialised it 

        ✅TDZ is the time since when the let variable was consoled and its initialised a value 
        //(TDZ for a is before line 16)

        ✅when you try to access a variable inside TDZ it throws a reference error 
    </script>

console:
call.html:12 Uncaught ReferenceError: Cannot access 'a' before initialization at call.html:12:28
```
### CORS 
(cross origin resource sharing) - uses additional HTTP headers to tell the browser whether a specific web app can share resource with another web app (provided both the web apps have different origins)

> before CORS, browser didnt allow 2 different origins to share resoures with other resources 
> for instance, resource sharing between these 2 origins (before CORS) was not allowed 
```bash 
htpp://akshaysaini.in       request data from       different domains      google.com
                                                    different sub-domains  api.akshaysaini.in
                                                    different ports        akshaysaini.in:5050
                                                    different protocols    htpps://akshaysaini.in
```

> First lets understand the 'OPTIONS' http method, before going any further 
**OPTIONS** (pre flight)- this is a request made by the user agent/ browser by default 
- it is created to **check whether the actual request will be succesful or not** 
> before we start uploading, we check if server is ready to accept or not using OPTIONS
> options asks server whether the server is ready to take a **PUT request (PUT is used to update complete resource at the server)** coming from a particular client

- user agent is a peice of software which connects the humans to the server 
- there are user agents other than browser 
> eg: Siri, Google home, amazon home 

#### Difference between simple request & preflight request?
HTTP messages are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server.

HTTP Requests are used for client to connect with the server. HTTP methos are used to specify what the server wants the client to do with the data 

##### Format of request and response message:
This is the format in which request message is sent from client -> server
>> 1. Request HTTP Header 
- general header (contains information about the date and time client requested the request message)
- request/response header (contains URL/data we want to send and HTTP method we choose to send the data with, authentication(secret key), content type of the date we choose to send, content size)
- entity header (contains information about the html code (code length, programming language used))
***Every HTTP request has a set of mandatory and optional headers.***

```bash 
1. Standard headers
A-IM
Accept
Accept-Charset
Accept-Encoding
Accept-Language
Accept-Datetime
Access-Control-Request-Method
Access-Control-Request-Headers
Authorization
Cache-Control
Connection
Content-Length
Content-Type
Cookie
Date
Expect
Forwarded
From
Host
If-Match
If-Modified-Since
If-None-Match
If-Range
If-Unmodified-Since
Max-Forwards
Origin
Pragma
Proxy-Authorization
Range
Referer
TE
User-Agent
Upgrade
Via
Warning

2. Non-standard headers
Dnt
X-Requested-With
X-CSRF-Token
Standard headers

```
>> 2. Request HTTP Body 
contains information about HTML, CSS, JS that were sending to the server

> There are 2 types of requests/ Access control mechanisms:
1. Simple request 
2. Preflight request 

#### 1. Simple Request 
> When the HTTP methods used by the client are 
- GET (GET data from the server)
- HEAD (when we want to check whether data exists at the serverside or not)
- POST (create new resource at the server)

> accompanied by these headers, only:
- Accept 
- Accept-Language
- Content-Language 
- Content-Type
- Last-Event-ID 
- DPR 
- Save-Data 
- viewport-width 
- width 

> There are only three values allowed for Content-type header for simple requests 
- application/x-www-form-urlencoded 
- multipart/form-data 
- text/plain 
 
 > Simple request follows the same origin request policy
##### same origin request 
 we have opened domain-a.com, where we are requesting an image hosted in web server domain-a.com. Since we are performing our requests on the same domain. its called same origin request.***Same origin request policy allows the same domain (with same origins) to connect with each other 
> For example: http://www.example.com/page.html and http://www.example.com/subpage/page2.html

##### 2. preflight Request 
If request doesn't meet the criteria used in simple request, browser automatically sends a preflight request. 

In order to do a preflight request, the http request browser sends contains the OPTIONS http method (which checks whther its safe to send a request)
> For example, if we made a DELETE request to a server (on a different domain, origin), browser by default sends OPTIONS request in the headers (OPTION follows certain protocols which checks whether its safe to send it to the server)

##### cross origin request
 we have opened domain-a.com, where we are requesting an image hosted in web server domain-b.com, since we are performing our requests on different domains, its called cross origin request. ***Cross origin policy allows both domains to connect with each other.***

 while the same origin requests are always allowed, the cross origin request are monitored by the server 

### How resource sharing between 2 applications on two different origins work?
when resource A is requesting for data from resource B and they both are on different origins, before the http 
method(GET/POST ..etc) call, the preflight request (AKA. Preflight Options call) is called which contains OPTIONS http method which verifies whether connecting to resource B is safe or not 

1. A makes a preflight call to B 
2. B verifies whether call is valid or not 
3. If call is valid, B(server) will send **additional HTTP headers** which will let the browser know, it is safe to connect (is the request safe or not)
> When Site A tries to fetch content from Site B, Site B can send an **Access-Control-Allow-Origin** response header to tell the browser that the browser is now allowed to access a resource in the server. 
```bash 
Access-Control-Allow-Origin is a HTTP (response) header which is sent by the server.

If the server specifies (through access-control-allow-origin) that the original request is safe, then it will allow the original request, otherwise it will block the original request 
```
4. A makes POST call to B

### JS Architecture:
It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event.

JS can use:
- procedural programming paradigm
- functional programming paradigm
- object oriented programming paradigm
> according to its convenience, 

JS can run on:
- browser 
- server 
- smart watch 
- light bulb 
- robots 

JS Runtime environment: contains all the things to run JS code 
1. JS engine 
2. set of API's to connect to outer environment 
3. event loop 
4. callback queue 
5. multitask queue 

Browser can execute JS code, because it has inbiult JS Runtime environment 
- Node.js is an open source run time environment 

```bash 
Eg:
Console is an API which is present in runtime environment, which allows us to console commands 

JS runtime enviroment inside browser has an API known as localstorage, which allows us to access localstorage in our code 
```
##### Every browser has its own JS Engine 
1. Microsoft Edge - Chakra 
2. Firefox - SpiderMonkey 
3. Chrome - V8 

These JS engine must follow certain EcmaScript standards.
EcmaScript is a governing body of JS. 

>> What was the first JS engine created in the world?
Brendan Eich in 1995

#### JS Engine Arhcitecture 
JS Engine is not a machine. 

1. JS Engine takes code as an input 
2. code is parsed 
- In this phase, written code is broken into tokens
- syntax parser: takes the code and converts it to AST (Abstract syntax tree) 
3. parsed code is compiled 
- JS is a JIT (Just in time) compiled language 
```bash 
JIT language means that JS can behave as an intrepreted and a compiled language, it all depends on the JS Engine 
```
- AST is passed to intrepretor (converts HLL to byte code), compiler simultanousely tries to optimize the code as much as it can on the run time 
```bash 
Chromes
intrepretor name: Ignition 
compiler name: Compiler Turbo Fan 
```
4. compiled code is executed 
> execution contains: 
- memory heap: space where all memory is assigned 
- garbage collector: collects all garbage values (functions/ variables that are not used) and removes them from the memory heap. Garbage collector helps in optimizing memory space used by JS Engine.
- call stack 








