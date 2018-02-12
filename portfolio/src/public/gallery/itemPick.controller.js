(function(){
"use strict";

angular.module('public')
.controller('SingleItemController', SingleItemController);

SingleItemController.$inject = ['singleItem'];
function SingleItemController(singleItem){
  var $ctrl = this;
  $ctrl.singleItem = singleItem; //holds the array of categories from the json file.
}
})();
