'use strict'

const express = require('express');
const app = express();
const apis = require('../services');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/spam-analysis', async (req, res) => {
    const response = {
        datumbox: await apis.getDatumbox(req.body),
        postMark: await apis.postMark(req.body),
        plino: await apis.postPlino(req.body),
        antideo: await apis.getAntideo(req.body),
        clearout: await apis.postClearout(req.body),
        zero: await apis.getZero(req.body),
    };
    console.log(response);
    res.send(response); 
})

app.listen(3000);