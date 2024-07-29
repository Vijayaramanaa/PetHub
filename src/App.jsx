import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PetList from './components/PetList.jsx';
import PetDetails from './components/PetDetails.jsx';
import SearchForm from './components/SearchForm.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import {usePetContext } from './context/PetContext.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header.jsx';
import Breed from './components/Breed.jsx';
import Footer from './components/Footer.jsx';
import PNF from './components/PNF.jsx';



const App = () => {
  const {selectBreed,setSelectBreed} = usePetContext();

return(

    <Router>
      <ErrorBoundary>
        <div className='flex flex-col w-full h-full  overflow-hidden align-middle justify-between'>
        <div>
        <Header/>
        </div>
        <div>
          {selectBreed ? <Breed/> :
        <Routes>
          <Route path="/" element={<PetList/>} />
          <Route path="/pet/:id" element={<PetDetails/>} />
          <Route path="/search" element={<SearchForm/>} />
          <Route path="*" element={<PNF/>}/>
        </Routes>
           }
        </div>
        <div>
        <Footer/>
        </div>
        </div>
      </ErrorBoundary>
    </Router>
)};

export default App;
