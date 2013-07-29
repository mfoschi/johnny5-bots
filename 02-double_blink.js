var five = require("johnny-five");
var board = new five.Board();

/*
 Execute something in a loop every 500 ms.
 Alternate between switching one LED and the other.
 BOARD:
 2 LEDs at pin 7 and 12
 */

board.on("ready", function() {
    var led1 = new five.Led({pin:7});
    var led2 = new five.Led({pin:12});

    var odd = true;
    this.loop(500, function() {
        if (odd) {
            led1.off();
            led2.on();
            odd = false;
        } else {
            led1.on();
            led2.off();
            odd = true;
        }
    })
});
