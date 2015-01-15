/**
 * Created by hengliang.cui on 2015/1/8.
 */

var Customer = require('../model').Customer;

exports.findPagination=function(obj,callback){
    var q=obj.search||{};
    var pageNumber=obj.page.num||1;
    var resultsPerPage=obj.page.limit||10;
    var skipFrom = (pageNumber * resultsPerPage) - resultsPerPage;
    var query = Customer.find(q).skip(skipFrom).limit(resultsPerPage);
    query.exec(function(err,result){
        if(err){
            callback(err);
            return;
        }
        Customer.count(q,function(err,count){
            if(err){
                callback(err);
                return;
            }
            var pageCount = Math.ceil(count / resultsPerPage);

            callback(null, {
                resultCount:count,
                pageCount:pageCount,
                results:result
            });
        })
    })

}