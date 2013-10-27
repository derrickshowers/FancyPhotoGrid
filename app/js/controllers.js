'use strict';

/* Controllers */

var fancyPhotoGridControllers = angular.module('fancyPhotoGridControllers', []);

fancyPhotoGridControllers.controller('photogrid', ['$scope', 'Photo',
		function($scope, Photo) {
  			$scope.photos = Photo.query();
  		
	}])