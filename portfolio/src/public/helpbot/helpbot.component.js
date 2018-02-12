(function () {
"use strict";

angular.module('public')
.component('helpBot', { //itemFromCateory
  templateUrl: 'src/public/helpbot/helpbot.component.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  }
});
})();
