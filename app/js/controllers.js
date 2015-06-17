'use strict';

/* Controllers */

var appcenterApp = angular.module('appcenterApp', ['angular-loading-bar', 'ngAnimate']);

appcenterApp.controller('AppcenterCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/queryApplicationStatus.json').success(function(data) {
        $scope.app = data;
    });

    $scope.headerTemplateUrl = 'module/header.html';
    $scope.appcenterTemplateUrl = 'module/app-center.html';
    $scope.footerTemplateUrl = 'module/footer.html';
    $scope.orderProp = 'index';
}]);