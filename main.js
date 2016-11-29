
var app = angular.module('myApp', []);

// let init = 16;

app.controller('colorController', function($scope) {
    $scope.colors = [
        {name: 'red'},
        {name: 'blue'},
        {name: 'yellow'},
        {name: 'green'},
        {name: 'purple'},
        {name: 'black'}
    ];
    $scope.myColor = $scope.colors[4];

    $scope.text = {
        size: 22
    }

    // $scope.reset = function() {
    //     $scope.count = 0;
    // };
    // $scope.add = function() {
    //     $scope.count++;
    // };
    // $scope.subtract = function() {
    //     $scope.count--;
    // };
    
});
