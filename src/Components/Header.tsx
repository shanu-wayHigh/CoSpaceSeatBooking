import React from 'react'
import { ReactComponent as LogoIcon } from '../static/Assets/svg/logo.svg'
import { ReactComponent as CallIcon } from '../static/Assets/svg/calls.svg'

const Header = () => {
  return (
    <section className='headerWrapper'>
      <header className='headerContainer container'>
        <LogoIcon />
        <a href='' className='callWrapper'>
          <CallIcon />
        </a>
      </header>
    </section>
  )
}

export { Header }
export default Header