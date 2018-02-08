(function () {
"use strict";

// service description:
//
// function to get categories
//
// function to get all items from a specific category using the category short_name

angular.module('common')
.service('PortfolioService', PortfolioService);

PortfolioService.$inject = ['$http'];
function PortfolioService($http){
  var service = this;

  service.getCategories = function (){
    return $http.get('json/categories.json').then(function(response) { //will this work for json that isn't coming from a url?
      return response.data;
    });

  };
  service.getItems = function (category){ //this is supposed to get the items for a specific category?
    var config = {};
    if (category){
      config.params = {'category': category};
    }

    return $http.get('json/items.json', config).then(function(response){
      return response.data;
    });
  };
}

})();
