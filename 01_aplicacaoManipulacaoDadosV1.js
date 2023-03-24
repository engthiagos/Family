/*  Aplicação manipulação de dados - Dados Familia      
        V1                                                  Status  
        Adicionado data de Nascimento no descritivo         OK
        Adicionado Meses na composição da Idade             OK
        Adicionado Dias na composição da Idade              OK
        Adicionado Status de Vivo ou Falecido               OK
            Se Falecido data de falecimento                 OK
        Sexo                                                OK
        Posição dentro da Familia                           OK
        Atualização do texto de apresentação final          OK
*/

try {

{
    let nameAdd
    let ageAdd 
    let dateNow = new Date()
    let birthYear
    let birthMonth
    let birthDay
    let msInDays = 1000 * 60 * 60 * 24 // converte milisegundos em dias 
    let family = []
    let genderAdd
    let kinshipAdd
    let liveDeadAdd
    let i = 0
    let deadYear
    let deadMonth
    let deadDay

    //  Adicionando MEMBRO 
    let addMember = () =>    {
        let addMember = {
        name: String(nameAdd),
        birth: new Date(birth),
        age: ageCalc(),
        gender: String(genderAdd),
        kinship: String(kinshipAdd),
        liveDead: String(liveDeadAdd),
        dead: new Date(dead)
    }   
        family.push(addMember)
    }
    
//  Calculando a idade
    let ageCalc = () => {
        let yearName = Math.floor(dateNow.getFullYear() - birth.getFullYear())
        let monthName
        let anniversarry = new Date(dateNow.getFullYear(), birth.getMonth(), birth.getDate())
        let dayAnniversarry = (anniversarry - new Date(dateNow.getFullYear(), 0, 1)) / msInDays
        let today = Math.floor((dateNow - new Date(dateNow.getFullYear(), 0, 1)) / msInDays)
        
        let descriptionYear = () => {
        if (yearName == 1 || yearName == 2){
                descriptionYear = `ano`
            }
            else {
                descriptionYear = `anos`
            }
            return descriptionYear
        }
        let descriptionMonth = () => {
            if (monthName == 1){
                descriptionMonth = 'mês'
            } else {
                descriptionMonth = 'meses'
            }
            return descriptionMonth
        } 
        let descriptionDay = () => {
            if (anniversarry.getDate() == dateNow.getDate()){
                descriptionDay = ``
            } else if (dateNow.getDate() < anniversarry.getDate()) {
                descriptionDay = `${lastDayMonth() - (anniversarry.getDate() - dateNow.getDate())} dias`
            } else {
                descriptionDay = `${dateNow.getDate() - anniversarry.getDate()} dias`
            }
            return descriptionDay
        }

        if(yearName == 0){
            monthName = dateNow.getMonth() - anniversarry.getMonth()
            ageAdd = `${monthName} ${descriptionMonth()}, ${descriptionDay()}`
        } else if(dayAnniversarry > today){
            monthName = anniversarry.getMonth() - dateNow.getMonth()
            ageAdd = `${yearName - 1} ${descriptionYear()} ${monthName} ${descriptionMonth()} e ${descriptionDay()}`
        } else{
            monthName = dateNow.getMonth() - anniversarry.getMonth()
            ageAdd = `${yearName} ${descriptionYear()} ${monthName} ${descriptionMonth()} e ${descriptionDay()}`
        }

        return ageAdd
    }

//  Calculando a idade no FALECIMENTO
let deadAdd
let lastDayMonth = () => {
    let lastDayMonth
    if (dead.getMonth() == 2) {
        if ((dead.getFullYear()) % 4 == 0) {
            lastDayMonth = 29
        } else {
            lastDayMonth = 28
        }
    } else if (dead.getMonth() == 4 ||
    dead.getMonth() == 6 ||
    dead.getMonth() == 9 ||
    dead.getMonth() == 11) {
        lastDayMonth = 30
    } else {
        lastDayMonth = 31 
    }
    return lastDayMonth
}
let yearDeadName = () => {
    let yearDeadName = Math.floor(family[i].dead.getFullYear() - family[i].birth.getFullYear())
    if (yearDeadName == 0) {
        yearDeadName = ``
    } else if (family[i].dead.getMonth() < family[i].birth.getMonth()) {
        yearDeadName = yearDeadName - 1
     } else {
         yearDeadName
     }
     return yearDeadName
}
let monthDeadName = () => {
    let monthDeadName

    if (family[i].dead.getMonth() == family[i].birth.getMonth()) {
        monthDeadName = `` 
    } else if (family[i].dead.getMonth() < family[i].birth.getMonth()) {
        monthDeadName = Math.floor(12 - (family[i].birth.getMonth() - family[i].dead.getMonth()))
     } else {
         monthDeadName = Math.floor(family[i].dead.getMonth() - family[i].birth.getMonth())
     }
     return monthDeadName
}
let dayDeadName = () => {
    let dayDeadName
    if (family[i].dead.getDate() == family[i].birth.getDate()) {
        dayDeadName = `` 
    } else if (family[i].dead.getDate() < family[i].birth.getDate()) {
        dayDeadName = Math.floor(lastDayMonth() - (family[i].birth.getDate() - family[i].dead.getDate()))
     } else {
         dayDeadName = Math.floor(family[i].dead.getDate() - family[i].birth.getDate())
     }
     return dayDeadName
}
let descriptionDeadYear = () => {
    if (yearDeadName() == 0){
        descriptionDeadYear = ``
    } else if (yearDeadName() == 1){
        descriptionDeadYear = `ano`
    }
    else {
        descriptionDeadYear = `anos`
    }
    return descriptionDeadYear
}
let descriptionDeadMonth = () => {
    if (monthDeadName() == 0) {
        descriptionDeadMonth = ``
    } else if (monthDeadName() == 1){
        descriptionDeadMonth = 'mês'
    } else {
        descriptionDeadMonth = 'meses'
    }
    return descriptionDeadMonth
} 
let descriptionDeadDay = () => {
    if (dayDeadName() == 0){
        descriptionDeadDay = ``
    } else if (dayDeadName() == 1) {
        descriptionDeadDay = `dia`
    } else {
        descriptionDeadDay = `dias`
    }
    return descriptionDeadDay
}
let deadCalc = () => {
    deadAdd = `${yearDeadName()} ${descriptionDeadYear()} ${monthDeadName()} ${descriptionDeadMonth()} ${dayDeadName()} ${descriptionDeadDay()}`
    return deadAdd
}

//  Verificar se está Vivo ou Morto   
    let liveDead = () => {
        let liveDead
        if (family[i].liveDead == 'Falecido'){
            liveDead = `FALECIDO em ${family[i].dead.getDate()}.${family[i].dead.getMonth()+1}.${family[i].dead.getFullYear()} com ${deadCalc()}` // Idade Falecimento
        }
        else {
            liveDead = `está com ${family[i].age}`
        }
        return liveDead
        
    }


{   // Adicionar membro na familia
    nameAdd = 'Thiago'
    birthDay = 12
//  Cololcar o mês real 
    birthMonth = 2
    birthYear = 1985
//  JS conta os meses 0 -> Janeiro ... 11-> Dezembro
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Masculino"
    kinshipAdd = "Marido"
    liveDeadAdd = "Vivo"
    deadDay = dateNow.getDate
    deadMonth = dateNow.getMonth
    deadYear = dateNow.getFullYear
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Sarita'
    birthDay = 30
    birthMonth = 9
    birthYear = 1983
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Feminino"
    kinshipAdd = "Esposa"
    liveDeadAdd = "Vivo"
    deadDay = dateNow.getDate
    deadMonth = dateNow.getMonth
    deadYear = dateNow.getFullYear
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Doug'
    birthDay = 19
    birthMonth = 5
    birthYear = 2015
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Macho"
    kinshipAdd = "1º Pet"
    liveDeadAdd = "Vivo"
    deadDay = dateNow.getDate
    deadMonth = dateNow.getMonth
    deadYear = dateNow.getFullYear
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Funny'
    birthDay = 19
    birthMonth = 6
    birthYear = 2015
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Femea"
    kinshipAdd = "2ª Pet"
    liveDeadAdd = "Falecido"
    deadDay = 28
    deadMonth = 2
    deadYear = 2023
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Costelinha'
    birthDay = 10
    birthMonth = 12
    birthYear = 2021
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Femea"
    kinshipAdd = "3ª Pet"
    liveDeadAdd = "Vivo"
    deadDay = dateNow.getDate
    deadMonth = dateNow.getMonth
    deadYear = dateNow.getFullYear
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Funnyzinha'
    birthDay = 4
    birthMonth = 1
    birthYear = 2023
    birth = new Date(birthYear, birthMonth-1, birthDay )
    genderAdd = "Feminino"
    genderAdd = "Femea"
    kinshipAdd = "4ª Pet"
    liveDeadAdd = "Vivo"
    deadDay = dateNow.getDate
    deadMonth = dateNow.getMonth
    deadYear = dateNow.getFullYear
    dead = new Date(deadYear, deadMonth-1, deadDay)
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()
}

//  Exibir nome e idade de todos os membros da familia
{   console.log(`
Os membros da familia em ${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()} são:
`)
    for (i=0; i < family.length; i++){
        if (family[i].gender == "Feminino" || family[i].gender == "Femea") {
        console.log(`${family[i].name}, genero ${family[i].gender}, nascida em ${family[i].birth.getDate()}.${family[i].birth.getMonth()+1}.${family[i].birth.getFullYear()}, ${liveDead()} - ${family[i].kinship} `)
        } else {
            console.log(`${family[i].name}, genero ${family[i].gender}, nascido em ${family[i].birth.getDate()}.${family[i].birth.getMonth()+1}.${family[i].birth.getFullYear()}, ${liveDead()} - ${family[i].kinship}`)
        }

    }
}
}

} catch (error) {
    console.log(`App Quebrou, ${error}`)
    
}