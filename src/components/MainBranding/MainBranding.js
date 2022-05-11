import React from "react";
import { Container, Button, Col, Row } from 'react-bootstrap';
import './MainBranding.scss';
import { BsFillCloudRainFill } from 'react-icons/bs';
import MainButtonTray from "../MainButtonTray/MainButtonTray";


const MainBranding = () => {
  return(
    <>
      <Container>
        <div className="main-branding">
          <h1>Rain Dance<BsFillCloudRainFill /></h1>
          <h3>Better nature through data analysis.</h3>
          <MainButtonTray />
        </div>
      </Container>
    </>
  );
}

export default MainBranding;