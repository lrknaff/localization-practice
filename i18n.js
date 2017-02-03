/* https://github.com/mashpie/i18n-node */

const i18n = require('i18n');
const express = require('express');

i18n.configure({
  locales: ['en-US', 'es'],
  defaultLocale: 'en-US',
  api: {
    '__': 'translate',
  },
  queryParameter: 'lang',
  directory: __dirname + '/locales'
});

module.exports = function(req, res, next) {
  i18n.init(req, res);

  return next();
}
