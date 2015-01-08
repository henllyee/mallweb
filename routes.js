/**
 * Created by hengliang.cui on 2015/1/7.
 */
var sigin = require('./controller/sigin');
var siginout = require('./controller/siginout');
var site = require('./controller/site');

module.exports = function(app){
    app.use('/',site);
    app.use('/sigin',sigin);
    app.use('/siginout',siginout);
}
