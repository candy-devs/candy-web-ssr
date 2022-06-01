import { NextPage } from 'next';
import React from 'react'
import Divide from '../../components/Divide';
import NavigationLayout from '../../components/layouts/NavigationLayout';

const Board: NextPage = () => {
  return (
    <NavigationLayout page={0}>
      <Divide />
      <Divide />
    </NavigationLayout>
  );
};

export default Board;