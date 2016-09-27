(function(){
  var app= angular.module("LunchCheck", []);
  app.controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.calculateItems = function(){
      
      $scope.message =  message($scope.items);
    };

    function message(items){

      if(typeof items == 'undefined' || items == "")
        return "Please enter data first";
      var size = $scope.items.split(",").filter(function(el) {return el.length != 0}).length;

      if(size < 4)
        return "Enjoy!";
      else
        return "Too Much!";
    };
  };
  
})();
