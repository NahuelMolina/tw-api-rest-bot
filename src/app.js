const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const express = require('express');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

const myRoots = require('./routes/index');
const rootsApi = require('./routes/api-roots');

app.use('/',myRoots);
app.use('/api/',rootsApi);
app.use('/static',express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('port',process.env.PORT || 3000);
app.set('hostname', process.env.local_host || procces.env.HOST);

module.exports = app;
