/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('LoanReturnService', LoanReturnService);

    LoanReturnService.$inject = ['$http','UtilityService'];
    function LoanReturnService($http,UtilityService) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.getReturnByDate = getReturnByDate;
        service.getReturnsByDate = getReturnsByDate;
        service.getTotalReturnByDate = getTotalReturnByDate;
        service.getTotalReturnsByDate = getTotalReturnsByDate;

        return service;

        function GetAll() {
            return $http.get('public/index.php/loan_returns').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/loan_returns/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(loan) {
            return $http.post('public/index.php/loan_returns', loan).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(loan) {
            return $http.put('public/index.php/loan_returns/' + loan.id, loan).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/loan_returns/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function getReturnByDate(data,start_date,end_date) {

            var total =[];

            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) && UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    total.push(value);
                }
            });
                return total;
            }
        function getReturnsByDate(data,start_date,end_date) {

            var total =[];

            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) && UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    total.push(value);console.log(value);
                }
            });
                return total;
            }
        function getTotalReturnByDate(data,start_date,end_date) {

            var total = 0;

            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) && UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    total+=Number(value.received_profit);
                }
            });
                return total;
            }
        function getTotalReturnsByDate(data,start_date,end_date) {

            var total = 0;

            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) && UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    total+=Number(value.amount);
                }
            });
                return total;
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

