(function(){
	var app = angular.module('connote', []);

	app.controller('moods', function($scope) {
		$scope.moods = ['furious', 'upset', 'peeved', 'neutral', 'pleased', 'happy', 'ecstatic'];
	});

})();
