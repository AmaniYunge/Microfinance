/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('incomeStatementController',incomeStatementController);

    incomeStatementController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','LoanReturnService','CompanyService','ApplicationService','ExpensesService','DTOptionsBuilder'];

    function incomeStatementController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,LoanReturnService,CompanyService,ApplicationService,ExpensesService,DTOptionsBuilder) {
        var date = new Date();

        $scope.todays_date = (date.toDateString());
        $scope.balance_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        $scope.start_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-01";
        $scope.end_date = $scope.balance_date;
        $scope.company = null;
        $scope.loanReturns = null;
        $scope.applications = null;
        $scope.expenses = null;
        $scope.totalReturnInSelectedDate = 0;
        $scope.totalApplicationFeeInSelectedDate = 0;
        $scope.totalExpenses = 0;


        $scope.incomeStatement = function(){
            LoanReturnService.GetAll().then(function(data){
                $scope.loanReturns = data;
                $scope.totalReturnInSelectedDate  = LoanReturnService.getTotalReturnByDate(data,$scope.start_date,$scope.end_date);
            },function(response){

            });

            ApplicationService.GetAll().then(function(data){
                $scope.applications = data;
                $scope.totalApplicationFeeInSelectedDate = ApplicationService.GetApplicationFeesBydate(data,$scope.start_date,$scope.end_date);
                $scope.$watch('totalApplicationFeeInSelectedDate',function(newOne,oldOne){
                    $scope.totalApplicationFeeInSelectedDate = newOne;console.log(newOne);
                });
            },function(restponse){});

            ExpensesService.GetAll().then(function(data){
                $scope.expensesD = ExpensesService.GetExpensesInDate(data,$scope.start_date,$scope.end_date);
                $scope.totalApplicationFeeInSelectedDate = ApplicationService.GetApplicationFeesBydate(data,$scope.start_date,$scope.end_date);
                $scope.totalExpenses = ExpensesService.totalExpenses($scope.expensesD);
            },function(restponse){});


        }
        $scope.incomeStatement();

        CompanyService.GetAll().then(function(data){
            $scope.company = data;
        },function(response){

        });



    }

})();
