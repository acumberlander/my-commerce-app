export type Product = {
  id: string,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string,
  stars?: number,
  reviews?: string[] | undefined,
}