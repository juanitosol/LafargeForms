const express = require('express');
const router = express.Router();

const primaryChecklist = require('../controllers/primaryChecklist.js');

router.get('/', primaryChecklist.renderPrimaryChecklist);

router.post('/submitData', primaryChecklist.postPrimaryChecklist);


module.exports = router;