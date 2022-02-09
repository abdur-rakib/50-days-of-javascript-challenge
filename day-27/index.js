function getCount(str) {
    let vowelsCount = 0;
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    str.toLowerCase().split("").forEach(el => {
        if(vowelArr.includes(el)) {
            vowelsCount += 1;
        }
    })
  
    return vowelsCount;
  }
  
  console.log(getCount("THe Strings are SOO COOL"));
  