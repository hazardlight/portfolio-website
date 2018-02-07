(function(){
'use strict';

angular.module('public')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {

  $stateProvider
  .state('public',{
    abstract: true,
    templateUrl:'src/public/public.html'
  })
  .state('public.home',{
    url:'/',
    templateUrl:'src/public/home/home.html'
  })
  .state('public.about',{
    url:'/about',
    templateUrl:'src/public/about/about.html'
  })
  .state('public.contact',{
    url:'/contact',
    templateUrl:'src/public/contact/contact.html'
  })
  .state('public.made',{
    url:'how-it-is-made',
    templateUrl:'src/public/made/how-it-is-made.html'
  }).state('public.categories',{

  }).state('public.items', {

  });
  // I need a state that populates the home page with item categories (lego, knives, etc..)
  // Clicking the category displays a list of items in that category.
  // Clicking the item displays the info about the item.
  // This should be done dynamically and not with hardcoded states for each cagegory/item/detail page

  // use a service to do this^!
};
})();
