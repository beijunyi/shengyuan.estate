shengyuan.controller('GlobalHeaderController', function ($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.slides = [{

  }];
});