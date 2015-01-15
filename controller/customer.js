/**
 * Created by hengliang.cui on 2015/1/12.
 */
var express = require('express');
var router = express.Router();
var customerProxy = require('../proxy').Customer;
var config = require('../config');
var nodeExcel = require('excel-export');

router.get('/',function(req,res,next){
   var queryStr = req.query.qstr||'';
   var num = req.query.pageIndex||1;
   //组装查询参数
   var query = {"$or":[{"company_name":new RegExp(queryStr)},{"contract_person":new RegExp(queryStr)}]};
   var option = {
      search:query,
      page:{
         num:num,
         limit:config.page_size
      }
   }
   customerProxy.findPagination(option,function(err,results){
      if(err){
         next(err);
         return;
      }
      res.render('customer/index',{customers:results.results});
   })

});

router.get('/export',function(req,res,next){
   customerProxy.findAll(function(err,data){
      var conf ={};
      conf.cols = [
         {caption:'Company Name', type:'string'},
         {caption:'Company Tel', type:'string'},
         {caption:'Company fax', type:'string'},
         {caption:'Contract Person', type:'string'},
         {caption:'Contract Phone', type:'string'},
         {caption:'Contract E-Mail', type:'string'},
         {caption:'Update', type:'date'},
      ];
      conf.rows=[];
      for(var i=0;i<data.length;i++){
         conf.rows.push([data[i].company_name,
            data[i].company_tel,
            data[i].company_fax,
            data[i].contract_person,
            data[i].contract_phone,
            data[i].contract_email,
            data[i].create_date]);
      }
      var result = nodeExcel.execute(conf);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats');
      res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
      res.end(result, 'binary');

   });

});
module.exports=router;