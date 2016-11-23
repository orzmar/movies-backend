(function() {
	'use strict';

	var module = angular.module("app");

	module.component("add", {
		templateUrl: "views/add.component.html",
		controllerAs: "vm",
		controller: function($location, Movies){
			var vm = this, movie = {};
			vm.year = 1900;

			vm.add = function() {
				Movies
					.create({
						name: vm.name,
						year: vm.year,
						cast: vm.cast,
						director: vm.director
					})
					.$promise
					.then(function() {
						$location.path('List');
					});

			}
		}
	});
})();