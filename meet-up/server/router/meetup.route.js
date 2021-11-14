const express = require('express');
const router = express.Router();
const meetUpControler = require('../controller/meetup.controller.js');

router.get('/:id', meetUpControler.getMeetupDetails);

router.get('/', meetUpControler.getAllMeetups);

router.post('/', meetUpControler.addMeetupDetails);

router.put('/', meetUpControler.addMeetupDetails);

router.delete('/:id', meetUpControler.deleteMeetupDetails);

module.exports = router;