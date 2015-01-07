/**
 * Created by hengliang.cui on 2015/1/7.
 */
var sigin = require('./controller/sigin');
var site = require('./controller/site');

module.exports = function(app){
    app.use('/',site);
    app.use('/sigin',sigin);
}
