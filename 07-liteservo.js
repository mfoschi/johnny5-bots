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

    const MAX = 90;
    const range = [0,MAX];

    var servo = new five.Servo({
        pin: 3,
        range: range
    });

    board.repl.inject({
        servo: servo,
        sensor: sensor
    });

    console.log("Rotate Servo to start of range")
    servo.min();

    sensor.scale(range).on("read", function(err, value) {
        var servo_level = MAX - this.value;
        var led_level = this.value * 7 / MAX - 1;

        console.log( value, this.normalized, led_level, servo_level );
        servo.move(servo_level);
        for (var i=0; i <= 5; i++) {
            if (led_level > i) {
                leds[i].on();
            } else {
                leds[i].off();
            }
        }
    });
});