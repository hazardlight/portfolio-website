(function () {
"use strict";

angular.module('public')
.component('websiteTwo', {
  templateUrl: 'src/public/demo-websites/website2/index.component.html',
  bindings: {
    item: '<'
  },
  controller: Website2ComponentController,
  controllerAs: 'vm'
});
 Website2ComponentController.$inject = [];
 function Website2ComponentController(){
   var vm = this;
   vm.breadcrumbHideOnLoad = {'opacity': 0};
   vm.breadcrumbNgClass = '';
   vm.breadcrumbOpenButtonNgClass = '';

   vm.openBreadcrumb = function() {
     vm.breadcrumbNgClass = 'breadcrumb-ng-class';
     vm.breadcrumbOpenButtonNgClass = 'breadcrumb-open-button-ng-class';
     vm.breadcrumbHideOnLoad = '';

   }
   vm.closeBreadcrumb = function() {
     vm.breadcrumbNgClass = '';
     vm.breadcrumbOpenButtonNgClass = '';
     vm.breadcrumbHideOnLoad = ''
   }
 }
})();
