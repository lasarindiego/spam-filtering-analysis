'use strict'

const servicesDatumbox = require('./datumbox');
const servicesPostMark = require('./postMark');
const servicesPlino = require('./plino');
const servicesAntideo = require('./antideo');
const servicesClearout = require('./clearout');

module.exports = {
    getDatumbox: servicesDatumbox,
    postMark: servicesPostMark,
    postPlino: servicesPlino,
    getAntideo: servicesAntideo,
    postClearout: servicesClearout,
};
