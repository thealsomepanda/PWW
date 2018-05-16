const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Public/views/index.html');
});

// Pulls in static files from Public folder
app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname + 'node_modules/frosted-glass'));

const port = 3000;
var attempts = 5;

while(attempts > 0) {
    try {
        app.listen(port);
        break;
    }   catch (exception) {
        attempts--;
        console.log('Port assignment failed');
        if(attempts === 0) {
            process.exit(222);
        }
    }
}

console.log('App listening port %i...', port);

let urleoncodedParser = (bodyParser.urlencoded({ extended: false }));

app.post('/email', urleoncodedParser, function(req, res) {
    console.log(req.body);
});