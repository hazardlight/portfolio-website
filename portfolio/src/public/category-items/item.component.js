(function () {
"use strict";

angular.module('public')
.component('categoryItem', { //itemFromCateory
  templateUrl: 'src/public/category-items/item.component.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  }
});
})();
