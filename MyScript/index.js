const inputDate = prompt('Enter the date You are interested in: ', '11/26/2021')
const inputDateFull = new Date(inputDate)

const checkEnteredDay = (enteredDate) => {
    const twoDaysMs = 86400000 * 2
    const firstWorkDayMs = new Date(2021, 10, 14).getTime() // starting point

    const inputDateMs = new Date(enteredDate).getTime()
    const differenceMs = inputDateMs - firstWorkDayMs
    const isDaySecond = differenceMs % twoDaysMs !== 0
    const isDayWork = Math.floor(differenceMs / twoDaysMs) % 2 === 0

    return {
        day: isDaySecond ? 'second' : "first",
        busyness: isDayWork ? 'work' : 'rest'
    }
}

const getShortDate = ((fullDate) => {
    return fullDate.toString() // convert date to string
        .slice(0, 10)          // cut unused part of date string
})

const checkEveryDayInMonth = () => {
    const dt = new Date()
    const month = dt.getMonth()
    const year = dt.getFullYear()

    const daysInMonth = new Date(year, month + 1, 0).getDate()

    for (let i = 1; i <= daysInMonth; i += 1) {
        const day = new Date(year, month, i)
        const result = checkEnteredDay(day)
        const message = `${getShortDate(day)} == ${result.busyness}`
        console.log(message)
    }
}

const result = checkEnteredDay(inputDate)
let message = `You entered ${getShortDate(inputDateFull)} \nThis is the ${result.day} day of ${result.busyness}`
message += '\nCheck console if You want to see current month schedule'

alert(message)

checkEveryDayInMonth()

