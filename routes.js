/**
 * Created by hengliang.cui on 2015/1/7.
 */
var sigin = require('./controller').Sigin;
var siginout = require('./controller').SiginOut;
var site = require('./controller').Site;
var content = require('./controller').Content;
var customer = require('./controller').Customer;

module.exports = function(app){
    app.use('/',site);
    app.use('/sigin',sigin);
    app.use('/siginout',siginout);
    app.use('/content',content);
    app.use('/customer',customer);
}
