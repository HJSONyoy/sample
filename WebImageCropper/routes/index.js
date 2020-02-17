var express = require('express');
const request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/cropPage', function(req, res, next) {
//     res.render('cropPage', { title: 'Express' });
// });

/* CANVAS LIBRARY PAGE */
router.get('/image-crop-with-cropper', function(req, res, next) {

    //FOR SPECIFIC SERVER PARSING
    // let imageList = [];
    // let url = "http://13.67.47.175:8880/pokemon/downloads/Pikachu/";
    // request.get({
    //     uri: url
    // }, function(error, response, body) {
    //     let lists = response.body.split('<a href="').slice(2, -1);
    //     lists.forEach(function(item) {
    //         imageList.push(url + item.split('"')[0]);
    //     });
    //     res.render('img-canvas', {
    //         title: 'img-canvas',
    //         imageList: imageList
    //     });

    // });

    res.render('img-canvas', {
        title: 'img-canvas',
    });

});
module.exports = router;
