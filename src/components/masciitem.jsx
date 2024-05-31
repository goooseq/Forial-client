import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import MASCA from '../images/MASCA.png'
import React from 'react';

const  MasciItem= () =>{
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
            

            <CardBody
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >

                        <Image
                            src={MASCA}
                            width={'300px'}
                            alt='Маски'
                        /> 

                {/* <Carousel images={images} /> */}
                <Box>
                    <Heading 
                    fontSize={'30px'}
                    >Маски</Heading>
                

                </Box>
        <Box>
        <Button colorScheme='teal' size='lg'>Купить</Button>
        
        </Box>
            </CardBody>


        </Card>

        
    )
}
export default MasciItem;    