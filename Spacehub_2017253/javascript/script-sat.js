//I used the Public API APOD, that allows accessing NASA's picture of the DAY

const apiurl = 'https://apodapi.herokuapp.com/api/';

async function getPicOfDay(){
         
        //connection to API
        const response= await fetch(apiurl);
        
        //getting the response from api as json 
        const data = await response.json();
        const {  copyright , date, title, hdurl, media_type, description} = data;
        
        //getting the output as text printed to screen
        document.getElementById('copyright').textContent = copyright;
        document.getElementById('date').textContent = date;
        document.getElementById('title').textContent = title;
        document.getElementById('media_type').textContent = media_type;
        document.getElementById("pic").src = hdurl;
        document.getElementById("description").textContent = description;
        
        }

getPicOfDay();

//Handling error, if theres an issue it will be printed to the console 
fetch(api_url).catch(err => console.log(err));