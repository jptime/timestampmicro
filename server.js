var express = require('express');
var app = express();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

app.use('/', express.static(__dirname + '/public'))

app.get('/:date', function(req, res){
    var userDate = req.params.date;
    var date;
    if (!!Number(userDate)){ 
         date = new Date(Number(userDate) * 1000)
        
    } else{
         date = new Date(userDate);

    }
    var sentDate = {};
        sentDate.unix = null;
        sentDate.natural = null;
    
    if (date == "Invalid Date"){
        res.send(sentDate)
    }
        sentDate.unix = Date.parse(date) / 1000;
        sentDate.natural = month[date.getMonth()] + " " + date.getDate() + "," + " " + date.getFullYear();
   
        res.send(sentDate)
    
})

var server = app.listen(3000, function () {
  /*var host = process.env.IP;
  var port = process.env.PORT;

  console.log('App listening at http://%s:%s', host, port);*/
});