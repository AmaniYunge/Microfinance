/**
 * This is the main microfinance application controller
 * Created by leo on 11/10/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope','$window','AuthenticationService','CompanyService','DTOptionsBuilder'];

    function mainController($scope,$window,AuthenticationService,CompanyService,DTOptionsBuilder) {
        $scope.isLogedIn = false;
        CompanyService.GetAll().then(function(data){
            console.log(data);
            data[0].company_name = ""+data[0].company_name.toLocaleUpperCase();
            console.log(data);
            $scope.company = data;

        });
        $scope.format = 'yyyy-M-d  h:mm:ss a';
    }

})();