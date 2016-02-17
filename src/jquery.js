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

  function displayDegreesChBg(){
    $(".degrees").html(thermostat.degrees + " &#8451;");
    $("#panel").css("background-color", thermostat.displayColor());
  }



});
