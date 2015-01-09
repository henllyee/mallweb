/**
 * Created by hengliang.cui on 2015/1/9.
 */
var requireProxy = require('../../proxy').Require;
var should = require('should');
var mongoose = require('mongoose');
//var ObjectId = require('mongoose').Schema.ObjectId;

describe('require proxy',function(){
    describe('convert',function(){
       it('should add sucess',function(done){
            requireProxy.convert(
                {
                    require_date : Date.now(),
                    require_content:'测试1',
                    website_id:'http://www.henrycui.net',
                    content_id:mongoose.Types.ObjectId('54ae34763a86a9b8155c0373'),

                    create_user:mongoose.Types.ObjectId('54ae34763a86a9b8155c0373'),
                    remark:'terst',
                    company_name:'测试公司',
                    company_address:'测试地址',
                    company_fax:'fdsafa',
                    company_tel:'fdsafasd',
                    sale_category:'fdsafs',
                    website:'http://www.sina.com',
                    contract_person:'henry',
                    contract_phone:'15950191652',
                    contract_email:'henllyee@126.com',
                    content_id:mongoose.Types.ObjectId('54ae34763a86a9b8155c0373'),
                    create_person:mongoose.Types.ObjectId('54ae34763a86a9b8155c0373')
                },function(err,result){
                should(err).not.be.ok;
                result.should.be.ok;
                done();
            });
       });
    });
});

