(function () {
"use strict";

angular.module('public')
.controller('MadeController', MadeController);

MadeController.$inject = ['blogItem','PortfolioService'];
function MadeController(blogItem, PortfolioService) {
  var $ctrl = this;

  $ctrl.blogItem = blogItem;
  $ctrl.blogIndex = 3;
  $ctrl.display = false;

  $ctrl.closeColor = "";

  $ctrl.blogImgBackground = '';

  $ctrl.imgIndex = -1;

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
  $ctrl.imgHoverColor = function (bool) {
    if(bool === true)
      $ctrl.blogImgBackground = {'background-color': '#5f97ef', 'border-radius': '10px'};
    else
      $ctrl.blogImgBackground = {'background-color': '', 'border-radius': '0'};
  }
  // $ctrl.isImg = function (content) {
  //   var test = content;
  //
  //   if(test.indexOf("<img") > -1){
  //     $ctrl.imgIndex++;
  //     console.log("testing isImg()", test.indexOf("<img"));
  //     console.log("testing $ctrl.imgIndex ", $ctrl.imgIndex);
  //   }
  // }
  // $ctrl.incImgIndex = function () {
  //   $ctrl.imgIndex++;
  //   console.log("testing imgIndex ", $ctrl.imgIndex);
  //   return $ctrl.imgIndex;
  // }
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
