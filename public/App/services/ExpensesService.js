/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('ExpensesService', ExpensesService);

    ExpensesService.$inject = ['$http','UtilityService'];
    function ExpensesService($http,UtilityService) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.totalExpenses = totalExpenses;
        service.GetExpensesInDate = GetExpensesInDate;

        return service;

        function GetAll() {
            return $http.get('public/index.php/expenses').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/expenses/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(loan) {
            return $http.post('public/index.php/expenses', loan).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(loan) {
            return $http.put('public/index.php/expenses/' + loan.id, loan).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/expenses/' + id).then(handleSuccess, handleError('Error deleting user'));
        }


        function totalExpenses(expenses) {
            var total = 0;
            angular.forEach(expenses,function(value,index){
               total+=Number(value.value);
            });

            return total;
        }

        function GetExpensesInDate(data,start_date,end_date) {
            var expenses = [];
            var i = 0;
            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                    var expense = {id:i,name:value.name,value:0,created_at:""};
                i++;
                angular.forEach(value.expenses_transactions,function(valueEx,indexEx){
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) || UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    expense.value = valueEx.amount;
                    expense.created_at = valueEx.created_at;
                    expenses.push(expense);
                        console.log(value);

                    }
                });

            });
            return expenses;
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


