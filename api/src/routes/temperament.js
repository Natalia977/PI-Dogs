const {Router} = require('express');
const {getAllTemperaments} = require('../Controllers/temperamentController');

const router = Router();

router.get('/temperament', getAllTemperaments)

console.log(getAllTemperaments)


module.exports = router;