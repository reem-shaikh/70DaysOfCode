1. Object
   >> blueprint
   - used to call function

> seperate DS in JS
> can store collection of properties
> stores multiple types of DS

give object as key:value pair
In object, we can define own keys

JavaScript uses objects for other things They can be object constructors and namespaces Python dictionaries just hold data.

# Arrays Vs Objects

## Arrays

- collection of elements
- uses index
- sequence of elements is important

>> Use this when you will have a list of data you want
>> eg:

- todo
- chat message list
- contact list

## Objects

- collection of key:value pairs
- used the concept of keys (can be custom defined)
- sequence is not important

>> use this when you have to store properties of something
>> eg:

- properties of amazon products
- properties of logged in user
- properties of fb post

> Object: collection of key:value pairs
> Array: collection of elements

2. Switch conditionals
   switch whether is sent by which user - group chat
   - calculator
   - ATM machine (withdrawal/ balance enquiry)

> > where comparison is between a variable and data
> > (operator == '+', operator == '-')

- Recursion
  calling function from another function

## Json - Javascript Object Notation
   Used to represent complex data structure (Nesting of different types)

>> lightweight, easier to read than xml
>> Json can be parsed easily on JS unike XML 
>> can use only double quotes in json file

1. how to create JS object.
      - open console
      - To write JS object in JSON format. Just create JSon object with
                 myJson = `{

                }`;

      - add JS code in curly braces
      - write on console.

      ```bash
       myJson = `{ "name": "reem", "score": 99.89, "isAdmin": false }`;
      ```

- **Json object printed on console**
'{ "name": "reem",\n "score": 99.89,\n "isAdmin": false\n}'

    - command to convert Json object to JS object
    ```bash
    JSON.parse(myJson);
    ```

{name: 'reem', score: 99.89, isAdmin: false}
isAdmin: false
name: "reem"
score: 99.89


## XML - Extensible Markup Language 

1. Why we require XML?
   To process data -> Java/ html/ Js 

   Data send in 2 formats 
   1.1 html - send the tag/ layout 
   1.2 xML - send the data 
   
   Data send from client -> server 
   Data send from server -> client

   XML used in:
   1. Transfering Data 
      xml was used, but now we have Json because its easier to parse.

   2. Configuring framework 
   3. In android, we can design using XML 

## Json - Javascript Object Notation
    Data Representation format.
   - integrates easily with most languages 

   Format in which data can be transferred from 
   - server to client 
   - client to server 

   1. Request 
   website makes a one side (asynchronous) request to the server
   to fetch the data and return the response.

    Data we requested is either 
   - static 
   - dyanamic (dyanamically generated)

   2. Response 
   Data resturned in response to the request made at client side from 
   the server side

   Data returned in:
   - text / plain format 

   but since were dealing with complex objects, 
   Data could be returned in the form of:
   - Objects 
   (readable by Js)

# Uses of Json
  - Used for transfering data in REST API
  - Also used in network calls
  - sending data to server
  - Fetching data from server
  - used in Android, REST API

Json supports:
   1. strings 
   2. numbers 
   3. booleans 
   4. arrays 
   5. objects {"key" : "value"}


## Client- Server Architecture 
Client 
    Makes request to web page

Server
    Takes request and gives response 
Server is a machine that provides sevices

For different service, there are different servers.
- provides files: file server 
- printing service: print server 
- provides multiple web pages (website) - web server 

Server (Hardware) has Software installed.
Different server has different softwares 
- file server- file service software 
- printing server- print service software 
- web server- web service software 

Client differentiates which server to connect to through 
- port number
- protocol

Every service has its own protocol,
Every  protocol has its own port number 

protocols for different services:
- file service - FTP 
- web pages- HTTP 






> > Assignment:

1. write a program to calculate factorial of a number
   Factorial of 5 = 1*2*3*4*5 = 120

2. Write a program to check whether two strings are anagram of each other or not
   eg: "race", "care" <- true->
   "heart", "earth"

## Function scope VS Block scoped
 ✅Block 
   collection of instructions combined together 

   Any code written inside a pair of curly brackets- Block

  Scope:
   at what level is the data available
   - Functional 
   - Block 

function modjs(str1)
**function scope starts**
{
    if(str1)
    {**block scope starts**
    let name = "Vinod";
    const sname ="Thapa";
    console.log(name + s.name);
    }**block scope ends**


}**function scope ends**
modJS(true);

Keywords:

1.  Var
    can be defined anywhere in between 
    1. block scope 
    2. function scope 
   
   1. In between Block scope 
    ```bash
    function modJs()
    {
    if(str1){
    var name = "reem";
    name = "shaikh";
    console.log(name + sname);
    } //block scope
    } //function scope
    ```
     //reem shaikh 

   2. In between Functional scope 
    ```bash
    function modJs()
    {
    if(str1){
    var name = "reem";
    name = "shaikh";
    }
    console.log(name + sname);
    }
    ```
   //reem shaikh

2.  Let
    can be defined only in between block scope 

    ```bash
    function modJs()
    {
    if(str1){
    let name = "reem";
    const sname = "shaikh";
    console.log(name + sname);
    } 
    }
    ```
    
    //reem  **block scoped**

❌if console.log is outside block scope it'll show error.
   ```bash
    function modJs()
    {
    if(str1){
    let name = "reem";
    const sname = "shaikh";
    } //block scope ends
    console.log(name + sname);
    } //function scope ends
    ```


3. Const
   Can only be declared inside the block scope
   Fixed Value - Value cannot be updated 
   {
   if(str1){
   const pi = "3.14";
   pi = "2.3";
   console.log(pi);

    } //block scope ends
    } //function scope ends
    ```

 
