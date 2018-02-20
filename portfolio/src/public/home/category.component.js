(function () {
"use strict";

angular.module('public')
.component('categoryPick', {
  templateUrl: 'src/public/home/category.component.html',
  bindings: {
    category: '<'
  }
});
})();
