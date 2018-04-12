const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Public/views/index.html');
});

// Pulls in static files from Public folder
app.use(express.static(__dirname + '/Public'));

const port = 3000;
var attempts = 5;

while(attempts > 0) {
    try {
        app.listen(port);
        break;
    }   catch (expception) {
        attempts--;
        constole.log('Port assignment failed');
        if(attempts === 0) {
            process.exit(222);
        }
    }
}

console.log('App listening port %i...', port);