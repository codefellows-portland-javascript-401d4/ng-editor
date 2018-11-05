var moduleapp = angular.module('myApp', []);

moduleapp.controller('messageCtrl', function($scope) {
    $scope.greeting = 'Hello World';
    $scope.options = ['modern', 'boring', 'fancy'];
    $scope.select = 'modern';
    $scope.slider = 50;
    $scope.calcSize = function(value) {
        return { 'font-size': `${value}px`};
    };
});