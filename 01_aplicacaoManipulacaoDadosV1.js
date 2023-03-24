/*  Aplicação manipulação de dados - Dados Familia      
        V1                                                  Status  
        Adicionado Meses na composição da Idade             FAZER
        Adicionado Dias na composição da Idade              FAZER
        Adicionado Status de Vivo ou Falecido               OK
            Se Falecido data de falecimento                 OK
        Sexo                                                OK
        Posição dentro da Familia                           OK
        Atualização do texto de apresentação final          OK
*/

// Teste - Teste online no GitHub


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
    let ageCalc = (birthYear, birthMonth, birthDay) => {
        let yearName = dateNow.getFullYear() - birth.getFullYear()
        let monthName
        let anniversarry = new Date(dateNow.getFullYear(), birth.getMonth(), birth.getDate())
        let dayAnniversarry = (anniversarry - new Date(dateNow.getFullYear(), 0, 1)) / msInDays
        let today = Math.floor((dateNow - new Date(dateNow.getFullYear(), 0, 1)) / msInDays)
        if(dayAnniversarry > today){
            monthName = anniversarry.getMonth() - dateNow.getMonth()
            ageAdd = String(`${yearName - 1} anos ${monthName} meses`)
        }
        else{
            monthName = dateNow.getMonth() - anniversarry.getMonth()
            ageAdd = String(`${yearName} anos ${monthName} meses`)
        }    
        return ageAdd
    }

//  Verificar se está Vivo ou Morto   
    let liveDeadCheck = () => {
        let liveDead
        if (family[i].liveDead == 'Falecido'){
            liveDead = `Falecido em ${family[i].dead}`
        }
        else {
            liveDead = 'Vivo'
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
    kinshipAdd = "Pet"
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
    kinshipAdd = "Pet"
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
    kinshipAdd = "Pet"
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
    kinshipAdd = "Pet"
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
Os membros da familia em ${dateNow} são:
`)
    for (i=0; i < family.length; i++){
        if (family[i].gender == "Feminino" || family[i].gender == "Femea") {
        console.log(`${family[i].name}, genero ${family[i].gender}, ${family[i].age}, é a ${family[i].kinship}, ${liveDeadCheck()}`)
        
        } else {
            console.log(`${family[i].name}, genero ${family[i].gender}, tem ${family[i].age}, é o ${family[i].kinship}, ${liveDeadCheck()}`)
        
        }

    }
}
}

} catch (error) {
    console.log(`App Quebrou, ${error}`)
    
}
