'use strict';

angular.module('ggcApp')
  .controller('GameCtrl', function ($scope, $http, ggcUtil, $rootScope, dealer, hotkeys) {
    $scope.preview = {};
    $scope.preview.hideNavbar = false;

    $scope.preview.previewStates = ["cards", "icons", "test", "game","screen"];

    $scope.preview.currentCard = 0;


    $scope.trust = ggcUtil.trustSVG;



    $scope.dealer = dealer;
    $scope.game = dealer.game;
    ///dealer.hands contains the current "card" views for each player, as well as the main player
    $scope.hands = dealer.hands;

    $scope.voteCheck = new function(player) {
      console.log(player);
      return false;
    }

    bindKeys();
    function bindKeys(){

      hotkeys.bindTo($scope)
        .add({
          combo: '1',
          description: 'Environment Select 1',
          callback: function(){
            dealer.playerChoice("environment",0);
          }
        })
        .add({
          combo: '2',
          description: 'Environment Select 2',
          callback: function(){
            dealer.playerChoice("environment",1);

          }
        })

        .add({
          combo: '3',
          description: 'Economy Select 1',
          callback: function(){
            dealer.playerChoice("economy",0);
          }
        })
        .add({
          combo: '4',
          description: 'Environment Select 2',
          callback: function(){
            dealer.playerChoice("economy",1);
          }
        })

        .add({
          combo: '5',
          description: 'Energy Select 1',
          callback: function(){
            dealer.playerChoice("energy",0);
          }
        })
        .add({
          combo: '6',
          description: 'Energy Select 2',
          callback: function(){
            dealer.playerChoice("energy",1);
          }
        })
    }
  });
