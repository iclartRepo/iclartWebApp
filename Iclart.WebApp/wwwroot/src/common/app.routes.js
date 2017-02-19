
(function () {
    'use strict';
    var myApp = angular.module("iclartWeb");

    myApp.config(function($stateProvider, $urlRouterProvider) 
    {
    
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<p>Hello World</p>'
            })
        .state('clientList', {
            url: '/clients',
            template: '<client-list-component></client-list-component>'
        })
    })
})();
