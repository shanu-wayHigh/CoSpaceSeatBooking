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
            <a href='https://play.google.com/store/apps/details?id=com.bhive.workspace&pli=1' target='_blank' rel="noreferrer">
              <GooglePlayIcon />
            </a>
            <a href='https://apps.apple.com/in/app/bhive-workspace/id6463923684' target='_blank' rel="noreferrer">
              <AppStoreIcon/>
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export { DownloadApp }
export default DownloadApp