(function() {
	angular.module("app").controller('login', login);
	function login($scope, $location) {
		$scope.users = JSON.parse(localStorage.getItem('obj'));
		$scope.signIn = function() {
			localStorage.setItem('email',$scope.email);
			function clearDetails() {
				$scope.email = "";
				$scope.password = "";
			}


			$scope.hideMenu = true;
			for (var i = 0; i < $scope.users.length; i++) {
				x = $scope.users[i];
				if (($scope.email == x.email) && ($scope.password == x.password)) {
					$scope.$emit('messageOne', true);
					$location.path('/artists');
				}
			};
			clearDetails();
		};
		$scope.signUp = function() {
			$location.path('/signUp');
		};
	}

})();
