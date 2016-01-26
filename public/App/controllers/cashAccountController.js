/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('cashAccountController',cashAccountController);

    cashAccountController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','companyProfitService','ApplicationService','CompanyService','FinanceService','LoanReturnService','ApplicantService','CashAccountService','ExpensesService','GrantService','UtilityService','DTOptionsBuilder'];
    function cashAccountController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,companyProfitService,CompanyService,ApplicationService,FinanceService,LoanReturnService,ApplicantService,CashAccountService,ExpensesService,GrantService,UtilityService,DTOptionsBuilder) {
        $scope.cash = [];
        var demo = [{
            id: "3",
            transaction_type: "Expenses",
            expens_id: "1",
            liab_id: null,
            amount: "100",
            created_by: "",
            created_at: "0000-00-00 00:00:00",
            updated_at: "0000-00-00 00:00:00",
            expenses: {
                id: "1",
                name: "Fuel",
                created_by: "0",
                created_at: "0000-00-00 00:00:00",
                updated_at: "0000-00-00 00:00:00"
            },
            liabilities: null
        }];
        var date = new Date();

        $scope.company = null;
        $scope.company = null;
        var date = new Date();
        $scope.current_year = date.getFullYear();
        $scope.todays_date = (date.toDateString());
        $scope.balance_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        $scope.start_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-01";
        $scope.end_date = $scope.balance_date;
        $scope.loan_receipts = null;
        $scope.totalExpensesByDate = 0;
        $scope.capitalByDate = 0;
        $scope.totalLiabilityByDate = 0;
        $scope.totalLoanIssuedByDate = 0;
        $scope.totalLoanReceiptDate = 0;
        $scope.total_debit_side = 0;
        $scope.total_credit_side = 0;

        $scope.applicants = null;

        FinanceService.GetAll().then(function(data){
            $scope.cashAccount = data;
        });

        companyProfitService.GetAll().then(function(data){
            $scope.capital = data;
            $scope.loan_receipts = companyProfitService.GetLoansInDate(data,$scope.start_date,$scope.end_date);
            $scope.cash = companyProfitService.GetCashInDate(data,$scope.start_date,$scope.end_date);
            console.log($scope.loan_receipts);
        });

        CompanyService.GetAll().then(function(data){
            $scope.company = data;
        });
        $scope.cashAccountFunction = function(){

            LoanReturnService.GetAll().then(function(data){
                $scope.loan_returns = LoanReturnService.getReturnByDate(data,$scope.start_date,$scope.end_date);
                $scope.total_debit_side = CashAccountService.sumDebitSide($scope.loan_returns)
                $scope.totalReturnInSelectedDate  = LoanReturnService.getTotalReturnByDate(data,$scope.start_date,$scope.end_date);
            },function(response){

            });
            ApplicantService.GetAll().then(function(data){
                $scope.applicants = data;
            },function(response){});


            ExpensesService.GetAll().then(function(data){
                $scope.expenses = ExpensesService.GetExpensesInDate(data,$scope.start_date,$scope.end_date);

                $scope.total_credit_side = CashAccountService.sumCreditSide($scope.expenses);
                //$scope.totalApplicationFeeInSelectedDate = ApplicationService.GetApplicationFeesBydate(data,$scope.start_date,$scope.end_date);
                //$scope.totalExpenses = ExpensesService.totalExpenses($scope.expensesD);
            },function(restponse){});



            GrantService.GetAll().then(function(data){
                $scope.grants = GrantService.GetGrantedLoanInDate(data,$scope.start_date,$scope.end_date);
                $scope.totalGrantedLoanInSelectedDate = GrantService.TotalGetGrantedLoanInDate($scope.grants);

            },function(restponse){});




        }


        $scope.cashAccountFunction();

$scope.sumDebt = function(credit){
    $scope.total_debit_side += Number(credit);
}
$scope.sumCredit = function(credit){

    $scope.total_credit_side += Number(credit);
}
        $scope.getApplicantName = function(applicant_id){
            return UtilityService.getApplicantName(applicant_id,$scope.applicants);
        }

$scope.difference = function(a,b){
        if(Number(a)>Number(b)){
            return Number(a) - Number(b);
        }else{
            return Number(b) - Number(a);
        }
}
        $scope.totalExpensesByDate  = function(cash){

            angular.forEach(cash,function(value,index){

            });
        }
        $scope.capitalByDate  = function(cash){

            angular.forEach(cash,function(value,index){

            });
        }
        $scope.totalLiabilityByDate  = function(cash){

            angular.forEach(cash,function(value,index){

            });
        }
        $scope.totalLoanIssuedByDate  = function(cash){

            angular.forEach(cash,function(value,index){

            });
        }
        $scope.totalLoanReceiptDate  = function(cash){

            angular.forEach(cash,function(value,index){

            });
        }


    }

})();
