function isIsogram(str) {
    const strArr = str.split('');
    const result = {};
    strArr.forEach(el => {
        result[el.toLowerCase()] = result[el.toLowerCase()] ? result[el.toLowerCase()] + 1 : 1;
    })
    const isogram = Object.values(result).findIndex(el => el > 1);
    if(isogram === -1) return true;
    return false;
  }