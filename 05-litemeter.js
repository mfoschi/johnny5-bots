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

    board.repl.inject({
        sensor: sensor
    });

    sensor.on("read", function(err, value) {
        var level = this.normalized * 7 / 255 - 1;
        console.log( value, this.normalized, level );
        for (var i=0; i <= 5; i++) {
            if (level > i) {
                leds[i].on();
            } else {
                leds[i].off();
            }
        }
    });
});
