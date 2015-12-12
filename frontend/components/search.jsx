var React = require('react');

var Map = require('./map.jsx');
var Index = require('./index.jsx');

var ApiUtil = require('../util/api_util.js');
var BenchStore = require('../stores/bench.js');

var Search = React.createClass({
    displayName: 'Search',
    render() {
        return (
        	<div>
            <Map  />
            <Index />
           </div>
        );
    }
});

module.exports = Search;