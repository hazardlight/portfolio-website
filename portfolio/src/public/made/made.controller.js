(function () {
"use strict";

angular.module('public')
.controller('MadeController', MadeController);

MadeController.$inject = ['blogItem','PortfolioService'];
function MadeController(blogItem, PortfolioService) {
  var $ctrl = this;

  $ctrl.blogItem = blogItem;

  $ctrl.display = false;

  $ctrl.closeColor = "";

  $ctrl.showCarousel = function () {
    $ctrl.closeColor = {opacity: '.5'};
    return $ctrl.display = true;
  }
  $ctrl.hideCarousel = function () {
    return $ctrl.display = false;
  }

  // $ctrl.showCarousel2 = function (content) {
  //   var test = content;
  //   var found = false;
  //   if(test.indexOf("<img>") > -1){
  //     found = true;
  //     $ctrl.display = found;
  //   }
  //
  //   return $ctrl.display;
  // }

  // $ctrl.testHTML = <span>blah blah blah</span>;
  $ctrl.active = "";

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

  // $ctrl.closeColor = "";
  // $ctrl.state = false;

  $ctrl.hoverColor = function (bool) {
    if(bool === true)
      $ctrl.closeColor = {opacity: '.9'};
    else
      $ctrl.closeColor = {opacity: '.5'};
  }
}



// $ctrl.isImg = function (content) {
//   var test = content;
//   var found = false;
//
//   if(test.indexOf("img/") > -1){
//     found = true;
//     console.log("testing isImg()", test.indexOf("img/"));
//   }
//
//   return found;
// }

})();
