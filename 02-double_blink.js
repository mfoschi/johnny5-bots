var five = require("johnny-five");
var board = new five.Board();

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
