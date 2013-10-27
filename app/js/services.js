'use strict';

/* Services */

var fancyPhotoGridServices = angular.module('fancyPhotoGridServices', ['ngResource']);

fancyPhotoGridServices.factory('Photo', ['$resource',
	function($resource){
		return $resource('json/:photoId.json', {}, {
			query: {method:'GET', params:{photoId:'pictures'}, isArray:true}
		});
	}]);
