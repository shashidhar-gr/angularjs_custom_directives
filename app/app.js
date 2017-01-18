var myApp = angular.module('myApp', []);


myApp.controller('simpleController', ['$scope', function($scope) {
	$scope.word = "shashidhar";
	$scope.customer = {
		name: "shashidhar",
		address: "bangalore"
	}
}]);

myApp.directive('customerData', function() {
	return {
		template: 'Name: {{customer.name}} </br> Address: {{customer.address}}'
	}
});

myApp.filter('reverse', function() {
	return function(str, upperCase) {

		if(upperCase)
			return str.split('').reverse().join('').toUpperCase()
		
		return str.split('').reverse().join('')
	}
});