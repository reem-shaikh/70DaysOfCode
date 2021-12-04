
### Javascript Math Methods:
1. Ceil(x)
2. floor(x)
3. round(x)
4. trunc(x)
5. max(x,y,z,... n)
6. min(x,y,x...n)
7. sqrt(x)
8. cbrt(x)
9. pow(x,y)
10. random()
11. abs(x)
12. PI

## 1. ceil(x)
returns upper value of the number entered.
```bash
<script>
        var a = Math.ceil(5.2);
        document.write(a)
        //works when number is in float type 
</script>

console:
6
```

#### Dealing with negative values:
```bash
var a = Math.ceil(-1.2);

console:
-1
```

## 2. Floor(x)
returns downward value of the number entered 
```bash
<script>
        var a = Math.floor(5.2);
        document.write(a)
        //works when number is in float type 
</script>

console:
5
```
```bash
var a = Math.floor(0.2);

console:
0
```

#### Dealing with negative values:
```bash
var a = Math.floor(-1.2);

console:
-2
```

## 3. Round 
> if the number is below 0.5 it returns the lower value
> if the number is above 0.5 it returns the greater value

```bash
<script>
        var a = Math.round(5.2);
        document.write(a)
        //works when number is in float type 
</script>

console:
5
```
```bash
<script>
        var a = Math.round(5.6);
        document.write(a)
        //works when number is in float type 
</script>

console:
6
```

## 4. trunc 
returns the simple integer value irrespective of whats after the decimal value 
```bash
<script>
        var a = Math.trunc(6.2);
        document.write(a)
</script>

console:
6
```
```bash
<script>
        var a = Math.trunc(8.9);
        document.write(a)
</script>

console:
8
```
## 5. max(x, y, z .. n)
returns highest value of number 
```bash
<script>
        var a = Math.max(8, 10, 2, 20, 25);
        document.write(a)
</script>

console:
25
```
## 6. min(x, y, z .. n)
returns lowest value of number 
```bash
<script>
        var a = Math.min(8, 10, 2, 20, 25);
        document.write(a)
</script>

console:
2
```
```bash
<script>
        var a = Math.min(-10, -2, 2, 10);
        document.write(a)
</script>

console:
-10
```

## 7. sqrt 
```bash
<script>
        var a = Math.sqrt(4);
        document.write(a)
</script>

console:
2
```

## 8. cbrt (cubic root)
```bash
<script>
        var a = Math.cbrt(125);
        document.write(a)
</script>

console:
5
```

## 9. pow(x,y)
```bash
<script>
        var a = Math.pow(4,3);  //4^3 = 4*4*4
        document.write(a)
</script>

console:
64
```

## 10. random()
generates a random value between 0 and 1 and returns it 
```bash
<script>
        var a = Math.random();  //every time you refresh page a new value is returned
        document.write(a)
</script>

console:
0.03234444
```
## 11. abs()
returns absolute value
```bash
<script>
        var a = Math.abs(5.25); 
        document.write(a)
</script>

console:
5.25
```
#### dealing with negative values
```bash
<script>
        var a = Math.abs(-5.25); 
        document.write(a)
</script>

console:
5.25
```
#### we cannot enter string inside this 
```bash
<script>
        var a = Math.abs("hello"); 
        document.write(a)
</script>

console:
Nan
```
## 12. PI 
```bash
<script>
        var a = Math.PI; 
        document.write(a)
</script>

console:
3.14....
```

Math methods Used in:
1. animation
2. video game development 
3. complex web applications 

## Revise call(), apply(), bind()
```bash
 <script>
        function displayName()
        {
            console.log('reem');
        }
        displayName();
        //over here, behind the scenes it gets converted to displayName.call()
        //even if you dont mention displayName.call()
        //its been converted behind the scenes 
  </script>

console:
reem
```
```bash
 <script>
        function displayName()
        {
            console.log('reem');
        }
        displayName.call();
        //every function has access to a property named call which can be used to invoke that function
    </script>

console:
reem
```
```bash
 <script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function()
            {
                this.battery = 100;
            }
        }
        participant1.chargebattery();
        console.log(participant1)
    </script>

console:
{name: 'lily', battery: 100, chargebattery: ƒ}
```
## Call function 
used to call methods from participant1 object to participant2 object 
```bash
 <script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function()
            {
                this.battery = 100;
            }
        }

        let participant2 = {
            name : 'john',
            battery : 30
        }
        //we want to use charge battery from participant1 to particpant2 
        participant1.chargebattery.call(participant2)

        //take chargebattery function from participant1 and use it in participant2

        console.log("participant1", participant1)
        console.log("participant2", participant2)
    
  </script>

console:
participant1 {name: 'lily', battery: 70, chargebattery: ƒ}
participant2 {name: 'john', battery: 100}
```

another example v
```bash
<script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function(a, b)
            {
                this.battery = this.battery + a + b;
            }
        }

        let participant2 = {
            name : 'john',
            battery : 30
        }
        //1. first were calling participant2 object (30)
        //2. then were calling the method inside participant1 which passes
         2 arguments (30 + 20)
        
        participant1.chargebattery.call(participant2, 20, 30)


        console.log("participant1", participant1)
        console.log("participant2", participant2)  //30+ 30+ 20
</script>

console:
participant1 {name: 'lily', battery: 70, chargebattery: ƒ}
revisefunc.html:30 participant2 {name: 'john', battery: 80}
```

## apply
takes an array of arguments instead of comma seperated arguments 
```bash
<script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function(a, b)
            {
                this.battery = this.battery + a + b;
            }
        }

        let participant2 = {
            name : 'john',
            battery : 30
        }
        //1. first were calling participant2 object 
        //2. second value is the array of arguments
        participant1.chargebattery.apply(participant2,[ 20, 30] )


        console.log("participant1", participant1)
        console.log("participant2", participant2)
    
</script>
```

### Bind 
bind method returns a function, it doesnt immediately invoke it, 
> you can call it at a later point 
```bash
 <script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function(a, b)
            {
                this.battery = this.battery + a + b;
            }
        }

        let participant2 = {
            name : 'john',
            battery : 30
        }
        participant1.chargebattery.bind(participant2, 20, 30 )


        console.log("participant1", participant1)
        console.log("participant2", participant2)
        //battery:30 
        //bind function didnt make any changes 
    
  </script>

console:
participant1 {name: 'lily', battery: 70, chargebattery: ƒ}
revisefunc.html:28 participant2 {name: 'john', battery: 30}
```
#### Bind returns a function, we can invoke at a later point
```bash
  <script>
        let participant1 = {
            name : 'lily',
            battery : 70, 
            chargebattery : function(a, b)
            {
                this.battery = this.battery + a + b;
            }
        }

        let participant2 = {
            name : 'john',
            battery : 30
        }
        let batterycharge2 = participant1.chargebattery.bind(participant2,20, 30)
        //this variable "batterycharge2" contains a function we can invoke
        batterycharge2();
        console.log(participant2);
    
  </script>

console:
{name: 'john', battery: 80}  //30 + 20 + 30
```

Advantages:
- this functions help reuse methods of one object in another object 

### When to use call, apply and bind?
call and apply is immediately invoked, bind is returned and can be immediately invoked 
at a later stage 

Use .bind() when you want that function to later be called with a certain context,
useful in events. Use .call() or .apply() when you want to invoke the function
immediately, and modify the context.

## callback()
- when we pass a function as an argument 
- callback function that is to be executed after another function has finished 
executing 

```bash
 <script>
       function funA() 
       {
           setTimeout(function()
           {
           console.log('welcome a')
           }, 3000);
       }
       function funB() 
       {
           console.log('welcome b')
       }

       funA();
       funB();
       //even though we called function a first 
       // its taking time to load 
       // and function b is displayed first on the console 
  </script>

console:
welcome b
welcome a
```
#### During these situations we use callback,
because we want function A to be executed first 

```bash
// this example is not denoting callback.
 <script>
       function funA() 
       {
           setTimeout(function()
           {
           console.log('welcome a')
           funB();   //this is not a callback yet, 
                    //we'll discuss that in next example
           
           }, 3000);
       }
       function funB() 
       {
           console.log('welcome b')
       }

       funA();
  </script>

console:
welcome a 
welcome b 
```
### Why do we use callback functions?
JS is an event driven langauge, this means that instead of waiting for a response 
before moving on (like we did in the first example).

In this case JS will execute other functions which take lesser time to load 
and display it on the console, even if they are invoked before the function 
which takes longer time to load 

to prevent, this sequence why we use callback function, to ensure that 
the code is executed in the sequence we want it to.

```bash
<script>
      function person1(friend, callfriend)
      {
          console.log(`I'm busy, im with ${friend} i'll call you back`)

          callfriend()
      }

      function person2()
      {
          console.log("hey, whats up")
      }

      person1("fuzzy", person2)
                     //person2 over here denotes callback function
  </script>

console:
I'm busy, im with fuzzy i'll call you back
hey, whats up
```
