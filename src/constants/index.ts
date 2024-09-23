export const colors = ['blue', 'red']

export const footer = {
    customerService: ['HELP', 'FAQs',  'SHIPPING', 'RETURNS', 'CONTACT'],
    aboutUs: ['TERMS & CONDITIONS', 'PRIVACY POLICY', 'ACCESSIBILITY'],
    social: ['INSTAGRAM', 'TIKTOK', 'YOUTUBE', 'FACEBOOK']
}

export const navigationMenu = [
  {
    label: "Shop",
    isChilds: true,
    childrens: [
      {
        label: "Topwear",
        id: "topwear",
        isChilds: false,
      },
      {
        label: "Outerwear",
        id: "outerwear",
        isChilds: false,
      },
      {
        label: "Jackets",
        id: "jackets",
        isChilds: false,
      },
      {
        label: "Shirts",
        id: "shirts",
        isChilds: false,
      },
      {
        label: "T-Shirts",
        id: "t-shirts",
        isChilds: false,
      },
      {
        label: "Polo Shirts",
        id: "polo-shirts",
        isChilds: false,
      },
      {
        label: "Pants",
        id: "pants",
        isChilds: false,
      },
      {
        label: "Jeans",
        id: "jeans",
        isChilds: false,
      },
    ],
  },
  {
    label: "My Account",
    id: 'my-account',
    isChilds: false,
  },
  {
   label: 'Assistance',
   isChilds: true,
  }
];

export const productFitAndInfo = {
  fitAndDetails: {
    fit: "Relaxed fit",
    fullyLined: true,
    buttons: "Corozo buttons",
    materialDetails: [
      "TENCEL™ lyocell",
      "Certified recycled wool",
      "Certified recycled polyamide"
    ],
    styleNumber: "2461086145",
    madeIn: "Turkey",
    model: {
      name: "Auden",
      height: "186 cm / 6'1",
      wearingSize: "M"
    }
  },
  materialAndCare: {
    material: [
      { type: "Recycled wool", percentage: 40 },
      { type: "Recycled polyamide", percentage: 30 },
      { type: "TENCEL™ lyocell", percentage: 30 }
    ],
    weight: "320 gr/mtl",
    description: {
      recycledWool: "Created from discarded textiles. Recycling wool skips the need to raise and shear animals by using what already exists, lowering the environmental impact.",
      recycledPolyamide: "Created from plastic waste and discarded textiles. Recycling polyamide removes the dependence on fossil fuels and contributes to eliminating plastic waste."
    },
    care: {
      dryClean: "Only dry clean when necessary. Look for dry cleaners that offer a greener alternative to traditional methods.",
      ironLowTemperature: "Only iron or steam when necessary. Remove clothes from the washing machine immediately to minimize creases."
    }
  },
  shippingAndPayments: {
    deliveryAndReturns: {
      freeDeliveryAbove: "₹ 500",
      sameDayDispatchCutoff: "13 IST",
      freeReturns: [
        "Punjab, India"
      ],
      shippingPartner: {
        name: "DHL GOGREEN PLUS",
        description: "Partnered with DHL Express using sustainable aviation fuel through GoGreen Plus to reduce CO2e emissions."
      }
    },
    paymentMethods: [
      "VISA",
      "MasterCard",
      "PayPal",
      "American Express",
      "Discover",
      "Maestro"
    ]
  }
};