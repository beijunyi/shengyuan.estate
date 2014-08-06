shengyuan.controller('CarouselController', function ($scope) {
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

  $scope.$watch('currentIndex', function() {
    $scope.slides.forEach(function(s) {
      s.visible = false;
    });

    $scope.slides[$scope.currentSlide].visible = true;
  });
});