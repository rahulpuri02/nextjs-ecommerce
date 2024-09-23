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
          <input
  type="email"
  placeholder="E-MAIL"
  className="w-full mt-10 md:mt-14 border-none bg-transparent p-0 pb-2 m-0 outline-none"
/>
          <hr className='xl:w-[90%]' />

          <div>
  <div className="mt-4 md:mt-6 flex gap-4 items-center">
    <input
      type="checkbox"
      className="w-4 h-2.5 sm:h-3.5 sm:w-3.5 border-[1px] border-white appearance-none checked:bg-white cursor-pointer"
      id="terms"
    />
    <label htmlFor="terms" className="text-sm md:text-base cursor-pointer">
      I HAVE READ, UNDERSTOOD AND ACCEPTED THE TERMS AND CONDITIONS.
    </label>
  </div>
</div>
        </div>
      {/* 2nd Side  */}
      <div className='w-full xl:w-[55%] xl:pl-10 text-base font-semibold'>
      <div className="flex flex-col xl:gap-0 xl:flex-row">
  {/* Accordion for screens <= xl */}
  <div className="xl:hidden text-sm sm:text-base">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="customer-service" className='border-none'>
        <AccordionTrigger className='hover:no-underline uppercase'>Customer Service</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px]">
            {footer.customerService.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="about-us" className='border-none mt-0'>
        <AccordionTrigger className='hover:no-underline uppercase'>About Us</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px] mt-1 sm:mt-2 cursor-pointer">
            {footer.aboutUs.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="socials" className='border-none mt-0'>
        <AccordionTrigger className='hover:no-underline uppercase mb-1 sm:mb-2'>Socials</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px] mt-1 sm:mt-2 cursor-pointer">
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
  <div className='text-sm md:text-lg lg:text-base font-semibold flex justify-between lg:gap-3 pb-8 md:pb-10 pt-6'> 
   <a href='https://linkedin.com/in/rahulpuri02' target='_blank' className='flex gap-1.5 md:gap-2 items-center'>
   <Heart className='w-4 h-4 stroke-white fill-white'/> 
   <p>Developed By Rahul Puri</p>
   </a>
    <div className="xl:hidden flex start items-center xl:items-start gap-8">
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