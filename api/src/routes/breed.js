const {Router} = require('express');
const {getAllBreeds, addBreed, getById} = require('../Controllers/breedController');

const router = Router();


router.get('/breeds', getAllBreeds);

router.post('/breed', addBreed);

router.get('/breeds/:id', getById);

module.exports = router;

