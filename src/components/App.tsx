import React from 'react';
import Header from './Header.tsx';
import LandingPage from './LandingPage.tsx';
import '../styles/App.css';
import { ChakraProvider, extendBaseTheme, Box, Center, extendTheme } from '@chakra-ui/react';

const theme = extendBaseTheme({
  components: {
    Box
  }  
})


const themeStyle = extendTheme({
  colors: {
    blue: "soft blue",
    lightblue: "light cornflower blue",
    crystalblue: "cystal blue",
    periwinkle: "lightSteelBlue",
    purple: "purple sage bush"
  }
})

const App = () =>{
  return(
    <ChakraProvider 
      theme={theme}
      >
        <Header/>
        <Box 
          h={592}
          w="70%" 
          alignItems = "center" 
          bg = {themeStyle.colors.periwinkle}
          display = "flex"
          justifySelf= "center"
          borderRadius = "35px"
          >
          <LandingPage themeStyle = {themeStyle.colors}/>
        </Box>
    </ChakraProvider>
  );
}
export default App;