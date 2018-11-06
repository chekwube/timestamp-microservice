var express = require('express');

var app = module.exports = express();

app.get('/dateValues/:dateVal', function(req, res, next){
    console.log("works");
    var dateVal = req.params.dateVal;
    var dateFomarttingOptions = {
       year: 'numeric',
       month: 'long',
       day: 'numeric' 
    }

    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFomarttingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
        
    }else{
        var unixDate = dateVal
        var naturalDate = new Date(dateVal *1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFomarttingOptions);
    }
    res.json({unix: unixDate, natural: naturalDate});
    
    }); 
    
app.listen(3002);