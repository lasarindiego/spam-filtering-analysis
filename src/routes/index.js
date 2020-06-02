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
    const payload = req.body;
    let ip = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    payload.ip = req.body.fullheader.match(ip)[0];
    const response = {
        datumbox: await apis.getDatumbox(payload),
        postMark: await apis.postMark(payload),
        plino: await apis.postPlino(payload),
        antideo: await apis.getAntideo(payload),
        clearout: await apis.postClearout(payload),
        ipLocation: await apis.getIpLocation(payload),
        ipHealth: await apis.getIpHealth(payload),
        ipInfo: await apis.getIpInfo(payload),
        zero: await apis.getZero(payload),
    };
    console.log(response);
    res.send(response);
})

app.listen(3000);