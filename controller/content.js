/**
 * Created by hengliang.cui on 2015/1/9.
 */
var express = require('express');
var router = express.Router();
var contentProxy = require('../proxy').Content;
var requireProxy = require('../proxy').Require;
var customerProx = require('../proxy').Customer;
var nodeExcel = require('excel-export');
var moment = require('moment');

router.get('/convert/:tid',function(req,res,next){
    var contentId = req.params.tid;
    contentProxy.findById(contentId,function(err,data){
        if(err) {
            next(err);
            return;
        }
        customerProx.findAll(function(err,customers){
            if(err) {
                next(err);
                return;
            }
            res.render('content/convert',{content:data,customers:customers});
        });

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


router.get('/',function(req,res,next){
    contentProxy.findAll(function(err,data){
        if(err){
            next(err);
            return;
        }
        res.render('content/index',{content:data});
    });
});

router.get('/export',function(req,res,next){
    contentProxy.findAll(function(err,data){
        if(err){
           next(err);
           return;
        }
        var conf ={};
        conf.cols = [
            {caption:'Content Title', type:'string'},
            {caption:'Content', type:'string'},
            {caption:'Source Url', type:'string'},
            {caption:'Publish Date', type:'Date'}

        ];
        conf.rows=[];
        for(var i=0;i<data.length;i++){
            conf.rows.push(
                [data[i].title,
                data[i].content,
                data[i].source_url,
                moment(data[i].publish_date).format('YYYY-MM-DD hh:mm:ss')
                ]);
        }
        var result = nodeExcel.execute(conf);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        res.setHeader("Content-Disposition", "attachment; filename=" + "content.xlsx");
        res.end(result, 'binary');
    });
})

module.exports = router;