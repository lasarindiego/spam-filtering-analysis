'use strict'

const servicesDatumbox = require('./datumbox');
const servicesPostMark = require('./postMark');
const servicesPlino = require('./plino');

module.exports = {
    getDatumbox: servicesDatumbox,
    postMark: servicesPostMark,
    postPlino: servicesPlino,
};
