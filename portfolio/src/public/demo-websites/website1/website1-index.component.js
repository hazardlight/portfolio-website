// (function () {
// "use strict";
//
// angular.module('public')
// .component('websiteTest',
//   {templateUrl: 'src/public/demo-websites/website1/index.component.html'
// });
// })();

// ***This .component.js file needs to be registered in a script tag in the root index.html***

(function () {
"use strict";

angular.module('public')
.component('websiteTest', {
  templateUrl: 'src/public/demo-websites/website1/website1-index.component.html',
  bindings: {
    item: '<'
  },
  controller: Website1ComponentController,
  controllerAs: 'vm'
});
Website1ComponentController.$inject = [];
function Website1ComponentController(){
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
