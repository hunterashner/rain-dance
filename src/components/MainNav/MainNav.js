import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { BsFillCloudRainFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GiPlantSeed, GiSeedling, GiGroundSprout } from "react-icons/gi";
import './MainNav.scss';

const MainNav = () => {
  return(
    <>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand id='main-nav-brand'>RainDance<BsFillCloudRainFill /></Navbar.Brand>
          <Navbar.Text id='main-nav-text'>
            <Link to='/addplants'><GiPlantSeed />Grow </Link>
            <Link to='/myseeds'><GiSeedling />Plant </Link>
            <Link to='/alarms'><GiGroundSprout />Monitor</Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;