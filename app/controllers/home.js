(function() {
	angular.module("app").controller('home', home);
	function home ($scope){
		$scope.currentUser= JSON.parse(localStorage.getItem('myObj'));
	}
})();