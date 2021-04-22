import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./app.css";
import { Box } from '@chakra-ui/react';
import MapCard from './MapCard';

const BrewMap = ({beers}) => {
  //getting breweries and locations by using their info stored in beers reducer
  const [beerDict, setBeerDict] = useState({})

  useEffect(() => {
    const doStuff = () => {
      let newBeerDict = {}
      Object.keys(beers).forEach((beer) => {
        if(beers[beer].beer.brewery.brewery_id.toString() in newBeerDict){
          newBeerDict = {
            ...newBeerDict,
            [beers[beer].beer.brewery.brewery_id]: [...newBeerDict[beers[beer].beer.brewery.brewery_id], beers[beer]]
          }
        }
        else{
          newBeerDict = {...newBeerDict, [beers[beer].beer.brewery.brewery_id]: [beers[beer]]}
        }
      })
      setBeerDict(newBeerDict);
    }
    doStuff()
  }, [beers])

  const mapMarkers = Object.keys(beerDict).map( arr => {
    
      return (
        <Marker
          position={[beerDict[arr][0].beer.brewery.location.lat, beerDict[arr][0].beer.brewery.location.lng]} 
          key={beerDict[arr][0].beer.brewery.brewery_id}
        >
          <Popup>
          {
            beerDict[arr].map((beer) => {
              return(
                <MapCard key={beer.bid} beerInfo={beer} />
              )
            })
          }
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