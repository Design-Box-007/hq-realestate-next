import React from 'react'
import './Header.css'
import { images } from '@/data/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className='d-flex text-white align-items-center gap-2'>
        <h1 className='logo m-0'>HQ</h1>
        <p className='logo-name m-0'>Housing <br />Quest</p>
      </div>
      <div className='d-flex text-white align-items-center gap-2'>
        <img className='icon' src={images.menuIcon} alt='menu' />
        <img className='icon' src={images.mapIcon} alt='map' />
      </div>
      <img className='icon' src={images.homeIcon} alt='home' />

    </div>
  )
}

export default Header