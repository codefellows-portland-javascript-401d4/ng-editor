var app = angular.module('myApp', []);

app.controller('fontCtrl', function($scope) {
    $scope.fonts = [
        {name: 'bold'},
        {name: 'underline'},
        {name: 'italics'}
    ];
});