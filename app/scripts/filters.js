/**
 * Created by Bitusi on 19/01/2015.
 */
angular.module('fed2App')
.filter('object2Array', function() {
  return function(input) {
    var out = [];
    for(i in input){
      out.push(input[i]);
    }
    return out;
  }
});
