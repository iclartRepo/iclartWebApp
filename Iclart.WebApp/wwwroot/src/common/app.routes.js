
(function () {
    'use strict';
    var myApp = angular.module("iclartWeb");

    myApp.config(function($stateProvider, $urlRouterProvider) 
    {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>Hello World</p>'
            })
    })
})();
