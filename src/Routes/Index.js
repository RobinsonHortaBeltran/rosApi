const { Router } = require('express');
const router = Router();

const perfiles = require('./Route/Perfiles')

router.use('/perfiles', perfiles);

module.exports = router;