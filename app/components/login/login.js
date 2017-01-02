// Register `phoneList` component, along with its associated controller and template
angular.
  module('myApp').
  component('login', {
templateUrl: './components/login/login.html',
    controller: function PhoneListController($scope) {
      $scope.username="";
      $scope.loginstatus="";

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

      $scope.login = function() {
        alert($scope.username);
        $scope.loginstatus="lokkaa";
        //eli kutsu serveriä ja vaihda sivulle

      };

    }




  });
