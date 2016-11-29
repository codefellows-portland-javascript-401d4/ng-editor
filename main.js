var app = angular.module('myApp', []);

app.controller('colorController', function($scope) {
  $scope.colors = [
    { name: 'blue' },
    { name: 'golden' },
    { name: 'green'}
  ];
  
  $scope.yourColor = $scope.colors[0];
});