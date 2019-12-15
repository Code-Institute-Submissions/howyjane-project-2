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
               opt +=  "<option value='" + value+ "'  data-flag='image/" + key.substring(0,3).toUpperCase()+ ".png' " + "'  data-map='imagemap/" + key.substring(0,3).toUpperCase()+ ".png' " + "' data-song='audio/" + key.substring(0,3).toUpperCase()+ ".mp3'>" + key.substring(0,3).toUpperCase() + "</option>";
           // console.log(key.substring(0,3).toUpperCase());
            console.log("flag" +  (key.substring(0,3).toUpperCase())+"map" +(key.substring(0,3).toUpperCase())) ;
          
          if( key.includes("100"))

            opt +=  "<option value='" + value /100+ "'  data-flag='image/" + key.substring(0,3).toUpperCase()+ ".png' " + "'  data-map='imagemap/" + key.substring(0,3).toUpperCase()+ ".png' " + "' data-song='audio/" + key.substring(0,3).toUpperCase()+ ".mp3'>" + key.substring(0,3).toUpperCase() + "</option>";
           // console.log(key.substring(0,3).toUpperCase());
            console.log("flag" + (key.substring(0,3).toUpperCase()) +"map" +(key.substring(0,3).toUpperCase())) ;
  });
  $("#forex-rate").html(opt);

  }
});


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

        $("#map-pic").attr("src", $("#forex-rate option:selected").data("map"))

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

