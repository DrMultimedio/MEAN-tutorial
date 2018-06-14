const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares

//Routes

//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
})