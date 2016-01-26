/**
 * Created by leo on 11/13/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope','$cookies','$window','AuthenticationService'];

    function homeController($scope,$cookies,$window,AuthenticationService) {
//        if(!$scope.$parent.isLogedIn){
//            $window.location.href='login.html';
//        }
console.log($cookies);

    }

})();