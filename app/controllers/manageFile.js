(function() {
	angular.module("app").controller('ManageUploadCtrl', ManageUploadCtrl);
	function ManageUploadCtrl($scope, fileService) {
		$scope.uploading = false;
		$scope.result="upload";
		$scope.uploadFile = function() {
			$scope.uploading=true;
			var url = "/upload";
			var file = $scope.myFile;
			console.log("file", file);
			fileService.uploadFileToUrl(file, url);
		};
	};
})();