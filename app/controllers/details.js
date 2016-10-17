(function(){
	angular.module("app").controller("details",details);
	function details($scope){
		
		$scope.save=function(){
		  $scope.data={"fullname":$scope.fullname,"profilename":$scope.pname,"img":$scope.img,"img":$scope.img};
		  localStorage.setItem("obj",JSON.stringify($scope.data));
		  JSON.parse(localStorage.getItem("obj"));
		};
		$scope.artists={};
		var count=1;
		$scope.upload=function(obj){
			$scope.artists[count]=obj;
			count++;
		};
	}
})();
