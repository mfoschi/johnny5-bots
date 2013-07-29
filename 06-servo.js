var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var servo = new five.Servo({
        pin: 3,
//        range: [0,90]
    });
    board.repl.inject({
        servo: servo
    });

    console.log("Rotate Servo to start of range")
    servo.min();

//    this.wait(1000, function() {
//        console.log("Rotate Servo 90 degrees");
//        servo.move(90);
//    });
    this.wait(1000, function() {
        console.log("Rotate Servo to end of range");
        servo.move(180);
//        servo.max();

        this.wait(2000, function() {
            console.log("Center Servo middle of range");
            servo.move(90);
//            servo.center();

            this.wait(3000, function() {
                console.log("Back home");
                servo.move(0);
            });
        });
    });

});