var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res) {
  res.json({body: 'response test'});
});

module.exports = router;
