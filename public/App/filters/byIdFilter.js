/**
 * Created by leo on 11/14/15.
 */
(function () {
    'use strict';

    angular
        .module('microfinanceApp')
.filter("filterById", function () {
    return function (input, id) {
        var newArry=null;
        if(angular.isDefined(input)){
            angular.forEach(input,function(value,index){
                if(value.id==id){
                    newArry = value;
                }
            });
        }

        return newArry;
    };
})
.filter("filterByType", function () {
    return function (input, type) {
        var newArry=[];
        if(angular.isDefined(input)){
            angular.forEach(input,function(value,index){
                //console.log(type);

                if(value.transaction_type==type){
                    newArry.push(value);
                }
            });
        }

        return newArry;
    };
})
.filter("filterDate", function () {
    return function (input, date_array) {
        var capital=null;
        angular.forEach(input,function(value,index){
            console.log(value);
            var date = new Date(value.created_at.replace(value.created_at.substr(-9),""));
            //var begin_date = new Date(start_date);
            if(date_array[0]==""&&date_array[1]==""){
                var date = new Date();
                var start_date = new Date(date.getFullYear(), date.getMonth(), 1);
                var end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                if(start_date<=date&&date<=end_date){
                    capital = value;
                }
            }else{

                var start_date = new Date(date_array[0]);
                var end_date = new Date(date_array[1]);

                if(start_date<=date&&date<=end_date){
                    capital = value;
                }
            }




        });
        return capital;
    };
})
.filter("latestReturn", function () {
    return function (input, id) {
        var objectArry=[];
        var datesArry=null;
        if(angular.isDefined(input)){
            angular.forEach(input,function(value,index){
                //if(value.date.length){
                //    datesArry.push(value.date);
                //    objectArry = value;
                //}
            });
        }

        return datesArry;
    };
})
.filter("filterApplicant", function () {
            return function (input,column_value) {
                var objectArry=[];
                if(angular.isDefined(input)){
                    angular.forEach(input,function(value,index){
                        if(value.applications.length>0){
                            var keepLoop = true;
                            angular.forEach(value.applications,function(innerValue,innerIndex){
                                if(innerValue.status==column_value&&keepLoop){
                                    objectArry.push(value);keepLoop=false;
                                }
                            });

                        }
                    });
                }

                return objectArry;
            };
        })
.filter("pendingApplication", function () {
            return function (input) {
                var objectArry=null;
                if(angular.isDefined(input)&&input!=null){
                    var done = false;
                    if(!done&&input.applications){
                        if(input.applications.length>0){
                            angular.forEach(input.applications,function(value,index){
                                if(value.status=="pending"){
                                    objectArry = index;done=true;
                                }
                            });
                        }else{
                            objectArry = "no application";
                        }

                    }
                }

                return objectArry;
            };
        })
.filter("filterApplicantWithLoan", function () {
            return function (input) {
                var objectArry=[];
                if(angular.isDefined(input)){
                    angular.forEach(input,function(value,index){
                        if(value.grantedloans.length>0){
                            var keepLoop = true;
                                    objectArry.push(value);keepLoop=false;

                        }
                    });
                }

                return objectArry;
            };
        })
.filter("filterApplicantFinishedPayingLoan", function () {
            return function (input) {
                var objectArry=[];
                if(angular.isDefined(input)){
                    angular.forEach(input,function(value,index){
                        //if(value.grantedloans.length>0){
                        //    var keepLoop = true;
                        //    objectArry.push(value);keepLoop=false;
                        //
                        //}
                    });
                }

                return objectArry;
            };
        })
.filter("filterApplicationStatus", function () {
            return function (input,status) {
                var objectArry=[];
                if(angular.isDefined(input)){
                    angular.forEach(input,function(value,index){
                        if(value.status==status){
                            objectArry.push(value);

                        }
                    });
                }

                return objectArry;
            };
        })
.filter("toHumaReadable", function () {
            return function (input) {
                var newDate = [];
                if(angular.isDefined(input)){
                    newDate = input.split(" ");
                }

                return newDate[0];
            };
        });

})();