/**
 * Created by hengliang.cui on 2015/1/8.
 */
var Content = require('../model').Content;

exports.findNoConvert=function(callback){
    Content.find({isconvert:false}).sort({'publish_date':-1}).exec(callback);
}