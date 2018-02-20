(function(){
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['homeCategories'];
function HomeController(homeCategories){
  var $ctrl = this;
  $ctrl.homeCategories = homeCategories; //holds the array of categories from the json file.
}
})();
