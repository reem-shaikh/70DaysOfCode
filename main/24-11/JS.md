How to show output to user.
1. alert("hi");
   shows mesg in popup box

2. console.log("hi");
   shows mesg in console

takes input from the user:
1. prompt()

  var a = prompt();
  undefined
  console.log(a);
  VM3904:1 hi

>> =, ==, === difference.
=== checks datatype also 
    if("10" === 10)
    {
        console.log("same datatype");
    }
    else{
        console.log("different datatype");
        //displays this
    }

== checks only for value, doesnt care about datatype
    if("10" == 10)
    {
        console.log("same datatype");
        //displays this
    }
    else{
        console.log("different datatype");
    }

= used for assignment

Conditional statements/ Branching
- if, else, else-if

♾️Loops
1.  while Loop
- as soon as its false it moves outside bracket

- infinite loop
while(true)
{
console.log('A);
}
console.log("End of Execution);

- display 1 to n using while loop
    while(i<num1) 
    {
        console.log(i);
        i++;
    }

    console.log("end of execution");

2. For Loop
syntax:
for(initialization ; condition; increement/ decreement)

- display 1 to n using for loop
   for (var i=1; i<=num2; i++)
    {
        console.log(i);
    }
    console.log("end of execution");

✔️Difference btw for and while
- for loop 
uses stepper/ counter
loop through objects of array
- ENTRY CONTROLLED
  checks condition before entering the loop

- while loop
no counter concept
has one condition you need to check 
- ENTRY CONTROLLED

-Do/while loop
- EXIT CONTROLLED
  checks condition after entering the loop

3. Do/ while loop
   var i = 11;
    var n = 10;
    do 
    {
        console.log(i);
        i++;
    }
    while(i<10);
    console.log("end");

it will print 11, however in case of while loop it wont print 11

in do/while loop it will print the wrong statement atleast once,
in while it wont execute even onc

    var i = 11;
    var n = 10;
    while(i<n)
    {
        console.log(i);
        i++;
    }
    console.log("end");

>> Pattern
    1-*
    2-**
    3-***
    4-****
    5-*****
    6-******
    7-*******
      1234567





