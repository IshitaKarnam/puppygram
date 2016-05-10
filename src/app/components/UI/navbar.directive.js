(function () {
    'use strict';
    angular.module('app').directive('navbar',navbar);
    
    navbar.$inject = [];
    function navbar() {
        var directive = {
            restrict: 'EA',
            replace: true ,/*replace with html*/
            transclude: true,
            templateUrl: 'src/app/views/directives/navbar.html',
            link: function (scope, elem, attr) {
                
            }/* runs this function when the directive is loaded*/
        };
        return directive;
    }


})();