const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const BreedRoutes = require('./breed');
const TemperamentRoutes = require('./temperament');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', BreedRoutes);

router.use('/', TemperamentRoutes);



module.exports = router;
