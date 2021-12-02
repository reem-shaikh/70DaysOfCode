Assignment: full toss

✅optional.
create sum function which is called like this 
let result = sum(a)(b);
❌not sum(a,b);

using closure you can return a function 

```bash
function fn()
{
  return function()
   {
     console.log("child func")
   }
}

var a = fn();
a();   //child function 
console.log(typeof a);
```

1. Write chaining closure function to make sum 

```bash
let cb = function()
{
    let b = 20;
    console.log(a + b);
}

sum(10, callback);
```

2. In calculator app create contextual based calc

- 4 functions 
let calc = {
  'mul': function()
  {

  }
  
}

let set1 = {
  'num1':
  'num2':
}

//create 3-4 sets 
//demonstrate some mathematical opn on all these sets seperately 

- have to use call, apply, bind on 3 different sets 

if create var outside block
you can access the variable inside the function 
update inside the block 

```bash
let arr = [1,2];
var sum=0;
let cb = function(e)
{
  sum = sum + e;
}
arr.foreach(cb);
console.log(sum);
```