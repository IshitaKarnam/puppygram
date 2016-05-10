(function () {
    'use strict';
    
    angular.module('app').factory('homeService', homeService);
    
    homeService.$inject = ['$http'];
    function homeService($http) {
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