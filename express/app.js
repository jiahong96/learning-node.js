const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, 'static', 'index.html');
    res.sendFile(indexPath);
})

app.get('/example', (req, res) => {
    res.send('hitting example route');
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    let name = req.params.name;
    let age = req.params.age;
    res.send(name + ' : ' + age);
})

app.listen(3000);