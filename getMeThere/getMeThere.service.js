var getMeThereService = function(serRestApi) {
    var getMeThereServiceRef = this;
    var constants = {
        apiKey: 'AIzaSyBzFYwM1JO2nq2QmRsU6T67qK1yVBlS99s',
        radius: 3000
    };

    /*getAutoComplete 
   
    @param vdo value of visual data object

    fetches User location
    */

    this.getLocation = function(vdo) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            vdo.location = pos.coords.latitude + ',' + pos.coords.longitude;
        });
    };

    /*getAutoComplete 
    @param viewValue value from eneterd input
    @param vdo value of visual data object

    fetches autoComplete from the service
    */

    this.getAutoComplete = function(vdo) {
        var queryParams = {
            input: vdo.input,
            key: constants.apiKey,
            location: vdo.location,
            radius: constants.radius
        };
        return serRestApi.getApi('maps/api/place/queryautocomplete/json', queryParams).then(function(response) {
            return response.data.predictions;
        });
    };

    /*getAutoComplete 
    @param viewValue value from eneterd input
    @param vdo value of visual data object

    fetches autoComplete from the service
    */

    this.getPlaceData = function(vdo) {
        var queryParams = {
            query: vdo.query,
            key: constants.apiKey,
            location: vdo.location,
            radius: constants.radius,
            type: vdo.type || ''
        };
        return serRestApi.getApi('maps/api/place/textsearch/json', queryParams).then(function(response) {
            vdo.places = response.data.results ? response.data.results : [];
            vdo.searched = true;
            return response;
        });
    }

}




angular.module('getMeThere').service('getMeThereService', ['serRestApi', getMeThereService])