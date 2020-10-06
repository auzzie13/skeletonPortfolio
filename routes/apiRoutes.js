var connection = require('../config/connection.js');

module.exports = function(app) {
    app.get('/api/projects', function(req, res) {

        var queryString = "SELECT * FROM projects;";

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    });

    app.get('/api/projects/:name', function(req, res) {
        // console.log(req.params.name);
        var queryString = "SELECT * FROM projects WHERE button_filter='" + req.params.name + "';";
        console.log(queryString)

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            res.json(result)
        })
        
    }) 

    app.post('/api/contact', function(req, res) {
        console.log(req.body);
        var queryString = 'INSERT INTO form (name, email, message) VALUES (?,?,?)';

        connection.query(queryString, [req.body.name, req.body.email, req.body.message], function(err, result) {
            if(err) throw err;
            res.end();
        });
    });
};
