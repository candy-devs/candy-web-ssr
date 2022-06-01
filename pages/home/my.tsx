import { NextPage } from 'next';
import React from 'react'
import Divide from '../../components/Divide';
import NavigationLayout from '../../components/layouts/NavigationLayout';

const My: NextPage = () => {
  return (
    <NavigationLayout page={3}>
      <Divide />
      <Divide />
    </NavigationLayout>
  );
};

export default My;