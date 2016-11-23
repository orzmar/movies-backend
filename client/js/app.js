(function() {
  'use strict';

  var module = angular.module("app", ["ngComponentRouter", "lbServices"]);

  module.value("$routerRootComponent", "app");

  module.component("app", {
    templateUrl: "views/app.component.html",
    $routeConfig: [{
      path: "/list",
      component: "list",
      name: "List"
    }, {
      path: "/about",
      component: "about",
      name: "About"
    }, {
      path: "/details/:id/",
      component: "details",
      name: "Details"
    }, {
      path: "/add",
      component: "add",
      name: "Add"
    }, {
      path: "/**",
      redirectTo: ["List"]
    }]
  });

  module.component("about", {
    template: "This is the About page"
  });
})();