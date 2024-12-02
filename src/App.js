import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';


import Home from './pages/Home';
import Record from './pages/Record';
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './section/Header';

function App() {

  return (
    <>
      <Router>
        <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Record />} />

          <Route path="/record" element={<Record />} />

          <Route path="*" /> {/* This route is for handling 404 not found */}
        </Routes>
        </ChakraProvider>
      </Router>
      </>
  );
}

export default App;
