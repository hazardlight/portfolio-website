(function () {
"use strict";

angular.module('public')
.component('categoryUnit', {
  templateUrl: 'src/public/categories/category.html',
  bindings: {
    category: '<'
  }
});
})();
