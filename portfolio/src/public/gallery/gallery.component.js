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
  $ctrl.slide = function (dir) {
    $('#galleryCarousel').carousel(dir);
  }

  $ctrl.slideTo = function (int) {
    $('#galleryCarousel').carousel(int);
  }
}
})();
