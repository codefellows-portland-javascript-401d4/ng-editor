var myApp = angular.module('ngEditor', []); // eslint-disable-line

myApp.controller('fontFamily', ['$scope', function ($scope) {
  $scope.family = {
    name: 'font family'
  };
}]);

myApp.controller('fontColor', ['$scope', function ($scope) {
  $scope.colors = [
    {name: 'black'},
    {name: 'red'},
    {name: 'blue'},
    {name: 'green'}
  ];
  $scope.myColor = $scope.colors[2];
}]);

myApp.controller('fontSize', ['$scope', function ($scope) {
  $scope.value = 12;
  $scope.min = 8;
  $scope.max = 48;
}]);
