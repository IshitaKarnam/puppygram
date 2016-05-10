(function () {
    'use strict';
    
    angular.module('app').controller('ImageController',ImageController);
    
    ImageController.$inject = ['$stateParams'];
    function ImageController($stateParams) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.test = 'This is image';
        return vm;
    }


})();