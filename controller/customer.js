/**
 * Created by hengliang.cui on 2015/1/12.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
   res.render('customer/index');
});

module.exports=router;