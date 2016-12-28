(function() {
	angular.module("app").directive('fileUpload', fileUpload);

	function fileUpload($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.fileUpload);
				var uploadFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						uploadFunc(scope, element[0].files[0]);
					});
				});
			}
		};
	};
})();