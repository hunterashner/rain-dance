import React from "react";
import 'antd/dist/antd.css';
import { Container, Row, Col } from 'react-bootstrap';
import { DatePicker, Space } from 'antd';

const MainGreeting = () => {

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return(
    <>  
      <Container>
          <Row>
            <Col>
              <p>Start Date:</p>
              <DatePicker onChange={onChange} />
            </Col>
            <Col>    
              <p>End Date:</p>
              <DatePicker onChange={onChange} />
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default MainGreeting;