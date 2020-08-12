const app = require('./app');
const {objet} = require('./tw/funcis');

app.listen(app.get('port'), () => {
    console.log(`server on port:  ${app.get('port')}`);
});