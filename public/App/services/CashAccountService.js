

(function () {
    'use strict';

    angular
        .module('microfinanceApp')
        .factory('CashAccountService', CashAccountService);

    CashAccountService.$inject = ['$http'];
    function CashAccountService($http) {
        var cashAccount = {};
        cashAccount.totalDebitSide = 0;
        cashAccount.totalCreditSide = 0;

        cashAccount.sumDebitSide = function(debits){
            var initialTotal = 0;
            angular.forEach(debits,function(value,index){
                initialTotal= Number(initialTotal) + Number(value.amount);
            });
            cashAccount.totalDebitSide = initialTotal;
            console.log(cashAccount.totalDebitSide);
            return cashAccount.totalDebitSide;
        }

        cashAccount.sumCreditSide = function(expenses){
            var initialTotal = 0;
            angular.forEach(expenses,function(value,index){
                initialTotal= Number(initialTotal) + Number(value.value);
            });
            cashAccount.totalCreditSide = initialTotal;
            return cashAccount.totalCreditSide;
        }
        return cashAccount;
    }
})();
