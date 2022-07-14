(function(){
    'use strict';   
    angular.module('App', [])
    .controller("Controller", Controller);
    Controller.$inject = ['$scope']

    function Controller($scope){
        $scope.name = "Altamash";
    }
})();