import React from "react";
import { GiWateringCan, GiSeedling } from "react-icons/gi";
import { GrAdd, GrBarChart, GrAlarm, GrGrow} from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Container, Button, Col, Row } from 'react-bootstrap';

const MainButtonTray = () => {
  return(
    <>
      <Container>
        <Row>
          <Col>
          <Link to='/addplants'><Button variant='outline-dark'><GrAdd /></Button></Link>
          <Link to='/statistics'><Button variant='outline-dark'><GrBarChart /></Button></Link>
          <Link to='/alarms'><Button variant='outline-dark'><GrAlarm /></Button></Link>
          <Link to='/myseeds'><Button variant='outline-dark'><GrGrow /></Button></Link>
          </Col>
        </Row>
        <Row><br /></Row>
        <Row>
          <Link to='/howstheweather'><Button variant='dark'>How's The Weather?</Button></Link>
        </Row>
      </Container>
    </>
  );
}

export default MainButtonTray;