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
2. If you dont have ID of data, use POST (in this case server will create the index)

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
2. embed the secret key in the HTTP authorization header
Public Authentication
Most actions can be performed without requiring authentication from a specific user. For example, searching, fetching, or downloading a photo does not require a user to log in.

To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:
```bash 
https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
```
3. This is the http header that will be send through fetch
```bash 
"https://api.unsplash.com/search/photos?query=" +input.value +"&per_page=1000&client_id=z81iA817GPcKgF6g3cg5-uAUPp3O_EXLIDfdKIUF_2Y";
```
> here's the code with example
```bash 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
      rel="stylesheet"
    />

    <!-- https://cdnjs.com/libraries/font-awesome-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Lora", sans-serif;
        background-color: black;
        color: white;
        overflow-x: hidden;
      }

      .container {
        width: 1280px;
        margin: auto;
      }

      header {
        border-bottom: 5px solid crimson;
      }

      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        min-height: 70px;
        padding: 0 20px;
      }

      #header h2 {
        font-size: 2rem;
      }

      #search_box {
        position: relative;
        width: 350px;
      }

      #search_box input {
        box-sizing: border-box;
        width: 100%;
        font-size: 1rem;
        padding: 8px;
        border-radius: 25px;
        outline: none;

        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        border: 1px solid #dddddd;
      }

      input:focus {
        box-shadow: 0 0 5px crimson;
        border: 1px solid crimson;
      }

      #search_box i {
        color: black;
        position: absolute;
        cursor: pointer;
        top: 25%;
        right: 4%;
        transition: 1s;
      }

      #search_box i:hover {
        color: crimson;
      }

      #grid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
      }

      .img {
        width: 380px;
        height: 214px;
        margin-top: 15px;
        background-position: center;
        background-size: cover;
        border-radius: 2px;
        cursor: pointer;
      }

    </style>
  </head>

  <body>
    <header>
      <div class="container">
        <div id="header">
          <h2>
            <i class="fas fa-camera" style="color: crimson"></i> Unsplash API
          </h2>
          <div id="search_box">
            <input id="input" type="text" placeholder="Search..." /><i
              id="search"
              class="fas fa-search"
            ></i>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container">
        <div id="grid"></div>
      </div>
    </section>

    <script>
      dayNightTheme = () => {
        let date = new Date();
        let hour = date.getHours();

        if (hour >= 7 && hour < 19) {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        } else {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        }
      };

      window.addEventListener("load", dayNightTheme);

      document.querySelector("#search").addEventListener("click", () => {
        loadImg();
      });

      loadImg = () => {
        document.querySelector("#grid").textContent = "";
        console.log("input",input.value)
        //takes the query we searched for 

        const url ="https://api.unsplash.com/search/photos?query=" +input.value +"&per_page=1000&client_id=z81iA817GPcKgF6g3cg5-uAUPp3O_EXLIDfdKIUF_2Y";
        //this is my access key 

        fetch(url)
          .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
          })

          .then((data) => {
            loadImages(data);
          })

          .catch((error) => console.log(error));
      };

      loadImages = (data) => {
        for (let i = 0; i < data.results.length; i++) {
          let image = document.createElement("div");
          //create div element and add img class to it 
          image.className = "img";
          image.style.backgroundImage =
            "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
            console.log(data.results[i])
          
          //in the #grid, image is appended 
          document.querySelector("#grid").appendChild(image);
        }
      };
    </script>
  </body>
</html>
```

### Creating a weather API 
1. First we'll get the weather icons from openweathermap
```bash
    To get the weather icon:

    1. Go to these website
    Weather icons: these icons change dyanamically
    https://openweathermap.org/weather-conditions
   
   2. copy this icon URL
    http://openweathermap.org/img/wn/10d@2x.png
   Note that: the icons will change with the change in weather 
```
2. We'll need the API_KEY to dyanamically change the current weather data
```bash 
to get the API key 
1. sign up on openweathermap 
2. navigate to API keys 
3. and viola!
API KEY: 25a5503889854a94fd093c6b8b7f7b97

well be embedding this API_KEY in the API we want to use 

1. head over API on top of the page
2. well be using "One call API"
3. click on documentation of One call API 
4. scroll down and head over to How to make an API call 
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

Were going to be adding some properties (as given in the documentation)
```
3. Creating the final API URL 
> given below are some properties of the API 
```bash 
Parameters:
lat, lon	     	Geographical coordinates (latitude, longitude)
appid	        	Your unique API key (you can always find it on your account page under the "API key" tab)
exclude	optional	By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).

current
minutely
hourly
daily
alerts

units	           Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.
```

4. We embed some of these in our API CALL URL 
```bash 
So this is the one call API key 
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

After adding properties, this is how it looks like:
https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}
```
5. We've also used moment JS library to get the sunrise and sunset time values 
```bash 
weve gotten the moment JS CDN from https://cdnjs.com/libraries/moment.js

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
```
```bash 
    <style>
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
        }

        body {
            background-image: url('https://i.pinimg.com/originals/b9/5f/53/b95f539459be57a0bac289e7ff550391.gif');
            background-size: cover;
            background-repeat: no-repeat;
            overflow: hidden;
            height: 100vh;
        }

        .container {
            padding: 20px 70px;
            /*top/bottom left/right  */
            color: white;
        }

        .date-container {
            font-weight: 100;
        }


        .current-info {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
        }

        .date-container .time {
            font-size: 60px;
            font-weight: 100;
        }

        .date-container #am-pm {
            font-size: 30px;
            margin-left: 20px;
        }

        .date-container .date {
            font-size: 30px;
        }

        .place-container {
            text-align: end;
        }

        .place-container .time-zone {
            font-size: 30px;
            font-weight: 100;
        }

        .place-container .country{
            font-size: 12px;
            font-weight: 700;
        }

        .current-info .others {
            display: flex;
            flex-direction: column;
            background: rgba(24, 24, 27, 0.6);
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
            border: 1px solid white;

        }

        .current-info .others .weather-item {
           display: flex;
           justify-content: space-between;
        }


.future-forecast{
    background: rgba(24,24,27,0.8);
    padding: 25px;
    position: fixed;
    bottom: 0;
    display: flex;
    color:white;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
}

.future-forecast .today{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    border-radius: 10px;
    padding:15px;
    padding-right: 40px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2)
}

.future-forecast .today .day{
    padding: 5px 15px;
    background: #3c3c44;
    border-radius: 50px;
    text-align: center;
}

.future-forecast .today .temp{
    font-size: 18px;
    padding-top: 15px;
}

.future-forecast .weather-forecast{
    display: flex;
    flex-direction: row;
}

.weather-forecast .weather-forecast-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border: 1px solid #eee;
    padding: 15px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2)
}

.weather-forecast .weather-forecast-item .day{
    padding: 5px 15px;
    background: #3C3C44;
    border-radius: 50px;
    text-align: center;
}

.weather-forecast .weather-forecast-item .temp{
    font-weight: 100;
    font-size: 12px;
}

    </style>
</head>
<body>
    <div class="container">
        <div class="current-info">

            <div class="date-container">
                <div class="time" id="time">
                    12:30 <span id="am-pm">PM</span>                       
                </div>
                <!--time ends-->

                    <div class="date" id="date">
                        Monday, 24th May
                    </div>

                    <div class="others" id="current-weather-items">

                   <!-- <div class="weather-item">
                            <div>Humidity</div>
                            <div>95.2%</div>
                        </div>
                        <div class="weather-item">
                            <div>Pressure</div>
                            <div>95.2%</div>
                        </div>
                        <div class="weather-item">
                            <div>Wind speed</div>
                            <div>95.2%</div>
                        </div> -->
                        <!--weather-items ends-->
                    </div>
                    <!--current weather items ends-->

                </div>
                <!--date container ends-->

            <div class="place-container">
                <div class="time-zone" id="time-zone">Asia/Kolkata</div>
                <div id="country" class="country">IND</div>
            </div>
            <!--place container ends-->
        </div>
        <!--current-info ends-->
   </div>
   <!--container ends-->


   <!-- 
    To get the weather icon:

    1. Go to these website
    Weather icons: these icons change dyanamically
    https://openweathermap.org/weather-conditions
   
   2. copy this icon URL
    http://openweathermap.org/img/wn/10d@2x.png -->

   
    <div class="future-forecast">

        <div class="today" id="current-temp" >
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
            <div class="day" style="margin-top: 10px; margin-left: 10px;
            margin-right: 10px;">Monday</div>
            <div class="temp" style="margin-right: 20px;">Night - 25.6&#176</div>
            <div class="temp">Day - 35.6&#176</div>
        </div>

        <div class="weather-forecast" id="weather-forecast">
            <div class="weather-forecast-item">
                <div class="day">Tue</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
                <div class="temp">Night - 25.6&#176</div>
                <div class="temp">Day - 35.6&#176</div>
            </div>
            <!--weather-forecast-item ends-->
            <div class="weather-forecast-item">
                <div class="day">Tue</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
                <div class="temp">Night - 25.6&#176</div>
                <div class="temp">Day - 35.6&#176</div>
            </div>
            <!--weather-forecast-item ends-->
            <div class="weather-forecast-item">
                <div class="day">Tue</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
                <div class="temp">Night - 25.6&#176</div>
                <div class="temp">Day - 35.6&#176</div>
            </div>
            <!--weather-forecast-item ends-->
            <div class="weather-forecast-item">
                <div class="day">Tue</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
                <div class="temp">Night - 25.6&#176</div>
                <div class="temp">Day - 35.6&#176</div>
            </div>
            <!--weather-forecast-item ends-->

        </div>
        <!--weather-forecast ends-->
     </div>
    <!--future-forecast ends-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

    <script>
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//we need this API key for all the API calls well be making
const API_KEY ='25a5503889854a94fd093c6b8b7f7b97';

//we can update date and time without using weather API 
setInterval(() => {
    //craeting a date object 
    const time = new Date();
    const month = time.getMonth();
    console.log("month",month)
    const date = time.getDate();
    console.log("date",date)
    const day = time.getDay();
    console.log("day",day)
    const hour = time.getHours();
    console.log("hour",hour) //returns the 24hr time 

    //using ternary operator
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    //if hr>=13 then do hr%12
    //eg: hr=14 then 14/12 = 1.1666 ~ 1.17 ~ 1.2
    //14%12 = 2

    console.log("hr12",hoursIn12HrFormat)
    const minutes = time.getMinutes();
    console.log(minutes)

    const ampm = hour >=12 ? 'PM' : 'AM'
    //since hr is 24hr time 
    //if hr>=12 then its PM otherwise its AM

    //nested ternary, to showcase the time like this 00:00:00
    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + 
    `<span id="am-pm">${ampm}</span>`

    //if hour < 10 then 0+hr (because were only loading 2 dig number on screen)
    //if hour > 10 then hr 
    //if minute < 10 then 0+min
    //if min > 10 then min


    //days and months are an array 
    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
    //days[0], date, months[0]

}, 1000);
//1second = 1000ms 
//load the time every 1second 

//To get the API key 
//1. sign up on openweathermap 
//2. navigate to API keys 
//3. and viola!
//API KEY: 25a5503889854a94fd093c6b8b7f7b97

//head over API on top 
//click on documentation of One call API 
//scroll down and head over to How to make an API call 
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//were going to be adding lattitude, longitude and API KEY

getWeatherData()
function getWeatherData () {
    //from geolocation well get lattitude and longitude 
    navigator.geolocation.getCurrentPosition((success) => {
        console.log('success object', success)
/*
GeolocationPosition
coords: GeolocationCoordinates
accuracy: 1086.6158826564797
altitude: null
altitudeAccuracy: null
heading: null
latitude: 19.1389487
longitude: 72.8397202
speed: null
[[Prototype]]: GeolocationCoordinates
timestamp: 1642334891127
[[Prototype]]: GeolocationPosition

*/
        console.log('success coords',success.coords)
        //using object destructuring 
        let {latitude, longitude } = success.coords;

        //https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => 
        //we added some parameters like hourly,minutely&units=metric (default unit is kelvin, metric denotes celsius unit)
        {
            return res.json()

        }).then(data => {

        console.log("data",data)
/*
{lat: 19.1389, lon: 72.8397, timezone: 'Asia/Kolkata', timezone_offset: 19800, current: {…}, …}
✅current: {dt: 1642335063, sunrise: 1642297492, sunset: 1642337476, temp: 27.88, feels_like: 28.67, …}
daily: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
lat: 19.1389
lon: 72.8397
timezone: "Asia/Kolkata"
timezone_offset: 19800
[[Prototype]]: Object
*/
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
    console.log("data-current",data.current)
/*
{dt: 1642335575, sunrise: 1642297492, sunset: 1642337476, temp: 26.88, feels_like: 28.28, …}
clouds: 59
dew_point: 19.75
dt: 1642335575
feels_like: 28.28
✅humidity: 65
✅pressure: 1012
✅sunrise: 1642297492
✅sunset: 1642337476
temp: 26.88
uvi: 0.24
visibility: 3500
weather: [{…}]
wind_deg: 310
✅wind_speed: 4.12
[[Prototype]]: Object
*/

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'
/* we imported moment.js CDN from https://cdnjs.com/libraries/moment.js
*/
    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>

    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
    </div>  
    `;

    console.log(data)
/*
{lat: 19.1367, lon: 72.8444, timezone: 'Asia/Kolkata', timezone_offset: 19800, current: {…}, …}
current: {dt: 1642336778, sunrise: 1642297490, sunset: 1642337475, temp: 26.9, feels_like: 28.31, …}
✅daily: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
lat: 19.1367
lon: 72.8444
timezone: "Asia/Kolkata"
timezone_offset: 19800
[[Prototype]]: Object


*/
    console.log('data daily', data.daily)
/*
(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {dt: 1642314600, sunrise: 1642297490, sunset: 1642337475, moonrise: 1642332540, moonset: 1642292640, …}
1: {dt: 1642401000, sunrise: 1642383893, sunset: 1642423914, moonrise: 1642422120, moonset: 1642382040, …}
2: {dt: 1642487400, sunrise: 1642470294, sunset: 1642510352, moonrise: 1642511760, moonset: 1642471380, …}
3: {dt: 1642573800, sunrise: 1642556694, sunset: 1642596791, moonrise: 1642601400, moonset: 1642560480, …}
4: {dt: 1642660200, sunrise: 1642643092, sunset: 1642683229, moonrise: 1642691040, moonset: 1642649400, …}
5: {dt: 1642746600, sunrise: 1642729490, sunset: 1642769667, moonrise: 1642780680, moonset: 1642738200, …}
6: {dt: 1642833000, sunrise: 1642815886, sunset: 1642856106, moonrise: 1642870200, moonset: 1642826760, …}
7: {dt: 1642919400, sunrise: 1642902281, sunset: 1642942543, moonrise: 1642959840, moonset: 1642915320, …}
length: 8
[[Prototype]]: Array(0)
*/

    //renderig api data on the other day
    //http://openweathermap.org/img/wn/10d@2x.png
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        console.log('idx', idx)
        console.log('day', day)

        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day[0].weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        //when you console.log(data) youll find properties of data 
        }else{
            otherDayForcast += `

            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })

    weatherForecastEl.innerHTML = otherDayForcast;
}
    </script>
</body>
</html>
```