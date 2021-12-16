
## Scope 
block/range where variable can be accessed/ availaibility

### Scope chaining 
functionility of checking the current scope and if reference is not available 
then check the parent scope, if its still unavailable then give reference error 
- increasing search criteria for reference 

> var gets pushed on top due to hoisting 
```bash 
<script>
    {
        var a = 10
    }

    console.log(a)
</script>

console:
10
```

> hoisting doesnt work on let 
```bash 
<script>
        {
            let a = 10
        }

        console.log(a)
</script>
//let and const does not get hoisted, thats why this code crashes 

console:
reference error 
```
> let is in its scope 
```bash 
   <script>
        {
            let a = 10
            console.log(a)
        }

    </script>

console:
10
```
> example 
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        console.log(a)
    }
    </script>

console;
20 
10 
```
> example
```bash 
    <script>
    {
        let a = "10"
        {
            let a = "20"
            console.log(a)
        }
        {
            let a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
30
10 
```
> In the same scope you cant change const, but in child scope you can change it 
```bash
    <script>
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            {
                console.log(a)
            }
        }
        console.log(a)
    }
    </script>

console:
20 
10 
10
```
> in let, can update value within same scope level , in const cannot update value 
within the same scope level, can create a new child block and a new constant with the 
same name 
```bash 
    const m = "20"
    function fn()
    {
        const m = "30"
        console.log(m)
    }

    fn()

console:
30 
```
> example using const 
```bash 
    <script>
    const a = "5"
    {
        const a = "10"
        {
            // const has a tiny scope 
            const a = "20"
            console.log(a)
        }
        {
            const a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20
30
10
5
```
> var refers to the last updated value, unlike const 
```bash 
    <script>
    var a = "5"
    {
        var a = "10"
        {
            var a = "20"
            console.log(a)
        }
        {
            var a = "30"
            {
                console.log(a)
            }
        }
        console.log(a)
    }

    console.log(a)
    </script>

console:
20 
30 
30 
30
```
> const refers to inner scope, var refers to outer scope 
```bash 
    <script>
    var a = "5"
    {
        const a = "20"
        {
            console.log(a)
        }
    }
    </script>

console:
20 
```
> parent: let, child:var. wont work 
```bash 
    <script>
    let a = "10"
    {
        var a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
chaining.html:13 Uncaught SyntaxError: Identifier 'a' has already been declared
```
> parent: var, child:let, works 
```bash 
    <script>
    var a = "10"
    {
        let a = "20"
        {
            console.log(a)
        }
    }
    console.log(a)
    </script>

console:
20 
10 
```
> cannot have two let together in same scope 
```bash 
    <script>
    // let a;   - declaration 
    // a = 20;  - defination 

    let a = 10  
    let a = 20   
    </script>

console:
Uncaught SyntaxError: Identifier 'a' has already been declared
```
> dont have redeclaration 
```bash 
<script>
    let a = 10    
    a = 20     
    console.log(a)
</script>

console:
20
10
```
> var allows redeclaration
```bash 
<script>
    var a = 10 
    var a = 20 
    console.log(a)
</script>
```

### Lexical scope 
relative scope - scope within which we can access 
> lexical scope of var is global 

process of finding lexical scope (scope where the variable is present) is called scope chaining 

```bash 
<script>
    let b = 10
    {
        let b = 20
        {
            {
                console.log(b)
            }
        }
    }
</script>

console:
20
```
> what is lexical scope wrt 2 lines of code.
```bash 
<script>
//reference scope where all required variables/ functions/ constants are available 
    let c = 10
    let d = 20 
    { //this bracket enclosure is the lexical scope 
        let c = 30
        {
            let d = 40 
            {
                console.log(c) ✅
                console.log(d) ✅
            }
        }
    }
</script>

console:
30 
40 
```
#### Why this output? 
> var is global scoped so it can be accessed outside for loop, thats why no error 

```bash 
    <script>
        for(var i = 0; i < 5; i++)
        // loop exits when i=5
        {
            setTimeout(function(){
                console.log(i)
            }, 0)
        }
    </script>

console:
5
5
5
5
5
```
> example
```bash 
<script>
    for(var i = 0; i <= 5; i= i+4)
        {
            // i=0; i<=5 ; i=4 
            // i=4; i<=5;  i=8
            
        }
        console.log(i)
</script>

console:
8 
```
> example
```bash 
<script>
    for(var i = 1; i <= 5; i= i*3)
        {
            // i=1; 1<=5; i=3
            // i=3; i<=5; i=9
        }
        console.log(i)
</script>

console:
9
```