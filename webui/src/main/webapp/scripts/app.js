var shengyuan = angular.module('shengyuan', ['ngAnimate', 'ngResource', 'ngRoute', 'pascalprecht.translate']).config(function ($locationProvider, $routeProvider, $translateProvider) {

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

  $locationProvider.html5Mode(true);

  $routeProvider.when('/page/shengyuan-estate', {
    templateUrl: 'views/ShengyuanEstateView.html'
  }).when('/page/shengyuan-group', {
    templateUrl: 'views/ShengyuanGroupView.html'
  }).when('/page/investment-consulting', {
    templateUrl: 'views/InvestmentConsultingView.html'
  }).when('/page/geomancy-advisory', {
    templateUrl: 'views/GeomancyAdvisoryView.html'
  }).when('/page/latest-properties', {
    templateUrl: 'views/LatestPropertiesView.html'
  }).when('/page/customer-testimonials', {
    templateUrl: 'views/CustomerTestimonialsView.html'
  }).when('/', {
    templateUrl: 'views/HomeView.html'
  });

});