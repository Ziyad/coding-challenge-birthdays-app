const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const app = express();

// Create mongodb connection via mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var constructMongoDbUri = function (config) {
    return "mongodb://" + config.username + ":" + config.password + "@" + config.host + ":" + config.port + "/" + config.database;
};
var mongoConfig = config.get("mongo");
mongoose.connect(constructMongoDbUri(mongoConfig), {});

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/birthdays', require('./controller/birthdays.router'));

app.listen(process.env.PORT || 8080);