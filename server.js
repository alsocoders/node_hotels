const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Welcome to our hotels');
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

app.listen(3000, ()=>{
    console.log('server running in port 3000');
})