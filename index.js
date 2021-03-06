let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require('./api-routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/nodeAPI', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

if (!db) {
    console.log('Error connecting db');
} else {
    console.log('Db connected successfully.');
}

var port = process.env.PORT || 8080;

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World with Express');  
});

app.listen(port, () => {
    console.log('Running nodeAPI on port ' + port);
});