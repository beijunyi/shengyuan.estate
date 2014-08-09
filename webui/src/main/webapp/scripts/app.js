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

  $routeProvider.when('/shengyuan_estate.html', {
    templateUrl: 'views/ShengyuanEstateView.html'
  }).when('/shengyuan_group.html', {
    templateUrl: 'views/ShengyuanGroupView.html'
  }).when('/investment_consulting.html', {
    templateUrl: 'views/InvestmentConsultingView.html'
  }).when('/geomancy_advisory.html', {
    templateUrl: 'views/GeomancyAdvisoryView.html'
  }).when('/latest_properties.html', {
    templateUrl: '/views/LatestPropertiesView.html'
  }).when('/customer_testimonials.html', {
    templateUrl: 'views/CustomerTestimonialsView.html'
  }).otherwise({
    templateUrl: 'views/HomeView.html'
  });

});