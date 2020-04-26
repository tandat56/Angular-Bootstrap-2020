app.controller('logOUT', function($cookies,$location,$rootScope){
    $scope.logout = function(){
        $cookies.remove('user');
        $cookies.remove('fLogin');

        $rootScope.user = "";
        $rootScope.fLogin = true;

        window.location.href = 'index.html';
    }
});