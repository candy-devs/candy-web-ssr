import { NextPage } from 'next'
import React from 'react'
import { BackIcon } from '../../components/Icons'
import BottomNavigation from '../../components/layouts/BottomNavigation'

const Home: NextPage = () => {
  return (
    <div>
      <BottomNavigation selected={0}/>
    </div>
  );
};

export default Home;