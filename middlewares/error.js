/**
 * Created by hengliang.cui on 2015/1/8.
 */
exports.errorHandle=function(err,req,res,next){

    res.status(err.status || 500);
    //分类处理
    if(err&&err.status&&err.status=='403'){
        res.redirect('/sigin');
    }
    res.render('error', {
        message: err.message,
        error: {}
    });
}