import React from 'react'
import globalStore, { PropsType } from '../Store/store'
import SpaceOverviewCard from './SpaceOverviewCard'
import { observer } from 'mobx-react';
import HeadingText from './HeadingText';
import SpaceOverviewCardLoader from './SpaceOverviewCardLoader';

const SpaceOverview = observer(() => {
  const data = globalStore?.data as PropsType[];

  return (
    <section className='spaceOverviewWrapper'>
      <HeadingText text={globalStore?.isMobile ? "Our Spaces" : "Our Space Overview"}/>
      <div className='spaceOverviewContainer'>
        {globalStore.isLoading ?         
          <SpaceOverviewCardLoader /> 
          :
          data?.length > 0 && data?.map((item: any, index: number) =>
            <SpaceOverviewCard {...item} key={`${item?.id}-${index}`} />
          )}
      </div>
    </section>
  )
});

export { SpaceOverview }
export default SpaceOverview