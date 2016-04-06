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
  
    
var onHand = [
{letter : 'A', count: 12},
{letter : 'B', count: 8},
{letter : 'C', count: 8},
{letter : 'D', count: 8},
{letter : 'E', count: 16},
{letter : 'F', count: 6},
{letter : 'G', count: 6},
{letter : 'H', count: 6},
{letter : 'I', count: 12},
{letter : 'J', count: 6},
{letter : 'K', count: 6},
{letter : 'L', count: 10},
{letter : 'M', count: 8},
{letter : 'N', count: 8},
{letter : 'O', count: 12},
{letter : 'P', count: 8},
{letter : 'Q', count: 6},
{letter : 'R', count: 8},
{letter : 'S', count: 8},
{letter : 'T', count: 8},
{letter : 'U', count: 10},
{letter : 'V', count: 6},
{letter : 'W', count: 6},
{letter : 'X', count: 6},
{letter : 'Y', count: 6},
{letter : 'Z', count: 6},
{letter : '0', count: 4},
{letter : '1', count: 4},
{letter : '2', count: 4},
{letter : '3', count: 4},
{letter : '4', count: 4},
{letter : '5', count: 4},
{letter : '6', count: 4},
{letter : '7', count: 4},
{letter : '8', count: 4},
{letter : '9', count: 4},
{letter : '!', count: 2},
{letter : '"', count: 2},
{letter : '#', count: 2},
{letter : '$', count: 2},
{letter : '%', count: 2},
{letter : '&', count: 2},
{letter : '\'', count: 2},
{letter : '(', count: 2},
{letter : ')', count: 2},
{letter : '*', count: 2},
{letter : '+', count: 2},
{letter : ',', count: 2},
{letter : '-', count: 2},
{letter : '.', count: 2},
{letter : '/', count: 2},
{letter : ':', count: 2},
{letter : ';', count: 2},
{letter : '=', count: 2},
{letter : '?', count: 2},
{letter : '@', count: 2},
{letter : '¢', count: 2},
{letter : '¼', count: 2},
{letter : '½', count: 2},
{letter : '¾', count: 2},
{letter : '“', count: 2},
{letter : '⅓', count: 2}];
  $scope.textOnHand = onHand;

});












