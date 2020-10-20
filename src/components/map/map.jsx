import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {

  componentDidMount() {
    const {offers, defaultCity, config} = this.props;
    const icon = leaflet.icon({
      iconUrl: config.ICON_URL,
      iconSize: config.ICON_SIZE
    });

    const zoom = config.DЕFAULT_ZOOM;
    const map = leaflet.map(`map`, {
      center: defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(defaultCity, zoom);

    leaflet
      .tileLayer(config.TILE_LAYER_URL_TEMPLATE, config.TILE_LAYER_URL_OPTIONS)
      .addTo(map);

    offers.filter((offer) => offer.city === `Amsterdam`)
      .forEach((offer) => {
        const offerCords = offer.coordinates;
        leaflet
        .marker(offerCords, {icon})
        .addTo(map);
      });
  }

  render() {
    const {config} = this.props;
    return (
      <div id="map" style={config.STYLE}>

      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  config: PropTypes.object.isRequired
};


export default Map;

