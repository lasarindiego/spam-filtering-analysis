'use strict'

const servicesDatumbox = require('./datumbox');
const servicesPostMark = require('./postMark');

module.exports = {
    getDatumbox: servicesDatumbox,
    postMark: servicesPostMark,
};
