var React = require('react');
var BenchStore = require('../stores/bench.js');

var Map = React.createClass({
    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
   		this.mysteryToken = BenchStore.addListener(this._hasChanged);  
    },
    _hasChanged: function(){
    	this.locations = BenchStore.all();
    	console.log(this.locations);
    	this.locations.forEach(this.addLocationMarker);
    },
    addLocationMarker: function (location) {
          //we make an instance of the google maps LatLng class, args are
          //(lat, lng)
          var pos = new google.maps.LatLng(location.lat, location.lon),
          //then we use our new instance of LatLng to make a marker
              marker = new google.maps.Marker({
                position: pos,
                //set map to this.map, this is what adds it to the map
                //when we want to remove this marker, we need to set its
                //map property to null using myMarker.setMap(null)
                map: this.map
              });
          marker.addListener('click', function () {
            //when the marker is clicked on, alert the name
            alert("clicked on: " + location.description)
          });
        },
    render: function() {
        return (
            <div className="map" ref="map" id="map"></div>
        );
    }
});

module.exports = Map;