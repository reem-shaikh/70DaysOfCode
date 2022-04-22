> Difference between `not defined` and `undefined`
```bash 
console.log(x)

console:
x is not defined 
```
> another example, 
```bash 
var x
console.log(typeof x)

console:
undefined 
```
> another example,
```bash 
console.log(typeof x)

if(typeof x != 'undefined'){
    console.log(x)
}

console:
undefined 
```
### How do we handle errors?
try catch block 
```bash 
try {
    console.log(y)
}
# if there is an error only then catch will run 
catch (error) {
    console.log('y is not defined')
}
```
> How do you make a server call?
```bash 
fetch().
then(res => return res.json())
```
> On what conditions can API call fail?
- internet connection
- server down
- server blocked
- server has been moved
- api location has been moved 
- url wrong 

Since there is a probablity of the API call failing were wrapping it inside the try-catch block 
```bash 
try {
    fetch()
    .then(res => {return res.json()})
    .catch()
}
catch(error) {
    console.log('error')
}
```
> any server call / undeclared cases / race condition should be wrapped inside try-catch block 
```bash 
# race condition
if we make 2 api calls where  
one api call `a` can be executed faster than the other one `b` which is a bit slower and executes later on  
but the output can even switch with `b` being faster than `a`
since the output can differ - race condition 
its better if we wrap this kind inside a try-catch block
```
```bash 
# were creating a promise 
const x = new Promise((resolve, reject) => {
    # takes 2 args - success callback, failure callback 
    setTimeout(() => {
        resolve()
    }, 1000)
})

x.then(() => {
    # success callbacck
    console.log('success')
}, ()=> {
    # error callback 
    console.log('error')
})
```
> Q1. Write a promise for these requirments:
- if promise1 -- success promise1, error promise1
- if promise2 -- success promise2, error promise2
- both are done- all done 

```bash 
const Promise1 = new Promise((resolve, reject) => {
    const x = 21
    setTimeout(() => {
       if(x % 2 == 0) {
           resolve()
       } else {
           reject()
       }
    }, 1000)
})

const Promise2 = new Promise((resolve, reject) => {
    const x = 21
    setTimeout(() => {
       if(x % 2 != 0) {
           resolve()
       } else {
           reject()
       }
    }, 1000)
})

Promise1.then(() => {
    console.log('success promise1')
}, () => {
    console.log('error promise1')
})

Promise2.then(() => {
    console.log('success promise2')
}, () => {
    console.log('error promise2')
})

promise.all([promise1, promise2]).then((values) => {
    console.log('all done')
})
```
> in case we have a scene where we want to show loader when all the API calls are completed, for such cases we need promise.all 

