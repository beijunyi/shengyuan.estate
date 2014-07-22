var shengyuan = angular
  .module('shengyuan', ['ngResource', 'ngRoute', 'ngSanitize', 'pascalprecht.translate'])
  .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {

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
      templateUrl: 'views/HomeView.html',
      controller: 'HomeController'
    }).otherwise({
        redirectTo: '/home'
      });

  }
  ]);