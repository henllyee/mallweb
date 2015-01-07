/**
 * Created by hengliang.cui on 2015/1/7.
 */
var User = require('../model').User;

exports.findByUserName=function(username,callback){
    User.findOne({username:username},callback);
}

exports.newAndSave=function(username,password,name,callback){
    var user = new User();
    user.username = username;
    user.password = password;
    user.name = name;
    user.save(callback);
}