/* jshint node: true */
'use strict';

var _ = require('lodash');
var Bluebird = require('bluebird');

module.exports = function (object, into) {

  into = into || object || {};

  _.forIn(object, function (value, key) {

    if ( _.isFunction(value) ) {
      into[key] = Bluebird.method(value);
    }

  });

};
