function openOrSenior(data) {
    const res = data.map(element => {
        if (element[0] >= 55 && element[1] > 7) {
            return 'Senior'
        } else {
            return 'Open'
        }
    })
    return res;
  }
  
  let output = openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);
  
  console.log(output);
  