/* jshint node: true */
/* global describe, it, beforeEach */
'use strict';

var should = require('should');

var promisifyMethods = require('../.');

describe('Promisify Methods', function () {

  var object;

  beforeEach(function () {
    object = {
      f1: function () {
        return 1;
      },
      f2: function () {
        throw new Error('');
      },
      value: 3
    };
  });

  it('should not promisify values', function () {

    promisifyMethods(object);

    object.value.should.be.eql(3);

  });

  it('should not promisify all methods of the given object if it is call without parameters', function () {

    promisifyMethods();

    object.f1().should.not.have.property('then');

  });

  it('should promisify all methods of the given object if it is call without second parameter', function (done) {

    promisifyMethods(object);

    object.f1()
      .then(function (value) {
        value.should.be.eql(1);
      })
      .then(done, done);

  });

  it('should promisify all methods of the second parameter if it is call with second parameter', function (done) {

    var ob = {};

    promisifyMethods(object, ob);

    ob.f2()
      .then(done)
      .catch(done.bind(null, null));

  });

});
