
var rpio = require('rpio')


rpio.open(16, rpio.OUTPUT, rpio.HIGH);


for (var i = 0; i < 50; i++) {
        /* On for 1 second */
        rpio.write(16, rpio.HIGH);
        rpio.sleep(1);

        /* Off for half a second (500ms) */
        rpio.write(16, rpio.LOW);
        rpio.msleep(500);
}
console.log('running!')
