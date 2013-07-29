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

    var sensor = new five.Sensor({
        pin: "A5",
        freq: 250
    });
//    const MAX_LEVEL = 1023;

    board.repl.inject({
        sensor: sensor
    });

//    sensor.on("read", function(err, value) {
//        console.log(value, this.normalized);
//    });
    sensor.scale([ 0, 6 ]).on("read", function() {
        var level = this.scaled;
        console.log( this.normalized, level );
        for (var i=0; i <= 5; i++) {
            if (level > i) {
                leds[i].on();
            } else {
                leds[i].off();
            }
        }
    });
});
