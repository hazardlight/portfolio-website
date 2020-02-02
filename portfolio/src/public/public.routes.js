(function(){
'use strict';

angular.module('public')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {

  $stateProvider
  .state('public',{
    abstract: true,
    templateUrl:'src/public/public.html',
    controller: 'PublicController',
    controllerAs: 'vm'
  })
  .state('public.home',{ //home page has the categories list, not some other state
    url:'/',
    templateUrl:'src/public/home/home.html',
    controller: 'HomeController',
    controllerAs: 'vm',
    resolve: {
      homeCategories: ['PortfolioService', function (PortfolioService) {
        return PortfolioService.getCategories();
      }]
    }
  })
  .state('public.categoryItems', { //displays items for a picked category
    url:'/{category}', //{category} is set in home/category.component.html
    // templateUrl:'src/public/category-items/category-items.html',
    templateUrl: function ($stateParams) {
      if($stateParams.category == "L" || $stateParams.category == "K" || $stateParams.category == "A" || $stateParams.category == "W"){
        return 'src/public/category-items/category-items.html';
      }
      else if($stateParams.category == "HB"){
        return 'src/public/helpbot/helpbot.html';
      }
    },
    controller: 'CategoryItemsController',
    controllerAs: 'vm',
    resolve: {
      categoryItems: ['$stateParams', 'PortfolioService', function ($stateParams, PortfolioService) { //PortfolioItemsFromCategory
        return PortfolioService.getCategoryItems($stateParams.category);
      }]
    }
  })
  // ^^^this state needs to link directly to the helpbot app when you select the category
  .state('public.itemPick', {
    url:'/{category}/{item}', //{category} and {item} are set in a ui-sref in category-items/item.component.html
    templateUrl: function ($stateParams){
      if($stateParams.category == "L" || $stateParams.category == "K" || $stateParams.category == "A"){
        return 'src/public/gallery/gallery.html';
      }
      // else if($stateParams.category == "HB"){
      //   return 'src/public/helpbot/helpbot.html';
      // }
      else if($stateParams.item == "Landing Page 1"){ //$stateParams.item is the item's name from the objects in items.json (set in item.component.html)
        return 'src/public/demo-websites/website1/website1-index.html';
      }
      // else if($stateParams.item == "Landing Page 1"){
      //   return 'src/public/demo-websites/website1/website1-index.component.html';
      // }

      // It's easier to route to the index.html for my static page directly in the ui-router (as setup below)
      // rather than registering a .component.js with a custom html tag that points to
      // the index.html in a templateURL property (as setup in the above if() statement)
      else if($stateParams.item == "Landing Page 2"){
        return 'src/public/demo-websites/website2/index.html';
      }
    },
    controller: 'ItemPickController',
    controllerAs: 'vm', //or vm???
    resolve: {
      singleItem: ['$stateParams', 'PortfolioService', function ($stateParams, PortfolioService) { //PortfolioItemsFromCategory
        return PortfolioService.getSingleItem($stateParams.item); //gets one item by name
      }]
    }
  })
  .state('public.about',{
    url:'/about',
    templateUrl:'src/public/about/about.html'
  })
  .state('public.contact',{
    url:'/contact',
    templateUrl:'src/public/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm',
    resolve: {
      // postData: ['PortfolioService', function (PortfolioService) {
      //   return PortfolioService.postContactForm()
      // }]
    }
  })
  .state('public.made',{
    url:'/how-it-is-made',
    templateUrl:'src/public/made/how-it-is-made.html',
    controller: 'MadeController',
    controllerAs: 'vm',
    resolve: {
      blogItem: ['PortfolioService', function (PortfolioService) {
        return PortfolioService.getBlogItem();
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
