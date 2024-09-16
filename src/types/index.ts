export enum StatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
}

export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = '2XL',
  SIZE6 = '6',
  SIZE7 = '7',
  SIZE8 = '8',
  SIZE9 = '9',
  SIZE10 = '10',
}

export enum Category {
  TOPWEAR = "topwear",
  OUTERWEAR = "outerwear",
  JACKETS = "jackets",
  SHIRTS = "shirts",
  TSHIRTS = "t-shirts",
  POLOSHIRTS = "polo-shirts",
  PANTS = "pants",
  JEANS = "jeans",
}


export interface Product {
  id: number,
  name: string,
  thumbnail: string,
  images?: string[],
  price: string
}