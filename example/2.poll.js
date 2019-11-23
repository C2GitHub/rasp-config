var rpio = require('rpio')


rpio.open(15, rpio.INPUT, rpio.PULL_DOWN);

function pollCallback (ckpin) {
  var state = rpio.read(ckpin)
  console.log(`${ckpin} state is ${state}`)
}

rpio.poll(15, pollCallback)
