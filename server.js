const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require('http');
const app = express();
const port = process.env.PORT || '3000';
const api = require('./server/routes/api');
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

app.set('port', port);

app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname, 'index.html'));
});

server.listen(port, ()=>{
    console.log('Running on localhost:'+port);
});