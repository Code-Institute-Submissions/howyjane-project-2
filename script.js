// let currencies = [
//   {
//     name: "US Dollar",
//     abbreviation: "USD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/us.gif"
//   },
//   {
//     name: "Euro",
//     abbreviation: "EUR",
//     symbol: "\u20AC",
//     flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
//   },
//   {
//     name: "Japanese Yen",
//     abbreviation: "JPY",
//     symbol: "\u00A5",
//     flagURL: "http://www.geonames.org/flags/l/jp.gif"
//   },
//   {
//     name: "British Pound",
//     abbreviation: "GBP",
//     symbol: "\u00A3",
//     flagURL: "http://www.geonames.org/flags/l/uk.gif"
//   },
//   {
//     name: "Australian Dollar",
//     abbreviation: "AUD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/au.gif"
//   },
//   {
//     name: "Canadian Dollar",
//     abbreviation: "CAD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/ca.gif"
//   },
//   {
//     name: "Swiss Franc",
//     abbreviation: "CHF",
//     symbol: "\u0043\u0048\u0046",
//     flagURL: "http://www.geonames.org/flags/l/ch.gif"
//   },
//   {
//     name: "Chinese Yuan Renminbi",
//     abbreviation: "CNY",
//     symbol: "\u00A5",
//     flagURL: "http://www.geonames.org/flags/l/cn.gif"
//   },

//   {
//     name: "New Zealand Dollar",
//     abbreviation: "NZD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/nz.gif"
//   },

//   {
//     name: "Singapore Dollar",
//     abbreviation: "SGD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/sg.gif"
//   },
//   {
//     name: "Hong Kong Dollar",
//     abbreviation: "HKD",
//     symbol: "\u0024",
//     flagURL: "http://www.geonames.org/flags/l/hk.gif"
//   },
 
//   {
//     name: "South Korean Won",
//     abbreviation: "KRW",
//     symbol: "\u20A9",
//     flagURL: "http://www.geonames.org/flags/l/kr.gif"
//   },
 
//   {
//     name: "Indian Rupee",
//     abbreviation: "INR",
//     symbol: "\u20B9",
//     flagURL: "http://www.geonames.org/flags/l/in.gif"
//   },


//   {
//     name: "Philippine Peso",
//     abbreviation: "PHP",
//     symbol: "\u20B1",
//     flagURL: "http://www.geonames.org/flags/l/ph.gif"
//   },

//   {
//     name: "Indonesian Rupiah",
//     abbreviation: "IDR",
//     symbol: "\u0052\u0070",
//     flagURL: "http://www.geonames.org/flags/l/id.gif"
//   },
//   {
//     name: "Malaysian Ringgit",
//     abbreviation: "MYR",
//     symbol: "\u0052\u004D",
//     flagURL: "http://www.geonames.org/flags/l/my.gif"
//   },

//   {
//     name: "Thai Baht",
//     abbreviation: "THB",
//     symbol: "\u0E3F",
//     flagURL: "http://www.geonames.org/flags/l/th.gif"
//   },

//   {
//     name: "Vietnam Dong",
//     abbreviation: "VND",
//     symbol: "\704",
//     flagURL: "https://img.geonames.org/flags/x/vn.gif"
//   },

//   {
//     name: "New Taiwan Dollar",
//     abbreviation: "TWD",
//     symbol: "\158",
//     flagURL: "https://img.geonames.org/flags/x/tw.gif"
//   },

//     {
//     name: "Rial",
//     abbreviation: "QAR",
//     symbol: "\634",
//     flagURL: "https://img.geonames.org/flags/x/qa.gif"
//   },

//     {
//     name: "Dirham",
//     abbreviation: "AED",
//     symbol: "\784",
//     flagURL: "https://img.geonames.org/flags/x/ae.gif"
//   },

//     {
//     name: "Rand",
//     abbreviation: "SAR",
//     symbol: "\719",
//     flagURL: "https://img.geonames.org/flags/x/za.gif"
//   },

// ];
   
   
var data = {
  resource_id: "95932927-c8bc-4e7a-b484-68a66a24edfe", //the resource id
limit: 5, //get 5 results
sort: "end_of_day desc"
};

  $.ajax({
  url: "https://eservices.mas.gov.sg/api/action/datastore/search.json",
data: data,
dataType: "json", 
    success: function(data) {
    //  var xx = ""
      var opt = "";
    $.each(data.result.records[0], function(key, value) {
           if(key !== "end_of_day" && key!== "preliminary" && key!== "timestamp" && key!== "vnd_sgd_100" && key!== "aed_sgd_100" && key!== "sar_sgd_100" && key!== "qar_sgd_100" && key!== "twd_sgd_100" && key!== "cny_sgd_100" && key!== "hkd_sgd_100"&& key!== "inr_sgd_100"&& key!== "idr_sgd_100"&& key!== "jpy_sgd_100"&& key!== "krw_sgd_100"&& key!== "myr_sgd_100"&& key!== "php_sgd_100" && key!== "thb_sgd_100")
           opt +=  "<option value='" + value+ "'  data-flag='image/" + key.substring(0,3).toUpperCase()+ ".png' " + "' data-song='audio/" + key.substring(0,3).toUpperCase()+ ".mp3'>" + key.substring(0,3).toUpperCase() + "</option>";
       // console.log(key.substring(0,3).toUpperCase());
        console.log("flag" +  (key.substring(0,3).toUpperCase()) ) ;
      
      if( key.includes("100"))

        opt +=  "<option value='" + value /100+ "'  data-flag='image/" + key.substring(0,3).toUpperCase()+ ".png' " + "' data-song='audio/" + key.substring(0,3).toUpperCase()+ ".mp3'>" + key.substring(0,3).toUpperCase() + "</option>";
       // console.log(key.substring(0,3).toUpperCase());
        console.log("flag" + (key.substring(0,3).toUpperCase()) ) ;
});
$("#forex-rate").html(opt);

}
});

// function getFlag(arr, value){
//    var flag = "";
//   //  for(var i = 0; i < arr.length;i++){
//   //    //console.log("abbr" + arr[i]["abbreviation"]  + "vlaue:" + value)
//   //   //  if(arr[i]["abbreviation"] == value)
//   //   //    return arr[i]["flagURL"]
//   //  }
//    return flag;
// }

document.addEventListener('DOMContentLoaded', function() {

document.getElementById("forex-amount").addEventListener("input",calculator);
document.getElementById("forex-sgd").addEventListener("input",calculator2);
document.getElementById("forex-rate").addEventListener("change",ChangeCurreny);


function calculator2(){
     let amount = document.getElementById("forex-sgd").value;
     let rate = document.getElementById("forex-rate").value;
      
  if(rate == "select"){
         document.getElementById("forex-amount").setAttribute("placeholder","");
         
  }else{
     let compute = amount /rate;

  document.getElementById("forex-amount").value = compute.toFixed(2);
  }
}

function calculator(){
     let amount = document.getElementById("forex-amount").value;
     let rate = document.getElementById("forex-rate").value;
     
  if(rate == "select"){
         document.getElementById("forex-sgd").setAttribute("placeholder","");
         
  }else{
     let compute = rate * amount;

  document.getElementById("forex-sgd").value = compute.toFixed(2);
  }
}


function ChangeCurreny(){
  let rate = document.getElementById("forex-rate").value;
  let amount = document.getElementById("forex-amount").value;
  

  let compute = amount*rate;
    document.getElementById("forex-sgd").value = compute.toFixed(2);
    
    $("#country-flag").attr("src", $("#forex-rate option:selected").data("flag"))

    $("#anthem-name").attr("src",$("#forex-rate option:selected").data("song"))
    playAudio()
    setTimeout(function(){ 
      pauseAudio();
       },
        500000
        );
  }
    

let menu = document.querySelectorAll('select');
 M.FormSelect.init(menu,{});
 
});

var x = document.getElementById("myAudio"); 

function playAudio() { 
x.load()
x.play(); 
} 

function pauseAudio() { 
x.pause(); 
} 

$(document).ready(function(){
console.log("ready");

$("#forex-rate").change(function(){


})


});