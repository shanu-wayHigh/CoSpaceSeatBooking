import React from 'react'
import globalStore from '../Store/store'
import SpaceOverviewCard from './SpaceOverviewCard'
import { observer } from 'mobx-react';

const SpaceOverview = observer(() => {
  const data = globalStore?.data as [];

  return (
    <section className='spaceOverviewWrapper'>
      <h2 className='headingText'>
        {globalStore?.isMobile ? "Our Spaces" : "Our Space Overview"}
      </h2>
      <div className='spaceOverviewContainer'>
        {data?.length > 0 && data?.map((item: any, index: number) =>
          <SpaceOverviewCard {...item} key={`${item?.id}-${index}`} />
        )}
      </div>
    </section>
  )
});

export { SpaceOverview }
export default SpaceOverview