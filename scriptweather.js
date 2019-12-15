$(document).ready(function(){
  $("#submitCity").click(function(){
	return getWeather();
  });
});

// https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=b583819b941d640e4b302e120e03f0a7'

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


  }else{

    $("#error").html("<div class='alert alert-danger' id='errorCity'<a href=#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field is empty</div>");

  
  }

}



