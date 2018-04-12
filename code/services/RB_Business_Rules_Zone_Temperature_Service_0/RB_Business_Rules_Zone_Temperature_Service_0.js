function RB_Business_Rules_Zone_Temperature_Service_0 (req, resp) {
    
    var reqObject;

    try {
        reqObject = JSON.parse(req.params.body);
    } catch(e) {
        reqObject = req.params.body;
    }
  
    
  if ((reqObject["Zone Temperature"] > "Zone SetPoint + 5" undefined reqObject["Air Discharge Temperature"] < "Zone Temperature" undefined reqObject["Air Discharge Temperature"] < "Zone SetPoint + 5")) {
    callAlertProvider();
  }
  
    function callAlertProvider () {
    
        ClearBlade.init({request:req});
        ClearBlade.Code().execute("ZoneTemperatureValueFailure", {}, true, function (err, body){
            if(err) {
                log("Failure while executing ZoneTemperatureValueFailure; " + JSON.stringify(err));
                resp.error(body);
            } else {
                log("Successfully executed ZoneTemperatureValueFailure");
                resp.success(body);
            }
        })
    
    }
    
    resp.success('Nothing to do');
  }
  