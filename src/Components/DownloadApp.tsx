import React from 'react'
import { ReactComponent as DownloadAppIcon } from '../static/Assets/svg/downloadApp.svg'
import { ReactComponent as GooglePlayIcon } from '../static/Assets/svg/DownloadApp/googlePlay.svg'
import { ReactComponent as AppStoreIcon } from '../static/Assets/svg/DownloadApp/appStore.svg'
import HeadingText from './HeadingText'

const DownloadApp = () => {
  return (
    <section className='downloadAppWrapper'>
      <HeadingText text="Download our app now"/> 
      <div className='downloadAppContainer'>
        <span className='downloadAppIcon'>
          <DownloadAppIcon />
        </span>
        <div className='downloadRightText'>
          <p className='downloadAppText'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
          <div className='downloadApp'>
            <GooglePlayIcon />
            <AppStoreIcon />
          </div>
        </div>
      </div>
    </section >
  )
}

export { DownloadApp }
export default DownloadApp