'use client';

import { Carousel } from 'flowbite-react';

const CouPro = () => {
  return (
    <div className="h-full ">
    <Carousel>
      <img className='h-full object-cover' src="Images/edu1.png" alt="..." />
      <img className='h-full object-cover' src="Images/edu2.png" alt="..." />
      <img className='h-full object-cover' src="Images/edu1.png" alt="..." />
      <img className='h-full object-cover' src="Images/edu2.png" alt="..." />
    </Carousel>
  </div>
  )
}

export default CouPro
