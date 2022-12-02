const showWeather=(data)=>{
    if(data.cod==="404"){
      weather.innerHTML=`<h2>City not found</h2>`
        return;
    }
    
    weather.innerHTML=` 
         <div>
           <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
         </div>
         <div>
           <h2>${data.main.temp}°C</h2>
           <h4>${data.weather[0].main}</h4>
         </div>
         `
  }
  
  form.addEventListener(
    "submit",
      function(event){
        getWeather(search.value);
        event.preventDefault();
      }
    )
  