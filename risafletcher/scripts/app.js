angular.module('messageApp', [])
  .controller('messageInput', function($scope) {
    $scope.body = '';
    $scope.categories = [
      {name:'Bold', class:'bold'},
      {name: 'Modern', class:'modern'},
      {name: 'Elegant', class:'elegant'}
    ];
  });