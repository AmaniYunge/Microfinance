/**
 * Created by leo on 11/28/15.
 */
(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .directive("debtorAccount", function (UtilityService) {
            return {
                link: function (scope, element, attrs) {
                scope.$watch("debtors",function(newOne,oldOne){
                    console.log(newOne);
                });
                    scope.getApplicantName = function(applicant_id,applicants){
                        return UtilityService.getApplicantName(applicant_id,applicants);
                    }

                },
                restrict: "E",
                scope: {
                    applicants:'=',
                    debtors:'='
                },
                templateUrl:"public/App/directives/templates/debtors.html"
            }
        });
})()