/**
 * Created by hengliang.cui on 2015/1/8.
 */
var Require = require('../model').Require;
var Customer = require('../model').Customer;
var Content = require('../model').Content;
var async = require('async');


exports.convert = function(data,callback){
    //是否是已经存在的客户
    Customer.findOne({company_name:data.company_name},function(err,customer){
        if(err){
            callback(err,false);
            return;
        }
        console.log(customer);
        async.waterfall([function(cb){
            if(!customer){
                addCustomer(data,function(err,cus){
                    data.customer_id=cus._id;
                    cb(null,data);
                })
            }
            else{
                cb(null,data);
            }
        },
        function(requiredata,cb){
            addRequire(requiredata,function(err,cus){
                if(err) throw  err;
                cb(null,requiredata);
            });
        },
        function(requiredata,cb){
            updateContent(requiredata,function(err,cus){
                if(err) throw  err;
                cb(null,true);
            })
        }
        ],function(err,result){
            if(err) {
                callback(err, false);
                return;
            }
            callback(null,true);
        });

    })
}

/*Help Methods*/

function addRequire(data,callback){
    var model = new Require();
    model.require_date=data.require_date;
    model.require_content = data.require_content;
    model.website_id = data.website_id;
    model.content_id = data.content_id;
    model.customer_id = data.customer_id;
    model.create_user = data.create_user;
    model.remark = data.remark;
    model.save(callback);
}

function addCustomer(data,callback){
    var model = new Customer();
    model.company_name=data.company_name;
    model.company_address = data.company_address;
    model.company_fax = data.company_fax;
    model.company_tel = data.company_tel;
    model.sale_category = data.sale_category;
    model.website = data.website;
    model.contract_person = data.contract_person;
    model.contract_phone = data.contract_phone;
    model.contract_email = data.contract_email;
    model.content_id = data.content_id;
    model.create_person = data.create_person;
    model.save(callback);
}

function updateContent(data,callback){
    Content.update({'id':data.content_id},{$set:{isconvert:true}},callback);
}

