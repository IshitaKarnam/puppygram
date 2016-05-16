(function () {
    'use strict';

    angular.module('app').factory('homeService', homeService);

    homeService.$inject = ['$http','$q'];
    function homeService($http, $q) {
        var service = {
            getImages: getImages,
            images: [],
            getImage: getImage
        };
        return service;

        function getImages () {
            return $http({
                 method: 'GET',
                 url: '/images.json'
            });
        }

        function getImage (id) {
            var deferred = $q.defer();


            deferred.resolve(imageSearch(id));
            return deferred.promise;
        }
        function imageSearch(id) {
            for (var i = 0; i < service.images.length; i++) {

                if (service.images[i].id === id) {
                    return service.images[i];
                }
            }
            return;
        }
    }


})();