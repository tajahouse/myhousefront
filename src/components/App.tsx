import React from 'react';
import Header from './Header.tsx';
import LandingPage from './LandingPage.tsx';
import '../styles/App.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = () =>{
  return(
    <ChakraProvider>
        <Header/>
        <LandingPage/>
    </ChakraProvider>
  );
}
export default App;