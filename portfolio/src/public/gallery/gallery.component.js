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

  // this.active = "";

  this.thumbnailActive = 0;

  this.count = 0;

  $ctrl.slide = function (dir) {
    $('#galleryCarousel').carousel(dir);
    if(dir === 'next')
      if(this.thumbnailActive === this.count){
        this.thumbnailActive = 0;
      }
      else{
        this.thumbnailActive++;
      }
    if(dir === 'prev')
        if(this.thumbnailActive === 0){
          this.thumbnailActive = this.count;
        }
        else{
          this.thumbnailActive--;
        }

  }

  $ctrl.slideTo = function (int) {
    $('#galleryCarousel').carousel(int);
    this.thumbnailActive = int;
    console.log(this.count);
  }
  $ctrl.active = function (int) {
    var activeFlag = "";

    if(int === 0)
      activeFlag = "active";

    return activeFlag;
  }
}
})();
