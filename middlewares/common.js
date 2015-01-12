/**
 * Created by hengliang.cui on 2015/1/12.
 */

var moment = require('moment');
exports.golabal_setting=function(req,res,next){
    res.locals.moment = moment;
    next();
}