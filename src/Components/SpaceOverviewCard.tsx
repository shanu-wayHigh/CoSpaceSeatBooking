import React from 'react'
import { ReactComponent as DirectionsIcon } from '../static/Assets/svg/directions.svg'
import { ReactComponent as DayPassIcon } from '../static/Assets/svg/dayPass.svg'
import { ReactComponent as PremiumIcon } from '../static/Assets/svg/premium.svg'
import { ReactComponent as PlatinumIcon } from '../static/Assets/svg/platinum.svg'
import { ReactComponent as WorkSpaceIcon } from '../static/Assets/svg/workSpace.svg'
import globalStore, { PropsType } from '../Store/store'
import { observer } from 'mobx-react'

const SpaceOverviewCard = observer((props: PropsType) => {
  const { name = "", address = '', images = [], google_maps_url = '', day_pass_price = 0 } = props || {}
  const updatedImg = `https://github.com/MujtabaKably/bhive-interview-project-data/blob/main/${images[0]}?raw=true`;
  let division = 'Premium';
  let icon = <PremiumIcon />

  if (name?.toLowerCase()?.includes('workspace') || address?.toLowerCase()?.includes('workspace')) {
    division = 'Workspace'
    icon = <WorkSpaceIcon />
  } else if (name?.toLowerCase()?.includes('platinum') || address?.toLowerCase()?.includes('platinum')) {
    division = 'Platinum'
    icon = <PlatinumIcon />
  }

  const handleMapClick = () => {
    window.open(google_maps_url, '_blank');
  };

  return (
    <div className='spaceOverviewCard'>
      <div className='addressCard'>
        <p className='address'>{name}</p>
        <span className='directionsIcon' onClick={handleMapClick}>
          <DirectionsIcon />
          <p className='staticKms'>6 kms</p>
        </span>
      </div>
      <div className='imgCard'>
      {globalStore.showDivision ? <div className='division'>
          <span className='divisionIcon'>{icon}</span>
          <span className='divisionText'>{division}</span>
        </div> : <></>
      }
        <div className='imageContainer'>
          <img className='image' alt={`${name}-image`} src={updatedImg} />
        </div>
      </div>
      <div className='passWrapper'>
        <div className='dayPassWrapper'>
          <div className='flexWrapperColumn'>
            <p className='dayPassText'>Day Pass</p>
            <p>
              <span className='dayPassPrice'>{`₹${day_pass_price}`}</span>
              <span className='perDayText'>/ Day</span>
            </p>
          </div>
          <DayPassIcon />
        </div>
        <div className='bulkPassWrapper'>
          <div className='flexWrapperColumn'>
            <p className='dayPassText'>Bulk Pass</p>
            <p>
              <span className='dayPassPrice'>{`₹${day_pass_price * 8}`}</span>
              <span className='perDayText'>/ 10 Days</span>
            </p>
          </div>
          <DayPassIcon />
          <div className='discountPercent'>
            20% discount
          </div>
        </div>
      </div>
    </div>
  )
});

export { SpaceOverviewCard }
export default SpaceOverviewCard