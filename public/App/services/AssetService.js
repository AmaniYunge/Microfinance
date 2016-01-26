/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('AssetService', AssetService);

    AssetService.$inject = ['$http'];
    function AssetService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.FixedAsset = FixedAsset;
        service.TotalFixedAsset = TotalFixedAsset;
        service.CurrentAsset = CurrentAsset;
        service.TotalCurrentAsset = TotalCurrentAsset;

        return service;

        function GetAll() {
            return $http.get('public/index.php/assets').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/assets/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(loan) {
            return $http.post('public/index.php/assets', loan).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(loan) {
            return $http.put('public/index.php/assets/' + loan.id, loan).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/assets/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function FixedAsset(assets) {
            var fixed_assets = [];
            angular.forEach(assets,function(value,index){
                if(value.type=="Fixed Asset"){
                    fixed_assets.push(value);
                }
            });

            return fixed_assets;
        }
        function TotalFixedAsset(assets) {
            var total_fixed_assets = 0;
            angular.forEach(assets,function(value,index){
                if(value.type=="Fixed Asset"){
                    total_fixed_assets +=Number(value.value);
                }
            });

            return total_fixed_assets;
        }

        function CurrentAsset(assets) {
            var current_assets = [];
            angular.forEach(assets,function(value,index){
                if(value.type=="Current Asset"){
                    current_assets.push(value);
                }
            });

            return current_assets;
        }
        function TotalCurrentAsset(assets) {
            var total_current_assets = 0;
            angular.forEach(assets,function(value,index){
                if(value.type=="Current Asset"){
                    total_current_assets += Number(value.value);
                }
            });

            return total_current_assets;
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


