var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope, $http){

	$scope.student_data = []; //declare an empty array

	// get data from api 
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(response){ 
		$scope.student_data = response; 
	});


	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}


});

    

