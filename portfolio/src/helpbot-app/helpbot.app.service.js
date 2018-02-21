(function () {
"use strict";

angular.module('helpbot.app')
.service('HelpbotAppService', HelpbotAppService);

HelpbotAppService.$inject = ['$http'];
function HelpbotAppService($http) {
  var service = this;

  service.getData = function(){
    return $http.get('src/helpbot-app/QuestionTree.json').then(function (response) {
      var items = [];
      items = response.data.questions
      console.log("inside helpbot.app service", response.data.questions);
      // return response.data;
      return items;
    });
  }
}
})();
