import '../App.css'; 
import { Flex } from '@chakra-ui/react'; 
import CardItem from '../components/carditem'; 
// import ScorpenaAlpha from '../components/ScorpenaAlpha'; 
import PlawkiItem from '../components/plawkiitem'
import NavBar from '../components/NavBar'; 
import JasiItem from '../components/jasiitem';
import MasciItem from '../components/masciitem';
const ShopPage = () =>{ 
  return ( 
    <>
    <NavBar/> 
    <Flex 
      width={'100%'} 
      flexWrap={'wrap'} 
    > 

    <Flex 
        justify={'center'} 
        align={'center'} 
        flexWrap={'wrap'} 
        gap={'35px'} 
        mt={'50px'} 
    > 
        <CardItem/> 
        <JasiItem/> 
        <MasciItem/> 
        <PlawkiItem/> 
        <JasiItem/> 
        <MasciItem/> 
        <CardItem/> 
        
        
        <CardItem/> 
        {/* <ScorpenaAlpha/>  */}
    </Flex> 
    </Flex> 
    </>
  ); 
} 
export default ShopPage;
