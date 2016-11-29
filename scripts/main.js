const app = angular.module('myApp', []);

app.controller('moodCtrl', function($scope) {
  $scope.items = ['classic', 'fancy', 'fantastic'];
});
