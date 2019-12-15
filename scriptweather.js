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
        var final =showResults(data)
        $("#showWeather").html(final);

        $("#city").val('');
      }
	
    }); 


  }else{

    $("#error").html("<div>City field is empty</div>");

  
  }

}



