const str = 'JavaScript';

function getTheGapX(str) {
    const firstindexOfX = str.indexOf('X');
    const lastIndexOfX = str.lastIndexOf('X');
    if(firstindexOfX === -1) {
        return -1
    }
    return lastIndexOfX - firstindexOfX;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
