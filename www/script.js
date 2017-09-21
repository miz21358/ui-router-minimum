var myApp = angular.module('MyApp', ['onsen', 'ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('page-A', {
				url: '/pageA',
				templateUrl: 'pageA.html'
			})
			.state('page-B', {
				url: '/pageB',
				templateUrl: 'pageB.html'
			})
		
	}]);

