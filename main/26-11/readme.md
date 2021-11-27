1. Object
>> blueprint
   - used to call function 

> seperate DS in JS 
can store collection of properties 
stores multiple types of DS 

give object as key:value pair 
In object, we can define own keys 

JavaScript uses objects for other things They can be object constructors and namespaces Python dictionaries just hold data.

# Arrays Vs Objects 
## Arrays 
- collection of elements 
- uses index 
- sequence of elements is important 

>> Use this when you will have a list of data you want 
eg: 
- todo 
- chat message list 
- contact list 

## Objects
- collection of key:value pairs 
- used the concept of keys (can be custom defined)
- sequence is not important

>>use this when you have to store properties of something 
eg: 
- properties of amazon products 
- properties of logged in user 
- properties of fb post 


> Object: collection of key:value pairs
> Array: collection of elements 

2. Switch conditionals 
   switch whether is sent by which user - group chat
   - calculator
   - ATM machine (withdrawal/ balance   enquiry)

>> where comparison is between a variable and data 
(operator == '+', operator == '-')


- Recursion 
  calling function from another function 

## Json - Javascript Object Notation 
- Used to represent complex data structure (Nesting of different types)


- Also used in network calls 
  sending data to server 
  getting data from server 
  used in Android, REST API



>> Assignment:
1. write a program to calculate factorial of a number 
   Factorial of 5 = 1*2*3*4*5 = 120

2. Write a program to check whether two strings are anagram of each other or not 
eg: "race", "care"  <- true->
    "heart", "earth" 

## Function scope VS Block scoped
 function modjs(str1)
 **function scope starts**
 {
            if(str1)
         {**block scope starts**
                let name = "Vinod";
                const sname = 
                "Thapa";

                console.log(name + s.name);

        }
      **block scope ends**
      
}**function scope ends**

modJS(true);


Keywords:
1. Var
        var name = "vinod";
        name = "thapa";
        console.log(name);

        //thapa
**function scoped**

2. Let
        let name = "reem";
        name = "thapa";
        console.log(name);
        //thapa

**block scoped**

3. Const
        Fixed Value 
        const pi = "3.14";
        pi = "2.3";
        console.log(pi);
        // type error 

**block scoped**