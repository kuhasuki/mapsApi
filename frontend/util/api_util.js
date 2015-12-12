
var ApiActions = require("../actions/apiActions.js");

ApiUtil = {
  fetchBenches: function(){
    $.get('/api/benches', {}, function(benches){
      ApiActions.allBenches(benches);
    });
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
