(function () {
"use strict";

angular.module('public')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['portfolioCategoryItems'];
function CategoryItemsController(portfolioCategoryItems) {
  var $ctrl = this;
  $ctrl.portfolioCategoryItems = portfolioCategoryItems;
}

})();
