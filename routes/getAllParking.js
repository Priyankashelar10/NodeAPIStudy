var express = require("express");
var router = express.Router();
const fs = require("fs"); 

router.post("/", function(req, res) {    

    fs.readFile("DB/parking.json", function(err, data) { 
	
	// Check for errors 
    if (err) 
    {
        console.log(err);
        throw err; 
    }

	// Converting to JSON 
    const parkingDb = (JSON.parse(data)).ParkingData; 

    res.json(parkingDb);
    
 }); 
});

// export default router;

module.exports = router;