'use strict';

var app = angular.module('caraldiApp', []);

app.controller('messageControl', function($scope) {
  $scope.name = "userName"
  $scope.message = "userMessage"
  $scope.display = function(name, message) {
    return `${ name } says: ${ message }`;
  }
});
