'use strict'

const request = require('axios');

const getZero = async (objRequest) => {
    let url = `https://api.zerobounce.net/v2/validate?api_key=df1e0a9200d149439956e6d10b6fbb5e&email=${objRequest.remetente}&ip_address=`;
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    try {
        const response = await request.get(url, config);
        return (response.data);
    } catch (error) {
        console.log(error);
    };
};

module.exports = getZero;