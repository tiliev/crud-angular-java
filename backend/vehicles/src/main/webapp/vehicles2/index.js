angular.module('vehicles', [])
.controller('VehiclesController', function($scope, $http) {
    $http.get('/vehicles/getAllVehicles2').
        then(function(response) {
            $scope.vehicles = response.data;
        });
});