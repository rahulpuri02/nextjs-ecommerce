import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { footer } from '@/constants'
import React from 'react'

const ProductFitAndInfoCard = () => {
  return (
    <div className='text-xs md:text-sm font-light mt-3 md:mt-4'>
          <Accordion type="single" collapsible className="w-full text-xs md:text-sm">
      <AccordionItem value="customer-service" className='border-none text-xs'>
        <AccordionTrigger className='hover:no-underline uppercase font-light text-xs md:text-sm'>Customer Service</AccordionTrigger>
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
          <div className="flex flex-col gap-[3px] py-2 cursor-pointer">
            {footer.aboutUs.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="socials" className='border-none mt-0'>
        <AccordionTrigger className='hover:no-underline uppercase mb-1 sm:mb-2'>Socials</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-[3px] cursor-pointer">
            {footer.social.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default ProductFitAndInfoCard