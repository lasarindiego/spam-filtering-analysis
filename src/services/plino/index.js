'use strict'

const request = require('axios');

const postPlino = async (objRequest) => {
    const url = 'https://plino.herokuapp.com/api/v1/classify/';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
    const parsed = objRequest.email.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const data = {
        email_text: parsed,
    };
    try {
        const response = await request.post(url, JSON.stringify(data), config);
        return (response.data);
    } catch (error) {
        console.log(error);
    };
};

module.exports = postPlino;