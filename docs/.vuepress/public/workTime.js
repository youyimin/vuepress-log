import workTime from './workTimeData'

const getMonthAverageTime = (targetMonth) => {
    return calculateAverageTime(getCorrespondingData(targetMonth))
}

const getCorrespondingData = (targetMonth) => {
    const data = Object.keys(workTime)
        .filter(date => date.indexOf(targetMonth) !== -1)
        .map(date => workTime[date])
        .filter(time => time.search(/[\u4e00-\u9fa5]/) ===  -1)
    return data
}

const calculateAverageTime = (times) => {
    console.log(times)
    const days = times.length
    const PLUS_DAY_FLAG = /\(\+1\)|（\+1）/
    const totalMinutesAfter20InMonth = times.reduce((cal, cur) => {
        if (cur.search(PLUS_DAY_FLAG) !== -1) {
            cal += 240
            cur = cur.split(PLUS_DAY_FLAG)[0]
        }
        let [h, m] = cur.split(':').map(Number)
        cal += parseInt(h < 18 ? h : h - 20) * 60 + m
        return cal
    }, 0)
    const totalMinutesInDay = parseInt(totalMinutesAfter20InMonth / days) + 20 * 60
    return `${Math.floor(totalMinutesInDay / 60)}:${paddingTime(totalMinutesInDay % 60)}`
}

const paddingTime = (num) => {
    let numStr = num + ''
    return numStr.length > 1 ? numStr : '0' + numStr
}

export {
    getMonthAverageTime,
}

export default workTime
