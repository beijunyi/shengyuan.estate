shengyuan.controller('CustomerTestimonialsController', function ($scope) {
  $scope.testimonials = [];

  for(var t = 1; t <= 4; t++) {
    $scope.testimonials.push({
      image: 'customer_testimonial_' + t + '_image.jpg',
      comment: 'CUSTOMER_TESTIMONIAL_' + t + '_COMMENT',
      name: 'CUSTOMER_TESTIMONIAL_' + t + '_NAME'
    });
  }
});