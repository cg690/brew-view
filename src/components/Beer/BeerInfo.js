import React from 'react';
import { Image, Center, Heading, Text } from '@chakra-ui/react';


const BeerInfo = ({ beer }) => {
  
  return(
    <>
      <Image my={3} margin="auto" boxSize="250px" src={beer.beer_label}/>
      <Center m={2}>
        <Heading color="#fc0" size="lg" textAlign="center">UT Rating: {beer.rating_score}</Heading>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/9/92/Untappd.svg" boxSize="50px"></Image>
      </Center>
      <Heading size="xl" color="white" textAlign="center">{beer.beer_name}</Heading>
      <Heading color="grey" size="lg" textAlign="center">{beer.brewery && beer.brewery.brewery_name}</Heading>
      <Heading color="white" size="md" textAlign="center">{beer.beer_style} - {beer.beer_abv}%</Heading>
      <Text textAlign="center" color="white">{beer.beer_description}</Text>
    </>
  )
}

export default BeerInfo;