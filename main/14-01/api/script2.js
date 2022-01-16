
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


    //map is made up of tiles 

    //tiles is a hypothetical term to better understand this concept
    L.marker(coordinates).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    


},function(){
    alert("could not get your location")
})

