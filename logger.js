class Logger {
    message(msg,type="info"){
        let date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        fs.appendFile(`log-${day}-${monthIndex+1}-${year}.log`, `${date.toUTCString()} [${type.toUpperCase()}] ${msg} \n`, function (err) {
          if (err) throw err;
        })
        console.log(`${date.toUTCString()} [${type.toUpperCase()}] ${msg}`)
      }
}