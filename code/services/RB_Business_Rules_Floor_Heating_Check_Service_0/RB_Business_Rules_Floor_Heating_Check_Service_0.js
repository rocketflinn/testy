function RB_Business_Rules_Floor_Heating_Check_Service_0 (req, resp) {
    
    var reqObject;

    try {
        reqObject = JSON.parse(req.params.body);
    } catch(e) {
        reqObject = req.params.body;
    }
  
    
  if ((reqObject["Heating isAvailable"] == "active" undefined reqObject["Zone Temperature"] > "Zone SetPoint + 5")) {
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
  