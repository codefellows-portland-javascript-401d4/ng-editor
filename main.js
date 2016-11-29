var app = angular.module('myApp', []);

app.controller('stylesController', function($scope) {
  $scope.styles = [
    {name: 'bold'},
    {name: 'fine'},
    {name: 'bright'}
  ]
});

app.controller('sizeController', function($scope) {
  $scope.size = [
    
  ]
})