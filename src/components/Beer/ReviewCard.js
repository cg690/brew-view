import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

const ReviewCard = ({beer}) => {
  const AnimatedBox = animated(Box);
  const trans = (s) => `scale(${s})`
  
  const [props, set] = useSpring(() => ({ 
    s: 1,
    opacity: 1,
    from: {
      opacity:0
    }
  }))

  return (
    <AnimatedBox 
      onMouseMove={() => set({ s: 1.1 })}
      onMouseLeave={() => set({ s: 1 })}
      bg="#68D391"
      w="100%"
      p={2}
      borderRadius="10px"
      borderWidth="1px"
      borderColor="gray"
      style={{ 
        opacity: props.opacity.interpolate( opacity => `${opacity}`),
        transform: props.s.interpolate(trans)
      }}>
        <Box d='flex'>
          <Image src={beer.beer.label} boxSize="75px" m={1}/>
          <Box>
            {beer.beer.name}
          </Box>
        </Box>
    </AnimatedBox>
  )
}

export default ReviewCard
