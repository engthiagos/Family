// receive object data 
const memberNew = require('./auxiliarFolder/memberDataChange')
// const memberNew = require('./auxiliarFolder/memberDataNew')
let check = memberNew.deathDate
let checkDeadLive
// check Dead or Live
if (memberNew.deathDate == '') {
    checkDeadLive = 'Live'          
} else {
    checkDeadLive = 'Dead'          
}
// export data
module.exports = checkDeadLive 
// t