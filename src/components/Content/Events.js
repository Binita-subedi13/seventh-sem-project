import { width } from '@mui/system'
import React from 'react'

const Events = () => {
  return (
    <div className='flex justify-between space-x-20  px-40 bg-pink-100 pt-10' >
      <div>
       <img style={{height:"400px", width:"1400px"}} src='/children.jpeg'/> 
      </div>
      <div className='space-y-6 pt-10'>
        <p className='text-3xl font-serif' >Donate for children's education</p>
        <p>Its crucial for children to get access to techinal education coz they are the pillar of our nation.</p>
        Dolore laborum quis mollit dolore est aliquip culpa ut quis Lorem consectetur. Deserunt aliqua qui exercitation ipsum laboris. Proident sunt quis voluptate commodo dolor eiusmod nostrud magna cillum dolore nulla aliquip.
        Dolore laborum quis mollit dolore est aliquip culpa ut quis Lorem consectetur. Deserunt aliqua qui exercitation ipsum laboris. Proident sunt quis voluptate commodo dolor eiusmod nostrud magna cillum dolore nulla aliquip.

<div className=' space-x-4'>
  <button  className='bg-orange-500 p-2 rounded-sm text text-white'>Donate Now</button>
  <button  className=' rounded-sm text text-orange-500 border-2 border-orange-500 p-2'>View Programs</button>

</div>
      </div>
    </div>
  )
}

export default Events
