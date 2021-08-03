const router = require('express').Router();

const userRoutes = require('../Routes/user-routes.js');

router.use('/users', userRoutes);

module.exports = router;