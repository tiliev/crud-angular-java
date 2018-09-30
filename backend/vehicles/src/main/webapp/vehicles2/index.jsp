<!doctype html>
<html ng-app="vehicles">
<head>
<title>Hello AngularJS</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
<script src="index.js"></script>
</head>

<body>
	<div ng-controller="VehiclesController">
		<table>
			<tr>
				<th>Id</th>
				<th>Name</th>
			</tr>
			<tr ng-repeat="vehicle in vehicles">
				<td>{{ vehicle.idVehicle }}</td>
				<td>{{ vehicle.name }}</td>
			</tr>
		</table>
	</div>
</body>
</html>