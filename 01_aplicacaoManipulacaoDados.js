//  Aplicação manipulação de dados - Dados Familia

{
    let nameAdd
    let ageAdd 
    let dateNow = new Date()
    let birthYear
    let birthMonth
    let birthDay
    let msInDays = 1000 * 60 * 60 * 24 // converte milisegundos em dias 
    let family = []

//  Adicionando MEMBRO 
    let addMember = () =>    {
        let addMember = {
        name: String(nameAdd),
        birth: new Date(birth),
        age: Number(ageAdd)
    }   
        family.push(addMember)
    }

//  Calculando a idade
    let ageCalc = (birthYear, birthMonth, birthDay) => {
        let yearName = dateNow.getFullYear() - birth.getFullYear()
        let anniversarry = new Date(dateNow.getFullYear(), birth.getMonth(), birth.getDate())
        let dayAniversarry = (anniversarry - new Date(dateNow.getFullYear(), 0, 1)) / msInDays
        let today = Math.floor((dateNow - new Date(dateNow.getFullYear(), 0, 1)) / msInDays)
        if(dayAniversarry > today){
            ageAdd = yearName - 1
        }
        else{
            ageAdd = yearName 
        }    
    }

{   // Adicionar membro na familia
    nameAdd = 'Thiago'
    birthDay = 12
//  Cololcar o mês real 
    birthMonth = 2
    birthYear = 1985
//  JS conta os meses 0 -> Janeiro ... 11-> Dezembro
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Sarita'
    birthDay = 30
    birthMonth = 9
    birthYear = 1983
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Doug'
    birthDay = 19
    birthMonth = 5
    birthYear = 2015
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Funny'
    birthDay = 19
    birthMonth = 6
    birthYear = 2015
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Costelinha'
    birthDay = 10
    birthMonth = 12
    birthYear = 2021
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()

    nameAdd = 'Funnyzinha'
    birthDay = 4
    birthMonth = 1
    birthYear = 2023
    birth = new Date(birthYear, birthMonth-1, birthDay )
    ageCalc(birthYear, birthMonth-1, birthDay)
    addMember()
}
    console.log(family)

//  Exibir nome e idade de todos os membros da familia
{   console.log(`Os membros da familia em ${dateNow} são:`)
    for (let i=0; i < family.length; i++){
        console.log(`${family[i].name} tem ${family[i].age} anos`)
    }
}
}
