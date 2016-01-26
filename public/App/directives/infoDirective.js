/**
 * Created by leo on 11/14/15.
 */
(function () {
    'use strict';

    angular
        .module('microfinanceApp')
    .directive("info", function (ApplicantService,LoanReturnService) {
        return {
            link: function (scope, element, attrs) {
                    scope.div_class="col-md-6";
                    scope.no_application = false;
                    scope.pending = false;
                    scope.real_status = "";
                    scope.$watch('applicant',function(newValue,oldOne){
                        scope.applicant = newValue;
                        if(newValue!=null&&scope.applicant.applications.length>0){
                            scope.real_status = newValue.applications[0].status;
                            if(newValue.applications[0].status=="pending"){
                                scope.div_class="col-md-12";
                                scope.pending = true;
                            }else{
                                scope.div_class="col-md-6";
                                scope.pending = false;
                            }
                        }else{
                            scope.div_class="col-md-6";
                            scope.no_application = true;
                            scope.pending = false;
                        }


                        /// LOAN RETURNING PROCESS

                        scope.totalAmountExpectedToReturn = 0;
                        scope.amountExpectedToReturnToday = 0;
                        scope.amountLeftToFinish = 0;
                        scope.amountReturnedAlready = 0;


                        if(scope.applicant){
                            scope.currentApplication = scope.applicant.applications[0];

                            scope.grantedLoan = ApplicantService.GetGrantedLoan(scope.applicant.grantedloans,scope.currentApplication.id);
                            var amount_to_returns = JSON.parse(scope.grantedLoan.amount_to_return);
                            scope.totalAmountExpectedToReturn = amount_to_returns.reduce(function(a, b){return a+b;})
                            if(ApplicantService.CheckLoanReturns(scope.applicant)){
                                 var lastReturn = ApplicantService.getLastReturn(scope.applicant);console.log(lastReturn);
                                scope.amountExpectedToReturnToday = (amount_to_returns[Number(lastReturn.interval_count)+1])?amount_to_returns[Number(lastReturn.interval_count)+1]:0;
                                scope.amountReturnedAlready = ApplicantService.GetAmountReturnedArleady(scope.applicant);
                                scope.amountLeftToFinish = scope.totalAmountExpectedToReturn - scope.amountReturnedAlready;

                                scope.returnLoan = function(loanReturn){
                                    var loan_duration = scope.grantedLoan.loan_duration;
                                    var loan_routine = Number(loan_duration)/Number(scope.grantedLoan.return_interval);
                                    var amount_per_interval = Math.ceil(scope.grantedLoan.loaned_amount/loan_routine);


                                    loanReturn.application_id = scope.currentApplication.id;
                                    loanReturn.applicant_id = scope.applicant.id;
                                    loanReturn.granted_id = scope.grantedLoan.id;
                                    loanReturn.received_profit = loanReturn.amount - amount_per_interval;
                                    if(Number(lastReturn.interval_count)<amount_to_returns.length-2){
                                        loanReturn.next_amount_to_return = amount_to_returns[Number(lastReturn.interval_count)+2];
                                        console.log(lastReturn.interval_count);
                                        console.log(amount_to_returns.length);
                                    }else{
                                        loanReturn.next_amount_to_return = 0;
                                    }
                                    //loanReturn.next_amount_to_return = amount_to_returns[lastReturn.interval_count];
                                    loanReturn.interval_count = Number(lastReturn.interval_count)+1;
                                    loanReturn.created_by = 1;
                                    saveReturn(loanReturn);
                                }
                            }else{

                                scope.amountExpectedToReturnToday = amount_to_returns[0];
                                scope.returnLoan = function(loanReturn){
                                    var loan_duration = scope.grantedLoan.loan_duration;
                                    var loan_routine = Number(loan_duration)/Number(scope.grantedLoan.return_interval);
                                    var amount_per_interval = Math.ceil(scope.grantedLoan.loaned_amount/loan_routine);


                                    loanReturn.application_id = scope.currentApplication.id;
                                    loanReturn.applicant_id = scope.applicant.id;
                                    loanReturn.granted_id = scope.grantedLoan.id;
                                    loanReturn.received_profit = loanReturn.amount - amount_per_interval;
                                    loanReturn.next_amount_to_return = amount_to_returns[1];
                                    loanReturn.interval_count = 0;
                                    loanReturn.created_by = 1;
                                    saveReturn(loanReturn);
                                }
                            }


                       var saveReturn = function(loanReturn){
                           LoanReturnService.Create(loanReturn).then(function(response){
                               scope.$apply();
                           },function(response){
                               console.log(response);
                           });
                        }

                        }

                    });

            },
            restrict: "E",
            scope: {
                applicant:'='
            },
            templateUrl:"public/App/directives/templates/info.html"
        }
    })
        .directive("datepicker", function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, elem, attrs, ngModelCtrl) {
                    var updateModel = function (dateText) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(dateText);
                        });
                    };
                    var options = {
                        dateFormat: "yy-mm-dd",
                        onSelect: function (dateText) {
                            updateModel(dateText);
                        }
                    };
                    elem.datepicker(options);
                }
            }
        }).directive('myCurrentTime', ['$interval', 'dateFilter',
            function($interval, dateFilter) {
                // return the directive link function. (compile function not needed)
                return function(scope, element, attrs) {
                    var format,  // date format
                        stopTime; // so that we can cancel the time updates

                    // used to update the UI
                    function updateTime() {
                        element.text(dateFilter(new Date(), format));
                    }

                    // watch the expression, and update the UI on change.
                    scope.$watch(attrs.myCurrentTime, function(value) {
                        format = value;
                        updateTime();
                    });

                    stopTime = $interval(updateTime, 1000);

                    // listen on DOM destroy (removal) event, and cancel the next UI update
                    // to prevent updating time after the DOM element was removed.
                    element.on('$destroy', function() {
                        $interval.cancel(stopTime);
                    });
                }
            }]);
})();