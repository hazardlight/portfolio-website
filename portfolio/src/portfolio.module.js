(function() {
'use strict';

angular.module('portfolio', ['public', 'ngAnimate', 'ngSanitize' /*,'helpbot.app'*/])
.config(config);

// special URL routing logic

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}

})();
