var five = require("johnny-five");
var board = new five.Board();

/*
 This is the most basic, just to prove we can connect to firmata.
 BOARD:
 1 LED connected at output pin #10
 */

board.on("ready", function() {
    led = new five.Led(10);
    led.strobe();
  }
);
