(function () {
"use strict";

angular.module('public')
.component('singleItem', { //itemFromCateory
  templateUrl: 'src/public/gallery/gallery.component.html', //item-from-category/item-from-category.html
  bindings: {
    item: '<'
  },
  controller: GalleryItemController
});

GalleryItemController.$inject = [];
function GalleryItemController() {
  var $ctrl = this;

  this.active = "";

  $ctrl.slide = function (dir) {
    $('#galleryCarousel').carousel(dir);
  }

  $ctrl.slideTo = function (int) {
    $('#galleryCarousel').carousel(int);
  }
  $ctrl.active = function (int) {
    var activeFlag = "";

    if(int === 0)
      activeFlag = "active";

    return activeFlag;
  }
}
})();
