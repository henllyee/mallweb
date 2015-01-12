/**
 * Created by hengliang.cui on 2015/1/9.
 */
var express = require('express');
var router = express.Router();
var contentProxy = require('../proxy').Content;
var requireProxy = require('../proxy').Require;

router.get('/convert/:tid',function(req,res,next){
    var contentId = req.params.tid;
    contentProxy.findById(contentId,function(err,data){
        if(err) next(err);
        res.render('content/convert',{content:data});
    });
});

router.post('/convert',function(req,res,next){
   var data = {
       require_content : req.body.require_content,
       content_id : req.body.content_id,
       company_name:req.body.company_name,
       company_address:req.body.company_address,
       company_fax:req.body.company_fax,
       company_tel:req.body.company_tel,
       sale_category:req.body.sale_category,
       contract_person:req.body.contract_person,
       contract_phone:req.body.contract_phone,
       contract_email:req.body.contract_email,
       create_user : req.session.user.id,
       create_date : Date.now()
   };
    requireProxy.convert(data,function(err,result){
        if(err){
            next(err);
            return;
        }
        if(result) res.redirect('/');
    })
});

module.exports = router;