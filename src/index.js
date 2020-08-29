const app = require('./app');

const hostname = '192.168.0.103';

app.listen(app.get('port'),hostname ,() => {
    console.log(`server on port:  ${app.get('port')}`);
});
