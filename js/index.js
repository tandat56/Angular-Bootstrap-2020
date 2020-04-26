var app = angular.module('myApp',["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/gopY',{
        templateUrl: 'gopY.html?'+Math.random(),
    })
    .when('/hoiDap',{
        templateUrl: 'hoiDap.html?'+Math.random(),
    })

    .when('/test/:mh/:ten',{
        templateUrl: 'deTest.html?'+Math.random(),
        controller: 'deTest'
    })
    .when('/home',{
        templateUrl: 'home.html?'+Math.random(),
        controller: 'homeCtrl'
    })
    .when('/logOUT',{
        templateUrl: 'logOUT.html?'+Math.random(),
        controller: 'logOUT'
    })
    .when('/index/home',{ 
        templateUrl: 'home.html?'+Math.random()
    })
    .otherwise({
        redirectTo: '/home'
    });
    
    
});
app.run(function($rootScope){
    $rootScope.$on('$routeChangeStart',function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess',function(){
      $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeError',function(){
      $rootScope.loading = false;
      alert('Lỗi không tải được trang');
    });
});
app.controller('myController', function($cookies,$scope,$http,$rootScope){

    $http.get('db/Subjects.js').then(function(response){
        $rootScope.subjects = response.data;
    });

    $http.get('db/Students.js').then(function (response){
        $rootScope.students = response.data;
    });

    $rootScope.fLogin = false;
    $rootScope.user = "";

});