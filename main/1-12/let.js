console.log("file linked");

var n=10;
if(n==10)
{
    console.log("10");
    var secret = "password";
    console.log("some other complex stuff");
}

console.log(secret);
//we can access this outside its scope 

//in some situations we want the variable to be inside the scope only 
//in secret API keys we dont want it to be leaked to the users 

// let was introduced 
// local/ block scope 
var i=10;
if(i==10)
{
    console.log("do complex stuff");
    let secret = "password";
    {
    let supersecret = "whjkdjedjede";
    }
    console.log("supersecret", supersecret);
}

console.log("supersecret",supersecret);
console.log("secret", secret);

// var 
// same reference to the memory 
var a = "";
if(true)
{
    a = 20;
    console.log(a);  //20
}
console.log(a);  //20


// let
// in memory both are stored in different memory locations
let a = "";
if(true)
{
    a = 20;
    console.log(a);  //20
}
console.log(a);      //a


//Error 
//you cannot assign different values for a 
//inside and outside it
// var a = "a";
// if(true)
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


//Inheritance of Scope:
// In nestig of scope, let will be available 
//for inner scope but not for outer scope
// this will work
{
    let b = 10;
    {
        {
            console.log(b);
        }
    }
}

//this code crashes the script 
// {
   
//     {
//         {
//             let a = 10;
//         }
//     }
//     console.log(a);
// }