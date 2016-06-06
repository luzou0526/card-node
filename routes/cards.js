var express = require('express');
var curRoom = require('../models/Room');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res) {
  res.json({body: 'response test'});
});

router.get('/createRoom', function(req, res){
  console.log(req);
  curRoom.createRoom({roomSize: 6, roomName: "testName"});
  res.json(curRoom.roomInfo());
});

module.exports = router;
