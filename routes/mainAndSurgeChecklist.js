const express = require('express');
const router = express.Router();

const mainAndSurgeChecklist = require('../controllers/mainAndSurgeChecklist');

// router.get('/mainAndSurgeChecklist', mainAndSurgeChecklist.renderMainAndSurgeChecklist);
router.get('/', mainAndSurgeChecklist.renderMainAndSurgeChecklist);

router.post('/submitData', mainAndSurgeChecklist.postMainAndSurgeChecklist);


module.exports = router;