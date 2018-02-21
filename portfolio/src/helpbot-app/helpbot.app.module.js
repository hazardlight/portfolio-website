(function(){
"use strict";

angular.module('helpbot.app', ['ngRoute', 'ngAnimate'])
.config(routeProviderConfig);

routeProviderConfig.$inject = ['$routeProvider'];
function routeProviderConfig($routeProvider) {

  $routeProvider
    .when("/HB", {templateUrl: "src/helpbot-app/partials/HelpBot.html" , controller: "HelpbotAppController as vm"});
    // .otherwise("/404", {templateUrl: "src/helpbot-app/partials/404.html", controller: "HelpbotAppController as vm"});
}
})();
