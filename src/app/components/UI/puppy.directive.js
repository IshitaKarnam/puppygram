(function () {
    'use strict';
    angular.module('app').directive('puppyDirective',puppyDirective);

    puppyDirective.$inject = [];
    function puppyDirective() {
        var directive = {

            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'src/app/views/directives/puppy.html',
            scope: {
              puppyImage: '=image',
              imageId: '=uid'
            }
        };
        return directive;
    }


})();