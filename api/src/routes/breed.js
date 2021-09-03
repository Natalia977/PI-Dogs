const {Router} = require('express');
const {getAllBreeds, addBreed, getById} = require('../Controllers/breedController');

const router = Router();

router.post('/breed', addBreed);
console.log(addBreed);
router.get('/breeds', getAllBreeds);
router.get('/breeds/:id', getById);



module.exports = router;