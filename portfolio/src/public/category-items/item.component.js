(function () {
"use strict";

angular.module('public')
.component('categoryItem', { //itemFromCateory
  templateUrl: 'src/public/category-items/item.component.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  },
  controller: ItemComponentController,
  controllerAs: 'vm'
});
ItemComponentController.$inject = [];
function ItemComponentController() {
  var vm = this;
  // vm.cardNgClass = ''
  vm.titleStyle = '';

  vm.mouseEnter = function () {
    vm.titleStyle = "title-style";
    // vm.cardNgClass = 'card-ng-class';
  }
  vm.mouseLeave = function () {
    vm.titleStyle = '';
    // vm.cardNgClass = '';
  }
}
})();
