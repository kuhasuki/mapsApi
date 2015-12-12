var ReactDOM = require('react-dom');
var React = require('react');

var ApiUtil = require('./util/api_util.js');
var BenchStore = require('./stores/bench.js');

var Map = require('./components/map.jsx');
var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');


document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector('#content');
  console.log(content);
   ReactDOM.render(<Search />, content);
});
