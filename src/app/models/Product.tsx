type Rating = {
  rate: number,
  count: number
}

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string,
  stars?: number,
  reviews?: string[] | undefined,
  rating?:  Rating
}