var express = require("express");
var router = express.Router();

router.post("/", function(req, res) {
    //console.log(req.header("username")); //NOt working properly
    //console.log(req.header("password"));
    console.log("Username " + req.body.username);
    if(req.body.username == req.body.password)
    {
    res.json({ validUser:true,
    username :req.body.username,
    password : req.body.password});
    }
    else{
        res.json({ validUser:false,
            username :req.body.username,
            password : req.body.password });
    }

});

// export default router;

module.exports = router;