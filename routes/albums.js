var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
        {
            documentType: 'album',
            album: 'test',
            id: 'album::1'
        },
        {
            documentType: 'album',
            album: 'test1',
            id: 'album::2'
        }
    ]);
});

module.exports = router;