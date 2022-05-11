import React from "react";
import { Table, Container } from 'react-bootstrap';

const WeatherTable = (props) => {
  return(
    <>
      <Container>
        <Table striped hover boder variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Precipitation %</th>
              <th>Average Wind</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/01/2022</td>
              <td>75 Degrees</td>
              <td>0.00%</td>
              <td>13 mph, Easterly</td>
            </tr>
            <tr>
              <td>01/01/2022</td>
              <td>75 Degrees</td>
              <td>0.00%</td>
              <td>13 mph, Easterly</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default WeatherTable;