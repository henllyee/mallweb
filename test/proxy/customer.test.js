/**
 * Created by hengliang.cui on 2015/1/12.
 */
var should = require('should');
var CustomerProxy = require('../../proxy').Customer;

describe('customer proxy',function(){
    describe('find page',function(){
        it('should query ok.',function(done){
            CustomerProxy.findPagination({
                page:{
                    limit:10,
                    num:1
                }
            },function(err,data){
                data.should.be.ok;
                done();
            });
        });
    });
});