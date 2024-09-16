import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { footer } from '@/constants'

const Footer = () => {
  return (
    <div className='bg-customBlue h-auto flex flex-col gap-4 px-6 md:px-10 text-white'>
  <div className='pt-11 flex w-full'>
        {/* One side */}
        <div className='w-[45%] pr-[2%] text-2xl'>
          <div className='font-semibold text-4xl leading-snug'>Sign up for NN CLOTHING newsletter</div>
          <p className='tracking-wider mt-9 mb-3'>E-MAIL</p>
          <hr className='w-[90%]' />

          <div>
            {/* <input type="checkbox" className='h-10'/> */}
           <div className='mt-4 md:mt-6 flex items-center gap-4'>
           <div className='w-3.5 h-3.5 border-2 border-white' />
            <p className='text-lg'>I HAVE READ, UNDERSTOOD AND ACCEPTED THE 
             TERMS AND CONDITIONS.
            </p>
           </div>
          </div>
        </div>
      {/* 2nd Side  */}
      <div className='w-[55%] pl-10 text-2xl font-semibold'>
        <div className='flex'>
          <div className='w-[35%]'>
            <div>CUSTOMER SERVICE
              <div className='mt-6 flex flex-col gap-[3px]'>
              {
                footer.customerService.map((item,i) => (
                  <div key={i}>{item}</div>
                ))
              }
              </div>
            </div>
          </div>
          <div className='w-[35%]'>
          <div>ABOUT US</div>
          <div className='mt-6 flex flex-col gap-[3px]'>
          {
                footer.aboutUs.map((item,i) => (
                  <div key={i}>{item}</div>
                ))
              }
              </div>
          </div>
          <div className='w-[35%]'>
            <div>SOCIAL</div>
            <div className='mt-6 flex flex-col gap-[3px]'>
              {
                footer.social.map((item,i) => (
                  <div key={i}>{item}</div>
                ))
              }
              </div>
          </div>
          <div className="flex start items-start gap-8 mt-2">
        <Image
          src="https://nn07-production.s3.eu-west-1.amazonaws.com/2022/03/16123100/Visa-Grey.svg"
          alt="VISA"
          width={50}
          height={32}
          title="VISA"
        />
      <Image
          src="https://nn07-production.s3.eu-west-1.amazonaws.com/2022/03/16123059/Mastercard-1-Grey.svg"
          alt="MasterCard"
          width={40}
          height={30}
          title="MasterCard"
        />
    </div>
        </div>
      </div>
  </div>
  {/* Bottom  */}
  <div className='text-2xl font-semibold flex gap-3 pb-8 md:pb-10 pt-6'> 
    <Heart className='w-[29px] h-auto stroke-white fill-white'/> 
    <p>Developed By Rahul Puri</p>
  </div>
    </div>
  )
}

export default Footer