const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;
const localhost = process.env.local_host;
const redhost = process.env.Local_Red_Host;


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
app.set('port',port || 3000);
app.set('hostname', redhost || localhost);

module.exports = app;
