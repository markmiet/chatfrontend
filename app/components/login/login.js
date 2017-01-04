// Register `phoneList` component, along with its associated controller and template
angular.
  module('myApp').
  component('login', {
templateUrl: './components/login/login.html',
    controller: function PhoneListController($scope, $http) {
      $scope.username="";
      $scope.loginstatus="";
      $scope.newuser=
      {
        username:'',
        loginstatus:''
      }

      var jsonUrl = "http://localhost:8080/users";

      $http.get(jsonUrl).success(
            function(data){
              $scope.users = data;
            }
          );
      <!--
      $scope.users = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
      -->

    //  create() {
        //  this.$state.go('create');
  //    }


      $scope.login = function() {

      var jsonUrl2 = "http://localhost:8080/login";

    $scope.newuser.username=$scope.username;
//alert($scope.newuser.username);
      $http.post(jsonUrl2,$scope.newuser).success(
            function(data){
              var user = data;
              if (user.loginstatus==='OK') {
                $http.get(jsonUrl).success(
                      function(data){
                        $scope.users = data;
              //          create();
                      }
                    );
                //
                //jaahas ja sitten sattiin :)
              }
            }
          );
        //eli kutsu serveriä ja vaihda sivulle
      };
    }
    //



  });
