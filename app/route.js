(function(){
	angular.module("app").config(route);
	function route($routeProvider){
		$routeProvider
		.when("/details",{
			templateUrl:"app/views/details.html",
			controller:"details"
		})
		.when("/artists",{
			templateUrl:"app/views/artists.html",
			controller:"artists"
		})
		.otherwise("/");
	}
})();
