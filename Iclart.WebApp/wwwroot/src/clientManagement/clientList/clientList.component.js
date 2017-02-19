(function () {
    'use strict';
    angular
        .module("iclartWeb")
        .component("clientListComponent", {
            templateUrl: "./wwwroot/src/clientManagement/clientList/clientList.component.html",
            controller: ControllerController,
            controllerAs: "vm",
            bindings: {

            }
        });

    ControllerController.$inject = ["clientListService"];

    function ControllerController(clientListService) {
        var vm = this;

        vm.$onInit = function () {
            clientListService.getClientList()
                .then(function (response) {
                    vm.clients = response;
                });
        }
    };
})();