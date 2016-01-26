
/**
 * This is the  microfinance application dashboard controller
 * Created by leo on 11/10/15.
 */

(function() {
    'use strict';

    angular
        .module('microfinanceApp')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope','ApplicantService','FinanceService','ApplicationService','$interval'];

    function dashboardController($scope,ApplicantService,FinanceService,ApplicationService,$interval) {
        var date = new Date();
        $scope.currentYear  = date.getFullYear();

        $scope.totalApplicatnts = 0;
        $scope.grantedApplicatnts = 0;
        $scope.finisheddApplicatnts = 0;
        $scope.deniedddApplicatnts = 0;
        $scope.recent_transactions = null;
        $scope.recent_applications = null;
        $scope.days_span = 7;
        $scope.tab = 1;
        $scope.active_tab_1 = "active";
        $scope.active_tab_2 = "";

        $scope.changeClass = function(tab){
            if(tab==2){
                $scope.tab = 2;
                $scope.active_tab_1 = "";
                $scope.active_tab_2 = "active";
            }else{
                $scope.tab = 1;
                $scope.active_tab_1 = "active";
                $scope.active_tab_2 = "";
            }
        }

        // get all applicant this year

        ApplicantService.GetApplicantYearly($scope.currentYear).then(function(data){
            $scope.totalApplicatnts = getTotalApplicants(data);
            $scope.grantedApplicatnts = getGrantedApplicatnts(data);
            $scope.deniedddApplicatnts = getDeniedApplicatnts(data);
            var pieseries =  [{
                type: 'pie',
                colorByPoint: true,
                name:"Distribution",data:[{name:"Applied",y:$scope.totalApplicatnts},{name:"Granted",y:$scope.grantedApplicatnts},{name:"Finished",y:$scope.finisheddApplicatnts},{name:"denied",y:$scope.deniedddApplicatnts}]
            }]

            var lineseries = prepareLineSeries(data);
            var categories =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            $scope.maxStatistics = extractStatistics(lineseries,categories);
            //console.log(maxStatistics.appllied);
            //console.log(maxStatistics.granted);
            //console.log(maxStatistics.paid);
            //console.log(maxStatistics.denied);
            drawPie(pieseries);
            drawline(lineseries,categories);

        });
        pullRecentTransaction($scope.days_span);
        pullRecentApplication($scope.days_span);

        $interval(function(){
            pullRecentTransaction($scope.days_span);
            pullRecentApplication($scope.days_span);
        },5000);


        function pullRecentApplication(days_span){
            ApplicationService.GetRecentApplications(days_span).then(function(data){
                $scope.recent_applications = data;
            });
        }
        function pullRecentTransaction(days_span){
            FinanceService.RecentTransactions(days_span).then(function(data){
                $scope.recent_transactions = data;
            });
        }
        function extractStatistics(linearseries,categories){
            var objectStatistic = {
                appllied:Math.max.apply(Math,linearseries[0].data),
                granted:Math.max.apply(Math,linearseries[1].data),
                paid:Math.max.apply(Math,linearseries[2].data),
                denied:Math.max.apply(Math,linearseries[3].data),
                appliedMonth:categories[linearseries[0].data.indexOf(Math.max.apply(Math,linearseries[0].data))],
                grantedMonth:categories[linearseries[1].data.indexOf(Math.max.apply(Math,linearseries[1].data))],
                paidMonth:categories[linearseries[2].data.indexOf(Math.max.apply(Math,linearseries[2].data))],
                deniedMonth:categories[linearseries[3].data.indexOf(Math.max.apply(Math,linearseries[3].data))]
            };

            return objectStatistic;
        }

        function getTotalApplicants(data){
            return data.length;
        }

        function prepareLineSeries(data){
            var months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
            var series = [
                {
                    name: 'Applied',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                },{
                    name: 'Granted',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                },{
                    name: 'Paid',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                },{
                    name: 'Denied',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0]
                }
            ];
            angular.forEach(data,function(value,index){
                series[0].data[getMonth(value.created_at)-1]++;
                if(value.status=="granted"){
                    series[1].data[getMonth(value.created_at)-1]++;
                }
                if(value.status=="finished"){
                    series[2].data[getMonth(value.created_at)-1]++;
                }
                if(value.status=="denied"){
                    series[3].data[getMonth(value.created_at)-1]++;
                }
            });

            console.log(series);

            return series;
        }

        function getMonth(created_at){
            if(created_at){
                var array = created_at.split("-");

                return array[1];
            }
        }
        function getDeniedApplicatnts(data){
            var countDenied = 0;
            angular.forEach(data,function(value,index){
                if(value.status=="denied"){
                    countDenied++;
                }

            });
            return countDenied;
        }
        function getGrantedApplicatnts(data){
            var countGranted = 0;
            angular.forEach(data,function(value,index){
                if(value.status=="granted"){
                    countGranted++;
                }

            });
            return countGranted;
        }
        function drawPie(series){


        $scope.chartConfigPie = {

        options: {
            chart: {
                type: 'pie'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            },pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series:series,
        title: {
            text: ''
        },
        loading: false,
        xAxis: {
            currentMin: 0,
            currentMax: 20,
            title: {text: 'values'}
        },
        useHighStocks: false,
        size: {
            width: 400,
            height: 300
        },
        func: function (chart) {
        }
    };
        }
        function drawline(lineseries,categories){


        $scope.chartConfigLine = {
            title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories:categories
            },
            yAxis: {
                title: {
                    text: 'Number Of Applicants'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: lineseries
        };
        }

    }

})();
