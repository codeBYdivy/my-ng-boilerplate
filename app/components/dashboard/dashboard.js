(function() {
    'use strict';

    angular.module('myApp')

    /**
     * @ngdoc config
     * @description Routes for dashboard
     */
    .config(['$stateProvider', '$urlRouterProvider', 'APP_CONSTANTS',
        function($stateProvider, $urlRouterProvider, APP_CONSTANTS) {

            var tplUrl = APP_CONSTANTS.templateUrl;

            $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: tplUrl.dashboard_template
            });
        }
    ]);

})();
