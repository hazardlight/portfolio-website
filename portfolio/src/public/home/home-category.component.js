(function () {
"use strict";

angular.module('public')
.component('categoryPick', {
  templateUrl: 'src/public/home/home-category.component.html',
  bindings: {
    category: '<'
  },
  controller: CategoryComponenetController,
  controllerAs: 'vm'
});

CategoryComponenetController.$inject = [];
function CategoryComponenetController() {
  var vm = this;

  // ng-style variables
  vm.cardColor = '';
  vm.triangleColor = '';
  vm.circleBackgroundColor = '';

  //gets the colors from categories.json via ng-init in the html and assigns them via ng-style attributes
  vm.setNgStyleColors = function (colors){

    vm.cardColor = {
      'color': colors[4],
      'border-color': colors[3],
      'background-color': colors[3],
      'background-image': 'linear-gradient(135deg,' + colors[0] + ',' + colors[2] + ')'
    };
    vm.triangleColor = {
      'background-color': colors[3]
    };
    vm.circleBackgroundColor = {
      'background-image': 'linear-gradient(100deg,' + colors[0] + ',' + colors[2] + ')',
      'border-color': colors[1],
      'box-shadow': '.4rem .4rem 0 0 ' + colors[3] + ',' + '-1px -1px 0 0 ' + colors[3] + ',' +
                  '-1px 1px 0 0 ' + colors[3] + ',' +
                  '1px -1px 0 0 ' + colors[3]
    };
  }

  // ng-class variables
  vm.cardNgClass = ''
  vm.titleNgClass = '';
  vm.descriptionNgClass = '';
  vm.imageNgClass = '';

  //ng-if variable
  vm.elementIsActive = false;

  //clears the ng-class variables via ng-mouseleave
  vm.slideUpFunc = function () {
    vm.elementIsActive = false;
    vm.cardNgClass = ''
    vm.titleNgClass = '';
    vm.descriptionNgClass = '';
    vm.imageNgClass = '';

  }
  // assigns the ng-class variables on ng-mouseover. classes are defined in the .css file for the html template
  vm.slideDownFunc = function () {
    vm.elementIsActive = true;
    vm.cardNgClass = 'card-ng-class';
    vm.titleNgClass = 'title-ng-class';
    vm.descriptionNgClass = 'description-ng-class';
    vm.imageNgClass = 'image-ng-class';
  }

  // $ctrl.slideFunc = function () {
  //   var description = $element.find('div.category-description');
  //   description.slideDown(500);
  // }
}
})();
