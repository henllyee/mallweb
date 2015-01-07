/**
 * Created by hengliang.cui on 2015/1/7.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{type:String},
    password:{type:String},
    name:{type:String},
    is_active:{type:Boolean,default:true},
    create_date:{type:Date,default:Date.now}
});

mongoose.model('User',UserSchema);