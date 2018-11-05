var app = angular.module('myApp', []);

app.controller('styleController', function($scope) {
  $scope.styles = [
    { name: 'normal' },
    { name: 'bold' },
    { name: 'italic' }
  ];
  $scope.colors = [
    { name: 'black' },
    { name: 'blue' },
    { name: 'yellow' },
    { name: 'red' }
  ];
  $scope.myStyle = $scope.styles[0];
  $scope.myColor = $scope.colors[0];
});