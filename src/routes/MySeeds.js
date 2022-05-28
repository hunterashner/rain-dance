import React from "react";
import Seeds from '../components/Seeds/seeds';
import { Container } from 'react-bootstrap';
import { Select } from 'antd';
const { Option } = Select;

const MySeeds = () => {
  return(
    <>
      <Container>
        <br />
        <h1>Discover New Plants</h1>
        <h4>Select a seed to see growing instructions.</h4>
        <Select
          showSearch
          placeholder='Select a seed'
          optionFilterProp="children"
        >
          <Option value='seed'>Seed</Option>
          <Option value='seed1'>Seed</Option>
          <Option value='seed2'>Seed</Option>
          <Option value='seed3'>Seed</Option>
          <Option value='seed4'>Seed</Option>
        </Select>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Seeds />
    </>
  );
}

export default MySeeds;