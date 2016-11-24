(function() {
	'use strict';

	var module = angular.module("app");

	module.component("listItem", {
		templateUrl: "views/list-item.component.html",
		transclude: true,
		require: {
			parent: "^list"
		},
		bindings: {
			movie: "<",
			editForm: "<"
		},
		controllerAs: "vm",
		controller: function($window, Movies){
			var vm = this;
			vm.disabled = true;
			vm.editMode = false;

			vm.viewItem = function(id){
				vm.parent.$router.navigate(["Details", {id:id}]);
			}

			vm.editItem = function(id) {
				if (vm.movie.id == id)
				{
					vm.disabled = false;
					vm.editMode = true;
				}
			}

			vm.save = function() {
				vm.disabled = true;
				vm.editMode = false;
				vm.movie
					.$save()
					.then(function(movie) {
						$window.location.reload();
					});
			}

			vm.delete = function(id) {
				Movies
					.deleteById({ id: id })
					.$promise
					.then(function() {
						$window.location.reload();
					});
			}
		}
	});
})();