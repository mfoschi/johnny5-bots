var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var leds = [
        new five.Led({pin:7}),
        new five.Led({pin:8}),
        new five.Led({pin:9}),
        new five.Led({pin:10}),
        new five.Led({pin:11}),
        new five.Led({pin:12})
    ];

//    for (var i=0; i<=5; i++) {
//        leds[i].off();
//    }

    var i=0, x=true;
    this.loop(500, function() {
        if (x && i <= 5) {
            leds[i].on();
            i++;
            if (i == 6) x=false;
        } else if (!x && i >= 0) {
            i--;
            leds[i].off();
        }
    });
});
