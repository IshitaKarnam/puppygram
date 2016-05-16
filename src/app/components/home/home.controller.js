(function () {
    'use strict';
    
    angular.module('app').controller('HomeController', HomeController);
    
    HomeController.$inject = ['homeService'];
    function HomeController(homeService) {
        var vm = this;
        vm.test = 'Hello';
        vm.images = [];
        activate();
        return vm;
        
        function activate() {
            homeService.getImages().then(function (jsonData) {
                vm.images = jsonData.data.images;
                homeService.images = jsonData.data.images;
            });
        }
    }


})();