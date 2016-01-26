
/**
 * This is the main microfinance application controller
 * Created by leo on 11/13/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope','$window','$rootScope','UserService','AuthenticationService','ApplicationDetailService','CompanyService'];

    function loginController($scope,$window,$rootScope,UserService,AuthenticationService,ApplicationDetailService,CompanyService) {
        $scope.login = {email:"",password:""};
        $scope.application = null;
        $scope.users = null;
        $scope.company = null;


        UserService.GetAll().then(function(data){
            $scope.users = data;
        });

        ApplicationDetailService.GetAll().then(function(data){
            $scope.application = data[0];
        });
        CompanyService.GetAll().then(function(data){
            $scope.company = data[0];
        });
        $scope.$watch('users',function(newValue,OldOne){

        });
        $scope.$watch('application',function(newValue,OldOne){

        });
        $scope.$watch('company',function(newValue,OldOne){

        });

        $scope.submit = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.login.email,$scope.login.password,function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(($scope.login.email,$scope.login.password));
                $window.location.href='/microfinance/';
                } else {

                }
            });
        };

    }

})();