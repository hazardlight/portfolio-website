(function(){
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['homeCategories'];
function HomeController(homeCategories){
  var vm = this;
  vm.homeCategories = homeCategories; //holds the array of categories from the json file.
}
})();
