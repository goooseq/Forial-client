import '../App.css';
import { Text, Box,  Heading, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Image} from '@chakra-ui/react';
import Chasi from '../images/Chasi.png'
import React from 'react';

const  JasiItem= () =>{
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
                            src={Chasi}
                            width={'300px'}
                            alt='Часы'
                        /> 

                {/* <Carousel images={images} /> */}
                <Box>
                    <Heading 
                    fontSize={'30px'}
                    >Часы</Heading>
                

                </Box>
        <Box>
        <Button colorScheme='teal' size='lg'>Купить</Button>
        
        </Box>
            </CardBody>


        </Card>

        
    )
}
export default JasiItem;    