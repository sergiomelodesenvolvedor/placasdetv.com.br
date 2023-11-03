const express = require('express');
const bodyParser = require('body-parser');
const routerPost = require('./rotas/rotaPost.js')

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });   
app.use(routerPost);

module.exports = app