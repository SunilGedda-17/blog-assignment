import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @SunilGedda</p>
      <div className='flex gap-4'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.facebook_icon} alt='Facebook' width={40} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.twitter_icon} alt='Twitter' width={40} />
        </a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.googleplus_icon} alt='Google Plus' width={40} />
        </a>
      </div>

    </div>
  )
}

export default Footer
