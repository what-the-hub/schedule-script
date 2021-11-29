//const inputDate = '11/27/2021'
const inputDate = prompt('Enter the date You are interested in: ', '11/26/2021')
const inputDateFull = new Date(inputDate)

const checkEnteredDay = (enteredDate) => {
    const twoDayMs = 86400000 * 2
    const firstWorkDayMs = new Date(2021, 10, 26).getTime()

    const inputDateMs = new Date(enteredDate).getTime()
    const differenceMs = inputDateMs - firstWorkDayMs
    const divisionResult = differenceMs / twoDayMs
    const reminder = divisionResult % twoDayMs
    const checkSecondDay = Math.round(reminder) % 2
    const isFirstWorkDay = !(reminder % 2)
    const isFirstFreeDay = !isFirstWorkDay && Number.isInteger(reminder)
    const isSecondFreeDay = !isFirstWorkDay && !checkSecondDay
    const isSecondWorkDay = !isFirstWorkDay && checkSecondDay

    let resultObj = {
        day: '',
        busyness: ''
    }

    if (isFirstWorkDay) {
        resultObj.day = 'first'
        resultObj.busyness = 'WORK'
    }
    if (isSecondWorkDay) {
        resultObj.day = 'second'
        resultObj.busyness = 'WORK'
    }
    if (isFirstFreeDay) {
        resultObj.day = 'first'
        resultObj.busyness = 'REST'
    }
    if (isSecondFreeDay) {
        resultObj.day = 'second'
        resultObj.busyness = 'REST'
    }

    return resultObj
}

const result = checkEnteredDay(inputDate);
const showLessInfoDay = (fullDate) => fullDate.toString().slice(0, 10)

let message = `You entered ${showLessInfoDay(inputDateFull)} \nThis is the ${result.day} day of ${result.busyness}`
message += '\nCheck console if You want to see current month schedule'
alert(message)

const checkEveryDayInMonth = () => {
    const dt = new Date()
    const month = dt.getMonth()
    const year = dt.getFullYear()

    const daysInMonth = new Date(year, month, 0).getDate()

    for (let i = 1; i < daysInMonth; i += 1) {
        const day = new Date(year, month, i)
        const result = checkEnteredDay(day)
        const message = `${showLessInfoDay(day)} == ${result.busyness}`
        console.log(message)
    }
}

checkEveryDayInMonth()

