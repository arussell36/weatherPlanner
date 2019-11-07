// GLOBAL VARIABLES //
// $(document).ready(function () {




    // UTILITY FUNCTIONS //
    
        // RECEIVE RAW DATA FROM API AND PARSE //
            // render the parsed data //
    
    function yousuck() {
      alert("yousuck");
    };
    
    
    
    
    // EVENT FUNCTIONS //
     
        // SEARCH FOR CITY (SEARCH BUTTON CLICK ACTION) //
            // send the city name to the openweather API //
            // set the weather info to the object returned //
    $("#search").on("click", function() {
      // yousuck();
      let cityName = $("#city").val();
      let cityWeather = `https://openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6907d289e10d714a6e88b30761fae22`;
      let forecast = `https://openweathermap.org/data/2.5/forecast/daily?q=${cityName}&appid=b6907d289e10d714a6e88b30761fae22`;
      console.log(forecast);
      let newCity = $("<button>").attr("id", cityName).text(cityName);
      $(".bodyIndex").append(newCity);

      // console.log(cityName);
    
    
    
      $.ajax({
          url: cityWeather,
          method: "GET"
        }).then(function(response) {
          // console.log(response);
          $("#cityName").text(`${response.name}, ${response.sys.country}`);
          $("#temp").text(`${response.main.temp}°C`);
          $("#humidity").text(`${response.main.humidity}%`);
          $("#wind").text(`${response.wind.speed} m/s`);

        });


      $.ajax({
          url: forecast,
          method: "GET"
        }).then(function(response) {
          console.log(response);


        });
    });
        // CHECK LOCAL STORAGE FOR PREVIOUS HISTORIES AND RENDER //
    
