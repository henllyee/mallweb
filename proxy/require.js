/**
 * Created by hengliang.cui on 2015/1/8.
 */
var Require = require('../model').Require;




/*Help Methods*/

function add(data,callback){
    var model = new Require();
    model.require_date=data.require_date;
    model.require_content = data.require_content;
    model.website_id = data.website_id;

}