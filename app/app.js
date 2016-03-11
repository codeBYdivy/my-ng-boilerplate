(function() {
    'use strict';
    angular.module('myApp', ['ngMessages', 'ui.router', 'ui.bootstrap'])


    /**
     * @ngdoc constant
     * @name API
     * @description AJAX API domain and routes 
     */
    .constant('API', {
        domain: 'http://localhost:3000',
        route: {
            login_url: '/login'
        }
    })

    /**
     * @ngdoc constant
     * @name APP_CONSTANTS
     * @description App based constants for partials, images and regex 
     */
    .constant('APP_CONSTANTS', {
        templateUrl: {
            header_template: 'components/header/header.html',
            login_template: 'components/login/login.html',
            dashboard_template: 'components/dashboard/dashboard.html'
        },
        imageUrl: {
            login_bg: 'images/login-bg.jpg'
        },
        appRegex: {
            pwd_regex: /^[a-zA-Z]\w{3,14}$/,
            mob_regex: /^(\+\91{1,2}[- ])\d{10}$/,
            zip_regex: /^\d{3}\s?\d{3}$/
        }
    })

    /**
     * @ngdoc factory
     * @name timestampMarker
     * @description interceptor to add a time-stamp for every request-response 
     */
    .factory('timestampMarker', [
        function() {
            var timestampMarker = {
                request: function(config) {
                    config.requestTimestamp = new Date().getTime();
                    return config;
                },
                response: function(response) {
                    response.config.responseTimestamp = new Date().getTime();
                    return response;
                }
            };
            return timestampMarker;
        }
    ])

    /**
     * @ngdoc config
     * @description configuring timestampMarker interceptor for $httpProvider
     */
    .config(['$httpProvider',
        function($httpProvider) {
            $httpProvider.interceptors.push('timestampMarker');
        }
    ])

    /**
     * @ngdoc run
     * @description place to have application level control
     */
    .run(['$rootScope', 'APP_CONSTANTS',
        function($rootScope, APP_CONSTANTS) {
            $rootScope.tplUrl = APP_CONSTANTS.templateUrl;
            $rootScope.appRegex = APP_CONSTANTS.appRegex;

            $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams) {

                    $rootScope.page = {
                        title: toState.name
                    };
                }
            );
        }
    ]);

})();
