(function(){
"use strict";

angular.module('public')
.controller('ItemPickController', ItemPickController);

ItemPickController.$inject = ['singleItem'];
function ItemPickController(singleItem){
  var $ctrl = this;
  $ctrl.singleItem = singleItem; //holds the array of categories from the json file.

  // $ctrl.slide = function (dir) {
  //   $('#galleryCarousel').carousel(dir);
  // };
}
})();
