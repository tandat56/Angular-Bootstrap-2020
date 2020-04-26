app.controller('deTest', function($interval,$scope,$http,$routeParams){
    
  $scope.index = 1;
  $http.get('db/Subjects.js').then(function(response){
      $rootScope.subjects = response.data;
  });

  $scope.ch = 'db/Quizs/'+$routeParams.mh+'.js';
  $scope.tenMonHoc = $routeParams.ten;
  $http.get($scope.ch).then(function(response){
      $scope.quizs = response.data
  });

  $scope.tong_diem = 0;
      $scope.tinh_diem = function(diem_cua_cau_hoi, dap_an, tra_loi){
          if(dap_an == tra_loi){
              $scope.tong_diem += diem_cua_cau_hoi; 
          }
  };

  $scope.phut = 4;
      $scope.giay = 59;

      $interval(function(giay){

        $scope.time = ($scope.phut < 4) ? ('0' + $scope.phut.toString()) : $scope.phut.toString();
        $scope.time += ":";
        $scope.time += ($scope.giay < 10) ? ('0' + $scope.giay.toString()) : $scope.giay.toString();

        $scope.giay -= 1;
        if($scope.giay == 0){
          if($scope.phut == 0){
            window.location.href = "index.html";
          }else{
            $scope.phut -= 1;
            $scope.giay = 59;
          }
        }

  },1000);
  $scope.interval = function () {
    stopped = $timeout(function () {
      if ($scope.time == 0 ) {
        $timeout.cancel(stopped);
      } else {
        $scope.countdown();
      }
    }, 1000);
  };

  $scope.kq = function () {
    $scope.phut = 0;
    $scope.giay = 0;
    $timeout.cancel(stopped);
  };

  $scope.row = 8;
  $scope.begin = 0;
  $scope.pages = Math.ceil(80/$scope.row);

  $scope.prev = function(){
        if($scope.begin>0){
          $scope.index -= 1;
          $scope.begin -=1;
        }
  }
      $scope.next = function(){
            if($scope.begin<($scope.pages-1)*17.6){
                  $scope.begin += 1;
                  $scope.index += 1;
            }
      }


});