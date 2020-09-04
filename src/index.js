const app = require('./app');

app.listen(app.get('port'),app.get('hostname'),() => {
    console.log(`server on port:  ${app.get('port')}`);
    console.log(`En ip ===> ${app.get('hostname')}`);
});
