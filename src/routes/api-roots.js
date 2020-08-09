const express = require('express');
const router = express.Router();

router.post('/add', (req,res) => {
    console.log("datos recibiendose..");
    console.log(req.params);
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req._dumped);
    console.log(req._consuming);
    res.end();
});

module.exports = router;