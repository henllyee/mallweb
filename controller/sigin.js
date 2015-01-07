/**
 * Created by hengliang.cui on 2015/1/7.
 */
var express = require('express');
var router = express.Router();
var proxy = require('../proxy/user');
var language = require('../language');

router.get('/',function(req,res){
    res.render('login');
});

/*登陆post请求*/
router.post('/',function(req,res,next){

    var username = req.body.username;
    var password = req.body.password;
    proxy.findByUserName(username,function(err,data){
        if(err) next();
        if(!data){
            res.render('login',{message:language.en.login_username_error,username:username});
            return;
        }
        console.log(data);
        if(data.password==password){
            res.redirect('/');
            return;
        }
        else{
            res.render('login',{message:language.en.login_password_error,username:username});
        }
    })
});
module.exports = router;