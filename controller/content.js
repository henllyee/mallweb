/**
 * Created by hengliang.cui on 2015/1/9.
 */
var express = require('express');
var router = express.Router();
var contentProxy = require('../proxy').Content;

router.get('/convert/:tid',function(req,res,next){
    var contentId = req.params.tid;
    contentProxy.findById(contentId,function(err,data){
        if(err) next(err);
        res.render('content/convert',{content:data});
    });
});

module.exports = router;