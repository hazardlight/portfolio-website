(function () {
"use strict";

angular.module('helpbot.app')
.controller('HelpbotAppController', HelpbotAppController);

HelpbotAppController.$inject = ['$scope', '$http', '$timeout', 'HelpbotAppService'];
function HelpbotAppController($scope, $http, $timeout, HelpbotAppService) {
  var vm = this;
  vm.stackTrace = [];
  //public functions
  vm.goTo = goTo;
  vm.handleAnswerClick = handleAnswerClick;
  //question tree get data
  // $http.get('src/helpbot-app/QuestionTree.json').success(onGetDataSuccess).error(onGetDataError);
  //setup paths for different robot pics
  // 0: HelloThere
  // 1: GiveItAShot
  // 2: TryThis
  // 3: OhMy
  // 4: ContactUs
  // 5: YouDidIt

  var promise = HelpbotAppService.getData();

  promise.then(function (items) {
    vm.questionTree = items;
    // console.log(response.data);
    console.log(vm.questionTree);
    vm.currentQuestion = findNextQuestion(vm.questionTree, "99");
    vm.showAnswers = true;
    vm.showDeadEnd = "";
    vm.showOptionalContent = "";
  })
  .catch(function(error){
    console.log(error);
  });



  // function getData (){
  //   return $http.get('src/helpbot-app/QuestionTree.json').then(function (response) {
  //     vm.questionTree = response.data.questions;
  //     vm.currentQuestion = findNextQuestion(vm.questionTree, "99");
  //     vm.showAnswers = true;
  //     vm.showDeadEnd = "";
  //     vm.showOptionalContent = "";
  //     //return response.data;
  //     console.log(response.data);
  //   });
  // }

  //onClick for navBar click
  function goTo(index) {
    handleAnimations();
    //find the currentQuestion from the previous question list
    vm.currentQuestion = vm.stackTrace[index];
    vm.showOptionalContent = vm.currentQuestion.optionalContentPage;
    //delete the rest of the array
    vm.stackTrace.splice(index);
    vm.showAnswers = true;
  }
  //onClick for an answer
  function handleAnswerClick(index) {
    var clickedAnswer = vm.currentQuestion.answers[index];
    handleAnimations();
    var nextQuestion = findNextQuestion(vm.questionTree, clickedAnswer.link);
    vm.hideQuestions = isNaN(parseInt(clickedAnswer.link)) ? true : false;
    vm.stackTrace.push(vm.currentQuestion);
    vm.currentQuestion = nextQuestion;
    vm.showOptionalContent = vm.currentQuestion.optionalContentPage;
  }

  function findNextQuestion(_array, _key) {
    var array = _array;
    for(var i = 0; i < array.length; i++)
    {
      if(array[i].key === _key)
      {
        return array[i];
      }
    }
    return null;
  }

  function handleAnimations() {
    vm.contentIsTransitioning = true;
    $timeout(stopTransition, 200);
  }

  function stopTransition() {
    vm.contentIsTransitioning = false;
  }
  //on success for $http call to get questionTree data
  // function onGetDataSuccess(data) {
  //   vm.questionTree = data.questions;
  //   vm.currentQuestion = findNextQuestion(vm.questionTree, "99");
  //   vm.showAnswers = true;
  //   vm.showDeadEnd = "";
  //   vm.showOptionalContent = "";
  // }
  //on failure for $http call to get questionTree data
  // function onGetDataError(data, status, headers, config) {
  // //display error page
  // }
}
})();
