/**
 * Created by leo on 11/14/15.
 */


(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('ApplicationService',ApplicationService);

    ApplicationService.$inject = ['$http','UtilityService'];
    function ApplicationService($http,UtilityService) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetApplicationFeesBydate= GetApplicationFeesBydate;
        service.GetAmountToReturn= GetAmountToReturn;
        service.GetRecentApplications= GetRecentApplications;

        return service;

        function GetAll() {
            return $http.get('public/index.php/applications').then(handleSuccess, handleError('Error getting all users'));
        }
        function GetRecentApplications(value) {
            return $http.get('public/index.php/recentApplications/daily/'+value+'/get').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('public/index.php/applications' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function Create(applicant) {
            return $http.post('public/index.php/applications', applicant).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(applicant) {
            return $http.put('public/index.php/applications' + applicant.id, applicant).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('public/index.php/applications' + id).then(handleSuccess, handleError('Error deleting user'));
        }


        function GetApplicationFeesBydate(data,start_date,end_date) {

            var total = 0;

            angular.forEach(data,function(value,index){
                var date_created = UtilityService.DateReformatt(value.created_at);
                var date_one = new Date(start_date);
                var date_two = new Date(end_date);
                if(UtilityService.DateToTimestamp(date_one)<= UtilityService.DateToTimestamp(date_created) || UtilityService.DateToTimestamp(date_created) <= UtilityService.DateToTimestamp(date_two)){
                    if(isNaN(value.application_fee)||value.application_fee==null){}else{
                        total+=Number(value.application_fee);
                    }

                }
            });
            return total;
        }


        function GetAmountToReturn(application,grantApplication) {
            var loaned_amount = application.applied_amount;
            var percent_profit = Number(application.loan.profit_percent)/100;
            var return_interval = grantApplication.return_interval;
            var loan_duration = grantApplication.loan_duration;
            var loan_routine = Number(loan_duration)/Number(return_interval);
            var amount_per_interval = Math.ceil(loaned_amount/loan_routine);
            var expected_returns = [];

            var total_amount = 0;
            var total_amount_payed = 0;

            for(var increment= 0;increment<loan_routine;increment++){

                expected_returns[increment] = amount_per_interval+(loaned_amount-total_amount_payed)*percent_profit;

                total_amount_payed += amount_per_interval;

            }
          return JSON.stringify(expected_returns);

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
