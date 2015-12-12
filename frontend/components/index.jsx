var React = require('react');

var Index = React.createClass({
getInitialState: function() {
    return { benches: BenchStore.all()
          
    };
},
_hasChanged: function(){
	this.setState({benches: BenchStore.all()});
},
componentWillUnmount: function() {
  this.mysteryToken.remove();
},
componentDidMount: function() {
    ApiUtil.fetchBenches();
    this.mysteryToken = BenchStore.addListener(this._hasChanged);  
},
render: function(){
	return(
		<div></div>
		);
}
});

module.exports = Index;