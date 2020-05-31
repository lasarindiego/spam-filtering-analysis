'use strict'

const request = require('axios');

const postClearout = async (objRequest) => {
    const url = 'https://api.clearout.io/v2/email_verify/instant';
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
            'Authorization': 'Bearer:4765168abe80b7cf4da723b95f939d2e:d9d8c4a8dfd9ad8394a581fe5f31c6ee6f5ba6c4796997a16aae06900197a0cc',
        },
    };
    const data = {
        email: objRequest.remetente,
    };
    try {
        const response = await request.post(url, data, config);
        return (response.data);
    } catch (error) {
        console.log(error);
    };
};

module.exports = postClearout;