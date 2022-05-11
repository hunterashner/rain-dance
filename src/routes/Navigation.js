import React from "react";
import { Outlet } from 'react-router-dom';
import MainNav from '../components/MainNav/MainNav';

const Navigation = () => {
  return(
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default Navigation;