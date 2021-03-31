import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./app.css";
import { Box } from '@chakra-ui/react';

const BrewMap = ({beers}) => {
  //getting breweries and locations by using their info stored in beers reducer
  // const brewArr = (brew) => {
  //   return brew.beer.brewery
  // }
  // console.log(_.map(beers, brewArr))
  //console.log(beers)



  const mapMarkers = Object.keys(beers).map( beer => {
      return (
        <Marker
          position={[beers[beer].beer.brewery.location.lat, beers[beer].beer.brewery.location.lng]} 
          key={beer}
        >
          <Popup>
            {beers[beer].beer.name} by {beers[beer].beer.brewery.brewery_name} <br /> Easily customizable.
          </Popup>
        </Marker>
      )
    })


  const position = [40.6737, -73.9991]
  return(
    <Box m={10}>
      <MapContainer center={position} zoom={5} scrollWheelZoom={false} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {beers && mapMarkers}
      
    </MapContainer>
  </Box>
  )
}

const mapStateToProps = (state) => {
  return{
    beers: state.beers
  }
}

export default connect(mapStateToProps)(BrewMap);