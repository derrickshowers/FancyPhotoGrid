'use strict';

var fancyPhotoGrid = angular.module('fancyPhotoGrid', [
	'ngRoute',
	'fancyPhotoGridServices',
	'fancyPhotoGridControllers'
])

fancyPhotoGrid.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/photogrid', {templateUrl: 'partials/photogrid.html', controller: 'photogrid'});
	$routeProvider.otherwise({redirectTo: '/photogrid'});
}]);
