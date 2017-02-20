(function () {
    'use strict';
    angular
        .module("iclartWeb")
        .component("clientFormComponent", {
            templateUrl: "./wwwroot/src/clientManagement/clientForm/clientForm.component.html",
            controller: ControllerController,
            controllerAs: "vm",
            bindings: {
                clientId: '<?'
            }
        });

    ControllerController.$inject = [];

    function ControllerController() {
        var vm = this;

        vm.$onInit = function () {
            
        }
    };
})();