'use strict'

const servicesDatumbox = require('./datumbox');
const servicesPostMark = require('./postMark');
const servicesPlino = require('./plino');
const servicesAntideo = require('./antideo');

module.exports = {
    getDatumbox: servicesDatumbox,
    postMark: servicesPostMark,
    postPlino: servicesPlino,
    getAntideo: servicesAntideo,
};
