import React from 'react';
import { Box, Image, Heading, useMediaQuery, Text } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

const ReviewCard = ({beer}) => {

  const [isSmaller] = useMediaQuery("(max-width: 800px)")

  const AnimatedBox = animated(Box);
  const trans = (s) => `scale(${s})`

  const [props, set] = useSpring(() => ({ 
    s: 1,
    opacity: 1,
    from: {
      opacity:0
    }
  }))

  //borderWidth="1px"
  //borderColor="gray"
  
  return (
    <AnimatedBox 
      fontSize={isSmaller ? "12px" : "16px" }
      onMouseMove={() => set({ s: 1.1 })}
      onMouseLeave={() => set({ s: 1 })}
      bg="#68D391"
      w="100%"
      p={2}
      borderRadius="10px"
      boxShadow="dark-lg"
      height="180px"
      style={{ 
        opacity: props.opacity.interpolate( opacity => `${opacity}`),
        transform: props.s.interpolate(trans)
      }}>
        <Box d='flex'>
          <Image src={beer.beer.label} boxSize="75px" m={1}/>
          <Box>
            <Heading size="sm" noOfLines={2}>{beer.beer.name}</Heading>
            <Text noOfLines={2}>{beer.beer.style} - {beer.beer.abv}%</Text>
          </Box>
        </Box>
        <Text fontWeight="bold">My Review:</Text>
        <Box d="flex" py={1}>
          <Text w="50%">Smell: {beer.review.smellRank}</Text>
          <Text>Taste: {beer.review.tasteRank}</Text>
        </Box> 
        <Box d="flex" py={1}>
          <Text w="50%">Feel: {beer.review.feelRank}</Text>
          <Text>Overall: {beer.review.overallRank}</Text>
        </Box>

    </AnimatedBox>
  )
}

export default ReviewCard
