(function () {
"use strict";

angular.module('public')
.controller('PublicController', ['$scope', '$timeout', PublicController]); //needed to add square brackets here otherwise referencing $scope triggered a strict-di error

function PublicController ($scope, $timeout) {

//DONE: Figure out how to close the mobile nav menu after clicking one of the links

  var vm = this;
  vm.isMobileMenuOpen = false;
  vm.mobileOpenBtn = 'btn-opened';
  vm.mobileCloseBtn = '';
  vm.bufferSize = '';
  vm.hrFade = '';
  vm.loadingScreen = false;
  // vm.whipeNgClass = '';

  //closes the mobile menu when the router state changes
  $scope.$on('$locationChangeStart', function() {
   vm.isMobileMenuOpen = false;
   vm.mobileOpenBtn = 'btn-opened';
   vm.mobileCloseBtn = '';
   vm.bufferSize = '';
   vm.hrFade = '';
   // vm.loadingScreen = true;
   $timeout(function(){

   }, 400);
  });

  // $locationChangeSuccess
  $scope.$on('$locationChangeSuccess', function(){
    // $timeout(function(){
    //
    // }, 200);
  });

  $scope.$on('$viewContentLoaded', function(){
    //Here you can hide your pre-loader. Event fires after content is loaded
  });

  vm.OpenMobileMenu = function(){
    if (vm.isMobileMenuOpen == false) {
      vm.isMobileMenuOpen = true;
      vm.mobileOpenBtn = '';
      vm.mobileCloseBtn = 'btn-opened';
      vm.bufferSize = 'buffer-size';
      vm.hrFade = 'hr-fade';
    }
    else {
      vm.isMobileMenuOpen = false;
      vm.mobileOpenBtn = 'btn-opened';
      vm.mobileCloseBtn = '';
      vm.bufferSize = '';
      vm.hrFade = '';
    }
  }
  // vm.CloseMobileMenu = function(){
  //   if (vm.isMobileMenuOpen == true) {
  //     vm.isMobileMenuOpen = false;
  //   }
  // }
}
})();
