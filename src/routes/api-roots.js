const express = require('express');
const router = express.Router();

router.post('/add', (req,res) => {
    console.log("datos recibiendose..");
    const obj = req.body;
    console.log(obj.name);
    console.log(obj.ape);
    res.end();
});

module.exports = router;