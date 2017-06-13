var getMeThereController = function($scope, getMeThereService) {

     $scope.vdo = {};

    var init = function() {
         $scope.vdo = {
            input: "",
            types: "",
            query: "",
            location: "",
            places: [],
            searched:false
        };
        getMeThereService.getLocation($scope.vdo);
    };

    $scope.getAutoComplete = function(viewValue, vdo) {
        vdo.input = viewValue;
        return getMeThereService.getAutoComplete(vdo);
    };

    $scope.getPlaceData = function(vdo) {
        getMeThereService.getPlaceData(vdo);
    };

    $scope.selectedValue = function(vdo) {
        getMeThereService.getPlaceData(vdo);
    };

    $scope.reset = function(){
        init();
    }

    init();
};



angular.module('getMeThere').controller('getMeThereController', ['$scope', 'getMeThereService', getMeThereController]);
