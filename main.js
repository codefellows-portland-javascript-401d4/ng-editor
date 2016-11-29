var app =angular.module('myApp', []);

app.controller('someKindaControl', function($scope) {
  $scope.colors = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'}
  ];

  $scope.fonts = [
    {font: 'Tillana'},
    {font: 'Bungee Inline'},
    {font: 'Bitter'}
  ];

  $scope.CustomStyle = {};
  $scope.myColor = $scope.colors[0];
  $scope.myFont = $scope.fonts[0];

  $scope.selectedColor = '';
  $scope.selectedFont = '';

  $scope.changeColor = function(option) {
    $scope.selectedColor = option.color;
    console.log(option.color);
  };

  $scope.changeFont = function(option) {
    $scope.selectedFont = option.font;
    console.log(option.font);
  };
});