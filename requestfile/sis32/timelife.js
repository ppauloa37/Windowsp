var clock = document.getElementById("clock");
var clock2 = document.getElementById("barclock");

var hourUpdate = function() {
  var datalife = new Date()
  var Hora = datalife.getHours()
  var Minuto = datalife.getMinutes()
  var Segundo = datalife.getSeconds()
  if (Minuto >= 10) {
  clock.textContent = Hora + ":" + Minuto;
  }
  if (Minuto =< 10) {
  clock.textContent = Hora + ":" + "0" + Minuto;
  }
};

window.setInterval(hourUpdate,1000);
