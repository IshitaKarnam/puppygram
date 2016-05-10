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
            link: function (scope, elem, attr) {
                scope.puppyImage = attr.image;
                scope.imageId = attr.imageid;
                console.log(scope);
                console.log('attr', attr);
            }
        };
        return directive;
    }


})();