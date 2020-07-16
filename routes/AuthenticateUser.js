var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
    res.json({ validUser: true })

});

// export default router;

module.exports = router;