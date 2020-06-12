'use strict'

const moment = require('moment');
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
        const result = await request.post(url, data, config);
        const response = {
            domain: result.data.data.detail_info.domain ? result.data.data.detail_info.domain : undefined,
            free: result.data.data.free ? (result.data.data.free == 'yes' ? 'Sim' : 'Não')  : undefined,
            role: result.data.data.role ? (result.data.data.role == 'yes' ? 'Sim' : 'Não')  : undefined,
            disposable: result.data.data.disposable ? (result.data.data.disposable == 'yes' ? 'Sim' : 'Não')  : undefined,
            verified_on: result.data.data.verified_on ? moment(result.data.data.verified_on).format('DD/MM/YYYY') : undefined,
        }
        return (response);
    } catch (error) {
        console.log(error);
    };
};

module.exports = postClearout;