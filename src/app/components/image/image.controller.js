(function () {
    'use strict';

    angular.module('app').controller('ImageController',ImageController);


    ImageController.$inject = ['$stateParams','homeService'];
    function ImageController($stateParams , homeService) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.test = 'This is image';
        vm.image = {};
        activate();
        return vm;

        function activate() {
            if (!homeService.images.length) {

                 homeService.getImages().then(function (jsonData) {

                     homeService.images = jsonData.data.images;
                     console.log(homeService.images);
                     homeService.getImage(vm.id).then(function (data) {
                        vm.image = data;
                        console.log(data);
                     });

                });
            }
        homeService.getImage(vm.id).then(function (data) {
            vm.image = data;
        });
    }

    }


})();