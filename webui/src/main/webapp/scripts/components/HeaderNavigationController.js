shengyuan.controller('HeaderNavigationController', function ($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.tabs = [{
    href: '/shengyuan_estate.html',
    title: 'SHENGYUAN_ESTATE'
  }, {
    href: '/shengyuan_group.html',
    title: 'SHENGYUAN_GROUP'
  }, {
    href: '/investment_consulting.html',
    title: 'INVESTMENT_CONSULTING'
  }, {
    href: '/geomancy_advisory.html',
    title: 'GEOMANCY_ADVISORY'
  }, {
    href: '/latest_properties.html',
    title: 'LATEST_PROPERTIES'
  }, {
    href: '/customer_testimonials.html',
    title: 'CUSTOMER_TESTIMONIALS'
  }];
});