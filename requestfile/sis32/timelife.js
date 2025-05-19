var clock = document.getElementById("clock");
var clock2 = document.getElementById("barclock");

var hourUpdate = function() {
  var datalife = new Date()
  var Hora = datalife.getHours()
  var Minuto = datalife.getMinutes()
  var Segundo = datalife.getSeconds()
  clock.textContent = Hora + ":" + Minuto;
  clock2.textContent = Hora + ":" + Minuto;
};

window.setInterval(hourUpdate,1000);
