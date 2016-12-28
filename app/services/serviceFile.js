(function() {
	angular.module("app").service('fileService', fileService);
	function fileService($http) {
		this.uploadFileToUrl = function(file, uploadUrl) {
			var formData = new FormData();
			formData.append('file', file);
			var request = {
				transformRequest : angular.identity,
				headers : {
					'Content-Type' : undefined
				}
			};
			$http.post(uploadUrl, formData, request).success(function(data) {
				console.log("data", data);
				if (data == "ok") {
					console.log("Yea");
				}

			}).error(function(data) {
				console.log("data", data);
			});
			
		};
	};
})();
