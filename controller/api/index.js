const router = require('express').Router();
const userRoutes = require('./userRoutes');
const houseRoutes = require('./houseRoutes');

router.use('/users', userRoutes);
router.use('/houses', houseRoutes);

module.exports = router;
