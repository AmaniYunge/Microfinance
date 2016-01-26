/**
 * Created by leo on 11/13/15.
 */

(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('companyProfitService', companyProfitService);

    companyProfitService.$inject = ['$http','UtilityService'];
    function companyProfitService($http,UtilityService) {
        var service = {};
console.log("abcd");
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetLoansInDate = GetLoansInDate;
        service.GetCashInDate = GetCashInDate;
        service.totalLoan = totalLoan;
        service.totalCash = totalCash;

        return service;

        function GetAll() {
            return $http.get('public/index.php/company_profits').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/company_profits/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('public/index.php/company_profits/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('public/index.php/company_profits', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('public/index.php/company_profits/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/company_profits/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function totalCash(data) {
            var total = 0;
            angular.forEach(data,function(value,index){
                total+=Number(value.amount);
            });
            return total;
        }

        function totalLoan(data) {
            var total = 0;
            angular.forEach(data,function(value,index){
                total+=Number(value.amount);
            });
            return total;
        }

        function GetLoansInDate(date,start_date,end_date) {
            var loans = [];
            angular.forEach(date,function(value,index){
                if(value.source_type=="Loan"&&UtilityService.DateToTimestamp(start_date)<=UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))&&UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))<=UtilityService.DateToTimestamp(end_date)){
                    loans.push(value);
                    console.log(loans);
                }
            });
            return loans;
        }
        function GetCashInDate(date,start_date,end_date) {
            var cash = [];
            angular.forEach(date,function(value,index){
                if(value.source_type=="Cash"&&UtilityService.DateToTimestamp(start_date)<=UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))&&UtilityService.DateToTimestamp(UtilityService.DateReformatt(value.created_at))<=UtilityService.DateToTimestamp(end_date)){
                    cash.push(value);
                }
            });
            return cash;
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