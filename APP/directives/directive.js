(function(){
	var app=angular.module("app");
	app.directive("signUp",signUp);
	function signUp(){
		restrict:"E";
	    template:"<h1>SignUp</h1>";
	}
})();