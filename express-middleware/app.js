const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/', (req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
})

app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('passed middleware');
});

app.listen(3000);