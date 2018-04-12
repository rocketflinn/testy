function RB_Business_Rules_Air_Discharge_Temperature_Service_0 (req, resp) {
    
    var reqObject;

    try {
        reqObject = JSON.parse(req.params);
    } catch(e) {
        reqObject = req.params;
    }
  
    
  if ((reqObject["Supply Air Temperature"] > "Discharge Air Temperature" undefined reqObject["Zone Temperature"] > "Zone SetPoint + 5")) {
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
  