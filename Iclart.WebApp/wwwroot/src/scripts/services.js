!function(){"use strict";function a(a,b){function c(){var c=a.defer();return b.get("/Client/GetClientList").then(function(a){c.resolve(a.data)}),c.promise}var d=this;d.getClientList=c}angular.module("iclartWeb").service("clientListService",a),a.$inject=["$q","$http"]}();