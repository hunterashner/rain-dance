import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Testing from './routes/Testing';
import HowsTheWeather from "./routes/HowsTheWeather";
import MySeeds from "./routes/MySeeds";
import Alarms from "./routes/Alarms";
import Statistics from "./routes/Statistics";
import AddPlants from "./routes/AddPlants";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/howstheweather' element={<HowsTheWeather />} />
        <Route path='/myseeds' element={<MySeeds />} />
        <Route path='/alarms' element={<Alarms />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/addplants' element={<AddPlants />} />
      </Route>
    </Routes>
  );
}

export default App;
