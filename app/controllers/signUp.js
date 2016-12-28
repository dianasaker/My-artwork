(function() {
	angular.module("app").controller("signUp", signUp);
	function signUp($scope, fileService,$location) {

		function uploadFile() {
			$scope.uploading = true;
			var url = "/upload";
			var file = $scope.myFile;
			console.log("file", file);
			fileService.uploadFileToUrl(file, url);
		};

		function clearDetails() {
			$scope.email = "";
			$scope.fullname = "";
			$scope.Lname = "";
			document.querySelector("#myFile").value = "";
			$scope.myFile = "";
			$scope.select = "";
			$scope.notes = "";
			$scope.password="";
		}


		$scope.checkboxModel =true;
		

		$scope.save = function() {
			var imgName = $scope.myFile ? $scope.myFile.name : "";
			uploadFile();
			if (localStorage.getItem('obj')) {
				$scope.obj = {
					'email' : $scope.email,
					'fullname' : $scope.fullname,
					'Lname' : $scope.Lname,
					'myFile' : imgName,
					'select' : $scope.select,
					'notes' : $scope.notes,
					'checkbox':$scope.checkboxModel,
					'password':$scope.password
				};
				var temp = JSON.parse(localStorage.getItem('obj'));
				temp.push($scope.obj);
				localStorage.setItem('obj', JSON.stringify(temp));
				$location.path('/login');
			} else {
				$scope.obj = [{
					'email' : $scope.email,
					'fullname' : $scope.fullname,
					'Lname' : $scope.Lname,
					'myFile' : imgName,
					'select' : $scope.select,
					'notes' : $scope.notes,
					'checkbox':$scope.checkboxModel,
					'password':$scope.password
				}];
				localStorage.setItem('obj', JSON.stringify($scope.obj));
				$location.path('/login');

			};
			clearDetails();

		};
	}

})();
