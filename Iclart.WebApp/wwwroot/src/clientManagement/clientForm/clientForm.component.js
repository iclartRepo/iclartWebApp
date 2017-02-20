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

        vm.page = 1;

        vm.setPage = function (page) {
            vm.page = page;
        }
        vm.changePage = function (increment) {
            if (increment == -1) {
                if (vm.page != 1) {
                    vm.page -= 1;
                }
            }
            else {
                if (vm.page != 2) {
                    vm.page += 1;
                }
            }
        }
        vm.$onInit = function () {
            
        }
    };
})();