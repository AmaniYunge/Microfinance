/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('capitalAccountController',capitalAccountController);

    capitalAccountController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','UtilityService','companyProfitService','CompanyService','FinanceService','DTOptionsBuilder'];
    function capitalAccountController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,UtilityService,companyProfitService,CompanyService,FinanceService,DTOptionsBuilder) {
        $scope.capital = [];
        $scope.cash = [];
        $scope.loan = [];
        $scope.balance_bd_last_year = 0;
        $scope.total_loan_and_cash_and_balance = 0;
        var date = new Date();
        $scope.current_year = date.getFullYear();
        $scope.todays_date = (date.toDateString());
        $scope.balance_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        $scope.start_date = date.getFullYear()+"-01-01";
        $scope.end_date = $scope.balance_date;

        var demo = {id: "2",source_id: "",source_type: "Accumulated Capital",amount: "0",created_by: "1",created_at: " ",updated_at: " "};
        $scope.currentC = demo;
        $scope.company = null;
        $scope.company = null;

        var capital = this;
        CompanyService.GetAll().then(function(data){
            $scope.company = data;
        });


        $scope.getCapitalAccount = function(){
            companyProfitService.GetAll().then(function(data){
                $scope.loan = companyProfitService.GetLoansInDate(data,$scope.start_date,$scope.end_date);
                $scope.cash = companyProfitService.GetCashInDate(data,$scope.start_date,$scope.end_date);
                $scope.total_loan_and_cash_and_balance = companyProfitService.totalLoan($scope.loan)+companyProfitService.totalCash($scope.cash);
                console.log($scope.cash);
            },function(response){
                console.log(response);
            });
        }
        $scope.getCapitalAccount();


        $scope.printCapitalAccount = function(contents){
            var content =  $("#"+contents).html();
            UtilityService.printPdf(content).then(function(data){

                window.open('public/index.php/homeprint?contents='+content,'_blank');
            });
        }

        //capital.loadCapital = function(){
        //    companyProfitService.GetAll().then(function(data){
        //        $scope.capital = data;
        //    },function(response){});
        //}
        //
        //
        //$scope.currentCapital = function(){
        //    var dates = [$scope.start_date,$scope.end_date];
        //    $scope.$watch("capital",function(newCapital,oldCapital){
        //        var buffer = [];
        //        if(angular.isDefined(newCapital)) {
        //            angular.forEach($scope.capital, function (capVal, capInd) {
        //                var date = UtilityService.DateReformatt(capVal.created_at);
        //                if(dates[0]!=""&&dates[1]!=""){
        //
        //                    var timeOne = new Date(dates[0]);
        //                    var timeTwo = new Date(dates[1]);
        //
        //                    if(UtilityService.DateToTimestamp(dates[0])<=UtilityService.DateToTimestamp(date)&&UtilityService.DateToTimestamp(date)<=UtilityService.DateToTimestamp(timeTwo)){
        //                        buffer.push(capVal);
        //                    }else{
        //
        //                    }
        //
        //                }else{
        //                    var today = new Date();
        //                    if(date.getTime()<=today.getTime()){
        //                        buffer.push(capVal);
        //                    }
        //
        //                }
        //            });
        //        }
        //        if(buffer.length>0){
        //            $scope.currentC = buffer[buffer.length-1];
        //
        //        }
        //    });
        //
        //}
        //capital.loadCapital();
        //
        //$scope.currentCapital([$scope.start_date,$scope.end_date]);
        //
        //$scope.cashAccount = function(){
        //    var dates = [$scope.start_date,$scope.end_date];
        //    $scope.$watch("cash",function(newOne,oldOne){
        //        if(angular.isDefined(newOne)){
        //            var cash = "";
        //                angular.forEach($scope.cash,function(cashVal,cashInd){console.log(cashVal);
        //                    var date = new Date(cashVal.created_at.replace(cashVal.created_at.substr(-9),""));
        //                    if(dates[0]!=""&&dates[1]!=""){
        //
        //                        var timeOne = new Date(dates[0]);
        //                        var timeTwo = new Date(dates[1]);
        //
        //                        if(timeOne.getTime()<=date.getTime()&&date.getTime()<=timeTwo.getTime()){
        //
        //                            if(cashVal.transaction_type=="Expenses"){
        //
        //                            }
        //
        //                            if(cashVal.transaction_type=="Liabilities"){
        //
        //                            }
        //
        //                        }
        //
        //                    }
        //
        //
        //
        //
        //                //var cash = $filter('filterDate')($scope.cash,date);
        //            });
        //
        //            if(cash){
        //                $scope.cash = cash;
        //                $scope.totalExpenses(cash);
        //            }else{
        //                if(dates[0]!=""||dates[1]!=""){
        //                    $scope.cash = demo;
        //                    $scope.totalExpenses(demo);
        //                }
        //
        //            }
        //
        //        }
        //    });
        //
        //}
        //$scope.cashAccount();
        //$scope.totalExpenses  = function(cash){
        //
        //    angular.forEach(cash,function(value,index){
        //
        //    });
        //}
        //

    }

})();
