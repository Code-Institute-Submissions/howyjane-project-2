    $(document).ready(function(){
    $("#submitCity").click(function(){
	  return getWeather();
  });
});

  function getWeather(){
	var city = $("#city").val();

  if(city !=''){

    $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=b583819b941d640e4b302e120e03f0a7',
      type: "GET",
      datatype: "json",
      success: function(data){
        var widget =showResults(data)
        $("#showWeather").html(widget);

        $("#city").val('');
        }
	
      }); 


    }else {

    $("#error").html("<div class='alert alert-danger' id='errorCity'<a href=#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field is empty</div>");

  }

  }

  function showResults(data){
  return  '<h3>Weather Forecast in '+data.name+'</h3></br>'+ 
    "<p>Current Temperature: "+data.main.temp +"&deg;C </p>"+
    "<p>Current Weather: "+data.weather[0].main+ "<img src = 'http://openweathermap.org/img/wn/" + data.weather[0].icon +".png'></p>"+
    "<p>Current Humidity: "+data.main.humidity +"%</p>"+
    "<p>Current Weather Speed: "+data.wind.speed+"m/s</p>"+
    "<p>Current Weather Direction: "+data.wind.deg+"&deg;</p>";

  }

