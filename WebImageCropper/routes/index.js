var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* MY SAMPLE PAGE */
// router.get('/image-crop-with-nolib', function(req, res, next) {
//   res.render('image-crop', { title: 'Express' });
// });

/* CANVAS LIBRARY PAGE */
router.get('/image-crop-with-cropper', function(req, res, next) {
  res.render('img-canvas', { title: 'Express' });
});



module.exports = router;
