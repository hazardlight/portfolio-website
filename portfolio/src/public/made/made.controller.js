(function () {
"use strict";

angular.module('public')
.controller('MadeController', MadeController);

MadeController.$inject = ['blogItem','PortfolioService'];
function MadeController(blogItem, PortfolioService) {
  var $ctrl = this;

  $ctrl.blogItem = blogItem;

  $ctrl.filterContent = function (content) {
    var array = [];

  }

  $ctrl.isImg = function (content) {
    var test = content;
    var found = false;

    if(test.indexOf("img/") > -1){
      found = true;
      console.log("testing isImg()", test.indexOf("img/"));
    }

    return found;
  }
  // $ctrl.testHTML = <span>blah blah blah</span>;
  // $ctrl.active = "";

  // $ctrl.slide = function (dir) {
  //   $('#made-carousel').carousel(dir);
  //   console.log("Made carousel", dir);
  // }
  //
  // $ctrl.slideTo = function (int) {
  //   $('#made-carousel').carousel(int);
  // }
  // $ctrl.active = function (int) {
  //   var activeFlag = "";
  //
  //   if(int === 0)
  //     activeFlag = "active";
  //
  //   return activeFlag;
  // }
}

})();
