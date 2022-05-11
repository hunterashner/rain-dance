import React from "react";
import { Link } from 'react-router-dom';
import WeatherTable from "../components/WeatherTable/WeatherTable";
import { Container } from 'react-bootstrap';
import MainGreeting from "../components/MainGreeting/MainGreeting";
import MainBranding from '../components/MainBranding/MainBranding';
import MyPlantsTable from "../components/MyPlantsTable/MyPlantsTable";

const Home = () => {
  return(
    <>
      <Container>
        <MainBranding />
        <MyPlantsTable />
        <MainGreeting />
        <WeatherTable />
      </Container>
    </>
  );
}

export default Home;