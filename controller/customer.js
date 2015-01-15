/**
 * Created by hengliang.cui on 2015/1/12.
 */
var express = require('express');
var router = express.Router();
var customerProxy = require('../proxy').Customer;
var config = require('../config');

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
      console.log(req.query.qstr);
   })
   res.render('customer/index');
});

module.exports=router;