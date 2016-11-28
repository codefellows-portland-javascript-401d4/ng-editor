var app = angular.module('ngApp', []);

app.controller('inputController', function($scope) {
    $scope.options= ['blue', 'red', 'yellow'];
});