'use strict';

angular.module('ggcApp')
  .service('ggcMapper', function ( $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.grid = {
      points: [], hexes: [], hexRadius: 0
    }

    var grid = this.grid;

    this.buildHexes = function(columns, rows, width, height){
      var dfd = $q.defer();

      grid.hexRadius = d3.min(
        [width/((columns + 0.5) * Math.sqrt(3)),
          height/((rows + 1/3) * 1.5)]
      );

      this.hexBin = d3.hexbin()
        .radius(grid.hexRadius);

      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          var pt = [grid.hexRadius * j * 1.75, grid.hexRadius * i * 1.5];
          grid.points.push(pt);
        }//for j
      }//for i
      grid.hexes = this.hexBin(grid.points);
      dfd.resolve(grid);
      return dfd.promise;
    }
  });
