const express = require('express');
const path = require('path');

const app = express();
app.set('port', 1337);
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.use(express.static(path.join(__dirname, 'static')));

app.listen(app.get('port'), _=>{ console.log(`Running on port ${app.get('port')}`); });