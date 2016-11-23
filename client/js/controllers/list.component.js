(function() {
  'use strict';

  var module = angular.module("app");

  module.component("list", {
    templateUrl: "views/list.component.html",
    transclude: true,
    bindings: {
      $router : "<"
    },
    controllerAs: "vm",
    controller: function(Movies) {
      var vm = this;
      vm.movies = [];
      vm.$onInit = function() {
        Movies.find()
        .$promise
        .then(function(movies) {
          vm.movies = movies.slice();
        });
      };
    }
  });
})();