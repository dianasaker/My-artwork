(function(){
	var app=angular.module("app");
	app.controller("signUp",signUp);
	
	function signUp($scope){
		
		$scope.model=function(){
			console.log($scope);
			var data={
				firstname:$scope.fn,
				lastname:$scope.ls,
				email:$scope.email,
				password:$scope.password,
				repassword:$scope.repassword,
				gender:$scope.gender
			};
			var JSONdata=JSON.stringify(data);
			localStorage.setItem("data",JSONdata);
			
			var getData=localStorage.getItem("data");
	 	    JSON.parse(getData);
	 	    alert(JSON.parse(getData).firstname);
	 };
	 
	}
})();
