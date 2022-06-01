import { NextPage } from 'next';
import React from 'react'
import Divide from '../../components/Divide';
import NavigationLayout from '../../components/layouts/NavigationLayout';

const Recent: NextPage = () => {
  return (
    <NavigationLayout page={1}>
      <Divide />
      <Divide />
    </NavigationLayout>
  );
};

export default Recent;