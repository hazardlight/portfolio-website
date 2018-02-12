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
  .state('public.home',{ //home page has the categories list, not some other state
    url:'/home',
    templateUrl:'src/public/home/home.html',
    controller: 'HomeCategoriesPickController',
    controllerAs: 'hcpCtrl',
    resolve: {
      homeCategories: ['PortfolioService', function (PortfolioService) {
        return PortfolioService.getCategories();
      }]
    }
  })
  .state('public.items', { //displays items for a picked category
    url:'/{category}',
    templateUrl:'src/public/items-from-category/items-from-category.html',
    controller: 'ItemsFromCategoryController',
    controllerAs: 'itmCatCtrl', //or vm???
    resolve: {
      categoryItems: ['$stateParams', 'PortfolioService', function ($stateParams, PortfolioService) { //PortfolioItemsFromCategory
        return PortfolioService.getCategoryItems($stateParams.category);
      }]
    }
  })
  .state('public.itemPick', {
    url:'/{category}/{item}',
    templateUrl: function ($stateParams){
      if($stateParams.category == "L" || $stateParams.category == "K" || $stateParams.category == "O"){
        return 'src/public/gallery/gallery.html';
      }
      else if($stateParams.category == "HB"){
        return 'src/public/helpbot/helpbot.html';
      }
    },
    controller: 'SingleItemController',
    controllerAs: 'vm', //or vm???
    resolve: {
      singleItem: ['$stateParams', 'PortfolioService', function ($stateParams, PortfolioService) { //PortfolioItemsFromCategory
        return PortfolioService.getSingleItem($stateParams.item);
      }]
    }
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
  });
  // I need a state that populates the home page with item categories (lego, knives, etc..)
  // Clicking the category displays a list of items in that category.
  // Clicking the item displays the info about the item.
  // This should be done dynamically and not with hardcoded states for each cagegory/item/detail page

  // use a service to do this^!

// Also need a another state to only show a single item


};
})();
