(function(){
    'use strict';   
    angular.module('LunchCheck', [])
    .controller("LunchCheckController", Controller);
    Controller.$inject = ['$scope']

    function Controller($scope){
        $scope.message = "";
        $scope.input_list = "";
        $scope.checkIfTooMuch = function(){
            var AllItems = $scope.input_list.split(',');
            AllItems = AllItems.filter(function(i){ return i.trim() != ""})//Bonus 3    
           if(AllItems.length == 0){
                $scope.message = "Please enter data first"
                $scope.message_color = "color:black"//Bonus 1
                $scope.textbox_style = ""//Bonus 2
           }
            else if(AllItems.length > 3){
                $scope.message = "Too much!"
                $scope.message_color = "color:red"//Bonus 1
                $scope.textbox_style = "border-color: green;"//Bonus 2
            }
            else{
                $scope.message = "Enjoy!"
                $scope.message_color = "color:green"//Bonus 1
                $scope.textbox_style = "border-color: green;"//Bonus 2
            }
        }
    }
})();