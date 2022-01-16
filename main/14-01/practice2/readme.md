### Features, we'll be implementing:
1. Create an style the home page (index.html)
2. Create and style the game page (game.html)
3. display feedback for correct and incorrect answers and animation
4. Create a progress bar 
5. cReate and style the end screen 
6. store high score in local storage 
- so we can access the high score at the end screen 


3. load questions from JSON instead of a static array 
- using fetch API to fetch questions from the json file 
- we could also dynamamically request and retreive questions from API, but that's not a part of the project requirement 


#### Emmet Doc
> Resource to speed up dev, by using emmet abbreviations 
https://docs.emmet.io/

```bash 
eg: when we type .container and tab then it creates a class of container 

(.container is the emmet abbreviation.)
```

#### Live server extension 
starts a local host server at your port number where webpage is hosted

### Web storage API 
used to store data (key:value pairs of string) to web browser 

Data is stored in:
#### 1. session storage
(stores data for one session)
as soon as user, closes window, the data is lost 
- session storage data is not sent to server while making network request calls 

#### 2. local storage 
(stores data with no expiry date)
even when the user closes the website, window the data is stored in the broswer 
- local storage has the highest memory capacity 

> getting data from local storage is easier and faster than making a network call and getting the data.

- user specific data can be kept in web browsers 

1. setting and accesing value 
```bash 
// Store
localStorage.setItem("lastname", "Smith");

//getting
localStorage.getItem("lastname");
```

#### Same origin policy in storage API 
you can access data of local storage from a webpage which has the same protocol, hostname as well as the same port number 
1. protocol (http/ https)
2. host/ domain 
3. port 

