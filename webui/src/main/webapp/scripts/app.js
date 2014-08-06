var shengyuan = angular.module('shengyuan', ['ngAnimate', 'ngResource', 'ngRoute', 'pascalprecht.translate']).config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {

  $.each(i18n, function (language, translation) {
    $translateProvider.translations(language, translation);
  });

  $translateProvider.determinePreferredLanguage(function () {
//      var language = navigator.language;
//      if(i18n[language])
//        return language;
//      else
//        return i18n.defaults;
    return 'zh-CN';
  });

  $routeProvider.when('/home', {
    templateUrl: 'views/HomeView.html'
  }).when('/shengyuan_estate', {
    templateUrl: 'views/ShengyuanEstateView.html'
  }).when('/shengyuan_group', {
    templateUrl: 'views/ShengyuanGroupView.html'
  }).when('/investment_consulting', {
    templateUrl: 'views/InvestmentConsultingView.html'
  }).when('/geomancy_advisory', {
    templateUrl: 'views/GeomancyAdvisoryView.html'
  }).when('/latest_properties', {
    templateUrl: 'views/LatestPropertiesView.html'
  }).when('/customer_testimonials', {
    templateUrl: 'views/CustomerTestimonialsView.html'
  }).otherwise({
    redirectTo: '/home'
  });

}
]);