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
    url:'/how-it-is-made',
    templateUrl:'src/public/made/how-it-is-made.html'
  })
  .state('public.categories',{
    url:'/categories',
    templateUrl:'src/public/categories/categories.html',
    controller: 'CategoriesController',
    controllerAs: 'catCtrl',
    resolve: {
      portfolioCategories: ['PortfolioService', function (PortfolioService) {
        return PortfolioService.getCategories();
      }]
    }
  })
  .state('public.items', {
    url:'/categories/{category}',
    templateUrl:'src/public/category-items/category-items.html', //maybe this should be items-from-category.html
    controller: 'CategoryItemsController', //ItemsFromCategoryController
    controllerAs: 'catItmCtrl', //itmCatCtrl
    resolve: {
      portfolioCategoryItems: ['PortfolioService', function ($stateParams, PortfolioService) { //PortfolioItemsFromCategory
        return PortfolioService.getItems($stateParams.category);
      }]
    }
  });
  // I need a state that populates the home page with item categories (lego, knives, etc..)
  // Clicking the category displays a list of items in that category.
  // Clicking the item displays the info about the item.
  // This should be done dynamically and not with hardcoded states for each cagegory/item/detail page

  // use a service to do this^!

// Also need a another state to only show a single item


};
})();
