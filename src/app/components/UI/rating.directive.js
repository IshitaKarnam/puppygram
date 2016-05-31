(function () {
   'use strict';
   angular.module('app').directive('rating',rating);

   rating.$inject = [];
   function rating() {
        var directive = {
            restrict: 'EA',
            replace: true ,/*replace with html*/
            templateUrl: 'src/app/views/directives/rating.html',
            scope: {

            },
            link: function (scope,elem,attr) {

            }/* runs this function when the directive is loaded*/
        };
        return directive;
   }


})();