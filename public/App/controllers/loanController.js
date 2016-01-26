
/**
 * Created by leo on 11/11/15.
 */
(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('loanController',loanController);

    loanController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','ApplicantService','ApplicationService','LoanService','DTOptionsBuilder'];

    function loanController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,ApplicantService,ApplicationService,LoanService,DTOptionsBuilder) {
        $scope.loans = null;
        $scope.applicants = null;
        var loan = this;
        /**
         * Applicant datatables
         * */
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDisplayLength(10)
            .withOption('bLengthChange', true);
        loan.getLoans = function(){
            LoanService.GetAll().then(function(data){
                $scope.loans  = data;
            });
        }


        loan.getLoans();


        loan.saveLoanType = function(loan){

            $scope.success = false;
            $scope.failure = false;
            if(loan){
                $scope.current = loan;
                LoanService.Create(loan).then(function(respense){
                    if(respense=="success"){
                        $scope.loan = null;
                        $scope.success = true;
                        $scope.failure = false;
                        loan.getLoans();
                        $timeout(function () {
                            $scope.loan = null;
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
        loan.editLoanType = function(loanInfo){
            if(loanInfo){
                LoanService.Update(loanInfo).then(function(resposnse){
                    loan.getLoans();
                },function(resposnse){

                });
            }
            console.log(loanInfo);
        }
        loan.deleteLoanType = function(id){
            if(id){
                LoanService.Delete(id).then(function(resposnse){
                    loan.getLoans();
                },function(resposnse){

                });
            }
        }


        $scope.loanInfo = null;
        loan.info = function(){
            if($routeParams.id){
                $scope.$watch('loans',function(newValue,oldOne){
                    $scope.loanInfo = $filter('filterById')($scope.loans,$routeParams.id);

                });

            }
        }

        loan.info();




    }

})();
