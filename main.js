var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
  $scope.message = 'Type Message Here';
  $scope.fonts = ['Helvetica', 'Times New Roman', 'Verdana'];
});