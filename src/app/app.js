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
        }).state('image',{
            url: '/image/:id',
            templateUrl: 'src/app/views/image.html',
            controller: 'ImageController',
            controllerAs: 'vm'
        }).state('about',{
            url: '/about',
            templateUrl: 'src/app/views/about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
    }

})();