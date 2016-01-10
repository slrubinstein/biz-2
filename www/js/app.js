angular.module('bizCard', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl as login'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl as profile'
      }
    }
  })

  .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/tab-contacts.html',
          controller: 'ContactsCtrl as contacts'
        }
      }
    })
    .state('tab.contact-detail', {
      url: '/contacts/:contactId',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/contact-detail.html',
          controller: 'ContactDetailCtrl'
        }
      }
    })

  .state('tab.trade', {
      url: '/trade',
      views: {
        'tab-trade': {
          templateUrl: 'templates/tab-trade.html',
          controller: 'TradeCtrl as trade'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');

});
