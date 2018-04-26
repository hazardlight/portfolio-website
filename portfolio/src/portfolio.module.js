(function() {
'use strict';

angular.module('portfolio', ['public', 'ngAnimate', 'ngSanitize', 'angular-bind-html-compile'])
.config(config);

// special URL routing logic

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

})();
