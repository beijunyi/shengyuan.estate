shengyuan.controller('CarouselController', function ($scope, $timeout) {
  $scope.slides = [{
    src: 'carousel_image_1.jpg'
  }, {
    src: 'carousel_image_2.jpg'
  }, {
    src: 'carousel_image_3.jpg'
  }, {
    src: 'carousel_image_4.jpg'
  }, {
    src: 'carousel_image_5.jpg'
  }];

  $scope.currentSlide = 0;

  $scope.next = function next() {
    $scope.currentSlide < $scope.slides.length - 1 ? $scope.currentSlide++ : $scope.currentSlide = 0;
    loopSliding();
  };

  $scope.prev = function() {
    $scope.currentSlide > 0 ? $scope.currentSlide-- : $scope.currentSlide = $scope.slides.length - 1;
    loopSliding();
  };

  $scope.$watch('currentSlide', function() {
    $scope.slides.forEach(function(s) {
      s.visible = false;
    });

    $scope.slides[$scope.currentSlide].visible = true;
  });

  var timer;
  function loopSliding() {
    $timeout.cancel(timer);
    timer = $timeout(function() {
      $scope.next();
    }, 8000);
  }

  loopSliding();

  $scope.$on('$destroy', function() {
    $timeout.cancel(timer);
  });
});