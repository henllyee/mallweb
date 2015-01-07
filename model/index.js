/**
 * Created by hengliang.cui on 2015/1/7.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db_connect,function(err){
    if(err){
        console.log('mongodb connect server %s err.',config.db_connect);
        process.exit();
    }
});

require('./content');
require('./require');
require('./user');

exports.Content = mongoose.model('Content');
exports.Require = mongoose.model('Require');
exports.User = mongoose.model('User');