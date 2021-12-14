
This was how we used functions before ES6
1. function Declaration
2. function Expression 

1. Function Declaration
```bash 
function hello()
{
  console.log("hello)
}

hello();
```
2. Function expression 
2.1. anonymous 
2.2. named 

2.1 Function expression (anonymous)
Function Expression  allows us to create an anonymous function which doesn’t 
have any function name
```bash 
let hello = function()
{
  console.log("hello)
}

hello();
```

2.2 Function expression (named)
```bash 
<script>
    var calMul = function Mul(x, y){
        let z = x * y;
        return z;
    }
 
    console.log("Multiplication : " + calMul(7, 4));
</script>
```
### Arrow functions 
```bash 
let hello = () => console.log("hello");
hello();
```
Demonstration:
```bash 
   <script>
        // using function expression (anonymous)
        let welcome = function(name)
        {
            return `hii ${name}` ;
        }

        console.log(welcome("reeem"));

        // using arrow function 
        let welcomes = (name, age) => 
        {
            return `hii ${name} - ${age}` ;
        }

        console.log(welcomes("reeem", 20));

        // for single line code you dont need curly braces and remove return 
        let welcomes1 = (name, age) => `hii ${name} - ${age}` ;

        console.log(welcomes1("reeem", 20));

    </script>

console:
hii reeem
hii reeem - 20
hii reeem - 20
```

## What is fetch() method?
To understand this, lets first understand promise method 
(introduced in JS E6 version)

3 stages of promise:
1. promise: pending (not yet fulfilled )
2. promise: fulfilled 
3. promise: rejected

>> What is a promise?
> A method in JS, which can give 2 outcomes, for a condition specified 
1. promise(): fulfilled 
>> this means promise is resolve()

if its resolved, we can use a JS function, then()
which is a callback function

2. promise(): rejected
>> this means promise is reject()

if its rejected, we can use a JS function, catch(),
which is also a callback function 

Promise syntax:
```bash 
let prom = new Promise();
// we define a function inside promise 
let prom = new Promise(function()
{
});
```
The function can take parameters:
1. resolve
2. reject

based on whether promise is accepted 
or not.

1. If promise is accepted, call resolve() function
```bash 
let prom = new Promise(function(resolve)
{
});
```
2. If promise is declined, call reject() function
```bash 
let prom = new Promise(function(reject)
{
});
```
### We can even use an if-else, which lets the function know that 
1. if promise is accepted, then resolve() function is called 
2. if promise is rejected, then reject() function is called 

These are predefined functions, you dont need to define it.
```bash 
let prom = new Promise(function(resolve, reject)
//taking 2 conditions, one for success, other for fail 

{
if(condition)
{ 
   resolve("here is a success");
   // the message that is inside this, will be returned to result 
   variable in onfulfilment function 
}
else
{
   reject("here is a failure");
   // the message that is inside this, will be returned to error 
   variable in onRejection function
}
});
```
#### Whenever resolve() or reject() return something it will be stored in these functions
1. Whenever resolve() function returns something, it will be stored 
in this result variable
```bash 
let onfulfilment = (result) => { console.log(result); }
```
This is how, it will look like in a function expression (anonymous)
```bash 
let onfulfilment = function(result)
{
   console.log(result)
}
```
2. Whenever reject() function returns something, it will be stored 
in this error variable 
```bash 
let onRejection = (error) => { console.log(error); }
```
This is how, it will look like in a function expression (anonymous)
```bash 
let onRejection = function(error)
{
   console.log(error)
}

#### Now, to call these functions, JS has inbiult callback functions called
1. then 
2. catch 

> callback functions: functions that are called as parameters

1. then 
is called when promise is resolve()
```bash 
prom.then(onfulfilment);
```

2. catch 
is called when promise is reject()
```bash 
prom.catch(onRejection)
```

examples 
1. When value entered is true 
```bash 
    <script>
        let complete = true; 
        //checking in promise is this value true or false 

        //creating promise method 
        let prom = new Promise(function(resolve, reject)
        {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });

        console.log(prom);
    </script>

console:
Promise {<fulfilled>: 'succesful promise'}
```
2. When value entered is false 
```bash 
 <script>
        let complete = false; 
        //checking in promise is this value true or false 

        //creating promise method 
        let prom = new Promise(function(resolve, reject)
        {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });

        console.log(prom);
    </script>

console:
Promise {<rejected>: 'failed promise'}
```
embedding parameter in a function -> callback function 
and returning the value in the console.log 
1. when value entered is true 
```bash 
    <script>
    //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

        console.log(prom(true));
        //add value over here 
    </script>
```

2. When value entered is false 
```bash 
   <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

        console.log(prom(false));
        //add value over here 
    </script>

console:
Promise >
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "failed promise"
```
example:
```bash
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
                // if the promise is resolve i.e its fulfiled, then 
                its returned to onfulfilment function, where the value stored 
                inside the resolve function will be stored in result variable 
            }
            else
            {
                reject("failed promise");
                // if promise is in rejected state, then its returned to 
                onRejection function, where the value stored inside the 
                reject function will be stored in the error variable
            }

        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions

    // when complete is true
    prom(true).then(onfulfilment);
    ✅ if promise is returned, then return the result in onfulfilment function 

    // when complete is false 
    prom(true).catch(onRejection);
    ✅ if promise is rejected, then return the result in onRejection function 

    </script>

console:
succesful promise 
```
## Pending promise 
illustration

1. When complete is true 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(true).then(onfulfilment);
    prom(true).catch(onRejection);

    </script>

console:
fetching data, please wait
fetching data, please wait
succesful promise

explanation:
Since prom is called 2 times, 
>> pending promise = fetching data, please wait
is displayed twice 

Succesful promise is loaded a second after, according to timeout manipulation
```

2. When complete is false 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(false).then(onfulfilment);
    prom(false).catch(onRejection);

    </script>

console:
fetching data, please wait
fetching data, please wait
failed promise
```
### Method Chaining
Instead of writing, these statements two times,
```bash 
prom(false).then(onfulfilment);
prom(false).catch(onRejection);
```
we can minimize it to one line 
```bash 
prom(false).then(onfulfilment).catch(onRejection);
```
if condition is true, promise resolved, then "this" function will be called; 
if condition is false, promise rejected, then "catch" function will be called 

In this case, pending promise will be printed only one time 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //function when condition is fulfilled
    let onfulfilment = (result) => {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = (error) => {
        console.log(error)
        // error = failed promise
    }

    //method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then(onfulfilment).catch(onRejection);
    
    </script>
    
console:
fetching data, please wait
failed promise
```

### We are now replacing the onfulfilment function and onRejection code inside this statement itself 
```bash 
prom(true).then(onfulfilment).catch(onRejection);
```
Were doing this to minimize the code.
#### 1. When value is true, it returns .then function
```bash 
<script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    ✅ Removed onfulfilment function from here 
    ✅ Removed onRejection function from here 
  
    //prom(true).then(✅onfulfilment).catch(✅onRejection);
    prom(true).then((result) => 
    { console.log(result)
    }
    ).catch((error) => 
    {
        console.log(error)
    }
    );
    
    </script>
    
console:
fetching data, please wait
succesful promise
```
#### 2. When value is false, it returns .catch function 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

            
        setTimeout( () => {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }
        }, 1000)
          
        });
    }

    //method chaining
    //if condition is resolved, then function will be called; if condition is rejected, catch function will be called 
    prom(false).then((result) => { console.log(result)
    }).catch((error) => {
        console.log(error)
    });

    </script>

console:
fetching data, please wait
failed promise
```

### Calculating division 
#### 1. succesful calculation, when a > 0 and b > 0
```bash 
<script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(5,4).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
succesful calculation: 1.25
```

#### 2. errors in calculation, when a = 0, b > 0
```bash 
 <script>
        //setting  a and b as parameters 
        
        function prom(a, b)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            console.log("fetching data, please wait")

        var c = a / b;   
        setTimeout( () => {
            if(c) 
            //if a value reaches c, resolve function will be shown 
            {
                resolve(`succesful calculation: ${c}`);
            }
            else
            {
                reject("failed to calculate");
            }
        }, 1000)
          
        });
    }

    prom(0,5).then((result)
    => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>

console:
fetching data, please wait
failed to calculate
```
### Lets learn some basics before jumping further 
#### Types of network architecture: 
ways in which computers are connected in a network 

##### 1. peer to peer architecture 
all computers are directly linked to each other and can share data with each other 
- we cannot backup data because there is no server 
- only feasible for say 10-20 computers

##### 2. client server architecture / Request-response architecture 
client makes a request to the server, and server will fulfill the response,
- data can be easily backed up in the server  
- increases speed of resource sharing

client requests for resources (typing the url in browser)
the server,fetches resource from database and returns the respsonse.

#### Client
web browser 

#### Server 
centralised machine that provides services to clients, clients connect thrugh 
over a network 

> Takes request from client and returns a response based on the client's request

##### server should essentially have:
1. Robust hardware, 
2. little to no down time 
3. server based CPU (intel XEON processor)
- multiprocessor ability (can add more than 1 XEON processor in the motherboard)
- supports larger amounts of RAM 
- larger cache memory 
4. ability to perform a lot of tasks simultanousely 
5. many powersupply, so it keeps running even when power fails at one spot 

### For different service, we have different servers, for different servers we have different softwares
types of server, based on type of service, server provides:
#### 1. web server (machine which provides web pages)
- contains web server software 

#### 2. database server (provides database only)
- contains database server software 

#### 3. email server (provides email only)
- contains email server software 

#### 4. file server (provides file server)
- contains file server software 

#### 5. print server (provides print services)
- contains print server software 

### For different softwares, we have different port numbers,
#### How do clients differentiate from different services?
every service has its own port numbers and its own protocol 

### Each port number has its own dedicated protocol 
1. file server (FTP protocol)
2. web server (HTTP protocol)
3. print server (IPP (Internet printing protocol))
4. database server (TCP/IP )
5. email server (SMTP protocol)

#### What is a protocol?
Client needs to identify **which server it needs to connect to**, in order to do this, 
it searches for the **port number**, that the particular server runs at,
**every distinguished port number has a particular protocol**

eg: file server runs on FTP protocol 
Once the **client identifies the protocol**, it can then connect the devices and 
exchange information between them over the network.

## JSON (Javascript Object Notation)
Data exchange format. (like XML)
> used to store and exchange data 

### When to use JSON?
When you want to send data from client to server and recieve data from server, 
we use JSON 

#### Diffference between JSON AND XML?
1. JSON is a text based format, not a language, while XML is a markup language
2. JSON is lightweight, XML is heavier 
3. Json doesnt support comments and namespaces, while XML does

#### Difference between JS object and JSON object? 
### Javascript object 
1. key-value pairs can be written in either '' or ""
2. its not neccesary to give quotes to key 
```bash 
var person = { firstName : "reem", lastname : "shaikh" };
alert(person.firstName + person.lastname)
```

### JSON object 
1. keys have to be in ""
2. '' is not accepted 
```bash 
var person = { "firstName" : "reem", "lastname" : "shaikh" };
alert(person.firstName + person.lastname)
```
> Disadvantages of JSON 
cannot use JSON to transfer video, audio, images or any another binary information

> Advantages of JSON 
mainly used in website API

### What is an API?
> two applications communicate with each other throough an API 
> we use API to get access to a specific functionality or data 
> we biuld API to aggregrate a bunch of backend data 

> example:
1. We created a website using PHP on backend and MYsql on db 
2. we want to create an app for that website in both ios and android 
3. our website can easily fetch data from mysql, however 
4. apps cannot fetch data directly from mysql because it has other libraries

### API is a third party program,
1. API takes request from android app & website & iphone app and sends it to mysql after authenticating through API key.

```bash 
                          sends a request            request recieved
   (native) android app   ---->
   (php)    website       ---->        API          ---------------->  MYSQL
   (swift)  ios app       ---->
                                    data converted 
                                    to JSON format   <----------------
                                                     returns a response                                              
```

2. mysql assess the data and returns a response which gets converted in the API, 
3. data is now sent in the form of json data which can be intrepreted by website, ios app and android app.
3. ios app, website and android app can easily access this data in json format  

```bash
Notes:
API key is a security key, which contains a unique value,
to access the API you need a key which will be send along with the request you 
make to the server 

API KEY 
a key ID that identifies the client responsible for the API service request.

API keys provides:
> Identification
identifies is the app that's making a call granted permission to access the API?

> Authentication:
Prove to API that you are the user you claim to be 

> Authorization
grant access right to use the API, this doesnt need log in/ crednetials 
```
### Types of API 
1. Generalised API
2. Web service API 

## 1. Generalised API 
##### 1.1 Open API / Public API 
A public API is open and available for use by any outside developer or
business. An enterprise that cultivates a business strategy that 
involves sharing its applications and data with other businesses will 
develop and offer a public API.

Public APIs typically involve moderate authentication and authorization.

##### 1.2 partner API - creating API in collaboration with business partners 
Partners have clear rights and licenses to access such APIs.
For this reason, partner APIs generally incorporate stronger 
authentication, authorization and security mechanisms.

##### 1.3 Internal API- internal API services, which are private to the company
An internal (or private) API is intended only for use within the enterprise, 
to connect systems and data within the business. 
For example, an internal API may connect an organization's payroll and
HR systems.

Internal APIs traditionally present weak security and authentication -- or none at all --
because the APIs are intended for internal use, and such 
security levels are assumed to be in place through other policies.

##### 1.4 Composite API- fetch from different API's and then create a single API through it 
Composite APIs generally combine two or more APIs to craft a sequence of related or interdependent
operations, and can sometimes improve speed and performance over individual APIs.

## 2. Web service API
1. REST 
2. SOAP - simple object access 
3. RPC - remote procedural call (RPC) 
RPC can employ two different languages, JSON and XML, for coding; these APIs are dubbed JSON-RPC and XML-RPC, respectively.
>  XML-RPC 
>  JSON-RPC 

#### Web server vs application server 
case: we have a script.js file which adds adds two numbers and returns the sum

##### Web Server
- returns only the data requested to the client, without doing any proccessing
- cannot execute the file 
case 1: web server will not return the sum, it will only return the script as it is

##### A web server delivers static web content—e.g., HTML pages, files, images, video, primarily in response to hypertext transfer protocol (HTTP) requests from a web browser.

eg: Apache HTTP server, NGINX 
> open source web server that includes reverse proxy, load balancing, mail proxy, and HTTP cache capabilities

##### Application server
- returns the data requested to the client, with the proccessing
- can execute the file 
case 2: application server returns the sum

##### Application server can generate dynamic content based on server-side logic.

eg: Apache Tomcat, Glassfish 
open source application server that executes Java Servlets, renders and delivers web pages that include JavaServer Page code, and serves Java Enterprise Edition (Java EE) applications.

## JQuery
Drawbacks of JS:
1. lengthy DOM manipulation
2. lengthy coding 
3. complex animations 
4. long selectors 

```bash
To fix this long code issue, each of these drawbacks were created as a function 
because its repeated code, which can be minimized and placed into a library called JQUERY.
```
> its cross-browser compliant, works on all browsers 

In js, for DOM manipulation 
```bash 
document.getElementsByClassName('classname)
```
however, in JQuery, code is minimized 
```bash 
$('.classname')
```
#### How to implement JQuery.js in html?
1. download the JQuery file 
2. implement JQuery with CDN path 

#### 1. Download the JQuery file 
1. download jquery file from jquery.com (uncompressed file)
2. save this file in the a js folder in the same repo as ur html 
3. add it to your code through script tag, define it in the head section 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery.js"></script>
</head>
<body>
    
    <script>

    </script>
</body>
</html>
```
#### 2. Jquery through CDN path
> CDN - content delivery network - content of the jquery part of your website comes from different network 

CDN Server contains the jquery library embedded, 
developers would prefer linking the CDN path instead of physically storing 
the file in the repo, because this reduces the load of the website. 

##### Steps to implement CDN path to code:
1. go to jquery official website and scroll down to using jquery with CDN 
2. click on this  https://code.jquery.com
3. we'll be using jquery 3.x, minified version 
4. this link loads 
```bash 
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
```
5. Add this code after the title secton in the head 

#### What is JQuery? 
1. Javascript library/ framework, which simplifies JS programming 
2. helps in AJAX and DOM manipulation 

## What is AJAX?
its a technology which helps creating fast and dyanamic web pages.
We can set AJAX through JQUERY and JS 

1. AJAX stands for asynchronous Javascript and XML
(Modern websites use JSON instead of XML for data transfer)
2. AJAX is not a programming language, its set of existing technologies 
3. AJAX helps in fetching data asynchronously

##### How it works?
Client requests server for a file, server processes the request and sends a response, in generic 
condiitons, for the client to view the changes, the clients browser is loaded/ refreshed. 

In order to prevent this loading, we use AJAX,
while client requests the server for a file, AJAX sends **XMLHttpRequest** in the background with the request to the server, now when the server processes the request and returns the response to the client, the changes are made without the need to load/ refresh the page

##### the data the server returns can be in 3 formats 
- .txt file
- .xml data 
- .json data 

***AJAX uses XMLHttpRequest (XHR object (inbiult object)) - which contains methods and utility functions***
 
##### Advantages of AJAX:
1. We can add a particular change in the page, and it gets integrated in the page without externally loading it 

## Example with AJAX 
Data that's fetched from API, through AJAX server 

```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--Jquery CDN link-->
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>

</head>
<body>  

    <script>
    function prom()
    //function returns a promise
    {
        return new Promise(function(resolve, reject)
        {
        console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              console.log(data);
          })
        ✅ this function is used to fetch data from json API using AJAX 
        ✅ $.get(ajax url, where data should be displayed in AJAX)

        //AJAX URL 
        //we use a JSON placeholder API, head over to posts and copy the url 
        //https://jsonplaceholder.typicode.com/posts

        }, 1000)
          
        });
    }

    prom().then((result) => 
    {
        console.log(result)

    }).catch((error) =>
    {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //prints 100 arrays from the API 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```
##### If the function(data) doesn't return anything, then it prints the reject parameter 
```bash 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
    <!--Jquery CDN link-->
</head>
<body>
    
    
    <script>
        function prom()
        //function returns a promise
        {
            return new Promise(function(resolve, reject)
            //taking resolve and reject as parameters 
            {
            console.log("fetching data, please wait");
 
        setTimeout( () => {
          $.get( "https://jsonplaceholder.typicode.com/posts",function(data)
          {
              resolve(data);
              //calling resolve function

          }).fail(err => {
              reject("failed to load json")
              //calling reject function
          });

        //integrating error message 
        }, 1000)
          
        });
    }

    prom().then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
    
    </script>
</body>
</html>

console: //same output as above 
fetching data, please wait
promises5.html:28 (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

# promise() VS promise.all()
#### promise()
used to check conditions 
1. resolve(), .then() 
if promise resolved, then we use, then function and show success message 
2. reject(),  .catch()
if promise rejected, then we use, catch function and show error message 

#### If we have more than one promise 
### promise.all() method
1. resolve(), .then()
if all promises resolved, then only we use, then function and show success message 
2. reject(),  .catch()
if all promises rejected, then we use, catch function and show error message 

```bash 
       promise()         promise()          promise()
         |                  |                   |
         |__________________|___________________|
                            |
                        promise.all()
                            |
               ------------------------------
               |                            |
            resolve()                    reject()
               |                            |
               |                            |
               |                            |
    (if all promises resolve)     (if any promises reject)
             then()                       catch()
             
```
an example, 
```bash 
   <script>
        let p1 = new Promise(function(resolve, reject){
            console.log("first promise");
            resolve("successful promise");
        });

        let p2 = new Promise(function(resolve, reject){
            console.log("second promise");
            resolve("failed promise");
        });

        Promise.all([p1,p2]).then(
            function (result)
            {
                console.log(`${result}`)
            }
        ).catch(
            function (error)
            {
                console.log(`${error}`)
            }
        );

        //we can pass an array of promises
        //you dont have to seperately pass then and catch for promise 
    </script>

console:
first promise
second promise
successful promise,failed promise
```
### What is fetch() method?
We can fetch data through 
1. Jquery using these methods $.get(), $.post()
2. Jquery using AJAX using XMLHttpRequest 

disadvantages:
> loading time increases, because of unnecesary file load, more code required 

To get rid of these disadvantages JSE6 introduced:
### fetch() method 
1. We can do CRUD to the server 
```bash
C - create data 
R - remove data 
U - update data 
D - delete data 
```
#### Fetching API and printing on the console 
```bash 
<script>
        //fetch() method works on live server 

        // this API returns a promise 
        fetch("https://jsonplaceholder.typicode.com/posts").then(function(response){
           return response.json();
           //returns format of data

           //returns promise over here, however this promise will be used in
            the next then function

           //the next then function attached to the method chain 
        }).then(function(result)
        //if promise succeeds this function will execute
        {
            console.log(result)
            // data printed on console, is due to this console 

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)

        });
    </script>
</body>

console:
(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

✅1. data will be returned in text format if you write this 
    return response;
✅2. data will be returned in json format if you write this 
    return response.json();

### Fetching API, and printing on the document 
- get this API from  https://jsonplaceholder.typicode.com/
```bash 
    <script>
        //fetch() method works on live server 

        // this API returns a promise 
fetch("https://jsonplaceholder.typicode.com/posts").then(function(response)
        {
           return response.json();

        }).then(function(result)
        //if promise succeeds this function will execute
        {
            ✅ for fetching data for in loop 
            for(var x in result)
            {
               // document.write(x);
               document.write("userid ",result[x].userId + "<br>")
               document.write("title ",result[x].title + "<br>")
            }

        }).catch(function(error)
        //else if the promise fails, this function will execute 
        {
           console.log(error)
        }); 
    </script>

console:
nothing.

document:
userid 1
title sunt aut facere repellat provident occaecati excepturi optio reprehenderit
userid 1
title qui est esse
userid 1
title ea molestias quasi exercitationem repellat qui ipsa sit aut
userid 1
title eum et est occaecati
userid 1
title nesciunt quas odio ....
(woops, there are like more...)
```

### How to save data on server using CRUD ?
Syntax:
```bash 
<script> 
      fetch(file / URL, 
      {
          method: "POST",
          body: data, 
          header : {
              'Content-type': 'application/json',
          },
      });
</script>
```
Different methods to CRUD data on the server. 
## 1. method
1. method: "POST"   (for inserting data)
2. method: "GET"    (for reading data)
3. method: "PUT"    (update server data)
4. method: "DELETE" (for deleting data)

## 2. body 
pass data that we want to save on the server 
```bash 
body: data, 
```
> Data can be in three forms 
1. form data 
2. json data 
3. text 

## 3. header 
In header we specify what kind of data were passing through the server 
> here is what, you need to specify for different data 
1. form data 
```bash 
'Content-type': 'application/x-www-form-urlencoded',
```

2. JSON data
```bash 
'Content-type': 'application/json',
```

##### In JSON placeholder API website, scroll down, to guide 
click on guide, which redirects you to this page 
https://jsonplaceholder.typicode.com/guide/
(these are fake data for testing)

This page contains different JSON API.
## 1. Data passed in JSON format 
#### 1.1 Get/ read a resource 
using method: 'GET'
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method : 'GET',
      })
      
  .then((response) => response.json())
  .then((json) => console.log(json));
    
</script>

console:
{userId: 1, 
id: 1,
title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
#### 1.2 Create a resource 
using method: 'POST'
```bash 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({  ✅this is a JS object 
    title: 'foo',           ✅It cannot be send on the server directly 
    body: 'bar',            ✅that's why we convert it to JSON using 
    userId: 1,                 JSON.stringify()
  }),
    headers: {              
    'Content-type': 'application/json; charset=UTF-8',
    },                       
})

.then((response) => response.json())
.then((json) => console.log(json));

console:
Object >
body: "bar"
id: 101
title: "foo"
userId: 1
```
Why do we convert JS object to JSON?
✅Data send on server is in JSON, because it can easily be read by any 
programming language. 

#### 1.3 Update a resource 
using method: 'PUT'
```bash 
<script>
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'feona',
          body: 'bary',
          userId: 2,
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    
    .then((response) => response.json())
    .then((json) => console.log(json))
</script>

console:
body: "bary"
id: 1
title: "feona"
userId: 2
```
#### 1.4 Delete a resource 
using method: "DELETE"
```bash 
<script> 
      fetch('https://jsonplaceholder.typicode.com/posts/1', 
      {
      method: 'DELETE',
      });
</script>
```
### JS Async function 
To remove drawbacks of promise(), Async function was returned.

#### Drawbacks of promise()
1. we had to declare resolve() and reject() inside promise function as parameters, 
upon calling them, then or catch function would automatically be called, based on whether 
the promise is fulfilled or rejected 
```bash 
    <script>
        //setting  parameter as a function 
        
        function prom(complete)
        // function returns a promise
        {
            return new Promise(function(resolve, reject)
            {
            if(complete)
            {
                resolve("succesful promise");
            }
            else
            {
                reject("failed promise");
            }

        });
    }

    //function when condition is fulfilled
    let onfulfilment = function(result) {
        console.log(result)
        // result = succesful promise
    }

    //function when condition is rejected 
    let onRejection = function(error) {
        console.log(error)
        // error = failed promise
    }

    //then and catch are inbiult functions
    prom(true).then(onfulfilment);
    prom(true).catch(onRejection);

    </script>
```
Async function works in asynchronous mode in the background 

> Example 
```bash 
 <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
        }
        console.log(test());

    </script>

console:
Promise {<fulfilled>: 'hello'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "hello"
```
> Elaborating example
```bash 
    <script>
        //when you add async before a normal function, it returns a promise 
        async function test()
        {
            return "hello";
            //this value passed to then function 
        }
        test().then(function(result)
        {
             console.log(result)
        });

    </script>

console:
hello
```
Using arrow function
```bash 
 <script>
        let test = async () => "hello";
        //storing function in variable test 

        test().then(function(result){
             console.log(result)
        });

</script>

console:
hello
```
## Await method 
```bash 
 <script>
        ✅ await method can be added on any line
        ✅ used inside async function  

        async function test(){
            console.log("A");
            await console.log("B"); 
            //await function- tells to wait after B 
            console.log("C");
        }

        test();
        console.log("D");
        console.log("E"); 

    </script>

console:
await1.html:10 A
await1.html:17 B
await1.html:23 D
await1.html:24 E
await1.html:19 C
```
example 2 
```bash 
<script>
        async function test(){
            console.log("2");
            await console.log("3"); 
            //await function- tells to wait after 3 and execute code below this function before coming back to execute this code  
            console.log("5");
        }

        console.log("1"); ✅1st this is executed
        test();           ✅executed till await function
        console.log("4"); ✅executed after await function 
                          ✅pointer goes back to the code after await function 
</script>

console:
1
2
3
4
5
```
> When is await method mainly used?
its mainly used when were fetching data from server using fetch() method (fetches data on the server)
and we want to pause the fetch command midway and resume it sometime later. 

> example 1
```bash 
<script>
      async function test() {
        console.log("1");         ✅2. 1 printed on console 

        console.log("2")          ✅3. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅4. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅5. pointer jumps outside the function 
        console.log("4")          ✅8. 4 printed on console
        return response;          ✅9. response object printed on console 

      }

      test().then(function(result)✅1. test function called first 
      { 
             console.log(result)
      });

      console.log("3")             ✅6. 3 is printed on console 
                                   ✅7. pointer jumps back to the test() 
</script>

console:
await3.html:12 1
await3.html:14 2
await3.html:27 3
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 2
```bash 
<script>
      async function test() {
        console.log("1");         ✅3. 1 printed on console 

        console.log("2")          ✅4. 2 printed on console 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

                                  ✅5. doesnt print response, because pointer hasnt 
                                   yet encountered the the return response statement 
                                  ✅6. pointer jumps outside the function 

        console.log("4")          ✅9. 4 printed on console
        return response;          ✅10. response object printed on console 

      }

      console.log("3")            ✅1. 3 printed on console first 

      test().then(function(result)✅2. test function called first 
      { 
             console.log(result)
      });

      console.log("5")            ✅7. printed 5 on console 
                                  ✅8. jumps back in test()
</script>

console:
await3.html:12 3
await3.html:14 1
await3.html:27 2
await3.html:27 5
await3.html:17 4
await3.html:24 Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
```
> example 3 
```bash 
<script>
    //using try-catch
      async function test() {

        try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
        }

        catch(error)
        {
           console.log("errorrrrrrr");
        }

      } 
      test().then(function(result)
      //if code works properly thiswill be invoked
      {
          console.log(result);

      }).catch(function(error){
          //if there is any error it will be printed over here 
          console.log(error);
          ✅ if there is any error, the error message from top will be printed 
      });
      
</script>
```










