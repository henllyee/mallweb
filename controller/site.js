/**
 * Created by hengliang.cui on 2015/1/7.
 */
var express = require('express');
var router = express.Router();
var contentProxy = require('../proxy/content');

router.get('/',function(req,res,next){
   contentProxy.findNoConvert(function(err,data){
      if(err) next(err);
      res.render('index',{data:data});
   });

});

module.exports = router;