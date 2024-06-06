import '../App.css';
import { Image,Text, Box, Flex, InputLeftElement, InputGroup, Stack, Input, InputRightElement, AbsoluteCenter } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar';
import AboutUs from '../images/AboutUs.jpg'
import Store from '../images/Store.webp'
const NewsPage = () => {
    return (
        <>
            <NavBar />
            <Flex
                pt={'23px'}
                h={'100%'}
                justify={'center'}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >

                <Flex
                    boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
                    display={'flex'}
                    flexDirection={'column'}
                    bgColor={'#F1F7F6'}
                    width={'90%'}
                    height={'100%'}

                >
                    <Text fontSize={'30px'} color={'teal'}>AboutUs</Text>

                    <Flex

                        display={'flex'}
                        alignItems={'stretch'}
                        width={'100%'}
                        background={''}
                        borderRadius={'8px'}
                        padding={'10px 50px'}
                        height={'500px'}
                        marginTop={'auto'}
                        justify={'center'}
                    >



                        <Box >
                            <Link>
                                <Text color={'teal'}>History of Lucas Divestore</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>In the 60ies of the previous century, Dick Lucas (1945 and founder of Lucas Diving) was already active in diving the Great Barrier Reef (Australia). Early 80ies Dick Lucas together with his son Richard became certified divers and in 1983 LUCAS DIVING was founded. A family company with Dick, Dinie and their sons Richard and Bjorn. Over the last 4 decades it grew to a company with a loyal team and within the dive industry Lucas Diving became a trendsetter in Europe and also far outside of Europe. Dick, Bjorn and Richard are still active divers and all 3 are scuba-instructors (Dick is even a Course Director Trainer)</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>It started in 1983 out of their home in Almelo, and after a few years it moved to Wierden to a larger place. 5 years later again it moved to a new place in Nijverdal and in 2005 the Lucas family bought the premises of over 4000 m2 meter in which it is located today.</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>The Lucas company has many customers in different areas. E.g. in 1995 Dick was asked to service the Dutch Royal Family after their official state visit to Indonesia, the Royal Family planned some extra private days for scuba diving and Dick made sure all became a pleasant experience for them. Richard Lucas has been involved in the 90ties in the first Arctic and Antarctic scuba dive expeditions (North and South pole) and he himself dove under both the ice shelves. Also Bjorn is active with groups traveling to the most isolated areas and takes care of the diving and logistics. </Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Dick Lucas was, and is still now, the only European who became a member of the board of directors from DEMA (Diving Equipment and Marketing Association). Through this the contacts where made with heroes like Jaques Yves Cousteau (who passed away at the age of 87) and his son Jean Michel Cousteau. Al Giddings (uw-filmer known for e.g. James Bond movies and the Abyss, Titanic) Silvia Earl (the first female deep sea oceanograph) and many movie stars and celebrities who are connected with scuba diving.</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Among the customers of Lucas Diving are many different people, groups, companies. From Royalty, gouvernement, fire departments, army, police, special forces, universities, musea, pools, dive schools, dive centres and hopefully also you. In 2006 Lucas Diving went also online with the Lucasdivestore website and within short time frame became a leading company with presenting all major scuba diving brands, this all made possible due to the dynamic team working within Lucas Diving.</Text>
                            </Link>
                            <Link >
                                <Text color={'teal'}>Lucas Duiksport B.V.</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Bedrijvenweg 3a</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Contact: D.B.A. Lucas</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Email: info@lucasdivestore.com</Text>
                            </Link>

                           
                        </Box>
                   



                       
                    </Flex>


                    <Flex
            justify={'center'}
            align={"center"}
            mb={'70px'} 
        >
            {<Image
                src={Store}
                width={'780px'}
                height={'410px'}
                // width={'80%'}
                alt='Дайверы'
                className='photoHover'
            /> }

</Flex>























        
            
                </Flex>
            </Flex>

        </>
    )
}

export default NewsPage;
