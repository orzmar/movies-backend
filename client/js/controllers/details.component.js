(function(){
  'use strict';

  var module = angular.module("app");

  module.component("details", {
    templateUrl: "views/details.component.html",
    bindings: {
      $router : "<"
    },
    controllerAs: "vm",
    controller: function(Movies, $q){
      var vm = this;
      vm.$routerOnActivate = function(next){
        Movies
          .findById({ id: next.params.id })
          .$promise
          .then(function(movie){
            vm.movie = movie;
          });
       };
    }
  });
})();