import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: this.props.lat,
        lng: this.props.long,
      },
    });
  }
  render() {
    console.log(this.props);
    return <div ref="map"></div>;
  }
}
export default GoogleMap;
