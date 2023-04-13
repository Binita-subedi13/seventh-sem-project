import { Button, ButtonGroup, Card, TextField } from '@mui/material';
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function DonationPage() {
  return (
   <div >
    <Card className='pb-10  w-4/12 mx-auto my-10' >
      <div className='space-y-7 text-center '>
      <div className='bg-slate-100 py-4 text-xl font-medium'> Choose Amount</div>
    <div>How much would you like to donate?</div>
    <div>
    <TextField className='w-4/5 focus:ring-blue-500 focus:border-blue-500 ' placeholder='Amount' />
    </div>
    <div className='space-y-2' >
      <div className='space-x-2' >
    <button class="button-style">
  Rs.100
</button>
    <button class="button-style">
  Rs.500
</button>
    <button class="button-style">
  Rs.1000
</button>
</div>
<div className='space-x-2'>
    <button class="button-style">
  Rs.2000
</button>
    <button class="button-style">
  Rs.2500
</button>
    <button class="button-style">
  Custom Amount
</button>

</div>
    </div>
    <div>
    <button class="bg-transparent bg-green-500  font-semibold text-white hover:text-green-500 hover:bg-white hover:border-green-500  w-36 h-16
      border border-green-500 hover:border-transparent rounded text-xl ">
  Continue <ArrowForwardIosIcon fontSize='' />
</button>
    </div>
      </div>
    
    </Card>
   </div>
  );
}
