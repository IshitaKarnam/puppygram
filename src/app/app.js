(function () {
	'use strict';
	
	angular.module('app', [
		'app.core'
	]).config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		
		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'src/app/views/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}

})();