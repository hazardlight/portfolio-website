(function () {
"use strict";

angular.module('public')
.component('categoryPick', {
  templateUrl: 'src/public/category/category.html',
  bindings: {
    category: '<'
  }
});
})();
