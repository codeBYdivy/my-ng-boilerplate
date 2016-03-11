(function() {
    'use strict';

    angular.module('myApp')

    /**
     * @ngdoc config
     * @description Routes for login
     */
    .config(['$stateProvider', '$urlRouterProvider', 'APP_CONSTANTS',
        function($stateProvider, $urlRouterProvider, APP_CONSTANTS) {

            $urlRouterProvider.otherwise('/login');

            var tplUrl = APP_CONSTANTS.templateUrl;

            $stateProvider
            .state('login', {
                url: '/login',
                controller: 'LoginController',
                controllerAs: 'lc',
                templateUrl: tplUrl.login_template
            });
        }
    ]);

})();
