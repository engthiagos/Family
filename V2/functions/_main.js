// receive data
const memberData = require('./memberData')
const memberNew = require('./auxiliarFolder/memberDataNew')
const memberChange = require('./auxiliarFolder/memberDataChange')
// add in the object 
let family = []
for (let index = 0; index < memberData.length; index++) {
    let member = {
        name: memberData[index].name,
        lastName: memberData[index].lastName,
        birthDate: memberData[index].birthDate,
        gender: memberData[index].gender,
        kinship: memberData[index].kinship,
        deathDate: memberData[index].deathDate,
        age: '',
        deathAge: '',
    }
    //
    family.push(member)
    //
}
// export data
module.exports = family




