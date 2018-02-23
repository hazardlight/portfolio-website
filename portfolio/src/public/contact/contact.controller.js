(function () {
"use strict";

angular.module('public')
.controller('ContactController', ContactController);

ContactController.$inject = ['PortfolioService'];
function ContactController(PortfolioService) {
  var $ctrl = this;

  var promise;
  $ctrl.contactFormData;
  $ctrl.statusMessage = '';

  $ctrl.submit = function (contactForm) {

    if(contactForm.$valid){
      console.log("Contact Form Data: ", $ctrl.contactFormData);
      promise = PortfolioService.postContactForm($ctrl.contactFormData);
      console.log("promise: ", promise);
      promise.then(function (response) {
        $ctrl.statusMessage = "Success";
      })
      .catch( function (error) {
        $ctrl.statusMessage = "error";
      });
    }


  }
  // this.contactFormData = {
  //   firstName:this.firstName,
  //   lastName:this.lastName,
  //   emailAddress:this.emailAddress,
  //   subjectLine:this.subjectLine,
  //   messageBody:this.messageBody
  // };
  // this.placeholderInput = "contactForm.firstName.$error.required && contactForm.firstName.$touched ? '*required' : ''";

}
})();
