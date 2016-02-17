$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#panel").css("background-color", thermostat.displayColor());

  $(".degrees").html(thermostat.degrees + " &#8451;");

  $(".psm").html(psm());

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
    psm();
    $(".psm").html(psm());
  });

  $(".off").click(function(){
    thermostat.switchPowerSavingOff();
    psm();
    $(".psm").html(psm());
  });

  function psm() {
    var onOff = thermostat.powerSavingMode;
    if(onOff) {
      return "ON";
    } else {
      return "OFF";
    }
  }

  function displayDegreesChBg(){
    $(".degrees").html(thermostat.degrees + " &#8451;");
    $("#panel").css("background-color", thermostat.displayColor());
  }



});
