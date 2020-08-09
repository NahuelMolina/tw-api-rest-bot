const path = require('path');
const parser = require('body-parser');
const express = require('express');
const app = express();

const myRoots = require('./routes/index');
const rootsApi = require('./routes/api-roots');

app.use('/',myRoots);
app.use('/api.almacen/',rootsApi);
app.use(parser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.set('port',process.env.PORT || 3000);

module.exports = app;