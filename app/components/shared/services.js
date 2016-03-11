(function() {
    'use strict';

    angular.module('myApp')

    /**
     * @ngdoc service
     * @description Authentication service
     */
    .service('AuthService', ['$http', 'API',
        function($http, API) {

            var loginFn = function(userObj) {
                return $http.post(API.domain + API.route.login_url, userObj);
            }; 

            var authService = {
                login : loginFn
            };

            return authService;
        }
    ]);

})();
