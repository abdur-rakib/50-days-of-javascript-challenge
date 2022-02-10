function spinWords(string) {
    const stringArray = string.split(" ");
    const spinWords = stringArray.map(el => {
        if(el.length >=5) {
            return el.split('').reverse().join('');
        } else {
            return el;
        }
    })
    return spinWords.join(" ")
  }
  