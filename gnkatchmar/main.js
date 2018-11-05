var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
  $scope.fonts = ['Courier New', 'Helvetica', 'Impact', 'Times New Roman', 'Verdana'];
});