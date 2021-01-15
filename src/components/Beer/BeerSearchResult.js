import React from 'react';
import { Image, Heading, Text, Box, Link, Button } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"

const BeerSearchResult = ({ beer, brewery, isAdded }) => {
  return (
    <Box d="flex" overflow="hidden" alignItems="center">
      <Image src={beer.beer_label} boxSize="100px"/>
      <Box pl="6" w="87%">
        <Heading as="h1" size="lg">{beer.beer_name}</Heading>
        <Heading as="h2" size="md">{brewery.brewery_name} - <i style={ {color: 'rgba(204, 204, 204, 0.5)' }}>{beer.beer_style}</i> - <i style={ {color: 'rgba(204, 204, 204, 0.5)' }}>{beer.beer_abv}%</i></Heading>
        <Box overflow="hidden" w="100%">
          <Text noOfLines={1}>{beer.beer_description}</Text>
        </Box>
      </Box>
      
        <Link as={ReachLink} to={ isAdded ? `/beers/edit/${beer.bid}` : `/beers/add/${beer.bid}` }>
          <Button 
            m={3}
            float="right"
            colorScheme="blue"
            bgGradient={isAdded ? "linear(to-l, red.500, yellow.500)" : "linear(to-r, blue.500, teal.300)"}
            _hover={{
              bgGradient:"linear(to-r, teal.600,green.200)"
            }}
          >
            {isAdded ? 'EDIT' : 'ADD'}
          </Button>
        </Link>
    </Box>
  )
}


export default BeerSearchResult
