(function () {
    'use strict';

    angular
        .module('iclartWeb')
        .service('clientListService', Service);

    Service.$inject = ['$q', '$http'];
    function Service($q, $http) {
        var vm = this;

        vm.getClientList = _getClientList;

        function _getClientList() {
            var deferred = $q.defer();
            $http.get("/Client/GetClientList")
                .then(function (response) {
                    deferred.resolve(response.data);
                });
            return deferred.promise;
        }
    }
})();