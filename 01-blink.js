var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    led = new five.Led(10);
    led.strobe();
  }
);
