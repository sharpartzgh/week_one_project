import React from 'react'
import Button from './Button'



const BrandCard = ({ brandlogo, brandtitle, brandinfo}) => {
  return (
    <div className='brand-card'>
      <div className='brandlogo'>{brandlogo}</div>
      <h1 className='brandtitle'>{brandtitle}</h1>
      <p className='brandinfo'>{brandinfo}</p>
      <Button name='Learn More'/>
    </div>
  )
}

export default BrandCard
