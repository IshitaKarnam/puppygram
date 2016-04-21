(function () {
	'use strict';
	
	angular.module('app').controller('HomeController', HomeController);
	
	HomeController.$inject = ['homeService'];
	function HomeController(homeService) {
		var vm = this;
		vm.test = 'Hello';
		vm.images = [];
		homeService.getImages().then(function (jsonData){
			vm.images = jsonData.data.images;
		});
		return vm;
	}


})();