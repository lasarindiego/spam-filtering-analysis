'use strict'

const request = require('axios');

const getDatumbox = async (objRequest) => {
    const api_key = 'c6338b71f6f7d4634d8dd760c306f522';
    const url = `http://api.datumbox.com/1.0/SpamDetection.json?api_key=${api_key}&text=${objRequest.email}`;
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
            
        },
    };
    try {
        const response = await request.post(url, config);
        return (response.data.output);
    } catch (error) {
        console.log(error);
    };
};

module.exports = getDatumbox;