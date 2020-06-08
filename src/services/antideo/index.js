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
        const result = await request.get(url, config);
        const response = {
            city: result.data.location.city ? result.data.location.city : undefined,
            country: result.data.location.country ? result.data.location.country  : undefined,
            country_code: result.data.location.country_code ? result.data.location.country_code : undefined,
            latitude: result.data.location.latitude ? result.data.location.latitude : undefined,
            longitude: result.data.location.longitude ? result.data.location.longitude : undefined,
            region: result.data.location.region ? result.data.location.region : undefined,
        }
        return (response);
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
        const result = await request.get(url, config);
        const response = {
            proxy: result.data.health.proxy === false || result.data.health.proxy === true ? (result.data.health.proxy ? 'Sim' : 'Não') : undefined,
            spam: result.data.health.spam === false || result.data.health.spam === true ? (result.data.health.spam  ? 'Sim' : 'Não') : undefined,
        }
        return (response);
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
        const result = await request.get(url, config);
        const response = {
            IP: result.data.IP ? result.data.IP : undefined,
            host: result.data.host ? result.data.host : undefined,
            category: result.data.org.category ? result.data.org.category : undefined,
            name: result.data.org.name ? result.data.org.name : undefined,
        }
        return (response);
    } catch (error) {
        console.log(error);
    };
};

module.exports = {getAntideo, getIpLocation, getIpHealth, getIpInfo};