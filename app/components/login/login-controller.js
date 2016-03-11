(function() {
    'use strict';
    angular.module('myApp')

    /**
     * @ngdoc controller
     * @description LoginController
     */
    .controller('LoginController', ['AuthService', '$location',
        function(AuthService, $location) {
            var lc = this;
            lc.user = {};

            lc.doLogin = function(usr) {
                if (lc.loginForm.$invalid) {
                    lc.loginForm.email.$setDirty();
                    lc.loginForm.password.$setDirty();
                    return;
                }

                AuthService.login(usr).success(function(usrData) {
                    lc.user = {};
                    lc.loginForm.$setPristine();
                    $location.path('/dashboard');
                });
            };
        }
    ]);
})();
