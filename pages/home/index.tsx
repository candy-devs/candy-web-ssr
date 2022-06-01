import { NextPage } from 'next'
import React, { useRef, useState } from 'react'
import Divide from '../../components/Divide';
import { BackIcon } from '../../components/Icons'
import IosSegmentedControl from '../../components/IosSegmentedControl';
import BottomNavigation from '../../components/layouts/nav/BottomNavigation'
import Navigation from '../../components/layouts/nav/Navigation';
import NavigationLayout from '../../components/layouts/NavigationLayout';
import RankList from '../../components/RankList';

function Rank() {
  const [type, setType] = useState(0);

  return (
    <div className="hot-page-rank">
      <div style={{ padding: "12px 16px 6px 16px" }}>
        <IosSegmentedControl
          name="hotPageRank"
          callback={(val: number, index: number) => setType(val)}
          controlRef={useRef()}
          defaultIndex={1}
          segments={[
            {
              label: "이슈 태그",
              value: 0,
              ref: useRef(),
            },
            {
              label: "인기 게시판",
              value: 1,
              ref: useRef(),
            },
          ]}
        />
      </div>
      <RankList />
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <NavigationLayout page={2}>
      <Divide />
      <Rank />
      <Divide />
    </NavigationLayout>
  );
};

export default Home;