/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('expensesController',expensesController);

    expensesController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','ExpensesService','DTOptionsBuilder'];

    function expensesController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,ExpensesService,DTOptionsBuilder) {


        var expensesC = this;
        /**
         * Applicant datatables
         * */
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDisplayLength(10)
            .withOption('bLengthChange', true);


        expensesC.loadExpenses = function(){
            ExpensesService.GetAll().then(function(data){
                $scope.expenses = data;
            },function(){

            });
        }
        expensesC.loadExpenses();



        expensesC.saveExpenses = function(expenses){
            console.log(expenses);


            $scope.success = false;
            $scope.failure = false;
            if(expenses){
                $scope.current = expenses;
                ExpensesService.Create(expenses).then(function(respense){
                    if(respense=="success"){
                        $scope.expenseOb = null;
                        $scope.success = true;
                        $scope.failure = false;
                        expensesC.loadExpenses();
                        $timeout(function () {
                            $scope.expenseOb = null;
                            $scope.success = false;
                            $scope.failure = false;
                        }, 1000);
                    }
                },function(respense){
                    $scope.failure = true;
                    $scope.success = false;
                    $timeout(function () {
                        $scope.success = false;
                        $scope.failure = false;
                    }, 1000);
                });
            }

        }

        $scope.edit_expenses = false;
        $scope.add_expenses = true;
        expensesC.editExpenses = function(id){
            $scope.edit_expenses = true;
            $scope.add_expenses = false;
            $scope.expense_to_edit = $filter('filterById')($scope.expenses,id);
            console.log(id);
        }
        expensesC.updateExpenses = function(expenses){

            ExpensesService.Update(expenses).then(function(response){
                if(response=="success"){
                    expensesC.loadExpenses();
                    $scope.edit_expenses = false;
                    $scope.add_expenses = true
                }
            },function(){

            });
        }
        expensesC.deleteExpenses = function(id){
            ExpensesService.Delete(id).then(function(response){
                if(response=="success"){
                    expensesC.loadExpenses();
                    $scope.edit_expenses = false;
                    $scope.add_expenses = true
                }
            },function(){

            });

        }

    }

})();
