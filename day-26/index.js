function findOdd(arr) {
    //happy coding!
    const arrayObj = {};
    arr.forEach(el => {
        if (arrayObj[el]) {
            arrayObj[el] = arrayObj[el] + 1;
        } else {
            arrayObj[el] = 1;
        }
    })
    let res;
    Object.keys(arrayObj).forEach(el => {
        if(arrayObj[el] % 2 !== 0) {
            res = el;
        }
    })
  
    return parseInt(res);
  }
  
  console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))