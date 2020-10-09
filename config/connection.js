const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'dvuf2tj4oud5luwp',
    password: 'ipodp5j0q8nzw8zm',
    database: 'fhwa0teyvdl1fjvo'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ', + err.stack);
        return;
    }
    console.log('sql connected as id: ', connection.threadId);
});

module.exports = connection;