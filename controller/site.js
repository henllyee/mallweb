/**
 * Created by hengliang.cui on 2015/1/7.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
   res.render('index');
});

module.exports = router;