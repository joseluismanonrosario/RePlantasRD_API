const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({
        mensaje: 'Corriendo desde el servidor'
    })
});

module.exports= router;