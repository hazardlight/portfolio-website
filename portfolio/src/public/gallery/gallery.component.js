(function () {
"use strict";

angular.module('public')
.component('singleItem', { //itemFromCateory
  templateUrl: 'src/public/gallery/gallery.component.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  }
});
})();
