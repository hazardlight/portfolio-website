(function () {
"use strict";

angular.module('public')
.component('categoryItem', { //itemFromCateory
  templateUrl: 'src/public/item/item.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  }
});
})();
