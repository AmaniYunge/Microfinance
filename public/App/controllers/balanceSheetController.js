/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('balanceSheetController',balanceSheetController);

    balanceSheetController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','AssetService','LiabilityService','ExpensesService','FinanceService','CompanyService','DTOptionsBuilder'];

    function balanceSheetController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,AssetService,LiabilityService,ExpensesService,FinanceService,CompanyService,DTOptionsBuilder) {
            var date = new Date();
            $scope.todays_date = (date.toDateString());
            $scope.balance_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            $scope.currentAssets = [];
            $scope.fixedAssets = [];
            $scope.totalFixedAssets = 0;
            $scope.totalCurrentAssets = 0;


            $scope.total_assets = 0;
            $scope.total_liabilities = 0;
            $scope.financies = null;
            $scope.expenses = [];
            $scope.company = null;
            $scope.liabilities = [];

        AssetService.GetAll().then(function(data){
            $scope.fixedAssets = AssetService.FixedAsset(data);
            $scope.totalFixedAssets = AssetService.TotalFixedAsset(data);
            $scope.currentAssets = AssetService.CurrentAsset(data);
            $scope.totalCurrentAssets = AssetService.TotalCurrentAsset(data);
        },function(response){
        });

        FinanceService.GetAll().then(function(data){
            $scope.finances = data;

            angular.forEach($scope.finances,function(value,index){
                if(value.transaction_type=="Liabilities"){
                    $scope.liabilities.push(value);
                    $scope.total_liabilities = parseInt($scope.total_liabilities)+parseInt(value.amount);
                }

                if(value.transaction_type=="Expenses"){
                    //var dates = new Date(value.date);
                    //var datez = dates.getFullYear()+"-"+(dates.getMonth()+1)+"-"+dates.getDate();
                    //if(datez==$scope.balance_date){
                    //    $scope.assets.push(value);
                    ////}
                    //$scope.expenses.push(value);
                }
            });
        },function(response){

        });
        CompanyService.GetAll().then(function(data){
            $scope.company = data;
        },function(response){

        });

        $scope.$watch('balance_date',function(newValue,oldOne){
            console.log($scope.balance_date);

        });

        //LiabilityService.GetAll().then(function(data){
        //    $scope.liabilities = data;
        //},function(response){
        //
        //});

    }

})();
