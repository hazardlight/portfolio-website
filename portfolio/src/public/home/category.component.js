(function () {
"use strict";

angular.module('public')
.component('categoryPick', {
  templateUrl: 'src/public/home/category.component.html',
  bindings: {
    category: '<'
  },
  controller: CategoryComponenetController
});

CategoryComponenetController.$inject = [];
function CategoryComponenetController() {
  var $ctrl = this;

  $ctrl.elementIsActive = false;

  $ctrl.slideUpFunc =function () {
    console.log("mouse leave");
    $ctrl.elementIsActive = false;
  }
  $ctrl.slideDownFunc =function () {
    console.log("mouse enter");
    $ctrl.elementIsActive = true;
  }

  // $ctrl.slideFunc = function () {
  //   var description = $element.find('div.category-description');
  //   description.slideDown(500);
  // }
}
})();
