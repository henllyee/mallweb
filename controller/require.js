/**
 * Created by hengliang.cui on 2015/1/9.
 */
var express = require('express');
var router = express.Router();

router.get('/convert',function(req,res,next){
    res.render('/require/');
})