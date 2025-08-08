const weatherform= document.querySelector(".weatherform");
const cityinput= document.querySelector(".cityinput");
const card= document.querySelector(".card");
const apikey="0f1c75888ae0d1888c16caf802585aaa";


weatherform.addEventListener("submit", async event=>{
  event.preventDefault();

  const city=cityinput.value;
  if(city){
    try{
      const weatherdata= await getweatherdata(city);
      displayweatherinfo(weatherdata);

    }
    catch(error){
      console.error(error);
      displayerror(error);
    }

  }

  else{
    displayerror("Please enter a city");
  }
}
)

async function getweatherdata(city) {
  const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response= await fetch(apiurl);
  console.log(response);

  if(!response.ok){
    throw new Error("could not fetch weather data");

  }
  return await response.json();
  
}

function displayweatherinfo(data){

const{name:city,
     main:{temp,humidity},
     weather:[{description,id}]}=data;
     card.textContent="";
     card.style.display="flex";

     const citydisplay= document.createElement("h1");
     const tempdisplay= document.createElement("p");
     const humiditydisplay= document.createElement("p");
     const descdisplay= document.createElement("p");
     const weatheremoji= document.createElement("p");

     citydisplay.textContent=city;
     citydisplay.classList.add("citydisplay");
     card.appendChild(citydisplay);

     tempdisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
     tempdisplay.classList.add("tempdisplay");
     card.appendChild(tempdisplay);

     humiditydisplay.textContent=`Humidity: ${humidity}%`;
     citydisplay.classList.add("humiditydisplay");
     card.appendChild(humiditydisplay);

     descdisplay.textContent=description;
     descdisplay.classList.add("descdisplay");
     card.appendChild(descdisplay);

     weatheremoji.textContent= getweatheremoji(id);
     weatheremoji.classList.add("weatheremoji");
     card.appendChild(weatheremoji);

}

function getweatheremoji(weatherid){

  switch(true){
    case(weatherid >= 200 && weatherid <300):
        return "⛈️";
        break;
    case(weatherid >= 300 && weatherid <400):
        return "🌦️"
        break;
    case(weatherid >= 500 && weatherid <600):
        return "🌧️"
        break;
    case(weatherid >= 600 && weatherid <700):
        return "❄️"
        break; 
    case(weatherid >= 700 && weatherid <800):
        return "🌫️"
        break;
    case(weatherid==800):
        return "🌞"
        break;        
    case(weatherid >= 801 && weatherid <810):
        return "☁️"
        break;
        
     default:
      return"❓"
        
  }
  

  


}

function displayerror(message){

  const errordisplay= document.createElement("p");
  errordisplay.textContent=message;
  errordisplay.classList.add("errordisplay");

  card.textContent="";
  card.style.display="flex";
  card.appendChild(errordisplay);

}