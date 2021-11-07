const express = require('express');
const router = express.Router();
const meetUpControler = require('../controller/meetup.controller.js');

router.get('/', meetUpControler.getMeetupDetails);

router.post('/', meetUpControler.addMeetupDetails);

router.put('/', meetUpControler.addMeetupDetails);

router.delete('/', meetUpControler.deleteMeetupDetails);

exports = router;