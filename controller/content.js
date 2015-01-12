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

router.post('/convert',function(req,res,next){
   var data = {
       require_data : req.body.require_data,
       require_content : req.body.require_content,
       website_id : req.body.website_id,
       content_id : req.body.content_id,
       customer_id : req.body.customer_id,
       create_user : req.body.create_user,
       create_date : req.body.create_date,
       remark : req.body.remark
   };
});

module.exports = router;