const express = require('express');
const morgan = require('morgan');
const app = express();
const cors  = require('cors');
const {mongoose} = require  ("./database.js")
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))
app.use('/api/employees',require('./routes/employee.routes.js'));
//Routes

//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
})