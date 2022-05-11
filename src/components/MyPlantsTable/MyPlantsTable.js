import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'antd';
import Monarda from '../../Images/monarda.jpg';
import ButterflyBush from '../../Images/butterflybush.jpg';
import FoxGlove from '../../Images/foxglove.jpg';
import './MyPlantsTable.scss';

const MyPlantsTable = (props) => {
  return(
    <>
      <h3 id='my-plants-table-name'>My Plants</h3>
      <Container>
        <Row id='my-plants-table-row'>
          <Col className="my-plants-col">
            <Image
            className='my-plants-table-img'
            width={128}
            src={Monarda}
            />
          </Col>
          <Col>
            <Image
            className='my-plants-table-img'
            width={128}
            src={FoxGlove}
            />
          </Col>
          <Col className="my-plants-col">
            <Image
            className='my-plants-table-img'
            width={128}
            src={ButterflyBush}
            />
          </Col>
          <Col>
            <Image
            className='my-plants-table-img'
            width={128}
            src={Monarda}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default MyPlantsTable;