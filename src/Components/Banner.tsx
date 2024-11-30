import React from "react";
import { ReactComponent as BackgroundBanner } from '../static/Assets/svg/backgroundOffice.svg'
import { ReactComponent as BackgroundBannerMobile } from '../static/Assets/svg/backgroundOfficeMobile.svg'
import { observer } from "mobx-react";
import globalState from "../Store/store";

const Banner = observer(() => {
  return (
    <section className='bannerSection'>
      {globalState?.isMobile ? <BackgroundBannerMobile /> : < BackgroundBanner />}
      <div className='bannerContainer'>
        <h1 className='bannerText heading1'>
          <span>Host your meeting with world-class amenities.</span>
          {globalState?.isMobile ? <></> : < br />}
          <span>Starting at <span className="highlightText">₹199/-!</span></span>
        </h1>
      </div>
    </section >
  )
})

export { Banner }
export default Banner