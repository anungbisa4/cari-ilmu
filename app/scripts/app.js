(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      // 'ngTouch',
      'ui.router',
      '720kb.datepicker',
      'ngMaterial',
      'ngMessages',
      'angular-loading-bar',
      'ui.bootstrap',
    ])
    .config(config)
    .run(run);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  run.$inject = ['$rootScope', '$state', 'authServices'];

  function run($rootScope, $state, authServices) {
    // if (!authServices.isLoggedIn()) {
    //   console.log('Belum login');
    $rootScope.$on('$locationChangeSucces', function() {
      if (!authServices.isLoggedIn() && !$state.is('login')) {
        console.log('belum login');
        $state.go('login');
      }
    });
    // }
  }

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/landing', '/landing/home');
    $urlRouterProvider.when('/', '/login');

    $stateProvider
      .state('status', {
        url: '/status',
        views: {
          'level0': {
            templateUrl: 'views/status.html',
            controller: 'statusCtrl',

          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'level0': {
            templateUrl: 'views/login.html',
            controller: 'LoginAdminCtrl',

          }
        }
      })
      .state('landing', {
        abstract: true,
        url: '/landing',
        views: {
          'level0': {
            templateUrl: 'views/landing.html',
            controller: 'LandingCtrl',
          }
        }
      })
      .state('landing.home', {
        url: '/home',
        views: {
          'level1': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('landing.tabel-kelas', {
        url: '/tabel-kelas',
        views: {
          'level1': {
            templateUrl: 'views/tabel-kelas.html',
            controller: 'TabelKelasCtrl'
          }
        }
      })
      .state('landing.tabel-tutor', {
        url: '/tabel-tutor',
        views: {
          'level1': {
            templateUrl: 'views/tabel-tutor.html',
            controller: 'TabelTutorCtrl'
          }
        }
      })

      .state('landing.pembayaran', {
        url: '/pembayaran',
        views: {
          'level1': {
            templateUrl: 'views/tabel-pembayaran.html',
            controller: 'TabelPembayaranCtrl'
          }
        }
      })


      .state('landing.murid', {
        url: '/murid',
        views: {
          'level1': {
            templateUrl: 'views/tabel-murid.html',
            controller: 'TabelMuridCtrl'
          }
        }
      })

      .state('landing.edit-kelas', {
        url: '/edit-kelas',
        views: {
          'level1': {
            templateUrl: 'views/edit-kelas.html',
            controller: 'TabelKelasCtrl'
          }
        }
      })
      .state('landing.tambah-kelas', {
        url: '/tambah-kelas',
        views: {
          'level1': {
            templateUrl: 'views/tambah-kelas.html',
            controller: 'TambahKelasCtrl',
          }
        }
      })
      .state('landing.tambah-murid', {
        url: '/tambah-murid',
        views: {
          'level1': {
            templateUrl: 'views/tambah-murid.html',
            controller: 'TambahMuridCtrl',
          }
        }
      })
      .state('landing.tambah-tutor', {
        url: '/tambah-tutor',
        views: {
          'level1': {
            templateUrl: 'views/tambah-tutor.html',
            controller: 'TambahTutorCtrl'
          }
        }
      })
      .state('landing.edit-murid', {
        url: '/edit-murid',
        views: {
          'level1': {
            templateUrl: 'views/edit-murid.html',
          }
        }
      })
      .state('landing.edit-tutor', {
        url: '/edit-tutor',
        views: {
          'level1': {
            templateUrl: 'views/edit-tutor.html',
          }
        }
      });

  }

})();
