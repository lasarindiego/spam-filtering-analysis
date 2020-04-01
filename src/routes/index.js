'use strict'

const express = require('express');
const route = express();
const axios = require('axios');

route.get('/spam-analysis', (req, res) => {
    const url = 'https://spamcheck.postmarkapp.com/filter';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const data = {
        email: 'raw dump of email', 
        options: 'short',
    };

    axios.post(url, JSON.stringify(data), config)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

route.listen(3000);