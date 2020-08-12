const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const myRoots = require('./routes/index');
const rootsApi = require('./routes/api-roots');

app.use('/',myRoots);
app.use('/api.almacen/',rootsApi);



app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('port',process.env.PORT || 3000);

module.exports = app;