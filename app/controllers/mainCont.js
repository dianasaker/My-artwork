(function(){
	angular.module("app").controller('mainCont',mainCont);
	function mainCont($scope, $location) {
		$scope.isShow = false;
		$scope.$on('messageOne', function (x) {
		  $scope.isShow = x;
		});
	}
})();
