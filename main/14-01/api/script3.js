//✅were adding an event listener on the tile so we can extract the coordinates of that particular tile 

//geolocation is a browser API 
//geolocation present inside navigator API (through which we can fetch location)
//geolocation (takes 2 arguments which are functions)

//1st function will run if geolocation is able to get your location
//2nd function will run if geolocation is not able to get your location
navigator.geolocation.getCurrentPosition(function(event){
    console.log("event",event)



  //importing this from
  //https://leafletjs.com/
    const coordinates =[event.coords.latitude,
    event.coords.longitude]
    console.log("latitude", event.coords.latitude)
    console.log("longitude", event.coords.longitude)
    

    var map = L.map('map').setView(coordinates, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    //map is made up of 2d tiles 
    //tiles is a hypothetical term to better understand this concept

    // L.marker(coordinates).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();

    //map.on(event, function)
    map.on('click', function(mapEvent){
        //when you click anywhere on the map 
        //it will console clicked 
        console.log("clicked")
        console.log("mapevent", mapEvent)

        //returns current location of current point that is clicked 
        const currentLocation = [mapEvent.latlng.lat, 
        mapEvent.latlng.lng]
        console.log(currentLocation)
        //fetching the current location of the quadrant we clicked 

        L.marker(currentLocation).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    })
    


},function(){
    alert("could not get your location")
})

