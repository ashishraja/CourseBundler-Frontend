import React from 'react'
import { Spinner , VStack } from '@chakra-ui/react'

const Loader = ({color = "yellow.500"}) => {
  return (
    <VStack h="100vh" justifyContent={"center"}>
        <div style={{transform:'scale(4)'}}>
            <Spinner 
            thickness="2px"
            speed=".65s" 
            size="xl" 
            emptyColor="transparent" 
            color={color}/>
        </div>
    </VStack>
  )
}

export default Loader;