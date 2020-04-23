'use strict';


let path = require('path');
let express = require('express');

const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile(
        path.join(__dirname + './index.html')
    );
});

console.log(`Running on ${HOST}:${PORT}`);
