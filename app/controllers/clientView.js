(function() {
	angular.module("app").controller('clientView', clientView);
	function clientView($scope, fileService) {
		$scope.client = JSON.parse(localStorage.getItem('myObj'));
		$scope.users = JSON.parse(localStorage.getItem('obj'));
		var currentUserEmail = localStorage.getItem("email");
		if ($scope.client.email == currentUserEmail) {
			$scope.myProfile = true;
		} else {
			$scope.myProfile = false;
		}
		
		function uploadNewFile() {
			$scope.uploading = true;
			var url = "/upload";
			var file = $scope.myFile;
			console.log("file", file);
			fileService.uploadFileToUrl(file, url);
		};
		
		function saveInput() {
			var imgName = $scope.myFile ? $scope.myFile.name : "";
				uploadNewFile();
			for (var i = 0; i <= $scope.users.length; i++) {
				if ($scope.client.email == $scope.users.email) {
					i = $scope.users.length;
					$scope.client.email = "";
					$scope.client.fullname = "";
					$scope.client.Lname = "";
					document.querySelector("#myFile").value = "";
					$scope.client.select = "";
					$scope.client.notes = "";
					$scope.client.password = "";
				}
			}
			$scope.clientProfile={
				"email" : $scope.emailInput,
				"fullname": $scope.NameInput,
				"Lname" : $scope.LnameInput,
				"myfile" : $scope.imgInput,
				"select" : $scope.selectInput,
				"notes" : $scope.notesInput,
				"password" : $scope.PasswordInput
				};
				var temp = JSON.parse(localStorage.getItem('obj'));
				temp.push($scope.clientProfile);
				localStorage.setItem('obj', JSON.stringify(temp));
		}

	}

})();

