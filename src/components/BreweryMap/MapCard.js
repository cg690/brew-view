import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const MapCard = ({ beerInfo }) => {
  return(
    <Box d="flex" w="200px">
      <Image boxSize="50px" m="2px" src={beerInfo.beer.label}></Image>
      <Box alignItems="center">
        <Text>{beerInfo.beer.name}</Text>
      </Box>
    </Box>
  )
}

export default MapCard;
