'use strict'

const request = require('axios');

const postMarkApp = async (objRequest) => {
    const url = 'https://spamcheck.postmarkapp.com/filter';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
            
        },
    };
    const data = {
        email: objRequest.fullheader, 
        options: objRequest.options,
    };
    try {
        const response = await request.post(url, JSON.stringify(data), config);
        return (response.data);
    } catch (error) {
        console.log(error);
    };
};

module.exports = postMarkApp;