import React from 'react';
import { PropTypes } from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import { mapStyles, StylesContactoPage } from './styles';

function MapContainer({ google }) {
  return (
    <StylesContactoPage>
      <Map
        google={google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 4.605928544968502, lng: -74.08789813969327 }}
      />
    </StylesContactoPage>
  );
}

MapContainer.propTypes = {
  google: PropTypes.any,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRtbdH9zi_9vxrAGzifH2AdLVYXhufzlU',
})(MapContainer);
