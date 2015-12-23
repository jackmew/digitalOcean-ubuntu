var app = angular.module('starter', ['ionic','gist-embed', 'hljs']);

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // make tabs on the top in android 
  $ionicConfigProvider.tabs.position('top');
  // display tabs in android correctly
  $ionicConfigProvider.tabs.style('');



  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });
  $stateProvider.state('details', {
    url: '/details',
    templateUrl: 'templates/details.html'
  });
  $stateProvider.state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  });
  $stateProvider.state('tests', {
    url: '/tests',
    templateUrl: 'templates/tests.html',
  });

  /* 
  * logbooks
  * make post has history for 
  * enter the post will showing the back button.
  */
  $stateProvider.state('logbook', {
    url: '/logbook',
    abstract: true,
    templateUrl: 'templates/logbook.html'
  })
  .state('logbook.posts', {
    url: '/posts',
    views: {
      'tab-posts': {
        templateUrl: 'templates/logbooks/posts.html'
      }
    }
  })
  .state('logbook.cordova1', {
    url: '/posts/cordova1',
    views: {
      'tab-posts': {
        templateUrl: 'templates/logbooks/cordova1.html'
      }
    }
  })
  .state('logbook.cordova2', {
    url: '/posts/cordova2',
    views: {
      'tab-posts': {
        templateUrl: 'templates/logbooks/cordova2.html'
      }
    }
  })
  .state('logbook.intelliJ', {
    url: '/posts/intelliJ',
    views: {
      'tab-posts': {
        templateUrl: 'templates/logbooks/intelliJ.html'
      }
    }
  })
  .state('logbook.angularPromise', {
    url: '/posts/angularPromise',
    views: {
      'tab-posts': {
        templateUrl: 'templates/logbooks/angularPromise.html'
      }
    }
  });


  $stateProvider.state('logbook.notes', {
    url: '/notes',
    views: {
      'tab-notes': {
        templateUrl: 'templates/logbooks/notes.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/home');
});
app.controller('HomeCtrl', function($scope, $timeout) {
  /******************** svg circle ************************/
  // inner svg
  $scope.isShowing = true ;
  $scope.isShowAnimate = false ;
  // outer circle
  $scope.isHideCircle = true ;
  $scope.isPopCircle = false ;

  $timeout(function() {
      // inner svg
      $scope.isShowing = false ;
      $scope.isShowAnimate = true ;
      // outer circle
      $scope.isHideCircle = false ;
      $scope.isPopCircle = true ;


      $('.jke-ecgChart').ecgChart({
        // height equal to footer height
        height: 65,
        width: 400
      });
      startPulse();
  }, 4000);

});
app.controller('LogbookCtrl',function($scope, $http) {
    // $scope.books = [];
    // $http.get('https://www.reddit.com/r/Android/new/.json')
    //   .success(function(response) {
    //   angular.forEach(response.data.children, function(child) {
    //       var story = child.data ;
    //       console.log(story.thumbnail);
    //       if(!story.thumbnail || story.thumbnail === 'self' || story.thumbnail == 'default') {
    //         story.thumbnail = 'http://www.redditstatic.com/icon.png' ;
    //       }
    //       $scope.books.push(child.data);
    //   });
    // });
});
app.controller('BookCtrl', function($scope, $state) {
  
  // console.log($state.params.bookId);
  // $scope.bookId = $state.params.bookId;

  // $rootScope.$on('$includeContentLoaded', function() {
  //     alert("included");
      // initialize gist on new elements
      // angular.element(document).ready(function() {
      //     if (typeof(angular.element(document).gist) === 'function') {
      //         angular.element('[data-gist-id]').gist();
      //     }
      // });
  // });
    // $scope.$on('$ionicView.enter', function () {
    //     alert("loaded");
    // });
    // $scope.$on('$ionicView.unloaded', function (viewInfo, state) {
    //     console.log('CTRL - $ionicView.unloaded', viewInfo, state);
    // });


    // angular.element(document).ready(function() {
    //     alert("ready");
    //     if (typeof(angular.element(document).gist) === 'function') {
    //         alert("gist()");
    //         angular.element('[data-gist-id]').gist();
    //     }
    // });

        // var $code = $('<code data-gist-id="474f6d7839fccffc4b2a"/>');
        
        // $code.appendTo('body').gist();
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
