const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    return (Math.abs(new Date(dateText1) - new Date(dateText2))) / DAY_IN_MILLISECONDS;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
