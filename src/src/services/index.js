'use strict'

const servicesDatumbox = require('./datumbox');
const servicesPostMark = require('./postMark');
const servicesPlino = require('./plino');
const servicesAntideo = require('./antideo');
const servicesClearout = require('./clearout');
const servicesZero = require('./zeroBounce');
const servicesPhish = require('./phishtank');

module.exports = {
    getDatumbox: servicesDatumbox,
    postMark: servicesPostMark,
    postPlino: servicesPlino,
    getAntideo: servicesAntideo.getAntideo,
    postClearout: servicesClearout,
    getIpLocation: servicesAntideo.getIpLocation,
    getIpHealth: servicesAntideo.getIpHealth,
    getIpInfo: servicesAntideo.getIpInfo,
    getZero: servicesZero,
    postPhish: servicesPhish,
};
