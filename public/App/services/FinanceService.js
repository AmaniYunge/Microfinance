/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('FinanceService',FinanceService);

    FinanceService.$inject = ['$http'];
    function FinanceService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.RecentTransactions = RecentTransactions;

        return service;

        function GetAll() {
            return $http.get('public/index.php/finances').then(handleSuccess, handleError('Error getting all users'));
        }

        function RecentTransactions(value) {
            return $http.get('public/index.php/finances/daily/'+value+'/get').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/finances/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(finance) {
            return $http.post('public/index.php/finances', finance).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(finance) {
            return $http.put('public/index.php/finances/' + finance.id, finance).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/finances/' + id).then(handleSuccess, handleError('Error deleting user'));
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
