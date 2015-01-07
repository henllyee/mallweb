/**
 * Created by hengliang.cui on 2015/1/7.
 */
var should = require('should');
var userProxy = require('../../proxy/user');

describe('user proxy',function(){
    describe('add user',function(){
       it('should add success',function(done){
            userProxy.newAndSave('henllyee','qmsjy;;','崔恒亮',function(err){
                should(err).not.be.ok;
                done();
            })
       })
    });
})