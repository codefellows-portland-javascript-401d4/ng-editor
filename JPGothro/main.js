
var app = angular.module('myApp', []);

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
    
});
