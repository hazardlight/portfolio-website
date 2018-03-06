(function () {
"use strict";

angular.module('public')
.controller('MadeController', MadeController);

MadeController.$inject = ['PortfolioService'];
function MadeController(PortfolioService) {
  var $ctrl = this;

  // $ctrl.active = "";

  $ctrl.slide = function (dir) {
    $('#made-carousel').carousel(dir);
    console.log("Made carousel", dir);
  }

  $ctrl.slideTo = function (int) {
    $('#made-carousel').carousel(int);
  }
  $ctrl.active = function (int) {
    var activeFlag = "";

    if(int === 0)
      activeFlag = "active";

    return activeFlag;
  }

}

})();
