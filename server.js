
var express = require('express');
var app = express();
var path = require('path');

bodyParser = require('body-parser');

app.use(express.json({limit: '500mb'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
    app.use(express.static(__dirname + '/app'));

});

port= 8091
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
console.log("Tabnle App");

