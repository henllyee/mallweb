/**
 * Created by hengliang.cui on 2015/1/8.
 */

var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    req.session.destroy();
    res.redirect('/sigin')
});
module.exports=router;