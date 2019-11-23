var rpio = require('rpio')
rpio.open(16, rpio.OUTPUT, rpio.HIGH)
setTimeout(function() {
  rpio.close(16, rpio.PIN_RESET)
console.log('closed')
  },1000)
