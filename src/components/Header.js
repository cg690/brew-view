import React from 'react';

import { Box, Link, Divider, Center, Text } from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box w="100%" bgColor="black" h="40px">
      <Center h="100%" >
        <Link as={NavLink} 
          to={"/"}
          mx={10} 
          style={{
            textDecoration: 'none',
            outline: 'none',
            border: 'none'
          }}
        >
          <Text
            color="white"
            p={2}
            
            _hover={{
              color: "grey"
            }}
          >
          Home
          </Text>
        </Link>

        <Divider orientation="vertical" h="100%" color="black" />

        <Text color="white" p={3}>Reviews</Text>

        <Divider orientation="vertical" h="100%" color="black" />

        
        <Link as={NavLink} 
        to={"/map"}
        mx={10} 
        style={{
          textDecoration: 'none',
          outline: 'none',
          border: 'none'
        }}
      >
        <Text
          color="white"
          p={2}
          
          _hover={{
            color: "grey"
          }}
        >
        Map
        </Text>
      </Link>




      </Center>
    </Box>
  );
};

export default Header;