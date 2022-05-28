import React from "react";
import { Steps } from 'antd';
import { Container } from 'react-bootstrap';
const { Step } = Steps;

const Seeds = () => {
  return(
    <>
      <Container>
        <Steps direction="vertical" current={1}>
          <Step title={'Dig a hole x inches deep.'} description={'some useful info here...'}/>
          <Step title={'Plant seeds x inches apart.'} description={'some more useful info...'}/>
          <Step title={'Water generously until established.'} description={'even more useful info...'}/>
        </Steps>
      </Container>
    </>
  );
}

export default Seeds;