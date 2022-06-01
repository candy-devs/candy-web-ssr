import { NextPage } from 'next';
import React from 'react'
import Divide from '../../components/Divide';
import NavigationLayout from '../../components/layouts/NavigationLayout';

const Ad: NextPage = () => {
  return (
    <NavigationLayout page={4}>
      <Divide />
      <Divide />
    </NavigationLayout>
  );
};

export default Ad;