shengyuan.controller('HeaderNavigationController', function ($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.tabs = [{
    href: '/page/shengyuan-estate',
    title: 'SHENGYUAN_ESTATE'
  }, {
    href: '/page/shengyuan-group',
    title: 'SHENGYUAN_GROUP'
  }, {
    href: '/page/investment-consulting',
    title: 'INVESTMENT_CONSULTING'
  }, {
    href: '/page/geomancy-advisory',
    title: 'GEOMANCY_ADVISORY'
  }, {
    href: '/page/latest-properties',
    title: 'LATEST_PROPERTIES'
  }, {
    href: '/page/customer-testimonials',
    title: 'CUSTOMER_TESTIMONIALS'
  }];
});