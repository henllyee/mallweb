/**
 * Created by hengliang.cui on 2015/1/8.
 */
var Require = require('../model').Require;
var Customer = require('../model').Customer;

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
    model.save(callback);
}