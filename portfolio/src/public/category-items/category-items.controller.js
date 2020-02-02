(function () {
"use strict";

angular.module('public')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['categoryItems', 'PortfolioService'];
function CategoryItemsController(categoryItems, PortfolioService) {
  var vm = this;
  vm.categoryItems = categoryItems;

  // console.log($ctrl.categoryItems[1].images[1]);

// this controller serves category-items.html and helpbot.html with categoryItems
}

})();
