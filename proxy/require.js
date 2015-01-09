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
    model.company_address = data.company_address;
    model.company_fax = data.company_fax;
    model.company_tel = data.company_tel;
    model.company_fax = data.company_fax;
    model.sale_category = data.sale_category;
    model.website = data.website;
    model.contract_person = data.contract_person;
    model.contract_phone = data.contract_phone;
    model.contract_email = data.contract_email;
    model.content_id = data.content_id;
    model.create_person = data.create_person;
    model.create_date = data.create_date;
    model.update_person = data.update_person;
    model.update_date = data.update_date;
    model.save(callback);
}