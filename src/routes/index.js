'use strict'

const express = require('express');
const app = express();
const apis = require('../services');

async function apiPhishing(payload, urls) {
    if (!urls) return undefined;
    let response = [];
    let result = {};
    for(const url of urls) {
        result = { ...await apis.postPhish({...payload, url:url}), url: url};
        response.push(result);
    }
    return response;
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/spam-analysis', async (req, res) => {
    try{
        const payload = req.body;
        let ip = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
        payload.ip = req.body.fullheader.match(ip);
        payload.ip = Array.isArray(payload.ip) && payload.ip.length > 0 ? payload.ip[0] : null;
        const getURL = new RegExp(
            /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/
           ,"g"
         );
        const url = req.body.fullheader.match(getURL);
            const response = {
            phish: await apiPhishing(payload, url),
            datumbox: await apis.getDatumbox(payload),
            postMark: await apis.postMark(payload),
            plino: await apis.postPlino(payload),
            //antideo: await apis.getAntideo(payload),
            clearout: await apis.postClearout(payload),
            ipLocation: await apis.getIpLocation(payload),
            ipHealth: await apis.getIpHealth(payload),
            ipInfo: await apis.getIpInfo(payload),
            //zero: await apis.getZero(payload) //Não utilizada por instabilidade
        };
        console.log(response);
        res.send(response);
    } catch (error) {
        res.status(500).send('Internal server error!');
        console.log(error);
    };
})

app.listen(3000);