// create our angular app and inject ui.bootstrap and ui-router
// =============================================================================
var getMeThere = angular.module('getMeThere', ['ui.router', 'ui.bootstrap']);

// configuring our routes
// =============================================================================
getMeThere.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // route to show our basic form (/form)
       $stateProvider.state('getMeThere', {
        url: '/getMeThere',
        templateUrl: 'getMeThere/getMeThere.html',
        controller: 'getMeThereController'
    })

    $urlRouterProvider.otherwise('/getMeThere');
});