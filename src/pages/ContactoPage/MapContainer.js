import React from 'react'
import { StyledMap, mapStyles } from './styles'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer({ google }) {
    return (
        <StyledMap>
            <Map
                google={google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </StyledMap>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAH_Nn3DtZj4s2j2-e2OMRSzICEuURDcX0'
  })(MapContainer);
