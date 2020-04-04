'use strict'

const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/spam-analysis', (req, res) => {
    const url = 'https://spamcheck.postmarkapp.com/filter';
    console.log(req.body);
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const data = {
        email: req.body.email, 
        options: req.body.options,
    };

    axios.post(url, JSON.stringify(data), config)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

app.listen(3000);