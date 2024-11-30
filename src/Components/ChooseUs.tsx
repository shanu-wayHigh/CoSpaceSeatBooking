import React,  { ReactElement } from 'react'
import { ReactComponent as CommunityEventsIcon } from '../static/Assets/svg/ChooseUs/communityEvents.svg'
import { ReactComponent as GymFacilitiesIcon } from '../static/Assets/svg/ChooseUs/gymFacilities.svg'
import { ReactComponent as WifiIcon } from '../static/Assets/svg/ChooseUs/wifi.svg'
import { ReactComponent as CafeTeaBarIcon } from '../static/Assets/svg/ChooseUs/cafeTeaBar.svg'
import { ReactComponent as AffordableIcon } from '../static/Assets/svg/ChooseUs/affordable.svg'
import { ReactComponent as QuickBookingIcon } from '../static/Assets/svg/ChooseUs/quickBooking.svg'
import { ReactComponent as ComfortableLoungesIcon } from '../static/Assets/svg/ChooseUs/comfortLounges.svg'
import { ReactComponent as SportsAreaIcon } from '../static/Assets/svg/ChooseUs/sportsArea.svg'

export interface dataProps {
  name: string;
  icon: ReactElement;
}

const ChooseUsData: dataProps[] = [
  {
    name: 'Community Events',
    icon: <CommunityEventsIcon />
  },
  {
    name: 'Gym Facilities',
    icon: <GymFacilitiesIcon />
  },
  {
    name: 'High-Speed WiFi',
    icon: <WifiIcon />
  },
  {
    name: 'Cafe & Tea Bar',
    icon: <CafeTeaBarIcon />
  },
  {
    name: 'Affordable',
    icon: <AffordableIcon />
  },
  {
    name: 'Comfort Lounges',
    icon: <ComfortableLoungesIcon />
  },
  {
    name: 'Quick Booking',
    icon: <QuickBookingIcon />
  },
  {
    name: 'Sports Area',
    icon: <SportsAreaIcon />
  }
]

const ChooseUs = () => {
  return (
    <section className='chooseUsWrapper'>
      <h2 className='headingText'>
        Why Choose us?
      </h2>
      <div className='chooseUsContainer'>
        {ChooseUsData.map((item: dataProps) => {
          return (
            <div className='chooseUsField'>
              <span className='fieldIcon'>{item.icon}</span>
              <p className='fieldName'>{item?.name}</p>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export { ChooseUs }
export default ChooseUs