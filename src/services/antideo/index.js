'use strict'

const request = require('axios');

const getAntideo = async (objRequest) => {
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

const getIpLocation = async (objRequest) => {
    const url = `http://api.antideo.com/ip/location/${objRequest.ip}`;
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    try {
        const response = await request.get(url, config);
        return (response.data.location);
    } catch (error) {
        console.log(error);
    };
};

const getIpHealth = async (objRequest) => {
    const url = `http://api.antideo.com/ip/health/${objRequest.ip}`;
    const config = {
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    };
    try {
        const response = await request.get(url, config);
        return (response.data.health);
    } catch (error) {
        console.log(error);
    };
};

const getIpInfo = async (objRequest) => {
    const url = `http://api.antideo.com/ip/info/${objRequest.ip}`;
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

module.exports = {getAntideo, getIpLocation, getIpHealth, getIpInfo};