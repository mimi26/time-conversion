//Given a time in -hour AM/PM format, convert it to military (-hour) time.

function timeConvert(time) {
    let testA = /a/gi;
    let testP = /p/gi;
    let minsAndSecs = time.slice(2,8);
    if (testA.test(time)) {
      if(time.slice(0,2) == 12) {
        console.log('00' + minsAndSecs);
      } else if (time.slice(0,2) != 12) {
        console.log(time.slice(0,-2));
      }
    } else if (testP.test(time)) {
        if (time.slice(0,2) != 12) {
          let newTimeInt = parseInt(time.slice(0,2)) + 12;
          let newTimeString = newTimeInt.toString();
          let newTime = `${newTimeString}:${minsAndSecs}`;
          console.log(newTime);
        } else if (time.slice(0,2) == 12) {
          console.log(time.slice(0,-2));
        }
    }
  }
