(function(){
"use strict";

angular.module('public')
.controller('HomeCategoriesPickController', HomeCategoriesPickController);

HomeCategoriesPickController.$inject = ['homeCategories'];
function HomeCategoriesPickController(homeCategories){
  var $ctrl = this;
  $ctrl.homeCategories = homeCategories; //holds the array of categories from the json file.
}
})();
