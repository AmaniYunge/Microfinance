/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('GrantService',GrantService);

    GrantService.$inject = ['$http','UtilityService'];
    function GrantService($http,UtilityService) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetGrantedLoanInDate = GetGrantedLoanInDate;
        service.TotalGetGrantedLoanInDate  = TotalGetGrantedLoanInDate ;

        return service;

        function GetAll() {
            return $http.get('public/index.php/granted_loans').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/granted_loans/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(granted_loan) {
            return $http.post('public/index.php/granted_loans', granted_loan).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(granted_loan) {
            return $http.put('public/index.php/granted_loans/' + granted_loan.id, granted_loan).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/granted_loans/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function GetGrantedLoanInDate(data,start_date,end_date) {
            var loans = [];
            angular.forEach(data,function(value,index){console.log(loans);
                if(UtilityService.DateToTimestamp(start_date)<=UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))&&UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))<=UtilityService.DateToTimestamp(end_date)){
                    loans.push(value);

                }
            });
            return loans;
        }

        function TotalGetGrantedLoanInDate (data,start_date,end_date) {
            var loans = 0;
            angular.forEach(data,function(value,index){console.log(value);
                if(UtilityService.DateToTimestamp(start_date)<=UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))&&UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))<=UtilityService.DateToTimestamp(end_date)){
                    loans+=Number(value.loaned_amount);

                }
            });
            return loans;
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
