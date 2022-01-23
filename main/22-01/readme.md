### Working on youtube clone 
> steps to get the API key:
1. go to google cloud -> console -> home -> dashboard -> create new project -> navigate to API library -> youtube data API v3 -> enable 

2. generate API key
```bash
AIzaSyAyXnaIgJJYFsAvz5PpjwytZNSaxBj2wj4
```
3. edit the API key: application restriction set to none, otherwise it wont accept requests from local IP 
4. Get http request values for the videos and channel lists 
- video: to fetch videos 
- channel: to fetch channel icons 
```bash
✅for video http request
//navigate to documentation for this youtube data API v3: https://developers.google.com/youtube/v3/docs/videos/list 
//scroll down and copy the http request line 
//https://www.googleapis.com/youtube/v3/videos

✅for channel http request 
//navigate to https://developers.google.com/youtube/v3/docs/channels/list 
//scroll down and copy the http request line 
//GET https://www.googleapis.com/youtube/v3/channels
```

> link to google cloud platform API link: https://console.cloud.google.com/apis/api/youtube.googleapis.com/overview?project=youtube-clone-339020&supportedpurview=project
```bash 
<body>
    <nav class="navbar">
        <div class="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <img src="img/logo.PNG" class="logo" alt="">

        <div class="search-box">
            <input type="text" class="search-bar" placeholder="search">
            <button class="search-btn"><img src="img/search.PNG" alt=""></button>
        </div>

        <div class="user-options">
            <!--flex-direction:row-->
            <img src="img/video.PNG" class="icon" alt="">
            <img src="img/grid.PNG" class="icon" alt="">
            <img src="img/bell.PNG" class="icon" alt="">
            <div class="user-dp">
                <img src="img/profile-pic.png" alt="">
            </div>
        </div>
        <!--user-options ends-->
    </nav>

    <!-- sidebar position:fixed-->
    <div class="side-bar">
        <a href="#" class="links active"><img src="img/home.PNG" alt="">home</a>
        <a href="#" class="links"><img src="img/explore.PNG" alt="">explore</a>
        <a href="#" class="links"><img src="img/subscription.PNG" alt="">subscription</a>
        <hr class="seperator">
        <a href="#" class="links"><img src="img/library.PNG" alt="">library</a>
        <a href="#" class="links"><img src="img/history.PNG" alt="">history</a>
        <a href="#" class="links"><img src="img/your-video.PNG" alt="">your video</a>
        <a href="#" class="links"><img src="img/watch-later.PNG" alt="">watch later</a>
        <a href="#" class="links"><img src="img/liked video.PNG" alt="">like video</a>
        <a href="#" class="links"><img src="img/show more.PNG" alt="">show more</a>
    </div>

    <!-- filters -->
    <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">CSS</button>
        <button class="filter-options">web development</button>
        <button class="filter-options">python</button>
        <button class="filter-options">entertainment</button>
        <button class="filter-options">marvel</button>
        <button class="filter-options">javascript</button>
        <button class="filter-options">artificial intelligence</button>
        <button class="filter-options">machine learning</button>
        <button class="filter-options">trending</button>
    </div>

    <!-- videos -->
    <div class="video-container">

        <div class="video">
            <img src="img/profile-pic.png" class="thumbnail" alt="">
            <div class="content">
                <img src="img/profile-pic.png" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">youtube clone 2021 | create working youtube clone</h4>
                    <p class="channel-name">modern web</p>
                </div>
                <!--.info ends-->
            </div>
            <!--.content ends-->
        </div> 

    </div>

<script src="https://apis.google.com/js/api.js"></script>

<script>
const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyAyXnaIgJJYFsAvz5PpjwytZNSaxBj2wj4 ";

✅note that: we added ? after the http request message 
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


fetch(video_http + new URLSearchParams({
    //youll find the parameters for this api on the same page 
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'US'
})
).then(res => 
    res.json()
)
.then(data => {
    //returning the promise in this object 
    data.items.forEach(item => {
        getChannelIcon(item);

        console.log("data", data)
        console.log("data.items", data.items)
        //all the data we want is in the snippet part 
        console.log("data.snippet", data.items[0].snippet)
        //snippet contains 
        //channelTitle 
        //title
        //thumbnails
        //description

    })
})
.catch(err => console.log(err));

✅creating this function to fetch channel icon seperately, since its not found in data object 
const getChannelIcon = (video_data) => {
    console.log("video data", video_data)
    console.log("video data snippet", video_data.snippet)
    console.log("video data.snippet.channelID", video_data.snippet.channelId)
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        //this is the address of the custom icon URL 
        //setting video thumbnail to the custom icon URL 
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

✅populating the .videocontainer section with dyanamic values 
const makeVideoCard = (data) => {
    ✅setting url of current page using location.href
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})
</script>
</body>
</html>
```