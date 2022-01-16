When we make a network request, we specify what we want the server to do 
with the data using HTTP methods.

#### HTTP REQUEST METHODS:
It is an indication about what desired action is expected from the server 
1. GET - its used to get data from server [default request]
2. PUT - its used to put data in server 
3. POST - its used to add data in server 
4. DELETE - it is when we want server to delete some data 
5. PATCH - it is used to update the data 
6. HEAD - It is when we want to check whether the data exists or not
7. OPTIONS (pre flight)- this is a request made by the user agent/ browser by default 
- it is created to check whether the actual request will be succesful or not 
> before we start uploading, we check if server is ready to accept or not using OPTIONS
> options asks server whether the server is ready to take a put request coming from a particular client

- user agent is a peice of software which connects the humans to the server 
- there are user agents other than browser 
eg: Siri, Google home, amazon home 

8. CONNECT - when were sending a very heavy file you need to create a tunnel to the server using connect,
for the resource 
9. TRACE - Its used for debugging and tracing the path to the server.
- it returns a string of different IP's 

> Difference between PUT and POST?
Both are used for inserting data to the server 
1. If you have ID of the data, use PUT 
2. If you dont have ID of data, use POST 

We'll be sending fetch requests using these HTTP request methods:

### Unsplash API Image generator 
1. create an account and accept all terms, you will get these keys 
- Access key
```bash
z81iA817GPcKgF6g3cg5-uAUPp3O_EXLIDfdKIUF_2Y
```
- Secret key 
```bash 
EJJobXngSZw2dg2viiKzIm4hAibuohH8KuGxReu3ziU
```