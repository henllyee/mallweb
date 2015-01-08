/**
 * Created by hengliang.cui on 2015/1/7.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequireSchema = new Schema({
    require_date:{type:Date},
    require_content:{type:String},
    website_id:{type:String},
    content_id:{type:Schema.ObjectId},
    customer_id:{type:Schema.ObjectId},
    create_user:{type:Schema.ObjectId},
    create_date:{type:Date},
    remark:{type:String}
});
mongoose.model('Require',RequireSchema);
