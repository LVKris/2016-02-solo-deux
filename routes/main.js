var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  
  $scope.updateCnt = function() {
    var letUsed = {};
    var signText = $scope.textBlock.toUpperCase();
    for (var i = 0, len = signText.length; i < len; i++) {
      letUsed[signText.charAt(i)] = ++letUsed[signText.charAt(i)] || 1;
    }
    var validChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;=?@¢¼½¾“⅓';
    
    var ordered = [];
    for (var i = 0, len = validChar.length; i < len; i++) {
      if (letUsed[validChar.charAt(i)]) {
        ordered.push({'letter':validChar.charAt(i), 'count':letUsed[validChar.charAt(i)]});
      }
    }
    $scope.textBack = ordered;
  }
});
