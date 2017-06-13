var getMeThereController = function($scope, getMeThereService) {

    $scope.vdo = {};

    /*init 
      initiates the  basic values
    */
    var init = function() {
        $scope.vdo = {
            input: "",
            types: "",
            query: "",
            location: "",
            places: [],
            searched: false
        };
        getMeThereService.getLocation($scope.vdo);
    };

    /*getAutoComplete 
    @param viewValue value from eneterd input
    @param vdo value of visual data object

    fetches autoComplete from the service
    */
    $scope.getAutoComplete = function(viewValue, vdo) {
        vdo.input = viewValue;
        return getMeThereService.getAutoComplete(vdo);
    };

    /*getPlaceData 
    @param vdo value of visual data object

    fetches plcaes data from the service
    */
    $scope.getPlaceData = function(vdo) {
        getMeThereService.getPlaceData(vdo);
    };

    /*selectedValue ()
    @param vdo value of visual data object
    fetches plcaes data from the service triggered when a value from autocomplete is selected
    */
    $scope.selectedValue = function(vdo) {
        getMeThereService.getPlaceData(vdo);
    };

    /*reset() 
    @param vdo value of visual data object
    resets entire form values
    */
    $scope.reset = function() {
        init();
    }

    init();
};



angular.module('getMeThere').controller('getMeThereController', ['$scope', 'getMeThereService', getMeThereController]);
