(function() {
'use strict';

angular.module('portfolio', ['public' /*,'helpbot.app'*/])
.config(config);

// special URL routing logic

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

})();
