import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image, Flex} from '@chakra-ui/react';
import divers from '../images/divers.jpg'
import Carousel from './Carousel';
import React from 'react';
import watch from '../images/watch.jpg'
import { CostumesRoute} from '../utils/const';
const  DiversItem = () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        <Card>
            




            
      
        <Flex
            justify={'center'}
            align={"center"}
        >
            {<Image
                src={divers}
                width={'780px'}
                height={'410px'}
                // width={'80%'}
                alt='Дайверы'
                className='photoHover'
            /> }






                    
                         <Text position={"absolute"} alignContent={'center'} flexWrap={'wrap'} fontSize={'30px'} color={"white"}><b> Костюмы и аксессуары</b></Text>
                  
            


        </Flex>
    

        </Card>

        
    )
}
export default DiversItem;    