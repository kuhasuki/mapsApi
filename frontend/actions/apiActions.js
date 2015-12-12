var Dispatcher = require('../dispatcher/dispatcher.js');
var BenchConstants = require('../constants/bc.js');


var ApiActions = {
  allBenches: function(benches){

    Dispatcher.dispatch({
      actionType: BenchConstants.GET_ALL_BENCHES,
      benches: benches
    });
  },
  acquirePokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: BenchConstants.POKEMON_ACQUIRED,
      pokemon: pokemon
    });
  }
};

module.exports = ApiActions;
