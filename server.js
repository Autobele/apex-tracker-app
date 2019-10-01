const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

// Dev Loggin
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'))


// Load Env
dotenv.config({path: './config.env'})


const port = process.env.PORT || 8000

app.listen(port, (err) => {
    if(err) throw err
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})


