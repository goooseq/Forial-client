import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import lasty from '../images/lasty.png'
import React from 'react';

const  DiveriItem = () =>{
    // const images = [
    //     {lasty},
    //     {lasty},
    //     {lasty}
    // ];
    return(
        <Card
            width={'400px'}
            height={'500px'}
            background={'#0534'}
            boxShadow={'1px 1px  10px #808080'}
            borderRadius={'10px'}
        >
            

            
        <Box>
        <Button colorScheme='teal' size='lg'>Diving</Button>
        
        </Box>



        </Card>

        
    )
}
export default DiveriItem;    