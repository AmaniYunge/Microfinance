/**
 * Created by leo on 11/11/15.
 */
(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('debtorsController', debtorsController);

    debtorsController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','GrantService','ApplicantService','UtilityService','LoanReturnService','DTOptionsBuilder'];

    function debtorsController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,GrantService,ApplicantService,UtilityService,LoanReturnService,DTOptionsBuilder) {
        $scope.debtors = null;
        $scope.debtorsReturns = null;
        var debtor = this;
        $scope.totalLoan = 0;

        var date = new Date();
        $scope.current_year = date.getFullYear();
        $scope.todays_date = (date.toDateString());
        $scope.balance_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        $scope.start_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-01";
        $scope.end_date = $scope.balance_date;

        $scope.debtorsAccountFunction = function() {

            ApplicantService.GetAll().then(function (data) {
                $scope.applicants = data;
            }, function (response) {
            });

            GrantService.GetAll().then(function (data) {
                $scope.debtors = GrantService.GetGrantedLoanInDate(data, $scope.start_date, $scope.end_date);
                $scope.totalLoan = GrantService.TotalGetGrantedLoanInDate(data, $scope.start_date, $scope.end_date);
            }, function (response) {

            });

            LoanReturnService.GetAll().then(function (data) {
                $scope.debtorsReturns = LoanReturnService.getReturnsByDate(data, $scope.start_date, $scope.end_date);
                $scope.totalLoanReturns = LoanReturnService.getTotalReturnsByDate(data, $scope.start_date, $scope.end_date);
            }, function (response) {

            });
        }

        $scope.debtorsAccountFunction();
        $scope.getApplicantName = function(applicant_id){
            return UtilityService.getApplicantName(applicant_id,$scope.applicants);
        }



    }

})();