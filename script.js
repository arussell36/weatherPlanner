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
      $("#search").on("click",() => {
      // yousuck(); 
      let cityName = $("#city").val();
      let cityWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=c5f6d6a76e97a0ca948994ffc65a9b3f`;
      let forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&$cnt=5&units=imperial&appid=c5f6d6a76e97a0ca948994ffc65a9b3f`;
      // console.log(cityWeather);
      let newCity = $("<button>").attr("id","prevSearch").attr("type","button").text(cityName);
      $(".bodyIndex").append(newCity);
      $(".forecast").html("");

      // console.log(cityName);
    
    
    
      $.ajax({
          url: cityWeather,
          method: "GET"
        }).then((response) => {
          // console.log(response);
          $("#cityName").text(`${response.name}, ${response.sys.country}`);
          $("#temp").text(`${response.main.temp}°F`);
          $("#humidity").text(`${response.main.humidity}%`);
          $("#wind").text(`${response.wind.speed} m/s`);

        });

      $.ajax({
          url: forecast,
          method: "GET"
        }).then(function(response) {
          // console.log(response.list);
          
          for (i = 0; i < response.list.length; i++) {
            // only look at forecasts around 3:00pm
            if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
              // create html elements for a bootstrap card
              let col = $("<div>").addClass("fBox");
              let title = $("<div>").html(new Date(response.list[i].dt_txt).toLocaleDateString()
                );
              let content = $("<div>")
              let img = $("<img>")
                .attr(
                  "src",
                  "http://openweathermap.org/img/w/" +
                    response.list[i].weather[0].icon +
                    ".png"
                )
                .addClass("forecast-icon");
              let p1 = $("<div>")
                .addClass("degree")
                .text(response.list[i].main.temp_max + " °F");
              let p2 = $("<div>").text(response.list[i].main.humidity + "%");
              // merge together and put on page
              content.append(img, p1, p2);
              col.append(title, content);
              $(".forecast").append(col);
            }
          }
        });
    });

    $(".bodyIndex").on("click","#prevSearch", function() {
      // yousuck();
    let prevCity = $(this).html();
    console.log(prevCity)
    let cityWeather = `https://api.openweathermap.org/data/2.5/weather?q=${prevCity}&units=imperial&appid=c5f6d6a76e97a0ca948994ffc65a9b3f`;
    let forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${prevCity},us&$cnt=5&units=imperial&appid=c5f6d6a76e97a0ca948994ffc65a9b3f`;
    // console.log(cityWeather);
    
    $.ajax({
      url: cityWeather,
      method: "GET"
    }).then((response) => {
      // console.log(response);
      $("#cityName").text(`${response.name}, ${response.sys.country}`);
      $("#temp").text(`${response.main.temp}°F`);
      $("#humidity").text(`${response.main.humidity}%`);
      $("#wind").text(`${response.wind.speed} m/s`);
      $(".forecast").html("");
    });

  $.ajax({
      url: forecast,
      method: "GET"
    }).then(function(response) {
      // console.log(response.list);
      
      for (i = 0; i < response.list.length; i++) {
        // only look at forecasts around 3:00pm
        if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {
          // create html elements for a bootstrap card
          let col = $("<div>").addClass("fBox");
          let title = $("<div>").html(new Date(response.list[i].dt_txt).toLocaleDateString()
            );
          let content = $("<div>")
          let img = $("<img>")
            .attr(
              "src",
              "http://openweathermap.org/img/w/" +
                response.list[i].weather[0].icon +
                ".png"
            )
            .addClass("forecast-icon");
          let p1 = $("<div>")
            .addClass("degree")
            .text(response.list[i].main.temp_max + " °F");
          let p2 = $("<div>").text(response.list[i].main.humidity + "%");
          // merge together and put on page
          content.append(img, p1, p2);
          col.append(title, content);
          $(".forecast").append(col);
            }}});
          });