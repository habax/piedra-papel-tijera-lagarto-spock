'use strict';

/**
 * @ngdoc service
 * @name piedrapapelApp.underscore
 * @description
 * # underscore
 * Factory in the piedrapapelApp.
 */
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {

  return window._; // assumes underscore has already been loaded on the page
});
