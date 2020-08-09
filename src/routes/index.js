const express = require('express');
const router = express.Router();

router.get('/' , (req,res) => {
    console.log("Pagina de inicio lanzada");
});



module.exports = router;

