import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {productFitAndInfo } from '@/constants'
import React from 'react'

const ProductFitAndInfoCard = () => {
  return (
    <div className='text-xs md:text-sm font-light mt-6 md:mt-8'>
      <Accordion type="single" collapsible className="w-full text-xs md:text-sm">
        {/* FIT & DETAILS Section */}
        <AccordionItem value="fit-and-details" className='border-none text-xs'>
          <AccordionTrigger smallSize={true} className='hover:no-underline uppercase font-normal text-xs py-2'>
            FIT & DETAILS
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-[14px] my-8 md:my-12 py-8 md:py-12 border-y-[1.5px] border-gray-200">
              <div>Fit: {productFitAndInfo.fitAndDetails.fit}</div>
              <div>Fully Lined: {productFitAndInfo.fitAndDetails.fullyLined ? 'Yes' : 'No'}</div>
              <div>Buttons: {productFitAndInfo.fitAndDetails.buttons}</div>
              <div>Material: {productFitAndInfo.fitAndDetails.materialDetails.join(', ')}</div>
              <div>Style Number: {productFitAndInfo.fitAndDetails.styleNumber}</div>
              <div>Made in: {productFitAndInfo.fitAndDetails.madeIn}</div>
              <div>
                Model: {productFitAndInfo.fitAndDetails.model.name} ({productFitAndInfo.fitAndDetails.model.height}), wearing size {productFitAndInfo.fitAndDetails.model.wearingSize}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* MATERIAL & CARE Section */}
        <AccordionItem value="material-and-care" className='border-none mt-0 text-xs'>
          <AccordionTrigger smallSize={true} className='hover:no-underline uppercase font-normal text-xs py-2'>
            MATERIAL & CARE
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-[3px] my-8 md:my-12 py-8 md:py-12 border-y-[1.5px] border-gray-200 cursor-pointer">
              {productFitAndInfo.materialAndCare.material.map((material, i) => (
                <div key={i}>{material.percentage}% {material.type}</div>
              ))}
              <div>Weight: {productFitAndInfo.materialAndCare.weight}</div>
              <div>{productFitAndInfo.materialAndCare.description.recycledWool}</div>
              <div>{productFitAndInfo.materialAndCare.description.recycledPolyamide}</div>
              <div>Care:</div>
              <div>{productFitAndInfo.materialAndCare.care.dryClean}</div>
              <div>{productFitAndInfo.materialAndCare.care.ironLowTemperature}</div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* SHIPPING & PAYMENTS Section */}
        <AccordionItem value="shipping-and-payments" className='border-none mt-0 text-xs'>
          <AccordionTrigger smallSize={true} className='hover:no-underline uppercase my-0 text-xs font-normal pt-2'>
            SHIPPING & PAYMENTS
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-[3px] my-8 md:my-12 py-8 md:py-12 border-y-[1.5px] border-gray-200 cursor-pointer">
              <div>Free Delivery Above: {productFitAndInfo.shippingAndPayments.deliveryAndReturns.freeDeliveryAbove}</div>
              <div>Same Day Dispatch Cutoff: {productFitAndInfo.shippingAndPayments.deliveryAndReturns.sameDayDispatchCutoff}</div>
              <div>Free Returns: {productFitAndInfo.shippingAndPayments.deliveryAndReturns.freeReturns.join(', ')}</div>
              <div>Shipping Partner: {productFitAndInfo.shippingAndPayments.deliveryAndReturns.shippingPartner.name}</div>
              <div>{productFitAndInfo.shippingAndPayments.deliveryAndReturns.shippingPartner.description}</div>
              <div>Payment Methods:</div>
              {productFitAndInfo.shippingAndPayments.paymentMethods.map((method, i) => (
                <div key={i}>{method}</div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ProductFitAndInfoCard