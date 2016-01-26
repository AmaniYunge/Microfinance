/**
 * Created by leo on 11/25/15.
 */

(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('UtilityService', UtilityService);

    UtilityService.$inject = ['$http'];
    function UtilityService($http) {
        var service = {};
        service.DateReformatt = DateReformatt;
        service.DateToTimestamp = DateToTimestamp;
        service.getApplicantName = getApplicantName;
        service.printPdf = printPdf;
        return service;
        function printPdf(content){
            content = prepareContentStyles(content);
            return $http.get('public/index.php/homeprint?contents='+content).then(handleSuccess, handleError('Error creating user'));

        }

        function DateReformatt(date){
            return date.replace(date.substr(-9),"");
        }

        function DateToTimestamp(date){
            var newdate = new Date(date);
            return newdate.getTime();
        }

        function getApplicantName(applicant_id,applicants){
                var applicant = "";
                angular.forEach(applicants,function(value,index){
                    if(value.id==applicant_id){
                        applicant = value.first_name+" "+value.last_name;
                    }
                });
                return applicant;

        }


        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }


        function prepareContentStyles(content){

            var container = '<!DOCTYPE html><html ng-app="microfinanceApp">';
                container += '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>';
                container += '<title>Microfinance</title>';
                container += '<meta name="keywords" content="Small Business Microfinance App" />';
                container += '<meta name="description" content="Small Business Microfinance App">';
                container += '<meta name="author" content="Leonard Mpannde">';
                container += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
                container += '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,700">';
                container += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
                container += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">';
                container += '</head><body style="background-color:red;">';
                container += content;
                container += '</body></table>';

            return container;

        }
    }
})();
