const router = require('express').Router();

const userRoutes = require('../src/Routes/user-routes.js');

router.use('/users', userRoutes);

module.exports = router;