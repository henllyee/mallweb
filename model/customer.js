/**
 * Created by hengliang.cui on 2015/1/8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new Schema({
    company_name:{type:String},
    company_address:{type:String},
    company_tel:{type:String},
    company_type:{type:String},
    company_fax:{type:String},
    sale_category:{type:String},
    website:{type:String},
    contract_person:{type:String},
    contract_phone:{type:String},
    contract_email:{type:String},
    content_id:{type:Schema.ObjectId},
    create_person:{type:Schema.ObjectId},
    create_date:{type:Date,default:Date.now},
    update_person:{type:Schema.ObjectId},
    update_date:{type:Date}
});
mongoose.model('Customer',CustomerSchema);