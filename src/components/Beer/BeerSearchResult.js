import React from 'react';
import { Image, Heading, Text, Box, Link, Button, useMediaQuery } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"



const BeerSearchResult = ({ beer, brewery, isAdded }) => {

  const styleColor = (style) => {
    const word=style.toLowerCase();
    
    if(word.includes("stout")){
      return "#652B19"
    }
    else if(word.includes("ipa")){
      return "#D69E2E"
    }
    else return "rgba(204, 204, 204, 0.5)"
  }
  /*
  const abvColor = (abv) => {
    console.log(abv)
    if(abv<6){
      return "#38A169"
    }
    else if(abv<9){
      return "#F6E05E"
    }   
    else{
      return "#C53030"
    }
  }
  */

  const [isSmaller] = useMediaQuery("(max-width: 800px)")

  return (
    <Box d="flex" overflow="hidden" alignItems="center" fontSize={isSmaller ? "12px" : "16px" }>
      <Image src={beer.beer_label} boxSize={isSmaller ? "75px" : "100px"}/>
      <Box pl="6" w="87%" >
        <Text fontSize="1.5em" fontWeight="bold">{beer.beer_name}</Text>
        <Text>{brewery.brewery_name}</Text>
        <Box d="flex">
          <Text 
            color={`${styleColor(beer.beer_style)}`}
            fontWeight="bold"
            fontStyle="italic"
          >
            {beer.beer_style} - {beer.beer_abv}%
          </Text>
        </Box>
        <Box overflow="hidden" w="100%">
          <Text noOfLines={1}>{beer.beer_description}</Text>
        </Box>
      </Box>
      
        <Link as={ReachLink} to={ isAdded ? `/beers/edit/${beer.bid}` : `/beers/add/${beer.bid}` }>
          <Button 
            m={isSmaller ? 1.5 : 3}
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
