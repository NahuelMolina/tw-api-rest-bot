const app = require('./app');

app.listen(app.get('port'),app.get('hostname'),() => {
    console.log(`listening on :  ${app.get('port')}`);
    console.log(`ip ===> ${app.get('hostname')}`);
});

