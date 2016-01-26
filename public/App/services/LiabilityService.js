/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('LiabilityService', LiabilityService);

    LiabilityService.$inject = ['$http'];
    function LiabilityService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('public/index.php/liabilities').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/liabilities/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(loan) {
            return $http.post('public/index.php/liabilities', loan).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(loan) {
            return $http.put('public/index.php/liabilities/' + loan.id, loan).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/liabilities/' + id).then(handleSuccess, handleError('Error deleting user'));
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


