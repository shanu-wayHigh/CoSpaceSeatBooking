import React from 'react'
import { ReactComponent as LogoIcon } from '../static/Assets/svg/logo.svg'
import { ReactComponent as CallIcon } from '../static/Assets/svg/calls.svg'

const Header = () => {
  return (
    <section className='headerWrapper'>
      <header className='headerContainer container'>
        <span onClick={() => window.location.reload()} className='logoIcon'><LogoIcon/></span>
        <a href="tel:+919538677774" className='callWrapper'>
          <CallIcon />
        </a>
      </header>
    </section>
  )
}

export { Header }
export default Header