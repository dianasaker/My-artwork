(function() {
	angular.module("app").controller('artists', artists);
	function artists($scope, $location) {
		$scope.artists = JSON.parse(localStorage.getItem('obj'));

		$scope.get = function(name){
			
			for (var i = 0; i < $scope.artists.length; i++) {
				if (name == $scope.artists[i].fullname) {
					localStorage.setItem('myObj', JSON.stringify($scope.artists[i]));
					i=$scope.artists.length;
				}
				else {
					localStorage.setItem('myObj', JSON.stringify(null));
				};
			};
			$location.path('/clientView');
		};

	}

})();
