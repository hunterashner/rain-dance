import React from "react";
import { Calendar, Button } from 'antd';
import { Container } from 'react-bootstrap';
import WeatherTable from "../components/WeatherTable/WeatherTable";
import { Link } from 'react-router-dom';
import { BiHomeHeart } from "react-icons/bi";

const HowsTheWeather = () => {

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  }


  return(
    <>
      <br />
      
      <Container>
      <Link to='/'><Button><BiHomeHeart /> Dashboard</Button></Link>
      <br />
      <h5>5 Day Forecast</h5>
      <WeatherTable />
      </Container>
      <Container>
      <h5>Click Day To Display Weather Info</h5>
        <div className="site-calendar-card">
          <Calendar fullscreen={false} onPanelChange={onPanelChange}></Calendar>
        </div>
      </Container>
    </>
  );
}

export default HowsTheWeather;