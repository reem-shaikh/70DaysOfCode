JS is a single threaded language, This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. It's synchronous, but at times that can be harmful.

#### Synchronous JavaScript 
synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. 

Browser executes the file line by line - synchronously 
```bash
    <script>
        let a = 10 
        a = a + 1
        console.log(a)
    </script>

console
11
```
> Drawbacks of synchronous behavior:
- if we wrote a line of code thta takes a lot of time for execution, then the rest of the code is paused.

#### Is addEventListener asynchronous?
The addEventListener function itself is a synchronous function and it adds a listener to the DOM via Web APIs.

That callback invocation is asynchronous and depending on the callback function. The function can be either synchronous or asynchronous.

> Note: Callbacks can be used both for synchronous and asynchronous programming 

- Synchronous callback example 
```bash 
    <script>
        const btn = document.getElementById('btn')
        btn.addEventListener('click', console.log('clicked'))

        console.log(a)
    </script>

console:
clicked 
```
- Asynchronous callback example 
```bash 
<body>
    <button id="btn">click</button>

    <script>
    const btn = document.getElementById('btn')
    btn.addEventListener('click', ()=> {
            setTimeout(() => {
            console.log('waiting')
        },  5000);  
    })

    </script>

console:
5secs after button is clicked, settimeout is called 
```

#### Asynchronous JS 
In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.

> The word asynchronous means not occurring at the same time

Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute asynchronously.

In these circumstances, you may not want the JavaScript engine to halt the execution of the other sequential code. So, the JavaScript engine needs to manage things a bit more efficiently in this case.

##### We can classify most asynchronous JavaScript operations with two primary triggers:

1. Browser API/Web API events or functions. These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
```bash 
    <script>
        let a = 10 
        
        //using setTimeout() API 
        setTimeout(() => {
            console.log('waiting')
        }, 5000);

        console.log(a)
    </script>

console:
10
waiting
```
2. Promises. A unique JavaScript object that allows us to perform asynchronous operations.

#### AJAX (Asynchronous javascript and XML) - JS library 
A way to send a http request to a remote server 
> were going to make request to remote server using AJAX 

> Resources: 
```bash 
There is a repo on Git which consists of a bunch of Public APIs
https://github.com/public-apis/public-apis
```
```bash
    <script>
        ✅making a call to API using XHR object 
        const request = new XMLHttpRequest()

        ✅send get request using this api to read the data 
        //this is the API website: https://restcountries.com/
        request.open('GET', "https://restcountries.com/v3.1/name/india ")
        request.send()

        ✅in this case addeventlistener is asynchronous 
        request.addEventListener('load', function(){
            console.log("response text",this.responseText)
        })

        console.log(request) 
        ✅returns XHR object 
    </script>

console:
XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

response text [{"name":{"common":"India","official":"Republic of India","nativeName":{"eng":{"official":"Republic of India","common":"India"},"hin":{"official":"भारत गणराज्य","common":...
```
> more on XHR OBJECT 
```bash 
        var xhr = new XMLHttpRequest()
        console.log(xhr)

        xhr.open('GET', 'new.json')
        xhr.onerror = function(){
            console.log('some error happened')
        }

        xhr.onreadystatechange = function()
        {
            (xhr.readyState === 4 )
            {
                if(xhr.status == 200)
                {
                    console.log('response recieved')
                    console.log("response text",xhr.responseText)
                    var text = xhr.responseText
                    console.log("json",JSON.parse(text))
                }
            }
        }

        xhr.send()

console:
XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

xhr.html:25 response recieved
xhr.html:26 response text 

xhr.html:26 response text {
    "key": "value",
    "key 2":"value 2"
}
xhr.html:25 response recieved
xhr.html:28 json {key: 'value', key 2: 'value 2'}
```
>  ✅now we do the same code using fetch, using less lines of code 
```bash 
        fetch('new.json')
        .then(res => { 
           return res.json()
        }).then(result => {
            console.log("fetch",result)
        })

console:
fetch {key: 'value', key 2: 'value 2'}
```
>  ✅improvement using IIFE & async and await 
```bash 
        (async() => {
            let res = await fetch('new.json');
            res = await res.json()
            console.log("using iife",res)
        })();

console:
using iife {key: 'value', key 2: 'value 2'}
```
#### Callback Hell 
forcing asynchronous behavior to execute sequentially 
```bash 
✅this is callback hell 
    setInterval(() => {
        console.log('this is the first settimeout')
        setInterval(() => {
            console.log('this is the second settimeout')
               setInterval(() => {
               console.log('this is the third settimeout')
               }, 1000);
        }, 1000);
    }, 1000);

console:
this is the first settimeout
this is the second settimeout
this is the third settimeout
```
### Promise 
✅promise gets rid of this unreadable code, that callback hell throws

> a promise example 
```bash 
    <script>
        let p = new Promise((resolved, rejected)=> {
            const value = 2
            if(value==2){
                //when promise is fulfilled
                resolved('success')
            }else{
                //when promise is rejected 
                rejected('failure')
            }
        })

        ✅anonymous function 
        p.then((success)=> {
            console.log(success)
        }).catch((error)=> {
            console.log(error)
        })
    </script>
```
#### Promise example using fetch 
```bash 
    <script>
        const data = fetch('https://restcountries.com/v3.1/name/india')
        data.then((response)=> {
            return response.json()
        }).then((response) => {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
    </script>

console:
[{…}]
0: {name: {…}, tld: Array(1), cca2: 'IN', ccn3: '356', cca3: 'IND', …}
length: 1
[[Prototype]]: Array(0)
```
> Once promise is settled (success or reject) (which happens only 1 time), you cannot later change its state 

### Async & Await 
async-await or is it only reserved for promises? Yes, async-await is syntax sugar to work with promises

> If we only log a function then it only returns a reference of the function 
```bash 
    <script>
    const fn = () => {
        console.log('hello geeks')
        return 'abcd'
    }

    console.log(fn)
    //we have returned the function reference here 
    console.log(fn())
    </script>

console:
() => {
        console.log('hello geeks')
        return 'abcd'
    }
index.html:17 hello geeks
index.html:23 abcd
```
> Using async function 
```bash 
    <script>
    const fn = async() => {
        console.log('hello geeks')
        return 'abcd'
    }

    console.log(fn)
    //we have returned the function reference here 

    ✅when we invoke the async function, it returns a promise 
    console.log(fn())
    </script>

console:
async() => {
        console.log('hello geeks')
        return 'abcd'
    }
index.html:17 hello geeks
index.html:23 Promise {<fulfilled>: 'abcd'}
```
```bash 
    <script>
    ✅Its an asynchronous function,which means this function will execute 
    in the background 
            const data = await fetch('https://restcountries.com/v3.1/name/india')
            console.log(data)
        }

        myFunction()
        console.log('hi')
    </script>

console:
hi
index.html:17 Response {type: 'cors', url: 'https://restcountries.com/v3.1/name/india', redirected: false, status: 200, ok: true, …}
```
> Async function can exist without await, but await cannot exist without async 
> Every async function returns a promise 
> The keyword async before a function makes the function return a promise.
```bash 
async function myFunction() {
  return "Hello";
}
```





















