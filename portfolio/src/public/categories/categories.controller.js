(function(){
  "use strict";

angular.module('public')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['portfolioCategories'];
function CategoriesController(portfolioCategories){
  var $ctrl = this;
  $ctrl.portfolioCategories = portfolioCategories;
}
})();
