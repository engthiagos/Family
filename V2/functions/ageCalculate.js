// receive object data 
const memberNew = require('./auxiliarFolder/memberDataChange')
// const memberNew = require('./auxiliarFolder/memberDataNew')
let msInDays = 1000 * 60 * 60 * 24 // convert Miliseconds in Days
// let birth = memberNew.birthDate
let birth = new Date(1985,10,29)
// let today = new Date()
let today = new Date(2023,11,30)
let anniversarry = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
let dayAniversaryThisYear = Math.floor((anniversarry - new Date(today.getFullYear(), 00, 01)) / msInDays)
let dayElapsedInYear = Math.floor((today - new Date(today.getFullYear(), 00, 01)) / msInDays)
let yearAge = today.getFullYear() - birth.getFullYear()
let lastDayMonthCalculate = (MonthCurrent, YearCurrent) => {
    let lastDayMonth
    if (MonthCurrent == 1) {
        if (YearCurrent % 4 == 0) {
            lastDayMonth = 29
        } else {
            lastDayMonth = 28
        }
    } else if (MonthCurrent == 3 ||
    MonthCurrent == 5 ||
    MonthCurrent == 8 ||
    MonthCurrent == 10) {
        lastDayMonth = 30
    } else {
        lastDayMonth = 31 
    }
    return lastDayMonth
}
let ageCalculate = () => {
    let yearAge = Math.floor(today.getFullYear() - birth.getFullYear())
    let monthAge
    let monthCalculate =() => {
        if (birth.getMonth() > today.getMonth()) {
            monthAge = 11 + Math.floor(today.getMonth() - birth.getMonth())
            } else if (birth.getMonth () == today.getMonth() || birth.getDate() >= today.getDate()) {
                if (dayElapsedInYear >= dayAniversaryThisYear) {
                    monthAge = 0
                } else if (dayElapsedInYear < dayAniversaryThisYear) {
                    monthAge = 11 - (today.getMonth() - birth.getMonth())
                }
            } else if (birth.getMonth() < today.getMonth()){
                monthAge = Math.abs(birth.getMonth() - today.getMonth() - 1)
            }
            
            return monthAge
    }
    let dayAge
    let dayAgeCalculate = () => {
        if (birth.getDate() == today.getDate()) {
            dayAge = 0
        } else if (today.getDate() < birth.getDate()) {
            dayAge = lastDayMonthCalculate(today.getDate(), today.getFullYear()) - (birth.getDate() - today.getDate()) - 1
        } else if (today.getDate() > birth.getDate()) {
            dayAge = today.getDate() - birth.getDate()
        }
        return dayAge
    }
    if (dayAniversaryThisYear == dayElapsedInYear) {
        yearAge
        // monthAge = Math.floor(today.getMonth() - birth.getMonth())
        monthAge = monthCalculate()
        dayAge = dayAgeCalculate()
    } else if (dayAniversaryThisYear > dayElapsedInYear) {
        --yearAge
        // monthAge = 11 - Math.floor(today.getMonth() - birth.getMonth())
        monthAge = monthCalculate()
        dayAge = dayAgeCalculate()
    } else if (dayAniversaryThisYear < dayElapsedInYear) {
        yearAge
        // monthAge = Math.floor(birth.getMonth() - today.getMonth())
        monthAge = monthCalculate()
        dayAge = dayAgeCalculate()
    }
    let age = {year: yearAge,
        month: monthAge,
        day: dayAge,}
    return age
}
let ageCalculated = ageCalculate()
// < 18 years = UNDER age / >= 18 years = LEGAL age
let legalAge
if (ageCalculated.year >= 18) {
    legalAge = 'Yes'
} else {
    legalAge = 'No'
}
let ageExport = {
    year: ageCalculated.year,
    month: ageCalculated.month,
    day: ageCalculated.day,
    legalAge: legalAge
}
// export data
module.exports = ageExport