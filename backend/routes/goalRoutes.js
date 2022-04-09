const express = require('express');
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

//GET
//router.get('/', getGoals);

//POST
//router.post('/', setGoals);

//UPDATE
//router.put('/:id', updateGoal);

//DELETE
//router.delete('/:id', deleteGoal);

//Galima dar labiau sutvarkyti router koda

router.route('/').get(protect, getGoals).post(protect, setGoals);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;