const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send("<h2> Home Page</h2>");
});

router.get('/users', userController.fetchUser);

router.post('/users', userController.createUser);

router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;