angular.module('vehicles.cars', [])

.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/cars', {
	    templateUrl: 'cars/cars.htmla',
	    controller: 'CarsControllera'
	  });
	}])

.controller('CarsController',
		function($scope, $http) {
			$http.get('/vehicles/getVehiclesByType/3').then(function(response) {
				$scope.vehicles = response.data;
			});
		});