const app = angular.module('myApp', []);

app.controller('styleCtrl', $scope => {
  $scope.styleOpts = ['big', 'bold', 'beautiful'];
  $scope.rangeVal = {
    size: 4
  };
});

