import './App.css';
import React, { useState, useEffect, useRef } from "react";
import Header from './components/common/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/HomePage';
import PageNotFound from './components/PageNotFound';

let testCities = ['Austin', 'Miami' ];

function App() {
  // const [tempDetails,setTemplateDetails] = React.useState(testData);
  const [cities,setCities] = useState(testCities);
  const updatedCities = (newCity) => {
    cities.push(newCity)
    setCities(cities => [...cities,newCity] );
  };

  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route exact path='/' Component={Homepage}></Route>
        <Route path='*' Component={PageNotFound} />
        {/* <Route path="/cityWeather/:slug" component={ManageCoursePage} /> */}
      </Routes>      
    </div>
  );
};

export default App;
