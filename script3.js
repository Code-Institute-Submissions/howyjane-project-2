var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity')
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=b583819b941d640e4b302e120e03f0a7')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']+'&deg;C';
  var nameValue = 'Weather in' + " " + data['name'];
  var descValue = data['weather'][0]['main'] + "<img src = 'http://openweathermap.org/img/wn/"+ data['weather'][0].icon +".png'>";
  var humidityValue = data['main']['humidity']+'%';

  main.innerHTML = nameValue;
  desc.innerHTML = "Description : "+descValue;
  temp.innerHTML = "Current Temperature : "+tempValue;
  humidity.innerHTML = "Humidity : "+humidityValue

  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})