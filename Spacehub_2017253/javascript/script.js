//Here Im consuming Where the ISS's REST API to display the location of the International Space Station (id 25544)
//Ref: https://wheretheiss.at/w/developer

const mapiss =  L.map('mapISS').setView([0,0], 1);
const attribution = '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mapiss);

//Code snippet for the icon taken from leaflet.js - custom-icons- 
const ISSicon = L.icon({
    iconUrl: 'icon.png',
    iconSize:     [50, 32], // size of the icon
    iconAnchor:   [25, 16], // point of the icon which will correspond to marker's location
});

const marker =   L.marker([0, 0], { icon: ISSicon }).addTo(mapiss);


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';     
        
        async function getStation(){
        
        //connecting to API and getting data as Json
        const response= await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;
        
        //setting the marker to appear in the exact coordinates of the ISS
        marker.setLatLng([latitude,longitude]);      
        mapiss.setView([latitude,longitude], 2);
        
        //getting the output as text printed to screen
        document.getElementById('lat').textContent = latitude;
        document.getElementById('lon').textContent = longitude;
        
    }
    
getStation();

//With this method the coordinates get updated every second
setInterval(getStation, 1000);
setTimeout(1000);

//Handling error, if theres an issue it will be printed to the console 
fetch(api_url).catch(err => console.log(err));