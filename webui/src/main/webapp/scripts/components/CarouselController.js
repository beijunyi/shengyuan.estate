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

  $scope.next = function() {
    $scope.currentSlide < $scope.slides.length - 1 ? $scope.currentSlide++ : $scope.currentSlide = 0;
  };

  $scope.prev = function() {
    $scope.currentSlide > 0 ? $scope.currentSlide-- : $scope.currentSlide = $scope.slides.length - 1;
  };

  $scope.$watch('currentSlide', function() {
    $scope.slides.forEach(function(s) {
      s.visible = false;
    });

    $scope.slides[$scope.currentSlide].visible = true;
  });

  var timer;
  var sliderFunc = function() {
    timer = $timeout(function() {
      $scope.next();
      timer = $timeout(sliderFunc, 5000);
    }, 5000);
  };

  sliderFunc();

  $scope.$on('$destroy', function() {
    $timeout.cancel(timer);
  });
});