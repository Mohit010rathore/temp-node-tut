//The OS module provides information about the computer's operating system.
const os = require('os')

//info about current user
const user = os.userInfo()


//methos returns the system assign in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);