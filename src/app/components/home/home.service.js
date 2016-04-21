(function () {
	'use strict';
	
	angular.module('app').factory('homeService', homeService);
	
	homeService.$inject = ['$http'];
	function homeService($http){
		/* GET https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=puppy */
		var service = {
			getImages: getImages
		};
		return service;
		
		function getImages () {
			return $http({
				 method: 'GET',
				 url: '/images.json'
			 });
		 }
	}


})();