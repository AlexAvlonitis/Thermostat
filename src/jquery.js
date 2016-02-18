$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#panel").css("background-color", thermostat.displayColor());

  $(".degrees").html(thermostat.degrees + " &#8451;");

  $(".psm").addClass("led-green");

  $(".up").click(function(){
    thermostat.increaseTemp();
    displayDegreesChBg();
  });

  $(".down").click(function(){
    thermostat.decreaseTemp();
    displayDegreesChBg();
  });

  $(".reset").click(function(){
    thermostat.resetTemp();
    displayDegreesChBg();
  });

  $(".on").click(function(){
    thermostat.switchPowerSavingOn();
    $(".psm").removeClass("led-red");
    $(".psm").addClass("led-green");
  });

  $(".off").click(function(){
    thermostat.switchPowerSavingOff();
    $(".psm").removeClass("led-green");
    $(".psm").addClass("led-red");
  });



  $(".api").click(function(){
    var city = $(".city").val();
    var apiKey = "bb6b9c3be1f0e70e4d48e1c6dd867c00";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=";
    $.getJSON(url + apiKey, function(data) {

      $(".city-weather").html(data.name + "  " + "<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>" + " " + data.main.temp + "&#8451;" );

    });

  });

  function displayDegreesChBg(){
    $(".degrees").html(thermostat.degrees + " &#8451;");
    $("#panel").css("background-color", thermostat.displayColor());
  }

});
