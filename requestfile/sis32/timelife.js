var clock = document.getElementById("clock");
var clock2 = document.getElementById("barclock");

var hourUpdate = function() {
  var data = new Date()
  var Hora = data.getHours()
  var Minuto = data.getMinutes()
  var Segundo = data.getSeconds()
  clock.textContent = Hora + ":" + Minuto;
  clock2.textContent = Hora + ":" + Minuto;
};

window.setInterval(hourUpdate,1000);
