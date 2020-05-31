'use strict'

const request = require('axios');

const getAntideo = async (objRequest) => {
    const api_key = 'df1e0a9200d149439956e6d10b6fbb5e';
    let url = `http://api.antideo.com/email/${objRequest.remetente}`;
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

module.exports = getAntideo;