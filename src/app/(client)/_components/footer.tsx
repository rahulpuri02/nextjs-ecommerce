import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { footer } from '@/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Footer = () => {
  return (
    <div className='bg-customBlue h-auto flex flex-col gap-4 px-6 md:px-10 text-white'>
  <div className='pt-8 md:pt-11 flex flex-col gap-16 md:gap-24 xl:gap-0 xl:flex-row w-full'>
        {/* One side */}
        <div className='w-full xl:w-[45%] pr-[2%] text-base md:text-xl lg:text-2xl flex-grow'>
          <div className='font-semibold text-2xl md:text-3xl lg:text-4xl leading-relaxed lg:leading-snug basis-1'>Sign up for NN CLOTHING newsletter</div>
          <p className='tracking-wider mt-9 mb-3'>E-MAIL</p>
          <hr className='xl:w-[90%]' />

          <div>
            {/* <input type="checkbox" className='h-10'/> */}
           <div className='mt-4 md:mt-6 flex gap-4'>
           <div className='w-3.5 h-3.5 border-2 mt-1 md:mt-1.5 border-white' />
            <p className='text-base'>I HAVE READ, UNDERSTOOD AND ACCEPTED THE 
             TERMS AND CONDITIONS.
            </p>
           </div>
          </div>
        </div>
      {/* 2nd Side  */}
      <div className='w-full xl:w-[55%] xl:pl-10 text-xl font-semibold'>
      <div className="flex flex-col xl:gap-0 xl:flex-row">
  {/* Accordion for screens <= xl */}
  <div className="xl:hidden text-base">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="customer-service" className='border-none'>
        <AccordionTrigger className='hover:no-underline'>Customer Service</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px]">
            {footer.customerService.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="about-us" className='border-none'>
        <AccordionTrigger className='hover:no-underline'>About Us</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px]">
            {footer.aboutUs.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="socials" className='border-none'>
        <AccordionTrigger className='hover:no-underline'>Socials</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px]">
            {footer.social.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

  {/* Default layout for screens > xl */}
  <div className="hidden xl:flex w-full justify-between">
    <div className="w-[31%]">
      <div>CUSTOMER SERVICE</div>
      <div className="mt-6 flex flex-col gap-[3px]">
        {footer.customerService.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
    <div className="w-[31%]">
      <div>ABOUT US</div>
      <div className="mt-6 flex flex-col gap-[3px]">
        {footer.aboutUs.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
    <div className="w-[31%]">
      <div>SOCIAL</div>
      <div className="mt-6 flex flex-col gap-[3px]">
        {footer.social.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  </div>

  {/* Payment icons for screen > xl sizes*/}
  <div className="hidden xl:flex start items-start gap-8 mt-2">
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
  <div className='text-base md:text-xl font-semibold flex justify-between lg:gap-3 pb-8 md:pb-10 pt-6'> 
   <div className='flex gap-1.5 md:gap-3 items-center'>
   <Heart className='w-5 md:w-[27px] h-auto stroke-white fill-white'/> 
   <p>Developed By Rahul Puri</p>
   </div>
    <div className="xl:hidden flex start items-center xl:items-start gap-8 mt-2">
    <Image
      src="https://nn07-production.s3.eu-west-1.amazonaws.com/2022/03/16123100/Visa-Grey.svg"
      alt="VISA"
      width={36}
      height={27}
      title="VISA"
    />
    <Image
      src="https://nn07-production.s3.eu-west-1.amazonaws.com/2022/03/16123059/Mastercard-1-Grey.svg"
      alt="MasterCard"
      width={31}
      height={21}
      title="MasterCard"
    />
  </div>
  </div>
    </div>
  )
}

export default Footer