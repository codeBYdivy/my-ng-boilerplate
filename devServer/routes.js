module.exports = function(app) {
    var jsonServer = require('json-server');
    var port = 3000;

    // Returns an Express server
    var server = jsonServer.create();

    // Set default middlewares (logger, static, cors and no-cache)
    server.use(jsonServer.defaults());

    // Add custom routes
    // server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

    // Returns an Express router
    var router = jsonServer.router('db.json');
    server.use(router);

    server.listen(port);

    console.log('\x1b[42m%s\x1b[0m', "Starting json-sever on port " + port);
    
};
