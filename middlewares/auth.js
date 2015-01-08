/**
 * Created by hengliang.cui on 2015/1/8.
 */

exports.auth=function(req,res,next){
    if((!req.session || !req.session.user)&&req.url!='/sigin'){
        var err = new Error('No login');
        err.status = 403;
        next(err);
    }
    else{
        res.locals.current_user = req.session.user;
    }
    next();
}