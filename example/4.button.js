var rpio = require('rpio')
// toggle pin 16
// 0v 中线不接
rpio.open(15, rpio.INPUT, rpio.PULL_UP);

rpio.open(16, rpio.OUTPUT, rpio.HIGH);

var flag = true
 var timer = null
function pollCallback (ckpin) {
  var state = rpio.read(ckpin)
  // pio.close(16, rpio.PIN_RESET)
  // rpio.close(16, rpio.PIN_RE)
  console.log(timer, flag)
  
      if (timer) return
      
      if(!flag) {
        rpio.write(16, rpio.HIGH)
      }else{
        rpio.write(16, rpio.LOW)
      }
      flag = !flag
      
      timer = setTimeout(function() {
        timer = null
      },500)
  console.log(`${ckpin} state is ${state}`)
}

rpio.poll(15, pollCallback)
