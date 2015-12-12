var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var _benches = [];
var BenchStore = new Store(Dispatcher);

var BenchConstants = require('../constants/bc.js');


BenchStore.all = function () {
return _benches.slice(0);
};

BenchStore.repopulateAll = function (benches) {
  _benches = [];
  benches.benches.forEach(function(bench){
    _benches.push(bench);
  })
};

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.GET_ALL_BENCHES:
      BenchStore.repopulateAll(payload.benches);
      BenchStore.__emitChange();
      break;
    case "POKEMON_ACQUIRED":
      // console.log(payload.pokemon);
      PokemonStore.resetPokemon(payload.pokemon);
      break;
  }
};

window.BenchStore = BenchStore;

module.exports = BenchStore
