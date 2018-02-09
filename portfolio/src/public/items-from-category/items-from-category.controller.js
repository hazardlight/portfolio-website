// (function () {
// "use strict";
//
// angular.module('public')
// .controller('ItemsFromCategoryController', ItemsFromCategoryController);
//
// ItemsFromCategoryController.$inject = ['categoryItems', '$stateParams'];
// function ItemsFromCategoryController(categoryItems, $stateParams) {
//   var $ctrl = this;
//   var category = $stateParams.category; //ths should be the category short_name
//   $ctrl.items = categoryItems; //all the items in items.json
//   $ctrl.categoryItems = []; //will hold filtered items based on category prop in their json
//
//   if(category){
//     for(var i=0; i<$ctrl.items.length; i++){ //filter items based off the category
//       if($ctrl.items[i].category == category){ //or === ?????
//         $ctrl.categoryItems.push($ctrl.items[i]);
//       }
//     }
//   }
// }
//
// })();


(function () {
"use strict";

angular.module('public')
.controller('ItemsFromCategoryController', ItemsFromCategoryController);

ItemsFromCategoryController.$inject = ['categoryItems'];
function ItemsFromCategoryController(categoryItems) {
  var $ctrl = this;
  $ctrl.categoryItems = categoryItems;
}

})();
