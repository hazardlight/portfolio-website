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
  service.getCategoryItems = function (category) {
    var items = [];
    return $http.get('json/items.json').then(function(response){

      if(category){
        for(var i=0; i<response.data.length; i++){ //filter items based off the category
          if(response.data[i].category == category){ //or === ?????
            items.push(response.data[i]);
          }
        }
      }
      return items;
    });
  };
  //can't you just get the item like this: 'json/items/name.json' ??????
  service.getSingleItem = function (item){ //return a single item based off matching name
    var itemFound;
    return $http.get('json/items.json').then(function(response){ //might not be the 100% implementation
      if(item){
        for(var i=0; i<response.data.length; i++){
          if(response.data[i].name == item){
            itemFound = response.data[i];
          }
        }
      }
      return itemFound;
    });
  };
  service.getBlogItem = function () {
    return $http.get('json/blog.json').then(function (response) {
      return response.data;
    });
  }
  service.postContactForm = function (data) {
    console.log("Inside service.postContactForm()");

    var status ='';
    // var sData = $.param(data, true);
    var sData = data;
    console.log("Serialized Data: ", sData);
    return $http.post('php/contact-form.php',sData,{'Content-Type': 'application/json'}).then(function (response) {
      console.log(response);
      // status = "Success";
      return status;
    },
    function (response) {
      // status = "Failed"
      console.log(response);
      return status;
    });
  }
  // service.postContactForm = function (data) {
  //   console.log("Inside service.postContactForm()");
  //   // var error = "error";
  //   var status ='';
  //   var sData = $.param(data, true);
  //   // var sData = data;
  //   var req = {
  //     method: 'POST',
  //     url: 'http://localhost/php/contact-form.php',
  //     data: sData,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   }
  //   console.log("Serialized Data: ", sData);
  //   return $http(req).then(function (response) {
  //     console.log(response);
  //     // status = "Success";
  //     return status;
  //   },
  //   function (response) {
  //     // status = "Failed"
  //     console.log(response);
  //     return status;
  //   });
  // }

  // service.getAllItems = function (category){ //this is supposed to get the items for a specific category?
  //   // or do I need to first get all the items on the list
  //   //and then filter by category in another function?
  //   var config = {};
  //   if (category){
  //     config.params = {'category': category};
  //   }
  //
  //   return $http.get('json/items.json', config).then(function(response){
  //     // this is doing 'json/items.json?category=category' however it does not work for my json file
  //     // it appears that the database uses references in the schema to categorize items. these are not present in my json
  //     return response.data;
  //   });
  // };
}
})();
