const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const errorControler = require('./controllers/error')

const app = express();

const ports = process.env.PORT || '3000';

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/auth', authRoutes)
app.use(errorControler.get404)

app.listen(ports, () => console.log(`listening on ports ${ports}`));