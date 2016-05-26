(function () {
    'use strict';

    angular.module('app').controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;
        vm.test = 'hello!';

        return vm;
    }


})();