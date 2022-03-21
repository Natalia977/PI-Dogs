const { Router } = require('express');
const PersonaRutas = require('./persona');
const PropietarioRutas = require('./propietario');

const router = Router();


router.use('/', PersonaRutas);

router.use('/', PropietarioRutas );



module.exports = router;
