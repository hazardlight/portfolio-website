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
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['categoryItems', 'PortfolioService'];
function CategoryItemsController(categoryItems, PortfolioService) {
  var $ctrl = this;
  $ctrl.categoryItems = categoryItems;

  // console.log($ctrl.categoryItems[1].images[1]);

// this controller serves category-items.html and helpbot.html with categoryItems
}

})();
