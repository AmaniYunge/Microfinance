/**
 * Created by leo on 11/14/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('liabilityController',liabilityController);

    liabilityController.$inject = ['$scope','$cookies','$timeout','$routeParams','$window','$filter','AuthenticationService','LiabilityService','DTOptionsBuilder'];

    function liabilityController($scope,$cookies,$timeout,$routeParams,$window,$filter,AuthenticationService,LiabilityService,DTOptionsBuilder) {


        var liabilityC = this;
        /**
         * Applicant datatables
         * */
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDisplayLength(10)
            .withOption('bLengthChange', true);


        liabilityC.loadLiabilities = function(){
            LiabilityService.GetAll().then(function(data){
                $scope.liabilities = data;
            },function(){

            });
        }
        liabilityC.loadLiabilities();


        liabilityC.addLiab = function(){
            $scope.edit_liabilities = false;
            $scope.add_liabilities = true;
        }
        liabilityC.saveLiabilities = function(Liabilities){
            console.log(Liabilities);


            $scope.success = false;
            $scope.failure = false;
            if(Liabilities){
                $scope.current = Liabilities;
                LiabilityService.Create(Liabilities).then(function(respense){
                    if(respense=="success"){
                        $scope.laibilityOb = null;
                        $scope.success = true;
                        $scope.failure = false;
                        liabilityC.loadLiabilities();
                        $timeout(function () {
                            $scope.laibilityOb = null;
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

        $scope.edit_liabilities = false;
        $scope.add_liabilities = true;
        liabilityC.editLiabilities = function(id){
            $scope.edit_liabilities = true;
            $scope.add_liabilities = false;
            $scope.liability_to_edit = $filter('filterById')($scope.liabilities,id);
            console.log(id);
        }
        liabilityC.updateLiabilities = function(Liabilities){

            LiabilityService.Update(Liabilities).then(function(response){
                if(response=="success"){
                    liabilityC.loadLiabilities();
                    $scope.edit_liabilities = false;
                    $scope.add_liabilities = true
                }
            },function(){

            });
        }
        liabilityC.deleteLiabilities = function(id){
            LiabilityService.Delete(id).then(function(response){
                if(response=="success"){
                    liabilityC.loadLiabilities();
                    $scope.edit_liabilities = false;
                    $scope.add_liabilities = true
                }
            },function(){

            });

        }

    }

})();
