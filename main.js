var app = angular.module('myApp', []);

app.controller('colorController', function($scope) {
  $scope.styles = [
    { name: 'blue' },
    { name: 'golden' },
    { name: 'green'}
  ];
  $scope.yourColor = $scope.colors[0];
});