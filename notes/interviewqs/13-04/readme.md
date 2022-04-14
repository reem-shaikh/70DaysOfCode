### Synchronous VS Asynchronous 
JS is synchronous by default. 
```bash 
Case 1: Asynchronous 
She gives you a glass of milk, she does other work unti then, when your finished drinking milk she can come and collect the glass 

Case 2: Synchronous 
She will wait here until I finish the milk. Then she will take the glass back.

When code execution waits for the task to complete its synchronous.
```
> Single threaded / Multi threaded 
- single threaded - execute one task at a time 
- Multi-thread - multiple tasks run parralelly

> JS is synchronous and single-threaded.

#### How does JS act like multithreaded and asynchronous even though by default its synchronous and single threaded 
1. execution flow / execution context 
```bash 
# JS executes every statement line by line 
var a = 10;
console.log(a)
console.log('hello')
# anything after the error was not printed 
console.log(b)  //error 
console.log(c)  
```
> For example, in this example 
```bash 
function print(){
    console.log('welcome')
}

function add(num){
    return num+5;
}
var c = add(7)
```
<!-- execution context has 2 parts  -->
- memory (contains all the variables and the function declaration) [your able to access the declared variables because its in the memory]
```bash 
# memory contains function declarations and variable declarations 
a: 10;
print: function() {.. // all function code here}

add: function(){...}
```
- code 
<!-- all logic will be defined inside the code section -->
```bash 
return num+5
```
#### JS Call stack 
```bash 
# whenever it is a basic statement, it executes line by line 
console.log('line1')
console.log('line2')
```
> for basic variable assignment / declaration, it executes line by line
```bash 
var a = 10;  //10
a = a+5;     //15
a= 30;       //30
a= a-10;     //20
console.log(a)//20
```
> function 
```bash 
console.log('line 0')
main()
console.log('line 4')

function sub(){
    console.log('line3')
}
function main(){
    console.log('line1')
    sub()
    console.log('line2')
}

console:
line 0 
line 1
line 3
line 2
line 4
# whenever it invokes a function it acts like a stack (last in first out - element pushed in first comes out last from the stack)
```
1. call stack 
Every line that is to be executed is kept in a stack. 
> it behaves as a stack as soon as it sees a function.

> but how does it behave like an async function then?
```bash 
console.log(1)
main()
console.log(2)

function main(){
    console.log(3)

# whenevr you pass a function as an argument/parameter to another function it is called a callback function
    setTimeout(() => {
        console.log(4)
    }, 1000)
    # this callback is stored in the event loop

    console.log(5)

        setTimeout(() => {
        console.log(6)
    }, 100)
    # stored in event loop while the other statements are getting executed 
}
console:
1, 3, 5, 2, 6, 4
```
2. event loop 
event loop is an array of callbacks in which the callback functions are stored temporarily and are executed when main call stack is empty. 

- event loops are used in:
> eg: callback functions in settimeout , setInterval, event listeners 
> resolve and reject (callback functions) stored in event loop 
```bash 
fetch('url').then((data) => {
    return data.json()
}).then((res) => {
    console.log(res)
})

# in promise, resolve and reject are callback functions
new Promise ((resolve, reject) => {
    if(success)
      resolve()
    else 
      reject()
})
```
> Predict the output.
```bash 
var name = 'vikas'
var name2 = name;
name2 = 'anil';

console.log(name2) //anil
console.log(name)  //vikas 
```
> Q2.
```bash 
var vikas_age = 29;
var kumar_age = vikas_age;
kumar_age = 30;

console.log(kumar_age) //30
console.log(vikas_age) //29
```
































