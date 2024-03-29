'use strict'

const request = require('axios');
const moment = require('moment');

const phishPost = async (objRequest) => {
    const url = `http://checkurl.phishtank.com/checkurl/index.php?url=${objRequest.url}`;
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json', 
        },
    };
    const data = {
    };
    try {
        let response = {}
        const result = await request.post(url, JSON.stringify(data), config);
        const database = result.data.substring(result.data.lastIndexOf("<in_database>") + 13,  result.data.lastIndexOf("</in_database>"))
        if(database == 'true'){
             response = {
                database: 'Sim',
                verified: result.data.substring(result.data.lastIndexOf("<verified>") + 10,  result.data.lastIndexOf("</verified>")) == 'true' ? 'Sim' : 'Não',
                verified_at: result.data.substring(result.data.lastIndexOf("<verified_at>") + 13,  result.data.lastIndexOf("</verified_at>")),
                valid: result.data.substring(result.data.lastIndexOf("<valid>") + 7,  result.data.lastIndexOf("</valid>"))  == 'true' ? 'Sim' : 'Não',
            };
            response.verified_at = moment(response.verified_at).format('DD/MM/YYYY');
        } else {
            response = {
                database: 'Não',
            }
        }

        return response
        
    } catch (error) {
        console.log(error);
    };
};

module.exports = phishPost;