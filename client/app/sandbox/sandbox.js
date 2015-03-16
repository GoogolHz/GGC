'use strict';

angular.module('ggcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sandbox', {
        url: '/sandbox',
        templateUrl: 'app/sandbox/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .state('sandbox.grid', {
        url: '/grid',
        templateUrl: 'app/sandbox/grid.html',
        controller: 'GridCtrl'
      });
  });